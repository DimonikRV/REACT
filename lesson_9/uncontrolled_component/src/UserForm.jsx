import React from 'react';

class UserForm extends React.Component {
  state = {};

  setRef = node => {
    this.formRef = node;
  };

  submitHandler = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(this.formRef));
    this.props.onSubmit(formData);
  };
  render() {
    return (
      <form className="login-form" ref={this.setRef} onSubmit={this.submitHandler}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input className="form-input" type="checkbox" id="student" name="student" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input" id="occupation">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea name="about" className="form-input" />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default UserForm;
