import React from 'react';
import MoviesList from './MovieList';
import SearchBar from "./SearchBar";



class App extends React.Component{

    state = {
         movies: [
            {
                "id": 1,
                "name" : "xeyyam",
                "rating": 8.3,
                "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "imageURL": "https://picsum.photos/id/1/200/300"
            },
            {
                "id": 2,
                "name" : "Elnur",
                "rating": 8.4,
                "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "imageURL": "https://picsum.photos/id/1/200/300"
            },
             {
                 "id": 3,
                 "name" : "Musi",
                 "rating": 8.5,
                 "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                 "imageURL": "https://picsum.photos/id/1/200/300"
             },
             {
                 "id": 4,
                 "name" : "Pervin",
                 "rating": 9.5,
                 "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                 "imageURL": "https://picsum.photos/id/1/200/300"
             }
        ],


            searchQuery: ""
            //    input icin inputun icindeki valueni ozunde saglamaq ucun state objesi


    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        // this.setState({
        //     movies: newMovieList
        // })

         this.setState(state =>({
             movies: newMovieList
         }))
    }


    searchMovie = (event) =>{
        //console.log(event.target.value)
        this.setState({
            searchQuery:event.target.value
        })
    }

    render(){
        let filterdMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                </div>

                <MoviesList
                    movies={filterdMovies}
                    deleteMovieProp = {this.deleteMovie}/>
            </div>
        )
    };

}

export default App;