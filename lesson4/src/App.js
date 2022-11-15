import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { useContext } from 'react';

import {RegisterPage, LoginPage} from './Components/Form'


let UserContext = React.createContext()

function App() {
  let userId = localStorage.getItem("userId");
  return (
    <UserContext.Provider value={{ userId: JSON.parse(userId) }}>
      <Router>
        <Switch>
          <Route exact path="/register"  >
            <RegisterPage />
          </Route>
          <Route exact path="/login" >
            <LoginPage />
          </Route>
          <PrivateRoute exact component={HomePageHook} path="/" />
          <PrivateRoute exact component={AddPhotoPage} path="/add-photos" />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}


export default App;


// class HomePage extends React.Component {
//   constructor(props) {
//     console.log("init component");
//     super(props)
//     this.state = {
//       counter: 0
//     }
//   }

//   componentWillMount() {
//     console.log("componentWillMount");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   componentWillUpdate() {
//     console.log("componentWillUpdate");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.counter % 2 == 0;
//   }

//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   render() {
//     console.log("render");
//     return <>
//       <h1>HomePage</h1>
//       <div>
//         <div>{this.state.counter}</div>
//         <button onClick={() => {
//           this.setState({
//             counter: this.state.counter + 1
//           })
//         }}>+1</button>
//       </div>
//       <div>
//         <button onClick={() => {
//           this.props.history.push("/login");
//         }}>go to login page</button>
//       </div>
//     </>
//   }
// }

function PrivateRoute({ component: Component, path, ...rest }) {
  let userId = localStorage.getItem("userId");
  return <Route {...rest}
    render={(props) => {
      return userId != null && userId !== "" ? <Component {...props} /> : <Redirect to={{
        pathname: "/login"
      }} />
    }}>
  </Route>
}
function HomePageHook() {
  let [listImage, setListImage] = useState([]);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [maxPage, setMaxPage] = useState(1);
  const [dataImage, setdataImage] = useState({link: '', des: ''})
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    getListPhotos();
  }, [])

  useEffect(() => {
    getListPhotos();
  }, [page])

  function getListPhotos() {
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/1/photos?page=${page}&limit=${limit}`)
      .then((response) => response.json()).then((res) => {
      setListImage([...res.items]);
      setMaxPage(res.count / limit);
    }).catch((err) => console.log(err))
  }

  const handleAdd = (e) =>{
    e.preventDefault()
   
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: dataImage.link,
          description: dataImage.des
        })
      };
      fetch('https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/1/photos/posts', requestOptions)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          setListImage([...data.items])
          setMaxPage(data.count / limit).catch((err) => console.log(err));
    });
  }

useEffect(() => {
  const handleScroll = () => {
      window.scrollY >= 1000 ? setShow(true) : setShow(false)
    }

  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
},[])
  

const changeHandle = (e) => {
  setText(e.target.value)
}
useEffect(() => {
  // array of words
  const words = text.split(' ');

  // update word count
  let wordCount = 0;
  words.forEach((word) => {
    if (word.trim() !== '') {
      wordCount++;
    }
  });
  setWordCount(wordCount);

  // update char count (including whitespaces)
}, [text]);



  return <>
  <div className='container'>
      <div>
        <textarea
          value={text}
          onChange={changeHandle}
          placeholder='Enter text...'
          style={{
            width: '400px',
            height: '50px'
          }}
        ></textarea>

        <div>
          <h1 className='word-count'>Word Count: {wordCount}</h1>
        </div>
      </div>
    </div>
    <h1>HomePage</h1>
    <div className='input'>
      <div className='form__group field'>
        <input className='form__field' type='text' name='src' onChange={(e) => {
          setdataImage({...dataImage, link: e.target.value})
        }}/>
        <label className='form__label' for='src'>Link Photo</label>
      </div>
      <div className='form__group field'>
        <input className='form__field' type='text' name='descript' onChange={(e) => {
          setdataImage({...dataImage, des: e.target.value})
        }}/>
        <label className='form__label' for='descript'>Description</label>
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
    <div> 
      {page > 1 ? <button onClick={() => {
        setPage(page - 1)
      }}>Previous</button> : <></>}
      <>{page}</>
      {page < maxPage ? <button onClick={() => {
        setPage(page + 1)
      }}>Next</button> : <></>}
    </div>
    <div>
      <select onChange={(e) => {
        setLimit(e.target.value);
        setPage(1);
      }} defaultValue={limit} >
        <option value={10} >10</option>
        <option value={20} >20</option>
        <option value={50} >50</option>
        <option value={100}>100</option>
      </select>
    </div>
    <div>
      {
        listImage.map((value, index) => <div key={index}>
          <img src={value.image} alt={value.description} />
        </div>)
      }
    </div>
    {show && (
      <button
        onClick={() => {
          window.scrollTo(0,0)
        }} 
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          width: '100px'
        }}>
        Go to Top
      </button>)}
  </>
}

function AddPhotoPage() {
  let userContext = useContext(UserContext);
  let history = useHistory();
  let [input, setInput] = useState({
    image: "",
    description: "",
  })

  const onChangeInput = (nameInput, value) => {
    setInput({
      ...input,
      [nameInput]: value
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/${userContext.userId}/photos`, {
      method: "POST",
      body: JSON.stringify({
        userId: userContext.userId,
        image: input.image,
        description: input.description
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      if (res.status == 201) {
        setInput({
          image: "",
          description: "",
        })
        history.push("/");
      }
    })
  }

  return <form onSubmit={handleSubmitForm}>
    <div>
      <label>Image</label>
      <input type="text" name="image" onChange={(e) => {
        onChangeInput("image", e.target.value);
      }} />
    </div>
    <div>
      <label>Description</label>
      <textarea type="description" name="description" onChange={(e) => {
        onChangeInput("description", e.target.value);
      }} />
    </div>
    <button>Them photo</button>
  </form>
}