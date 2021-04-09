import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchQuery: ""
        //    input icin inputun icindeki valueni ozunde saglamaq ucun state objesi
    }

    handleFormSubmit = (event) =>{
        //formun submit edildiyde ozunun ozune gore update etmesin durdurmaq
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="from-row mb-3">
                    <div className="col-12">
                        <input
                            onChange={(event) => this.setState({searchQuery: event.target.value}) }
                            type="text" className="form-control"
                            placeholder="Search a movie"
                            value={this.state.searchQuery}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;