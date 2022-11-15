import './style.scss'
import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {withRouter} from 'react'

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
    checkExist = (valueInput) => {
      fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users?username=${valueInput}`, {
        method: "GET"
      }).then((response) => response.json()).then((users) => {
        console.log(users);
        if(users.filter((users) => 
            users.username === valueInput
        ).length > 0){
            this.setState({
                ...this.state,
                errorMessage: {
                    ...this.state.errorMessage,
                    username: "Username existed",
                },
            })
        } else{
          
            this.setState({
                ...this.state,
                errorMessage: {
                    ...this.state.errorMessage,
                    username: "",
                },
            })
            
        }
      })

    }
    
    onChangeInput = (nameInput, value) => {
      const errorMessage = {
        ...this.state.errorMessage,
      }
      const nameRegex = /^[a-zA-Z\ -]+$/;
      const validFullname = nameRegex.test(this.state.fullname)
      if(validFullname === false){
        errorMessage['fullname'] = "Your fullname is not valid"
      }else{
        errorMessage['fullname'] = "" 
      }  
      // const validUsername = nameRegex.test(this.state.username)
      // if(validUsername === false){
      //   errorMessage['username'] = "Your username or username is not valid"
      // }else{
      //   errorMessage['username'] = ""
      // }
      if (nameInput === "confirm" && this.state.password !== value) {
        errorMessage['confirm'] = "Password is not the same";
      } else {
        errorMessage['confirm'] = "";
      }
      if(nameInput === "username"){
        this.checkExist(value)
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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: fullname,
            username: username,
            password: password,
        })
      });
      
      toast.success("Register Successfully!")
      window.location.href = './login'
      alert("Register Successfully!")
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
                        }} required/>
                        <label className='form__label' for='fullname'>Fullname</label>
                    </div>
                    <div>
                      {errorMessage.fullname !== "" ? <div className='error'>{errorMessage.fullname}</div> : <></>}
                    </div>
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.username} type="text" name="username" placeholder='Username' onChange={(e) => {
                        this.onChangeInput("username", e.target.value);
                    }}  required/>
                        <label className='form__label' for='username'>Username</label>
                    </div>
                    <div>
                      {errorMessage.username !== "" ? <div className='error'>{errorMessage.username}</div> : <></>}
                    </div>
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.password} type="password" name="password" placeholder='Password' onChange={(e) => {
                        this.onChangeInput("password", e.target.value);
                    }} required/>
                        <label className='form__label' for='password'>Password</label>
                    </div>
                
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.confirm} type="password" name='confirm' placeholder='Confirm Password' onChange={(e) => {
                        this.onChangeInput("confirm", e.target.value);
                    }} required/>
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

RegisterPage = withRouter(RegisterPage)

  class LoginPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: "",
        password: "",
        errorMessage: {
          username: "",
          password: "",
        }
      }
    }
    // checkExist = (valueInput) => {
    //   fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users?username=${valueInput}`, {
    //     method: "GET"
    //   }).then((response) => response.json()).then((users) => {
    //     console.log(users);
    //     if(users.filter((users) => 
    //         users.username === valueInput
    //     ).length === 0){
    //         this.setState({
    //             ...this.state,
    //             errorMessage: {
    //                 ...this.state.errorMessage,
    //                 username: "Username does not exist",
    //             },
    //         })
    //     } else{
    //         this.setState({
    //             ...this.state,
    //             errorMessage: {
    //                 ...this.state.errorMessage,
    //                 username: "",
    //             },
    //         })
    //     }
    //   })

    // }
    
    handleSubmitForm = (e) => {
      e.preventDefault();
      fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users?username=${this.state.username}`, {
        method: "GET"
      }).then((response) => response.json()).then((users) => {
        let userFound = users.find((user) =>
          user.username === this.state.username
        )
        let message = ''
        if (userFound != null) {
          if (this.state.username === userFound.username && userFound.password === this.state.password) {
            localStorage.setItem("userId", JSON.stringify(userFound.id));
            this.props.history.push("/");
          } else {
            message = "Username or Password is incorrect"
          }
        } else {
          message = "Username or Password is incorrect"
        }
        this.setState({
          ...this.state,
          password: "",
          errorMessage: message
        })
      }).catch((error) => {
        console.log(error);
      });
    }
    onChangeInput = (nameInput, value) => {
      const errorMessage = {
        ...this.state.errorMessage,
      }
      if(nameInput === "username"){
        this.checkExist(value)
      }
      this.setState({
        ...this.state,
        [nameInput]: value,
        errorMessage: errorMessage,
      })
    }

    // handleSubmitForm = (e) => {
    //   e.preventDefault();
    //   const { errorMessage, password, username } = this.state
    //   if (Object.values(errorMessage).filter((value) => value !== "").length > 0) {
    //     return;
    //   }
    //   fetch("https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: username,
    //         password: password,
    //     })
    //   });
    //   this.checkExist()
    //   this.setState({...this.state,
    //     username: "",
    //     password: "",
    //     errorMessage: {
    //       username: "",
    //       password: "",
    //     }
    //   })
    // }
    
    render() {
      // const { errorMessage } = this.state
      return (
      <div className='register-form'>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmitForm}>
                        
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.username} type="text" name="username" placeholder='Username' onChange={(e) => {
                        this.onChangeInput("username", e.target.value);
                    }} />
                        <label className='form__label' for='username'>Username</label>
                    </div>
                
                    <div className='form__group field'>
                        
                        <input className='form__field' value={this.state.password} type="password" name="password" placeholder='Password' onChange={(e) => {
                        this.onChangeInput("password", e.target.value);
                    }} />
                        <label className='form__label' for='password'>Password</label>
                    </div>
                    <div>
                      {this.state.errorMessage !== '' ? <div className='error'>{this.state.errorMessage}</div> : <></>}
                    </div>
                
                <button type='submit'>Submit</button>
        </form>
      </div>
      )
    }
  }
  
LoginPage = withRouter(LoginPage)
  export  {RegisterPage, LoginPage}