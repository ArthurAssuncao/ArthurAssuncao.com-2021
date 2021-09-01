import React from 'react';
import YouTube, { Options } from 'react-youtube';
import { Video as VideoType } from '../VideosData';
import styles from './Video.module.scss';

interface VideoProps {
  video: VideoType;
}

const VideoComp = (props: VideoProps) => {
  const { video } = props;

  const videoOptions: Options = {
    height: '202',
    width: '360',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={styles.container}>
      <YouTube
        videoId={video.id}
        className={styles.video}
        opts={videoOptions}
      />
      <div className={styles.info}>
        <span className={styles.title}>{video.name}</span>
        <span className={styles.description}>{video.description}</span>
      </div>
    </div>
  );
};

const Video = React.memo(VideoComp);

export { Video };
