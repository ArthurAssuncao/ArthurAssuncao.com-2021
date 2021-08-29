import classNames from 'classnames';
import React from 'react';
import { ButtonSection } from '../../components/ButtonSection';
import { Carousel } from '../../components/Carousel';
import { Video } from './Video';
import styles from './Videos.module.scss';
import videos from './VideosData';

interface VideosProps {
  className?: string;
}

const Videos = (props: VideosProps): JSX.Element => {
  const { className } = props;
  const numberVideos = videos.length;
  const carouselTime = 5000;

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="Cursos" className={styles.title} />
      <Carousel
        numberItems={numberVideos}
        time={carouselTime}
        className={styles.videosCarousel}
        classNameItemsContainer={styles.videos}
      >
        {videos.map((item, index) => (
          <Video video={item} key={index} />
        ))}
      </Carousel>
    </section>
  );
};

export { Videos };
