import { GetStaticPropsResult } from 'next';
import { Home } from '../containers/Home';
import { DevTo } from '../lib/DevToApi';
import { Article } from '../lib/DevToApi/interfaces';

const devToApiKey = process.env.DEV_TO_API_KEY;
const devToUsername = process.env.DEV_TO_USERNAME;

interface InitialPageProps {
  data: {
    posts: Array<Article>;
  };
}

const InitialPage = (props: InitialPageProps): JSX.Element => {
  const { data } = props;
  const { posts } = data;
  return <Home posts={posts} />;
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<InitialPageProps>
> {
  const devToApi = DevTo(devToApiKey, devToUsername);
  const posts: Array<Article> = await devToApi.articles();

  const props: { props: InitialPageProps } = {
    props: {
      data: {
        posts: posts,
      },
    },
  };

  return props;
}

export default InitialPage;
