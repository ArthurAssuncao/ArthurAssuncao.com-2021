import bxlFacebook from '@iconify/icons-bx/bxl-facebook';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';
import bxlLinkedin from '@iconify/icons-bx/bxl-linkedin';
import bxlTwitter from '@iconify/icons-bx/bxl-twitter';
import bxlWhatsapp from '@iconify/icons-bx/bxl-whatsapp';
import shareSolid from '@iconify/icons-clarity/share-solid';
import { Icon } from '@iconify/react';
import { CSSProperties, useState } from 'react';
import styles from './ShareButtons.module.scss';
import { ShareLink } from './ShareLink';

interface ShareButtonsProps {
  url: string;
  title: string;
  tags?: string[];
  widthCSSVar: string;
}

const ShareButtons = (props: ShareButtonsProps): JSX.Element => {
  const { url, title, widthCSSVar } = props;
  const tags = props.tags ? props.tags : [''];
  const [isOpen, setIsOpen] = useState(false);

  const shareButtonStyle = {
    '--share-button-size': `var(${widthCSSVar}, 4rem)`,
  } as CSSProperties;

  const openButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} style={shareButtonStyle}>
      <button className={styles.shareIconWrapper} onClick={() => openButtons()}>
        <Icon icon={shareSolid} className={styles.shareIcon} />
      </button>
      <ul className={styles.shareList} data-open={isOpen}>
        <li className={styles.shareItem}>
          <ShareLink
            url={url}
            title={title}
            tags={tags}
            type="whastapp"
            className={styles.shareItemLink}
          >
            <Icon icon={bxlWhatsapp} className={styles.shareItemIcon} />
          </ShareLink>
        </li>
        <li className={styles.shareItem}>
          <ShareLink
            url={url}
            title={title}
            tags={tags}
            type="instagram"
            className={styles.shareItemLink}
          >
            <Icon icon={bxlInstagram} className={styles.shareItemIcon} />
          </ShareLink>
        </li>
        <li className={styles.shareItem}>
          <ShareLink
            url={url}
            title={title}
            tags={tags}
            type="twitter"
            className={styles.shareItemLink}
          >
            <Icon icon={bxlTwitter} className={styles.shareItemIcon} />
          </ShareLink>
        </li>
        <li className={styles.shareItem}>
          <ShareLink
            url={url}
            title={title}
            tags={tags}
            type="facebook"
            className={styles.shareItemLink}
          >
            <Icon icon={bxlFacebook} className={styles.shareItemIcon} />
          </ShareLink>
        </li>
        <li className={styles.shareItem}>
          <ShareLink
            url={url}
            title={title}
            tags={tags}
            type="linkedin"
            className={styles.shareItemLink}
          >
            <Icon icon={bxlLinkedin} className={styles.shareItemIcon} />
          </ShareLink>
        </li>
      </ul>
    </div>
  );
};

export { ShareButtons };
