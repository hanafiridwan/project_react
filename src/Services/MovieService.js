import * as genresAPI from "./GenreMovies"

const movies = [
    {
        _id: "78787878787878",
        title: "Cinta Fitri",
        genre: {_id: "9090909090909", name: "Love"},
        numberInstock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2022-01-03"
    },
    {
        _id: "12121212128",
        title: "One Piece",
        genre: {_id: "88888888888", name: "Anime"},
        numberInstock: 7,
        dailyRentalRate: 4.5,
        publishDate: "2022-03-03"
    },
    {
        _id: "123412341234",
        title: "Naruto",
        genre: {_id: "88888888888", name: "Anime"},
        numberInstock: 8,
        dailyRentalRate: 4.5,
        publishDate: "2022-05-03"
    },
    {
        _id: "876587658765",
        title: "James Bound",
        genre: {_id: "121212232323", name: "Action"},
        numberInstock: 9,
        dailyRentalRate: 8.5,
        publishDate: "2022-01-10"
    },
    {
        _id: "78787878787878",
        title: "Cinta Di Pantai Pasir",
        genre: {_id: "9090909090909", name: "Love"},
        numberInstock: 7,
        dailyRentalRate: 6.5,
        publishDate: "2022-11-03"
    }
];

export function getMovies() {
    return movies; //bertujuan untuk nge get
}

export function getMovies(id){
    return movies.find(m => m._id === id); //find ini berfungsi sebagai grouping / agar saat kita cari genre anime maka yang keluar anime semua. penamaan m ini bebas sesuai kebutuhan. 
}

export function saveMovie(movie){
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId)
    movieInDb.numberInstock = movie.numberInstock
    movieInDb.dailyRentalRate = movie.dailyRentalRate

    if(!movieInDb._id){
        movieInDb._id = Date.now();
        movies.push(movieInDb)
    }

    return movieInDb
}

export function deleteMovie(id){
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1); //ini agar bisa menghapus(splice) data dari belakang (indexOf)
    return movieInDb
}