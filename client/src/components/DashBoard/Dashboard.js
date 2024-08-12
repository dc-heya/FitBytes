import React from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './index.css';
import ChartsPie from './../ChartsPie';

import { Link } from 'react-router-dom';
import DashBoardLanding from './DashBoardLanding';

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div >
        < div >
          <DashBoardLanding />
        </div>
        {/* <div > */}
        <div className="container p-4" id='main-dash'>
          <p className='text-4xl md:text-5xl font-bold text-black text-center m-10'>DASHBOARD</p>
          <div className="container d-flex p-4">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={5}>
                <ChartsPie
                  waterChart={this.props.water}
                  nutritionChart={this.props.nutrition}
                  exerciseChart={this.props.exercise}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <p className='text-2xl md:text-3xl text-black text-center'>
                  Hey {this.props.firstName} {this.props.lastName}!
                </p>
                <p className='text-sm md:text-lg text-black text-center'>
                  All your daily health tracking information is displayed below.
                  Click on the icons to access the goal pages
                </p>

                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="table table-striped table-hover">
                      <tbody>
                        <tr>
                          <td class="p-3 border-bottom border-secondary">
                            <div class="d-flex align-items-center">
                              <div class="ms-3">
                                <p class="text-dark fw-bold">
                                  Water (Cups)
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="p-3 border-bottom border-secondary">
                            <p class="text-dark">{this.props.water}</p>
                          </td>
                          <td class="p-3 border-bottom border-secondary">
                            <Link to="/water" >
                              <i class="fa-solid fa-glass-water fa-2xl" style={{ color: "#be185d", }} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3 border-bottom border-secondary">
                            <div class="d-flex align-items-center">
                              <div class="ms-3">
                                <p class="text-dark fw-bold">
                                  Exercise (Minutes)
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="p-3 border-bottom border-secondary">
                            <p class="text-dark">{this.props.exercise}</p>
                          </td>
                          <td class="p-3 border-bottom border-secondary">
                            <Link to="/exercise" >
                              <i class="fa-solid fa-running fa-2xl" style={{ color: "#be185d", }} />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3 border-bottom border-secondary">
                            <div class="d-flex align-items-center">
                              <div class="ms-3">
                                <p class="text-dark fw-bold">
                                  Weight (Kg)
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="p-3 border-bottom border-secondary">
                            <p class="text-dark">{this.props.currentWeight > 0 ? this.props.currentWeight : this.props.userWeight}</p>
                          </td>
                          <td class="p-3 border-bottom border-secondary">
                            <Link to="/weight" >
                              <i class="fa-solid fa-weight fa-2xl" style={{ color: "#be185d", }} />
                            </Link>
                          </td>
                        </tr>
                        </tbody>
                    </table>


                  </div>
                </div>
                <div className="d-flex w-100 justify-content-around">
                  <Link to='/update'><button type="submit" className="btn btn-lg custom-btn-style-weight rounded-pill w-100">Update User Details</button></Link>

                  <Link to='/diseases'><button type="submit" className="btn btn-lg custom-btn-style-weight rounded-pill w-100">Update Health Statistics</button></Link>
                </div>

              </Grid>

            </Grid>
          </div>
        </div>
      </div >
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Dashboard;