import React from 'react'

// const FormMovie = ({match, history}) => {
//   return (
//     // <h1>Page Form Movie</h1>
//     <div>
//       <h1>
//         Movie dari {match.params.id}
//       </h1>
//       <button className='btn btn-primary' onClick={() => history.push('/movies')}>
//         Di Klik Woi
//       </button>
//     </div>
//   )
// }
import  Form  from '../Components/Table/Form'
import Joi from 'joi-browser'
import  getGenres  from "../Services/GenreMovies";
import {  getMovie, saveMovie } from '../Services/MovieService' 

class FormMovie extends Form {
// ini data dari backend nya
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {} //error ini fungsinya untuk nge lock(butuh gak butuh)
  }
  // sekarang kita validasi backend / panggil backend
  scheme = {
    _id: Joi.string(),
    title: Joi.string()
      .required() //wajib diisi
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  }

  async populateGenres(){
    const {data : genres} = await getGenres();
    this.setState({genres})
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
  
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.props.history.replace("/not-found");
      } else {
        // Penanganan kasus ketika objek error tidak memiliki properti response
        console.error("Error:", error);
      }
    }
  }

  async componentDidMount(){
    await this.populateGenres(); //bukan this.getGenres
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    if (!movie) return {};
  
    return {
      _id: movie._id || '',
      title: movie.title || '',
      genreId: movie.genre ? movie.genre._id : '',
      numberInStock: movie.numberInStock || '',
      dailyRentalRate: movie.dailyRentalRate || ''
    };
  }

  //kita buat submit and kirim (bisa dalam satu)
  doSubmit = async () => {
    await saveMovie(this.state.data) //saveMovies dari import diatas

    this.props.history.push("/movies")
  }

//   validate() {
//   const options = { abortEarly: false };
//   const { error } = Joi.object(this.schema).validate(this.state.data, options);
//   if (!error) return null;

//   const errors = {};
//   for (let item of error.details) {
//     errors[item.path[0]] = item.message;
//   }
//   return errors;
// }

  render() {
    return(
      <div>
        <h1>Movie Form</h1>
        <Form onSubmit={this.handleSubmit}></Form> 
        {/* handleSubmit diambil dari form.jsx */}
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
      </div>
    )
  }

}


export default FormMovie