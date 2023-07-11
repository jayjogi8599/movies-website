import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3" 

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzU2YmFmNmVlNzg4YjEyM2Y0NjAwYzU4NTk5MjU2MCIsInN1YiI6IjY0NmM1N2MwYTUwNDZlMDE2ODM4NTMxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sXZyx8ncpIoonzPVBB5vzO7VNmOnbKTaGNrGOhcSv1c";

const headers ={
    Authorization:"bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi= async(url,params)=>{
    try {
        const {data}=await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}