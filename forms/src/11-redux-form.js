import PropTypes from 'prop-types';
import React from 'react';
import isEmail from 'validator/lib/isEmail';

const Field = require('./08-field-component-field.js');
const CourseSelect = require('./09-course-select.js');

module.exports = class extends React.Component {
  static displayName = "11-redux-form";
  static propTypes = {
    people: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    saveStatus: PropTypes.string.isRequired,
    fields: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
  }; //expected input from ReduxForm interconnection.
  state = {
    fields: this.props.fields || {
      name: '',
      email: '',
      course: null,
      department: null
    },
    fieldErrors: {},
  };//only local-component state is preserved. Everything else is in 'store' now.
  componentWillReceiveProps(update) {
    console.log('cmpWillRcvProps: this.props.fields:', this.props.fields, update);
    this.setState({ fields: update.fields });
  }
  onFormSubmit = (evt) => {
    const person = this.state.fields;
    evt.preventDefault();
    if (this.validate()) return;
    this.props.onSubmit([ ...this.props.people, person ]);
  }; //calls out to store, where onSubmit is invoked with new 'people.array'.
  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  }; //update local states of fields
  validate = () => {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if (!person.name) return true;
    if (!person.email) return true;
    if (!person.course) return true;
    if (!person.department) return true;
    if (errMessages.length) return true;

    return false;
  }; //returns true if a field is invalid.
    render() {
    if (this.props.isLoading) {
      return <img alt='loading' src='/img/loading.gif' />;
    } //state of 'store.isLoading'
    const dirty = Object.keys(this.state.fields).length; //is there any info entered into fields?
    let status = this.props.saveStatus; //state of 'store.saveStatus'
    if (status === 'SUCCESS' && dirty) status = 'READY'; //enigmatic 'dirty'
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <Field
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'Name Required')}
          />
          <br />
          <Field
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
          />
          <br />
          <CourseSelect
            department={this.state.fields.department}
            course={this.state.fields.course}
            onChange={this.onInputChange}
          />
          <br />
          {{
            SAVING: <input value='Saving...' type='submit' disabled />,
            SUCCESS: <input value='Saved!' type='submit' disabled />,
            ERROR: <input
              value='Save Failed - Retry?'
              type='submit'
              disabled={this.validate()}
            />,
            READY: <input
              value='Submit'
              type='submit'
              disabled={this.validate()}
            />,
          }[status]} //html analogue of 'switch' for the Submit button.
        </form>

        <div>
          <h3>People</h3>
          <ul> //JSX 'store.people.map out'
            {this.props.people.map(({ name, email, department, course }, i) =>
              <li key={i}>{[ name, email, department, course ].join(' - ')}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
};
