import classNames from 'classnames';
import { BlogPostCard } from '../../components/BlogPostCard';
import { ButtonSection } from '../../components/ButtonSection';
import { Carousel } from '../../components/Carousel';
import { DescriptionSection } from '../../components/DescriptionSection';
import { Article } from '../../lib/DevToApi/interfaces';
import { generatePostUrl } from './../../pages/posts/util';
import styles from './BlogPosts.module.scss';

interface BlogPostProps {
  className?: string;
  posts: Array<Article>;
}

const BlogPosts = (props: BlogPostProps): JSX.Element => {
  const { className, posts } = props;
  const numberCards = posts.length;
  const carouselTime = 5000;

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="Posts" className={styles.title} />
      <div className={styles.content}>
        <DescriptionSection className={styles.description}>
          I write about technologies, mainly developing ecosystem.
        </DescriptionSection>
        <Carousel
          numberItems={numberCards}
          time={carouselTime}
          className={styles.blogPostGroup}
          classNameItemsContainer={styles.blogPostCards}
          autoPlay={false}
        >
          {posts.map((post, index) => {
            return (
              <BlogPostCard
                post={post}
                key={index}
                title={post.title}
                description={post.description}
                className={styles.blogPostCard}
                url={generatePostUrl(post.slug)}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export { BlogPosts };
