import { options } from 'joi'
import React from 'react'

const Select = ({name, label, error, ...res}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...res} className='form-control'>
        <option value="" />
        {options.map(option => {
            <option key={option._id} value={option._id}>
                {option.name}
            </option>
        })}
      </select>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Select