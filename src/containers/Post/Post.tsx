import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import nextId from 'react-id-generator';
import { DevToHTMLParser } from '../../components/DevToHTMLParser';
import { ShareButtons } from '../../components/ShareButtons';
import { generatePostUrlComplete } from '../../containers/BlogPosts';
import { PageTemplate } from '../../containers/PageTemplate';
import { Article } from '../../lib/DevToApi';
import styles from './Post.module.scss';

interface PostProps {
  post: Article;
  meta: { title: string; description: string };
}

const Post = (props: PostProps): JSX.Element => {
  const { post, meta } = props;
  const postImageUrl = post.cover_image;
  const publishDate = post.readable_publish_date;
  const textHtml = post.body_html;
  const minutesToRead = post.reading_time_minutes;

  const [onScroll, setOnScroll] = useState(false);

  let shareButtonRef = useRef<HTMLDivElement | null>(null);

  const textWithDevToReference = (textHtml: string): string => {
    return `${textHtml}<p>Este texto também pode ser lido no <a href="${post.url}">Dev.to</a>.</p>`;
  };

  const fixNameLastName = (name: string) => {
    const nameSplitted = name.split(' ');
    return `${nameSplitted[0]} ${nameSplitted[nameSplitted.length - 1]}`;
  };

  useEffect(() => {
    const setOnScrollCheck = (value: boolean) => {
      if (
        value !== onScroll ||
        value !== Boolean(shareButtonRef.current?.dataset.onscroll)
      ) {
        setOnScroll(value);
      }
    };

    const checkScrollTop = () => {
      const heightBase = 60 * 1.5;
      const limitHeight = heightBase;

      if (window.pageYOffset > limitHeight) {
        setOnScrollCheck(true);
      } else {
        setOnScrollCheck(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [onScroll]);

  // const fullnameToNameSecondName = (name: string): string => {
  //   const arrayName = name.split(' ');
  //   const newName =
  //     arrayName.length > 1
  //       ? `${arrayName[0]} ${arrayName[arrayName.length - 1]}`
  //       : arrayName[0];
  //   return newName;
  // };

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <main className={styles.container}>
        <article className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={postImageUrl}
              alt={post.title}
              height={420}
              width={960}
              layout="responsive"
              // objectFit="contain"
              className={styles.image}
            />
          </div>
          <div className={styles.contentWrapper}>
            <header className={styles.header}>
              <div className={styles.imageTypeWrapper}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={postImageUrl}
                    alt={post.title}
                    height={420}
                    width={960}
                    layout="responsive"
                    // objectFit="contain"
                    className={styles.image}
                  />
                </div>
                <div className={styles.type}>
                  <ul
                    className={styles.typeList}
                    data-active={post.tags.length > 1}
                  >
                    {post.tags.map((item) => {
                      return (
                        <li className={styles.typeItem} key={nextId()}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.info}>
                <div className={styles.infoPublishDate}>
                  <span>{publishDate}</span>
                </div>
                <span className={styles.infoSeparator}>&#9679;</span>
                <div className={styles.infoReadingTime}>
                  <span>{minutesToRead}min para ler</span>
                </div>
                <span className={styles.infoSeparator}>&#9679;</span>
                <div className={styles.infoAuthor}>
                  <Link
                    href={
                      post.user.github_username
                        ? `https://github.com/${post.user.github_username}`
                        : `https://dev.to/${post.user.username}`
                    }
                  >
                    <a>{fixNameLastName(post.user.name)}</a>
                  </Link>
                </div>
              </div>
            </header>

            <div className={styles.body}>
              <DevToHTMLParser
                text={textHtml && textWithDevToReference(textHtml)}
              ></DevToHTMLParser>
            </div>
            <footer></footer>
          </div>
        </article>
      </main>
      <div
        className={styles.shareButton}
        data-onscroll={onScroll}
        ref={shareButtonRef}
      >
        <ShareButtons
          url={
            typeof window !== 'undefined'
              ? window.location.href
              : generatePostUrlComplete(post.slug)
          }
          title={post.title}
          tags={post.tags}
          widthCSSVar={'--share-size'}
        />
      </div>
    </PageTemplate>
  );
};

export { Post };
