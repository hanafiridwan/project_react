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
import { Form } from '../Components/Table/Form'
import Joi from 'joi'
import  getGenres  from "../Services/GenreMovies";
import { deleteMovie, getMovie, saveMovies } from '../Services/MovieService' 

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
    error: {} //error ini fungsinya untuk nge lock(butuh gak butuh)
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

  async populateMovie(){
    try{
      const movieId = this.props.match.params.id;
      if(movieId === "new") return;

      const {data: movie} = await getMovie(movieId);
      this.setState({data: this.mapToViewModel(movie)});
    }catch (error){ //kata error ini bisa diganti
      if(error.response && error.response.status === 404){
        this.props.history.replace("/not-found")
      }
    }
  }

  async componentDidMount(){
    await this.populateGenres(); //bukan this.getGenres
    await this.populateMovie();
  }

  mapToViewModel(model) {
    return {
      _id: movie._id,
      title: movie.title,
      genre: movie.genre._id, //menyesuaikan id di genrenya (lihat backend nya)
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }

  //kita buat submit and kirim (bisa dalam satu)
  doSubmit = async () => {
    await saveMovies(this.state.data) //saveMovies dari import diatas
  }

  render() {
    return(
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSebmit}></form> 
        {/* handleSubmit diambil dari form.jsx */}
      </div>
    )
  }

}


export default FormMovie