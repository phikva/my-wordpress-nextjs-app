import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url, width, height, alt }) {
  return (
    <div style={{ position: 'relative', width, height }}>
      <ReactPlayer
        url={url}
        alt={alt}
        controls={false}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        loop={true}
      />
    </div>
  );
}

export default VideoPlayer;
