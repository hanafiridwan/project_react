import React, {Component} from 'react'
import Like from './Love/Like';

class MoviesTable extends Component { //ubah dari function ke class component
    raiseShort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc"; //asc = ascrending, desc = descrending. ini agar urutan data bisa dimulai dari A - Z(asc), atau sebaliknya Z - A_desc
        }else{
            sortColumn.order = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    }
    // hasilnya sudah terlihat.

  render(){
    const {movies, onLike, onDelete} = this.props;

    return (
      <table className='table'>
          <thead>
              <tr>
                  <th onClick={() => this.raiseShort("title")}>Title</th>
                  <th onClick={() => this.raiseShort("genre.name")}>Genre</th>
                  <th onClick={() => this.raiseShort("numberInstock")}>Stock</th>
                  <th onClick={() => this.raiseShort("dailyRentalRate")}>Rate</th>
                  <th onClick={() => this.raiseShort("")}>Follow</th>
                  <th onClick={() => this.raiseShort("")}>Action</th>
              </tr>
          </thead>
          <tbody>
              {movies.map(movie => ( //karena diatas sudah di this.state (di line 50), maka langsung movie saja dan hapus this.statenya
                  <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>{/* karena di movieservice nya masuk ke genre, id baru name nya */}
                      <td>{movie.numberInstock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                      <Like liked={movie.liked} onClick={() => onLike(movie)} /> {/* Like ini untuk memanggil file yang sudah diimport, liked untuk men triger functionnya . */}
                      </td>
                      <td><button className='btn btn-danger' onClick={() => onDelete(movie)}>Hapus</button></td>
                      {/* karena tablenya dipindahkan ke file yg berbeda, maka this.handleLike dan Deletenya diganti menjadi onLike dan onDelete */}
                  </tr>
              ))}
          </tbody>
      </table>
    )
  }
}

export default MoviesTable