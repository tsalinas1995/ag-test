

import {MDBTable, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import UserModal from './UserModal';

const UserTable = ({users, saveUser}) =>{  
    const [show, setShow] = useState(false);
    const [selectedUser, setSelectedUSer] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = (user) =>{ 
        setShow(true);       
        setSelectedUSer(user);
    }
    ;
    
    return(
        <>
        <MDBTable hover className="customTable">
            <thead>
                <tr>           
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>      
                      
                </tr>
            </thead>
           {users.map((user) =>
           <tbody>
            <tr>
                <td><a onClick={()=> handleShow(user)}>{user.id}</a></td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>                
            </tr>
            </tbody>
           )}
         </MDBTable>
               <UserModal userInfo={selectedUser} show={show} handleClose={handleClose} handleShow={handleShow} saveUser={saveUser}/>
             </>
    )
}

export default UserTable;