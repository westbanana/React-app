import React from 'react';
import smoke from './FreeSmokeYoutube.mp4';
import './FooterStyles.css';

const ShowVideo = () => (
  <div>
    <video autoPlay loop muted className="video_smoke">
      <source src={smoke} type="video/mp4" />
    </video>
  </div>
);

export default ShowVideo;
