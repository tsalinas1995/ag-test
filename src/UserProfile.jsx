import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UserProfile = ({users}) =>{    
    
    return(
        <div className="row-card">
        <Container>      
           {users.map((user) =>
            <Row className="content-card">
                <Col >
                <img src={user.avatar} />
                </Col>                
                <Col>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Full Name:</strong> {user.first_name} {user.last_name}</p>
                    <p><strong>Email:</strong> {user.email} </p>
                </Col>
            </Row>
           )}
    
     </Container>
     </div>
    )
}

export default UserProfile;