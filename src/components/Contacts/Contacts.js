import React, {Component} from 'react';
import axios from 'axios';

class Contacts extends Component{
    constructor(){
        super();
        this.state = {
            userList:[]
        }
    }

    handleRefreshUsers(){
        console.log("Handle refresh users")
        axios.get('api/testDB')
        .then(res=>{ 
            console.log(res.data)
            this.setState({userList: res.data})
        })
      }

    render(){
        const usersList = this.state.userList.map((user, i)=>(
            <div key={i}>
                <h1>{user.name}</h1>
                <h1>{user.age}</h1>
            </div>
        ))
        return(
            <div className='Contacts'>
                Contacts
                <button onClick={()=>{this.handleRefreshUsers()}}>Get users from Database</button>
                <div>
                {usersList}
                </div>

            </div>
        )
    }
}

export default Contacts