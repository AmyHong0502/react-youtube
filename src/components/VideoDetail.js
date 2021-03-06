import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe title='video_player' src={videoSrc} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>VidelDetail: {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <p>channel: {video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
