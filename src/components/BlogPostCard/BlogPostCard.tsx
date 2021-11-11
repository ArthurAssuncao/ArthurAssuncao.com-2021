import linkOut from '@iconify/icons-akar-icons/link-out';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../lib/DevToApi/interfaces';
import styles from './BlogPostCard.module.scss';

interface BlogPostCardProps {
  className?: string;
  post: Article;
  title: string;
  description: string;
  url: string;
}

const BlogPostCard = (props: BlogPostCardProps): JSX.Element => {
  const { className, post, url } = props;

  const Post = (item: Article): JSX.Element => {
    return (
      <div className={styles.item} key={item.id} aria-label={item.title}>
        <div className={styles.overlay}>
          <Link href={url}>
            <a>
              <div className={styles.icon}>
                <Icon icon={linkOut} />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src={item.cover_image ? item.cover_image : item.social_image}
            alt="Post cover image"
            height={140}
            width={320}
            layout="responsive"
            // objectFit="contain"
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.infoInner}>
            <span className={styles.tag}>{item.tag_list[0]}</span>
            <span className={styles.readingTime}>
              {item.reading_time_minutes}
            </span>
            <span className={styles.date}>{item.readable_publish_date}</span>
          </div>
        </div>
        <div className={styles.titleDescription}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.description}>{item.description}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames(className, styles.container)}>
      <Post {...post} />
    </div>
  );
};

export { BlogPostCard };
