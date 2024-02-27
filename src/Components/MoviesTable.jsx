import React from 'react'
import Like from './Love/Like';

const MoviesTable = (props) => {
    const {movies, onLike, onDelete} = props;
  return (
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

export default MoviesTable