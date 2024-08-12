import React from 'react';
import './UpdateComp.css'

// export default App;
class Update extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.userdetails.firstName)
    return (
      <div class="update-form d-flex flex-column justify-content-center ">     
        <div className="space-y-12">
          <form class="space-y-6" action="#" method="POST">
            <div className="border-gray-900/10 pb-12">
              <div className="border-gray-900/10 pb-12">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update Profile</h2>
                <div className="mt-15 mx-auto mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-5xl" >
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder={this.props.userdetails.firstName}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        placeholder={this.props.userdetails.lastName}
                        id="lastname"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={this.props.handleChange}
                      />
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
                        placeholder={this.props.userdetails.city}
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        placeholder={this.props.userdetails.state}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        placeholder={this.props.userdetails.zipCode}
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        placeholder={this.props.userdetails.age}
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        placeholder={this.props.userdetails.weight}
                        autoComplete="address-level1"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        placeholder={this.props.userdetails.height}
                        autoComplete="height"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={this.props.handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <button type="submit" className="mx-auto max-w-20 flex w-full justify-center rounded-md bg-pink-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900" onClick={this.props.handleSubmit}>Update</button>
          </form>
        </div>
      </div>

    );
  }
}

// Signup.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Update;
