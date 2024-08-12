import React, { Component } from 'react';
import axios from 'axios';
import DiseaseComponent from '../../components/DiseaseComponent';
import { Redirect } from 'react-router-dom';

class Disease extends Component {

  constructor() {
    super();
    this.state = {
      userId: localStorage.getItem('userId'),
      // username:'',
      height: '',
      age:'',
      weight:'',
      veg:'',
      goalweight:'',
      goalmonths:'',
      exercisefreq:'',
      open: false
    };
  }
  componentDidMount() {
    this.setState({ userId: localStorage.getItem('userId') });
    //jab humein initial content chahiye wo toh humein user table se hi chahiye
    let url = `/api/healthtracker/user/${localStorage.getItem('userId')}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    axios.get(url).then(res => {
        let user = res.data;
        console.log('user',user)
        this.setState({
          height: user.height ? user.height : '',
          age: user.age ? user.age : 0,
          weight: user.weight ? user.weight : '',
          veg: user.veg ? user.veg : '',
          goalweight: user.goalweight ? user.goalweight : '',
          goalmonths: user.goalmonths ? user.goalmonths : '',
          exercisefreq: user.exercisefreq ? user.exercisefreq : ''
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
    console.log('submit called!');
    let userDetails = {
            userId: localStorage.getItem('userId'),
            // username: this.state.username,
            height: this.state.height,
            age: this.state.age,
            weight:this.state.weight,
            veg:this.state.veg,
            goalweight:this.state.goalweight,
            goalmonths:this.state.goalmonths,
            exercisefreq:this.state.exercisefreq
          };
          console.log(userDetails);
          
           axios.post(`/auth/disease/${this.state.userId}`, userDetails).then(result => {
  
      // this.props.history.push('/login');
      console.log("axios check disease done");
      this.props.history.push('/home');
    });
    
    
  };
  
  render() {
    console.log(this.state);
    return (
      <div className="">
        <DiseaseComponent
          userdetails={this.state}
          handleChange={this.handleChange.bind()}
          handleSubmit={this.handleSubmit}
          open={this.state.handleClickOpen}
        />
      </div>
    );
  }
}

export default Disease;
