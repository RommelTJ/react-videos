import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';

class App extends React.Component {

    onSearchTermSubmit = async (searchTerm) => {
        const response = await YouTube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        console.log(response);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
            </div>
        );
    }
}

export default App;
