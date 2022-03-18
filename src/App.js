import React from "react";

import "./App.css";

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      input: {},

      errors: {},

    };


    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;


    this.setState({

      input,

    });

  }


  handleSubmit(event) {

    event.preventDefault();


    if (this.validate()) {

      console.log(this.state);


      let input = {};

      input["name"] = "";

      input["email"] = "";

      input["password"] = "";

      input["phone"] = "";

      

      this.setState({ input: input });


      alert("Form is submited");

    }

  }

  validate() {

    let input = this.state.input;

    let errors = {};

    let isValid = true;


    if (!input["name"]) {

      isValid = false;

      errors["name"] = "Please enter your name.";

    }


    if (!input["email"]) {

      isValid = false;

      errors["email"] = "Please enter your email Address.";

    }


    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(

        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

      );

      if (!pattern.test(input["email"])) {

        isValid = false;

        errors["email"] = "Please enter valid email address.";

      }

    }


    if (!input["phone"]) {

      isValid = false;

      errors["phone"] = "Please enter your phone number.";

    }


    if (typeof input["phone"] !== "undefined") {

      var pattern = new RegExp(/^[0-9\b]+$/);

      if (!pattern.test(input["phone"])) {

        isValid = false;

        errors["phone"] = "Please enter only number.";

      } else if (input["phone"].length != 10) {

        isValid = false;

        errors["phone"] = "Please enter valid phone number.";

      }

    }


   

    if (!input["password"]) {

      isValid = false;

      errors["password"] = "Please enter your password.";

    }

   


    this.setState({

      errors: errors,

    });


    return isValid;

  }


  render() {

    return (

      <div id="bd">

        <div id="bodyy">

          <h1>FILL THE FORM</h1>

          <form onSubmit={this.handleSubmit}>

            <div>

              <label htmlFor="name">Name:</label>

              <br />

              <input

                type="text"

                name="name"

                value={this.state.input.name}

                onChange={this.handleChange}

                placeholder="Enter name"

                id="name"

              />


              <div className="danger">{this.state.errors.name}</div>

            </div>

            <br />


            <div>

              <label htmlFor="email">Email Address:</label>

              <br />

              <input

                type="text"

                name="email"

                value={this.state.input.email}

                onChange={this.handleChange}

                placeholder="Enter email"

                id="email"

              />


              <div className="danger">{this.state.errors.email}</div>

            </div>

            <br />


            <div>

              <label htmlFor="password">Password :</label>

              <br />

              <input

                type="password"

                name="password"

                value={this.state.input.password}

                onChange={this.handleChange}

                placeholder="Enter password"

                id="password"

              />


              <div className="danger">{this.state.errors.password}</div>

            </div>

            <br />


            <div>

              <label htmlFor="Phone">Phone:</label>

              <br />

              <input

                type="text"

                name="phone"

                value={this.state.input.phone}

                onChange={this.handleChange}

                placeholder="Enter phone"

                id="phone"

              />


              <div className="danger">{this.state.errors.phone}</div>

            </div>

            <br />


          


            <input type="submit" value="Submit" className="btn" />

          </form>

        </div>

      </div>

    );

  }

}


export default App;