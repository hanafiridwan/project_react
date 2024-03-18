import React from 'react'

const FormMovie = ({match, history}) => {
  return (
    // <h1>Page Form Movie</h1>
    <div>
      <h1>
        Movie dari {match.params.id}
      </h1>
      <button className='btn btn-primary' onClick={() => history.push('/movies')}>
        Di Klik Woi
      </button>
    </div>
  )
}

export default FormMovie