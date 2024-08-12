// import React from 'react';
import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import diseasesData from './diseases.json';
import './DiseaseComp.css'
class Disease extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: localStorage.getItem('userId'),
      // username:'',
      height: '',
      age: '',
      weight: '',
      veg: '',
      goalweight: '',
      goalmonths: '',
      exercisefreq: '',
      diseasesall: diseasesData,
      diseases: [],
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
      // console.log('user',user)
      this.setState({
        height: user.height ? user.height : '',
        age: user.age ? user.age : 0,
        weight: user.weight ? user.weight : '',
        veg: user.veg ? user.veg : '',
        goalweight: user.goalweight ? user.goalweight : '',
        goalmonths: user.goalmonths ? user.goalmonths : '',
        exercisefreq: user.exercisefreq ? user.exercisefreq : '',
        diseases: user.diseases ? user.diseases : ''
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
  handleToggleChange = () => {
    this.setState(prevState => ({
      veg: !prevState.veg // Toggle the value of vegetarian
    }));
  };
  handleDiseasesChange = e => {
    const options = e.target.options;
    const diseases = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        diseases.push(options[i].value);
      }
    }
    this.setState({ diseases });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit called!');
    let userDetails = {
      userId: localStorage.getItem('userId'),
      // username: this.state.username,
      height: this.state.height,
      age: this.state.age,
      weight: this.state.weight,
      veg: this.state.veg,
      goalweight: this.state.goalweight,
      goalmonths: this.state.goalmonths,
      exercisefreq: this.state.exercisefreq,
      diseases: this.state.diseases
    };
    console.log(userDetails);

    axios.post(`/auth/disease/${this.state.userId}`, userDetails)
      .then(result => {
        console.log("Axios check disease done");
        // Navigate to the home page if the request is successful
        this.props.history.push('/home');
      })
      .catch(error => {
        // Log the error
        console.error("Error checking disease:", error);
      });



  };
  render() {

    // const { classes } = this.props;
    // console.log(classes)
    console.log('hello1')
    console.log(this.state)
    return (
      <div className="update-disease-main  d-flex flex-column justify-content-center align-items-center">
        <div className="update-disease-form d-flex flex-column justify-content-center ">
          <div className="space-y-2">
            <form className="space-y-2 p-2" action="#" method="POST">
              <div className="border-gray-900/10 ">
                <div className="border-gray-900/10">
                  <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Health Statistics Profile</h2>
                  <div className="mt-15 mx-auto mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-5xl">
                    {/* Age */}
                    <div className="sm:col-span-2">
                      <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">Age</label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="age"
                          id="age"
                          placeholder={this.state.age}
                          className="block w-48 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    {/* Height */}
                    <div className="sm:col-span-2">
                      <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">Height
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="height"
                          id="height"
                          placeholder={this.state.height}
                          className="block w-48 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          // value={this.userdetails.height}
                          onChange={this.handleChange}
                        />
                      </div>

                    </div>
                    {/* Current Weight */}
                    <div className="sm:col-span-2">
                      <label htmlFor="currentweight" className="block text-sm font-medium leading-6 text-gray-900">Current Weight (kg)</label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="currentweight"
                          id="currentweight"
                          placeholder={this.state.weight}
                          className="block w-48 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          // value={this.userdetails.currentweight}
                          onChange={this.handleChange}
                        />
                      </div>

                    </div>

                    {/* Goal Weight */}
                    <div className="sm:col-span-2">
                      <label htmlFor="goalweight" className="block text-sm font-medium leading-6 text-gray-900">Goal Weight (kg)</label>
                      <div className='mt-2'>
                        <input
                          type="number"
                          name="goalweight"
                          id="goalweight"
                          placeholder={this.state.goalweight}
                          className="block w-48 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          // value={this.userdetails.goalweight}
                          onChange={this.handleChange}
                        />
                      </div>

                    </div>

                    {/* Goal Months */}
                    <div className="sm:col-span-2">
                      <label htmlFor="goalmonths" className="block text-sm font-medium leading-6 text-gray-900">Goal Months</label>
                      <div className='mt-2'>
                        <input
                          type="number"
                          name="goalmonths"
                          id="goalmonths"
                          placeholder={this.state.goalmonths}
                          className="block w-48 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          // value={this.userdetails.goalmonths}
                          onChange={this.handleChange}
                        />
                      </div>

                    </div>

                    {/* Exercise Frequency */}
                    <div className="sm:col-span-2">
                      <label htmlFor="exercisefreq" className="block text-sm font-medium  leading-6 text-gray-900">Exercise Frequency</label>
                      <select
                        name="exercisefreq"
                        id="exercisefreq"
                        className="block w-60 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder={this.state.exercisefreq}
                        onChange={this.handleChange}
                      >
                        {/* <option value="">Current Status: {this.state.exercisefreq}</option> */}
                        <option value="" disabled selected>{this.state.exercisefreq !== null ? "Current Status: " + this.state.exercisefreq : "Select"}</option>
                        <option value="none">None (little to no exercise)</option>
                        <option value="sedentary">Light exercise 1–3 days a week</option>
                        <option value="lightlyActive">Moderate exercise 3–5 days a week</option>
                        <option value="moderatelyActive">Hard exercise 6–7 days a week</option>
                        <option value="veryActive">Physically demanding job or challenging exercise routine</option>
                      </select>
                    </div>
                    {/* Vegetarian */}
                    <div className="sm:col-span-6 ">
                      <label htmlFor="currentweight" className="flex justify-center text-sm font-medium leading-6 text-gray-900">Non-Vegetarian</label>
                      <div className='flex justify-center '>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" value={this.state.veg} onChange={this.handleToggleChange} className="sr-only peer" />
                          <div className="relative w-16 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                        </label>
                      </div>

                    </div>

                    {/* Diseases */}
                    <div className="sm:col-span-6">
                      <label htmlFor="diseases" className="block text-sm font-medium  leading-6 text-gray-900">Select Diseases:</label>
                      <p >Use Ctrl Key to select multiple diseases</p>
                      <select
                        name="diseases"
                        id="diseases"
                        className="block w-48 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        multiple
                        value={this.state.diseases}
                        onChange={this.handleDiseasesChange}
                      >
                        {this.state.diseasesall.map((disease, index) => (
                          <option key={index} value={disease.Disease}>
                            {disease.Disease}
                          </option>
                        ))}
                      </select>

                      <div>
                        Selected Diseases: {this.state.diseases.map((disease, index) => (
                          <span key={index}>{disease}{index !== this.state.diseases.length - 1 ? ', ' : ''}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" onClick={this.handleSubmit}>Make Profile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Disease;



