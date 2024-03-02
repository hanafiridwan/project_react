//ini folder
import React, { Component } from 'react'
// import Like from './Love/Like' sudah tidak digunakan karena sudah ada di MovieTable  
import GroupList from './Filter/GroupList'
import Pagination from './Filter/Pagination'

//ini fungsi
import { getGenres } from '../Services/GenreMovies'
import { paginate } from '../Pagination/Paginate'
import { getMovies } from '../Services/MovieService' 
import MoviesTable from './MoviesTable'
import _ from 'lodash'

class Movies extends Component {
    state = {
        movies: [], //getMovies() ganti jadi array atau [] agar lebih dinamis mengikuti datanya. 
        genres: [],
        currentPage: 1, //lihat pagination.jsx
        pageSize: 4,
        selectedGenre: null,
        sortColumn: {path: "title", order: "asc"}
    }

    componentDidMount(){
      const genres = [{_id: "", name: "All Genres" }, ...getGenres()]

      this.setState({ movies: getMovies(), genres })
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

    handlePageChange = page => {
      this.setState({ currentPage: page })
    }

    handleGenreSelect = (genre) => {
      this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = sortColumn => {
      this.setState({ sortColumn   })
    }

  render() {
    const  count = this.state.movies.length // ini ada berapa movie nya
    const {
      pageSize, 
      currentPage,
      sortColumn, 
      selectedGenre, 
      movies: allMovies} = this.state;
    if(count === 0){
      return <p>Film tidak ada</p>
    }
    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id): allMovies
    console.log(filtered);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const movies = paginate(sorted, currentPage, pageSize)

    return (
      <> 

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <GroupList 
                items={this.state.genres}
                selectedItem={this.state.selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />
            </div>

            <div className="col">
              <p>Data ada {filtered.length} Movies</p>

            <MoviesTable 
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              osShort={this.handleSort}
            />
            {/* panggil paginationnya */}
            <Pagination 
                itemCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
            /> 
            </div>
          </div>
        </div>
        {/* ini adalah fragmen yang membungkus elemen, bertujuan agar bisa mengatasi aturan dari react yang membatasi 1 elemen saja. Contohnya jika kita membuat eleman <p></p> maka kita tidak bisa membuat elemen p lagi karena sudah terpakai maka harus dibungkus dengan fragmen. */}
      </>
    )
  }
}

export default Movies

// kalau dibedah kenapa bisa terpanggil itu karena kita get dengan membuat sebuah state yang didalamnya ada Movies = getMovies() yang diambil dari function MovieService.js.
//Lalu kita panggil statenya dan di mapping, lalu tambahkan primari key={movie._id} agar ada urutannya, sisanya tinggal dipanggil sesuai dengan di MovieService nya seperti tit;e, genre, dst.