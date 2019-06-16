import React, {Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

import {connect} from 'react-redux';
import { getUsers, deleteUser} from '../actions/userActions';
import PropTypes from 'prop-types';

class UserList extends Component{
    
    componentDidMount() {
        this.props.getUsers();
    }
    onDeleteClick = (id) => {
        this.props.deleteUser(id);
    };

    render(){
        const {users} = this.props.user
        return (
           
            
            <Container>
                <h1>Admin View Users</h1>
                
                
                <ListGroup className="lst-grp">
                    {users.map(({_id, firstName, userName, lastName, email}) => (
                       
                        <ListGroupItem className="user-lst" key= {_id}>
                             <Button
                             className="remove-btn"
                             color="danger"
                             size="sm"
                             onClick={this.onDeleteClick.bind(this, _id)}
                             >&times;</Button>
                             {firstName} "{userName}" {lastName} {email}
                        </ListGroupItem>
                    ))}
                    
                   
                </ListGroup>

                    
            </Container>  
        )          
    }
}

UserList.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user 
})

export default connect(mapStateToProps,
     {getUsers, deleteUser}
     )(UserList);
