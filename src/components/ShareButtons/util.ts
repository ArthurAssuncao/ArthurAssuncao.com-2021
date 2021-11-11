// https://gist.github.com/HoldOffHunger/1998b92acb80bc83547baeaff68aaaf4

interface ShareUrl {
  [index: string]: { generateUrl: () => string };
}

const Share = (
  url: string,
  title: string,
  hash_tags: Array<string>
): ShareUrl => {
  url = encodeURI(url);
  title = encodeURI(title);
  const hash_tagsString = encodeURI(Array.from(hash_tags).join(''));
  return {
    facebook: {
      generateUrl: (): string => `https://www.facebook.com/sharer.php?u=${url}`,
    },
    twitter: {
      generateUrl: (): string =>
        `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hash_tagsString}`,
    },
    linkedin: {
      generateUrl: (): string =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    },
    instagram: {
      generateUrl: (): string => `https://instagram.com`,
    },
    whatsapp: {
      generateUrl: (): string => `https://web.whatsapp.com`,
    },
  };
};

export { Share };
