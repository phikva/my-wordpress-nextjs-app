import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url, width, height, alt }) {
  return (
      <ReactPlayer
        url={url}
        alt={alt}
        controls={false}
        width={width}
        height={height}
        playing={true} // Use the playing prop for autoplay
        muted={true}   // Add the muted attribute for autoplay
        loop={true}
      />
  );
}

export default VideoPlayer;
