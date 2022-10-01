import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserModal(props) {
  const {show, handleClose, handleShow, userInfo, saveUser} = props

  const [newUser,setNewUser] = useState([]);

  useEffect(() => {
    setNewUser(userInfo);    
  }, [userInfo]);

  const updateUser = (item) => {    
    const { name, value } = item.target;
    setNewUser(newUser => ({
      ...newUser,
      [name]: value
  })); 
  };
 
  return (
    <>  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                        <strong>User Name:</strong>
                        </div>
                        <div className='col-md-6'>
                        <input type={"text"} name="first_name" defaultValue={userInfo.first_name }  onChange={updateUser}   />
                        </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-md-6'>
                        <strong>Last Name:</strong>
                        </div>
                        <div className='col-md-6'>
                        <input type={"text"} defaultValue={ userInfo.last_name } onChange={updateUser}  name="last_name" />
                        </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-md-6'>
                        <strong>Email:</strong>
                        </div>
                        <div className='col-md-6'>
                        <input type={"text"} defaultValue={userInfo.email } onChange={updateUser}  name="email"/>
                        </div>
                    </div>
                    
                   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>{saveUser(newUser);handleClose();}}>          
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal;