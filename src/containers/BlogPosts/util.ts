const siteUrl =
  process.env.NODE_ENV == 'production'
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'http://127.0.0.1:3000';

const generatePostUrl = (slug: string): string => {
  return `/posts/${slug}`;
};

const generatePostUrlComplete = (slug: string): string => {
  return `${siteUrl}/posts/${slug}`;
};

export { generatePostUrl, generatePostUrlComplete };
