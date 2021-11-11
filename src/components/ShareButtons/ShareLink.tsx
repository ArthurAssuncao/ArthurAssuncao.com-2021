import Link from 'next/link';
import { ReactNode } from 'react';
import { Share } from './util';

interface ShareLinkProps {
  url: string;
  title: string;
  tags: string[];
  type: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'whastapp';
  children: ReactNode;
  className?: string;
}

const capitalize = (s: string): string => {
  return s[0].toUpperCase() + s.slice(1);
};

const ShareLink = (props: ShareLinkProps): JSX.Element => {
  const { url, title, tags, type, children, className } = props;
  let shareTitle = `Share post "${title}" on ${capitalize(type)}`;
  const shareGenerator = Share(url, title, tags);

  let shareUrl = '';
  if (type === 'facebook') {
    shareUrl = shareGenerator.facebook.generateUrl();
  } else if (type === 'twitter') {
    shareUrl = shareGenerator.twitter.generateUrl();
  } else if (type === 'linkedin') {
    shareUrl = shareGenerator.linkedin.generateUrl();
  } else if (type === 'instagram') {
    shareUrl = shareGenerator.instagram.generateUrl();
  } else if (type === 'whastapp') {
    shareUrl = shareGenerator.whatsapp.generateUrl();
  }

  return (
    <Link href={shareUrl}>
      <a title={shareTitle} className={className}>
        {children}
      </a>
    </Link>
  );
};

export { ShareLink };
