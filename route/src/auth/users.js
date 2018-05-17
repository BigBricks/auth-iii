import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          username: '',
          password: ''
        };
      }
      componentDidMount() {
        this.bob();
      }

      bob = () => {
          const token = localStorage.getItem('token');
          const authtoken = `${token}`;
          const reqOpt = {
              headers: {
                  Authorization: authtoken,
              },
          };
        axios
          .get(`http://localhost:5000/api/users`, reqOpt)
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch(err => {
            console.log(err);
          })
      }


    render(){
        // const {user} = this.props;
        return (
            <div>
                {this.state.users.map(user => {
                    return (
                        <h3>{user.username}</h3>
                    )
                })}
                
            </div>
        )
    }
} 

export default Users;