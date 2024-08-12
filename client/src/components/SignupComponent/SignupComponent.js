import React from 'react';
import './signup.css';


class Signup extends React.Component {
  render() {
    // const { classes } = this.props;
    return (

      <div className="signup-main">
        <div className="signup-image"><img src='/assets/images/checkup.jpg' className="img-fluid" alt="" /></div>
        <div className="flex min-h-full justify-center items-center bg-rgba(255, 255, 255, 0.5) px-12 py-10 lg:px-30">
          {/* <form> */}
          <div className="space-y-12">
            <form class="space-y-6" action="#" method="POST">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4 text-green-800">Create Profile</h1>


                  <div className="mt-15 mx-auto mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-5xl">
                    <div className="sm:col-span-3">
                      <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="lastName"
                          id="lastname"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        UserName
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="passwordConfirmation"
                          id="passwordConfirmation"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>



                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        >
                          <option>India</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                          <option>France</option>
                          <option>Germany</option>

                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}

                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="zipCode"
                          id="zipCode"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}

                        />
                      </div>
                    </div>

                    <p>Health details</p>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        Age
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="age"
                          id="age"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        Weight
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          autoComplete="address-level1"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}

                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        Height
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="height"
                          id="height"
                          autoComplete="height"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={this.props.handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4 sm:col-span-3" >
                      <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                        Gender
                      </label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className="mr-1"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="male" className="text-sm font-medium leading-6 text-gray-900">
                        Male
                      </label>

                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className="mr-1"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="female" className="text-sm font-medium leading-6 text-gray-900">
                        Female
                      </label>

                    </div>


                  </div>
                </div>
              </div>



              <button type="submit" className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900" onClick={this.props.handleSubmit}>Sign up</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Signup.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Signup;
