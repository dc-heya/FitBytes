import React, { Component } from 'react';
import axios from 'axios';
import UpdateComponent from '../../components/UpdateComponent';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

class Update extends Component {

  constructor() {
    super();
    this.state = {
      userId: localStorage.getItem('userId'),
      firstName: '',
      lastName: '',
      weight: '',
      city: '',
      state: '',
      zipCode: '',
      age: '',
      height: '',
      message: '',
      open: false
    };
  }
  componentDidMount() {
    this.setState({ userId: localStorage.getItem('userId') });
    let url = `/api/healthtracker/user/${localStorage.getItem('userId')}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    axios.get(url).then(res => {
        let user = res.data;
        this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        city:user.city,
        state: user.state,
        zipCode: user.zipcode,
        age: user.age,
        height: user.height,
        weight: user.weight,
        });
        
      });
  }
  renderRedirect = () => {
    return <Redirect to="/home" />;
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let userDetails = {
            userId: localStorage.getItem('userId'),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            weight: this.state.weight,
            age: this.state.age,
            height: this.state.height,
          };
          console.log(userDetails);
          axios.post(`/auth/update/${this.state.userId}`, userDetails).then(result => {
        
            // this.props.history.push('/login');
            console.log("axios check update done");
            this.props.history.push('/home');
          });
    
    
  };
  render() {
    return (
      
      <div className="update-main d-flex justify-content-center align-items-center">
      
        <UpdateComponent
          userdetails={this.state}
          handleChange={this.handleChange.bind()}
          handleSubmit={this.handleSubmit}
          open={this.state.handleClickOpen}
        />
        {/* {this.renderRedirect()} */}
      </div>
    );
  }
}

export default Update;
