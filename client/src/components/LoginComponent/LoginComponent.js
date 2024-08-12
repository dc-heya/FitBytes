import React from 'react';
import { Link } from 'react-router-dom';
import './LoginComponent.css';


class Login extends React.Component {
  render() {

    return (
      <div className="container-fluid login-main">
      <div class="login-form-main flex flex-col justify-center px-6 py-12  lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <div class="mt-2">
                <input id="username" name="username" type="username" autocomplete="username" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={this.props.usernameAction} />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-blue-600 hover:text-pink-900">Forgot password?</a>
                </div>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-900 sm:text-sm sm:leading-6" onChange={this.props.passwordAction} />
              </div>
            </div>


            <button type="submit" className="flex w-full justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900" onClick={this.props.submitAction}>Sign in</button>

          </form>
          <br></br>

          <div>
            <label for="signup" class="block text-sm font-medium leading-6 text-gray-900">New User? Register Here</label>
            {/* <button href="/signup" className="flex w-full justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900" >Sign Up</button> */}
            <Link to="/signup" className="flex w-full justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900">
              Sign Up
            </Link>
          </div>
        </div>

      </div>
      </div >
    );
  }
}

export default Login;
