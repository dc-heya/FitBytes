import React, { Component } from 'react';
import WeightGoalCard from '../../components/WeightGoalCard/WeightGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import WeightLandingPage from '../../components/WeightGoalCard/WeightLandingPage';

class WeightGoal extends Component {
  state = {
    userId: localStorage.getItem('userId'),
    redirect: false,
    goalweight: 0,
    currentweight: 0,
    goalmonths: 0,
    age: 0,
    height: 0,
    gender: '',
    exercisefreq: '',
    updatedWeight: 0,
    currentDayId: '',
    quantities: [],
    dates: [],
    userWeight: 0
  };

  componentDidMount() {
    // Sets the url to query
    let url = `/api/healthtracker/getDaysWeight/${localStorage.getItem(
      'userId'
    )}`;

    // Sets the Authorization request header
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );
    this.setState({ userId: localStorage.getItem('userId') });
    let url2 = `/api/healthtracker/user/${localStorage.getItem('userId')}`;

    axios.get(url2)
      .then(res => {
        console.log(res.data)
        this.setState({
          goalweight: res.data.goalweight,
          // currentweight:res.data.weight,
          goalmonths: res.data.goalmonths,
          age: res.data.age,
          height: res.data.height,
          gender: res.data.gender,
          exercisefreq: res.data.exercisefreq,
          userWeight: res.data.weight

        })
      }).catch(err => { console.log(err) })

    axios.get(url).then(res => {
      let data = res.data;
      console.log('data from days table')
      console.log(data)
      let weightQuantities = [];
      let datesArr = [];

      for (let i = data.length - 1; i > -1; i--) {
        weightQuantities.push(data[i].weight);
        datesArr.push(moment(data[i].date).format('MM/DD/YYYY'));
      }
      let currentweight = this.state.currentweight;
      let defaultWeight = this.state.userWeight;

  // Check if weight for the current day exists
  if (data[0] && data[0].weight !== 0 && data[0].weight !== undefined) {
    currentweight = data[0].weight;
  } else {
    // If weight for current day doesn't exist, extract it from the previous day
    if (data.length > 1 && data[1].weight !== 0 && data[1].weight !== undefined) {
      currentweight = data[1].weight;
    } else {
      // If weight for previous day also doesn't exist, set currentweight to 0 or any default value
      currentweight = defaultWeight; // Or any default value you want to set
    }
  }

      this.setState({
        currentweight: currentweight,
        updatedWeight: currentweight,
        currentDayId: data[0]._id,
        quantities: weightQuantities,
        dates: datesArr
      });
      this.props.history.push('/weight');

    });
  }

  handleChange(e) {
    this.setState({ updatedWeight: e.target.value });
  }

  handleClick() {
    let arr = this.state.quantities;

    console.log(arr);

    arr.splice(-1, 1);
    arr.push(this.state.updatedWeight);

    this.setState({ currentweight: this.state.updatedWeight }, () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(
        'jwtToken'
      );
      axios
        .post('/api/healthTracker/updateWeight', {
          weight: this.state.currentweight,
          id: this.state.currentDayId,
          userId:this.state.userId
        })
        .then(data => {
          console.log(data);
          window.location.reload()
          this.props.history.push('/weight#weight-main');
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div style={{backgroundColor : '#f7f8fc'}}>
        {this.renderRedirect()}
        <WeightLandingPage />
        <div id="weight-main">
          <WeightGoalCard
            handleChange={this.handleChange.bind(this)}
            handleClick={this.handleClick.bind(this)}
            goalweight={this.state.goalweight}
            currentweight={this.state.currentweight}
            goalmonths={this.state.goalmonths}
            age={this.state.age}
            height={this.state.height}
            gender={this.state.gender}
            exercisefreq={this.state.exercisefreq}
            updatedWeight={this.state.updatedWeight}
            quantities={this.state.quantities}
            dates={this.state.dates}
            userWeight={this.state.userWeight}
          />
        </div>
      </div>
    );
  }
}

export default WeightGoal;
