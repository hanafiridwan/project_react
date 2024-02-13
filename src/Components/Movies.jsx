import React, { Component } from 'react'
import Like from './Love/Like'
import { getMovies } from '../Services/MovieService'

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
      const movies = this.state.movies.filter(m => m._id !== movie._id)
      this.setState({movies})
    }

    handleLike = (movie) => {
      // console.log("ini sudah di like", movie)
      const movies = [...this.state.movies]; //kita buat variabel untuk mengambil state di atas
      const index = movies.indexOf(movie); //lalu kita buat variabel index, kita panggil movies nya dan tambahkan indexOf(movie) supaya bisa men triger movieservice nya
      movies[index] = {...movies[index]} //kita panggil movies dan indexnya dan kita separate/...
      movies[index].liked = !movies[index].liked //kita panggil likenya dan kita isi: !movies[] dibaca jika movie belum disentuh maka buat putih like nya. !movies[index].liked dibaca jika movie sudah di baca maka tolong di liked atau buat jadi hitam hati nya
      this.setState({movies})
    }

  render() {
    return (
      <> 
        {/* ini adalah fragmen yang membungkus elemen, bertujuan agar bisa mengatasi aturan dari react yang membatasi 1 elemen saja. Contohnya jika kita membuat eleman <p></p> maka kita tidak bisa membuat elemen p lagi karena sudah terpakai maka harus dibungkus dengan fragmen. */}
        <p>Tampil Data</p>
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rating</th>
                    <th>Follow</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>{/* karena di movieservice nya masuk ke genre, id baru name nya */}
                        <td>{movie.numberInstock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                          <Like liked={movie.liked} onClick={() => this.handleLike(movie)} /> {/* Like ini untuk memanggil file yang sudah diimport, liked untuk men triger functionnya . */}
                        </td>
                        <td><button className='btn btn-danger' onClick={() => this.handleDelete(movie)}>Hapus</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    )
  }
}

export default Movies

// kalau dibedah kenapa bisa terpanggil itu karena kita get dengan membuat sebuah state yang didalamnya ada Movies = getMovies() yang diambil dari function MovieService.js.
//Lalu kita panggil statenya dan di mapping, lalu tambahkan primari key={movie._id} agar ada urutannya, sisanya tinggal dipanggil sesuai dengan di MovieService nya seperti tit;e, genre, dst.