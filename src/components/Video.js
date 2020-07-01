import React from 'react';
import YouTube from 'react-youtube';
 
export default class Video extends React.Component {
  render() {
    const opts = {
      height: '600',
      width: '900',
      playerVars: {
        autoplay: 1,
      },
    };
 
    return <YouTube videoId="ffBeoE6NBSs" opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}