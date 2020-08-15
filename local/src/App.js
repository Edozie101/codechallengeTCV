import React, {useState,useEffect} from 'react';
import { Button, Form } from 'semantic-ui-react'
import logo from './logo.svg';
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [users,setUsers] = useState(null)
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const phoneNumberEntry = (e) => { 
      setPhone(e.target.value)
  } 
  const emailEntry = (e) => {
    setEmail(e.target.value)
  }

  const userNameEntry = (e) => {
    setUserName(e.target.value)
  }
  useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
  }, []);
  
  function submitForm() {
      if(username || email || phone === "") {
        alert("Fill all required fields")
      }
      axios
        .post("/api/users",{
          username: username,
          email: email,
          phone: phone
        })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form>
          <Form.Field>
            <Form.Input label='Enter Name' type='text' />

          </Form.Field>
          <Form.Field>
            <Form.Input label='Enter Email' type='text' />

          </Form.Field>
          <Form.Field>
            <Form.Input label='Enter Phone' type='text' />

          </Form.Field>

          <Button > Submit </Button>

        </Form>

       
      </header>
    </div >
  );
}

export default App;
