import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: []
         }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            this.setState({
                users:res.data
            })
        })
        .catch(err => {
            console.log('Oups! Something went wrong!')
        })
    }
    render() { 
        return ( 
            <div className="users-list">
                {
                    this.state.users.map(el =>{
                        return(
                            <UserCard user={el} key={el.id}/>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default Users;