// import * as genresAPI from "./GenreMovies"

// const movies = [
//     {
//         _id: "787878787187871",
//         title: "Cinta Fitri",
//         genre: {_id: "9090909090909", name: "Love"},
//         numberInstock: 6,
//         dailyRentalRate: 2.5,
//         publishDate: "2022-01-03"
//     },
//     {
//         _id: "12121212121",
//         title: "One Piece",
//         genre: {_id: "88888888888", name: "Anime"},
//         numberInstock: 7,
//         dailyRentalRate: 4.5,
//         publishDate: "2022-03-03"
//     },
//     {
//         _id: "12121212128",
//         title: "Naruto",
//         genre: {_id: "88888888888", name: "Anime"},
//         numberInstock: 8,
//         dailyRentalRate: 4.5,
//         publishDate: "2022-05-03"
//     },
//     {
//         _id: "8765870658765",
//         title: "James Bound",
//         genre: {_id: "121212232323", name: "Action"},
//         numberInstock: 9,
//         dailyRentalRate: 8.5,
//         publishDate: "2022-01-10"
//     },
//     {
//         _id: "787878787187878",
//         title: "Cinta Di Pantai Pasir",
//         genre: {_id: "9090909090909", name: "Love"},
//         numberInstock: 7,
//         dailyRentalRate: 6.5,
//         publishDate: "2022-11-03"
//     },
//     {
//         _id: "8765870658763",
//         title: "Godzilla",
//         genre: {_id: "121212232323", name: "Action"},
//         numberInstock: 7,
//         dailyRentalRate: 9.5,
//         publishDate: "2021-01-13"
//     },
//     {
//         _id: "8765870658764",
//         title: "Resident Evil",
//         genre: {_id: "121212232323", name: "Action"},
//         numberInstock: 6,
//         dailyRentalRate: 9.5,
//         publishDate: "2021-01-13"
//     },
//     {
//         _id: "3847834787",
//         title: "Habiebie dan Ainun",
//         genre: {_id: "9090909090909", name: "Love"},
//         numberInstock: 7,
//         dailyRentalRate: 9.5,
//         publishDate: "2012-11-03"
//     },
//     {
//         _id: "12121212122",
//         title: "Tensei Shitara Slime Datta",
//         genre: {_id: "88888888888", name: "Anime"},
//         numberInstock: 8,
//         dailyRentalRate: 8.5,
//         publishDate: "2020-05-03"
//     },
//     {
//         _id: "12121212123",
//         title: "Boruto",
//         genre: {_id: "88888888888", name: "Anime"},
//         numberInstock: 8,
//         dailyRentalRate: 6.5,
//         publishDate: "2022-05-22"
//     }
// ];

// export function getMovies() {
//     return movies; //bertujuan untuk nge get
// }

// export function getMovie(id){
//     return movies.find(m => m._id === id); //find ini berfungsi sebagai grouping / agar saat kita cari genre anime maka yang keluar anime semua. penamaan m ini bebas sesuai kebutuhan. 
// }

// export function saveMovie(movie){
//     // Mencari film yang sesuai berdasarkan ID atau membuat objek kosong jika tidak ditemukan
//     let movieInDb = movies.find(m => m._id === movie._id) || {};
//     // Mengisi atau memperbarui properti film berdasarkan data yang diterima
//     movieInDb.name = movie.name;
//     movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId)
//     movieInDb.numberInstock = movie.numberInstock
//     movieInDb.dailyRentalRate = movie.dailyRentalRate

//      // Jika film belum memiliki ID, maka menetapkan ID baru dan menambahkannya ke array movies
//     if(!movieInDb._id){
//         movieInDb._id = Date.now();
//         movies.push(movieInDb)
//     }

//     return movieInDb
// }

// export function deleteMovie(id){
//     let movieInDb = movies.find(m => m._id === id);
//     movies.splice(movies.indexOf(movieInDb), 1); //ini agar bisa menghapus(splice) data dari belakang (indexOf)
//     return movieInDb
// }

import http from './HTTPService'

const apiEndpoint = 'http://localhost:3900/api/movies';

function movieUrl(id){
    return `${apiEndpoint}/${id}`
}

export function getMovies(){
    return http.get(apiEndpoint)
}

export function getMovie(movieId){
    return http.get(movieUrl(movieId))
}

export function saveMovie(movie){
    if(movie._id){
        const body = {...movie}
        delete body._id;
        return http.put(movieUrl(movie._id), body)
    }
    return http.post(apiEndpoint, movie)
}

export function deleteMovie(movieId){
    return http.delete(movieUrl(movieId))
} //lalu ke movie.jsx nah nanti hasilnya deletenya berfungsi kalau mau sampai data di databasenya juga ke hapus liat juga di movie.jsx bagian handledelete.