import React, { Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';


class UserModal extends Component{
state = {
    modal: false,
    userName: '',
    firstName: '',
    lastName: '',
    email: ''

    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

     
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email

        }
        // Add user via addUser action

        this.props.addUser(newUser);

        //Close modal

        this.toggle();
    }
    render(){
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add User
                </Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader
                    toggle={this.toggle}>
                        Add User
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="user">User</Label>
                                <Input
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder="Enter Username"
                                onChange={this.onChange}
                                />
                                <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Enter firstname"
                                onChange={this.onChange}
                                />
                                <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter lastname"
                                onChange={this.onChange}
                                />
                                <Input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="enter email"
                                onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Add User</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {addUser})(UserModal);