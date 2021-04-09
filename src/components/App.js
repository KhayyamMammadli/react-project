import React from 'react';
import MoviesList from './MovieList';
import SearchBar from "./SearchBar";



class App extends React.Component{

    state = {
         movies: [
            {
                "id": 1,
                "name" : "The Flash",
                "rating": 8.3,
                "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "imageURL": "https://picsum.photos/id/1/200/300"
            },
            {
                "id": 2,
                "name" : "The Flash 2",
                "rating": 8.4,
                "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                "imageURL": "https://picsum.photos/id/1/200/300"
            },
             {
                 "id": 3,
                 "name" : "The Flash 3",
                 "rating": 8.5,
                 "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                 "imageURL": "https://picsum.photos/id/1/200/300"
             },
             {
                 "id": 4,
                 "name" : "The Flash 4",
                 "rating": 9.5,
                 "overview": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                 "imageURL": "https://picsum.photos/id/1/200/300"
             },
        ]
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

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>
                </div>

                <MoviesList
                    movies={this.state.movies}
                    deleteMovieProp = {this.deleteMovie}/>
            </div>
        )
    };

}

export default App;