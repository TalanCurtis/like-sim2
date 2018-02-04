import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getInfo } from '../../reducers/base';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            name:'placeholder',
            age: 99
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        axios.post('/api/testDB', {id:this.props.match.params.id})
        .then(res=> 
            {
                this.setState({
                    name: res.data[0].name,
                    age: res.data[0].age
                })
            })
    }

    render() {
        return (
            <div>
                Welcome to the Dashboard {this.state.name} who is {this.state.age} years old.
            </div>
        )
    }
}

// const outputActions = {
//     getInfo: getInfo
// }
// function mapStateToProps(state) {
//     if (!state) return {};
//     return {
//         name: this.name,
//         age: this.age
//     }
// }

// export default connect(mapStateToProps, outputActions)(Dashboard);
export default Dashboard