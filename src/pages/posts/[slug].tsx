import { GetStaticPaths, GetStaticPropsResult } from 'next';
import ErrorPage from 'next/error';
import { Article, DevTo } from '../../lib/DevToApi';
import { Post } from './Post';

const devToApiKey = process.env.DEV_TO_API_KEY;
const devToUsername = process.env.DEV_TO_USERNAME;

interface PostPageProps {
  meta?: {
    title: string;
    description: string;
  };
  data?: Article;
  type?: string;
}

const PostPageSlug = (props: PostPageProps): JSX.Element => {
  if (
    !props ||
    props === undefined ||
    Object.keys(props).length === 0 ||
    !props.meta ||
    !props.data
  ) {
    return <ErrorPage statusCode={404} />;
  }

  const { meta, data } = props;
  const post = data;

  return <Post post={post} meta={meta} />;
};

export default PostPageSlug;

type Params = {
  params: {
    slug: string | string[];
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const devToApi = DevTo(devToApiKey, devToUsername);
  const posts: Array<Article> = await devToApi.articles();

  const paths = posts.map((post: Article) => {
    const params: Params = { params: { slug: post.slug } };
    return params;
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<PostPageProps>> {
  const devToApi = DevTo(devToApiKey, devToUsername);

  const { slug } = params;

  const posts: Array<Article> = await devToApi.articles();

  const post = posts.filter((post) => {
    return post.slug == slug;
  })[0];

  const postData: Article | null = await devToApi.article(post.id);

  if (!post || post === undefined) {
    return { props: {} };
  }

  return {
    props: {
      meta: {
        title: `${postData.title} | ArthurAssuncao`,
        description: `${postData.description} | ArthurAssuncao`,
      },
      data: postData,
      type: 'single',
    },
  };
}
