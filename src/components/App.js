import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
                <div className="ui grid">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default App;
