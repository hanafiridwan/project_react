// export const genres = [
//     {_id: "88888888888", name: "Anime"},
//     {_id: "9090909090909", name: "Love"},
//     {_id: "121212232323", name: "Action"}
// ]

// export function getGenres(){
//     return genres.filter(g => g)
// }

import http from './HTTPService'

const getGenres = () => {
    return http.get("http://localhost:3900/api/genres")
}

export default getGenres;