import './style.scss'
import React from 'react'

class RegisterPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fullname: "",
        username: "",
        password: "",
        confirm: "",
        errorMessage: {
          fullname: "",
          username: "",
          password: "",
          confirm: "",
        },
        allItem: []
      }
    }
    checkExist = () => {
      const {username} = this.state
      fetch("https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users")
      .then(res => res.json())
      .then(item => {
        console.log(item);

      })
      console.log(username);
    }
    
    onChangeInput = (nameInput, value) => {
      const errorMessage = {
        ...this.state.errorMessage,
      }
      const nameRegex = /^[a-zA-Z\-]+$/;
      const validFullname = nameRegex.test(this.state.fullname)
      if(validFullname === false){
        errorMessage['fullname'] = "Your fullname or username is not valid"
      }else{
        errorMessage['fullname'] = "" 
      }  
      const validUsername = nameRegex.test(this.state.username)
      if(validUsername === false){
        errorMessage['username'] = "Your username or username is not valid"
      }else{
        errorMessage['username'] = ""
      }
      if (nameInput === "confirm" && this.state.password !== value) {
        errorMessage['confirm'] = "Password is not the same";
      } else {
        errorMessage['confirm'] = "";
      }
      this.setState({
        ...this.state,
        [nameInput]: value,
        errorMessage: errorMessage,
      })
      console.log(value);
    }

    handleSubmitForm = (e) => {
      e.preventDefault();
      const { errorMessage, fullname, password, username } = this.state
      if (Object.values(errorMessage).filter((value) => value !== "").length > 0) {
        return;
      }
      fetch("https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users", {
        method: "POST",
        body: JSON.stringify({
          user: {
            name: fullname,
            username: username,
            password: password,
          }
        })
      });
      this.checkExist()
      this.setState({...this.state,
        fullname: "",
        username: "",
        password: "",
        confirm: "",
        errorMessage: {
          fullname: "",
          username: "",
          password: "",
          confirm: "",
        }
      })
    }
    
    render() {
      const { errorMessage } = this.state
      return (
      <div className='register-form'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmitForm}>
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.fullname} type="text"  name="fullname" placeholder='Fullname' onChange={(e) => {
                        this.onChangeInput("fullname", e.target.value);
                        }} />
                        <label className='form__label' for='fullname'>Fullname</label>
                    </div>
                    <div>
                      {errorMessage.fullname !== "" ? <div className='error'>{errorMessage.fullname}</div> : <></>}
                    </div>
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.username} type="text" name="username" placeholder='Username' onChange={(e) => {
                        this.onChangeInput("username", e.target.value);
                    }} />
                        <label className='form__label' for='username'>Username</label>
                    </div>
                    <div>
                      {errorMessage.username !== "" ? <div className='error'>{errorMessage.username}</div> : <></>}
                    </div>
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.password} type="password" name="password" placeholder='Password' onChange={(e) => {
                        this.onChangeInput("password", e.target.value);
                    }} />
                        <label className='form__label' for='password'>Password</label>
                    </div>
                
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.confirm} type="password" name='confirm' placeholder='Confirm Password' onChange={(e) => {
                        this.onChangeInput("confirm", e.target.value);
                    }} />
                        <label className='form__label' for='confirm'>Confirm Password</label>
                    </div>
                        {errorMessage.confirm !== "" ? <div className='error'>{errorMessage.confirm}</div> : <></>}
                    <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
      )
    }
  }

  export default RegisterPage