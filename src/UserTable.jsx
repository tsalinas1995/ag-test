
import 'bootstrap-css-only/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
        <table className="table customTable">
            <thead>
                <tr>           
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>      
                    <th></th>      
                </tr>
            </thead>
           {users.map((user) =>
           <tbody>
            <tr>
                <td><a onClick={()=> handleShow(user)}>{user.id}</a></td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>                    
                <Button variant="success"onClick={()=> handleShow(user)}>          
                    Edit
                </Button>        
                    </td>
            </tr>
            </tbody>
           )}
         </table>
               <UserModal userInfo={selectedUser} show={show} handleClose={handleClose} handleShow={handleShow} saveUser={saveUser}/>
             </>
    )
}

export default UserTable;