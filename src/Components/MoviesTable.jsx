import React, {Component} from 'react'
import Like from './Love/Like';
import TableHeader from './Table/TableHeader';

class MoviesTable extends Component { //ubah dari function ke class component
    // raiseShort = path => {
    //     const sortColumn = {...this.props.sortColumn};
    //     if(sortColumn.path === path){
    //         sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc"; //asc = ascrending, desc = descrending. ini agar urutan data bisa dimulai dari A - Z(asc), atau sebaliknya Z - A_desc
    //     }else{
    //         sortColumn.order = path;
    //         sortColumn.order = "asc";
    //     }
    //     this.props.onSort(sortColumn);
    // }
    // hasilnya sudah terlihat.

    columns = [
      {path : 'title', label: 'Title'},
      {path : 'genre.name', label: 'Genre'},
      {path : 'numberInStock', label: 'Stock'},
      {path : 'dailyRentalRate', label: 'Rate'},
      {key: 'Like'},
      {key: 'Delete'}
    ] //columns ini untuk di tableheader
  render(){
    const {movies, onLike, onDelete, onSort, sortColumn} = this.props;

    return (
      <table className='table'>
         {/* pindahkan table head nya ke tableheader */}
          <TableHeader 
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
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