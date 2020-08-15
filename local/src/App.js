import React, { useState, useEffect } from 'react';
import { Button, Header,Icon, Form, Table } from 'semantic-ui-react'
import logo from './logo.svg';
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
console.log(axios.defaults)

function App() {
  const [users, setUsers] = useState(null)
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
    // if (username || email || phone === "") {
    //   alert("Fill all required fields")
    // }
    axios
      .post("/api/users", {
        name: username,
        email: email,
        phone: phone
      })
      .then(function () {
        alert("User successfully added");
        window.location.reload()
      })
      .catch(function (e) {
          console.log(e)
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header as='h2' icon>
          <Icon name='settings' />
            Admin
    <Header.Subheader>
            Manage your current users
    </Header.Subheader>
        </Header>

        { 
          (users === null) ? (<p> Loading </p>)
          : (users.length === 0) ? (<p> No users available</p>) :
          (<React.Fragment>
            <Table >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                { users.length > 0 ? users.map(user => {
                  return(<Table.Row>
                     <Table.Cell> {user.name} </Table.Cell>
                     <Table.Cell> {user.email} </Table.Cell>
                     <Table.Cell> {user.phone} </Table.Cell>


                  </Table.Row>)
                }) : <> </> }
              </Table.Body>
              </Table>
          </React.Fragment>)


        }
        <Form >
          <Form.Field>
            <Form.Input label='Enter Name' type='text' onChange={userNameEntry}/>

          </Form.Field>
          <Form.Field>
            <Form.Input label='Enter Email' onChange={emailEntry} type='text' />

          </Form.Field>
          <Form.Field>
            <Form.Input label='Enter Phone' onChange={phoneNumberEntry} type='text' />
          </Form.Field>

          <Form.Button onClick={submitForm}> Submit </Form.Button>

        </Form>


      </header>
    </div >
  );
}

export default App;
