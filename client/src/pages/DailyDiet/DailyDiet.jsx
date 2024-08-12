import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import DailyDietComp from '../../components/DailyDietComponent/DailyDietComp';

class DailyDiet extends Component {

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
            exercisefrequency: '',
            diseases: [],
            veg: '',
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
                city: user.city,
                state: user.state,
                zipCode: user.zipcode,
                age: user.age,
                height: user.height,
                weight: user.weight,
                gender: user.gender,
                exercisefreq: user.exercisefreq,
                diseases: user.diseases,
                veg: user.veg

            });
        });
    }
    // renderRedirect = () => {
    //     return <Redirect to="/dailydiet" />;
    // };
    renderRedirect = () => {
        if (!localStorage.getItem('jwtToken')) {
            return <Redirect to="/login" />;
        }
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (

            <div>
                {this.renderRedirect()}

                <DailyDietComp
                    userdetails={this.state}
                />
            </div>
        );
    }
}

export default DailyDiet