import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';
import VideoList from './VideoList';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onSearchTermSubmit = async (searchTerm) => {
        const response = await YouTube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
