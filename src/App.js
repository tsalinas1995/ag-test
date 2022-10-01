import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTable from './UserTable';
import UserProfile from './UserProfile';

import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);

  const getUsers =  async () => {
      console.log('getusers');
      await axios
        .get("https://reqres.in/api/users?page=2")
        .then((response) => {            
          setUsers(response.data.data);        
         
        });
    
    };
  
    useEffect(() => {
      getUsers();    
    }, []);

      
  const saveUser = (user)=>{      
    let newUser = [...users]
    let selectedUser = newUser.find(i => i.id == user.id);
    if (selectedUser) {
      selectedUser.first_name = user.first_name;
      selectedUser.last_name = user.last_name;
      selectedUser.email = user.email;
    }    
    setUsers(newUser);
  }


  return (
    <div className="App">
    
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="User List">
        <UserTable users={users} saveUser={saveUser}/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <UserProfile  users={users} />
      </Tab>
    
    </Tabs>
    </div>
  );
}

export default App;
