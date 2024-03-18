import React, {Component} from 'react'
import Like from './Love/Like';
import Table from './Table/Table';
import { Link } from 'react-router-dom';

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
      { path : 'title', 
        label: 'Title',
        content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
      { path : 'genre.name', label: 'Genre'},
      { path : 'numberInStock', label: 'Stock'},
      { path : 'dailyRentalRate', label: 'Rate'},
      { key: 'Like', 
        content:movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      },
      {key: 'Delete',
        content: movie => (
          <button onClick={() => this.props.onDelete(movie)} className='btn btn-danger btn-sm'>
            Delete
          </button>
        )
      }
    ] //columns ini untuk di tableheader
  render(){
    const {movies, onSort, sortColumn} = this.props;

    return (
      <Table 
        columns={this.columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    )
  }
  
}

{/* tbody disini dipindahkan ke faile TableBody dan disederhanakan */}
{/* <tbody> */}
  {/*{movies.map(movie => (  */}
     {/* //karena diatas sudah di this.state (di line 50), maka langsung movie saja dan hapus this.statenya */}
        {/* // <tr key={movie._id}>
        //     <td>{movie.title}</td>
        //     <td>{movie.genre.name}</td>karena di movieservice nya masuk ke genre, id baru name nya */}
        {/* //     <td>{movie.numberInstock}</td>
        //     <td>{movie.dailyRentalRate}</td>
        //     <td>
        //     <Like liked={movie.liked} onClick={() => onLike(movie)} /> Like ini untuk memanggil file yang sudah diimport, liked untuk men triger functionnya . */}
        {/* //     </td>
        //     <td><button className='btn btn-danger' onClick={() => onDelete(movie)}>Hapus</button></td>
        //     karena tablenya dipindahkan ke file yg berbeda, maka this.handleLike dan Deletenya diganti menjadi onLike dan onDelete */}
        {/* // </tr> */}
    {/* ))} */}
{/* </tbody> */}
export default MoviesTable