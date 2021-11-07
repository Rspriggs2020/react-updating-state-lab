import React from 'react';

class YoutubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }}

    bitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {bitrate: 12})
        })
    }

    resolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })
    }
 
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrate}></button>
                <button className="resolution" onClick={this.resolution}></button>
            </div>
        )

    }
}

export default YoutubeDebugger;
