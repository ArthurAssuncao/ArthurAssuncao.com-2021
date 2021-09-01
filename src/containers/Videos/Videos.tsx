import classNames from 'classnames';
import React from 'react';
import { ButtonSection } from '../../components/ButtonSection';
import { Carousel } from '../../components/Carousel';
import { DescriptionSection } from '../../components/DescriptionSection';
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
      <ButtonSection title="Courses" className={styles.title} />
      <div className={styles.content}>
        <DescriptionSection className={styles.description}>
          I&apos;m changing the world with computing content, mainly web
          development.
        </DescriptionSection>
        <Carousel
          numberItems={numberVideos}
          time={carouselTime}
          className={styles.videosCarousel}
          classNameItemsContainer={styles.videos}
          autoPlay={true}
        >
          {videos.map((item, index) => (
            <Video video={item} key={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export { Videos };
