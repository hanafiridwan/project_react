import React, { Component } from 'react'
import Joi from 'joi'
import Input from './Input'
import Select from './Select'

export default class Form extends Component {

  state = {
    data: {},
    errors: {}
  }

  validate = () => {
    const options = {abortEarly: false} // ini supaya optionnya saat di klik kebawah
    const {error} = Joi.object( this.state.data, this.scheme, options);
    if(!error) return null;

    const errors = {};
    for(let item of error.details) errors[item.path[0]] = item.message; 
    return errors;
  }

  validateProperty = ({name, value}) => {
    const obj = {[name]: value}
    const schema = {[name]: this.scheme[name]}
    const {error} = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({errors: errors || {}})

    if(errors) return;
    this.doSubmit();
    // this.props.onSubmit();
  }

  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name];

    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({data, errors})
  }

  renderButton(label) {
    return (
      <button disabled={this.validate()} className='btn btn-primary' >{label}</button>
    )
  }

  renderSelect(name, label, options){
    const {data, errors} = this.state;

    return(
      <Select 
        name={name}
        value={data[name]}
        label = {label}
        options = {options}
        onChange = {this.handleChange}
        error = {errors[name]}
      />
    )
  }

  renderInput(name, label, type="text"){
    const {data, errors} = this.state

    return(
      <Input 
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange = {this.handleChange}
        error = {errors[name]}
      />
    )
  }
}
