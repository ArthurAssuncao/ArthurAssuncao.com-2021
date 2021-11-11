import classNames from 'classnames';
import parse from 'html-react-parser';
import styles from './DevToHTMLParser.module.scss';

interface DevToHTMLParserProps {
  className?: string;
  text?: string;
}

const DevToHTMLParser = (props: DevToHTMLParserProps): JSX.Element => {
  const { className, text } = props;

  let textParsed = text ? text : '';
  const textSplited = textParsed.split(/loading="lazy">/);

  for (let i = 0; i < textSplited.length - 1; i++) {
    const result = textSplited[i].match(/alt="(.*)"/);
    if (result) {
      const alt = `Figura ${i + 1}. ${result[1]}`;
      textSplited[i] = textSplited[i].replace('<img', '<figure><img');
      textSplited[i] =
        textSplited[i] +
        `loading="lazy"><figcaption>${alt}</figcaption></figure>`;
    } else {
      textSplited[i] = textSplited[i] + `loading="lazy">`;
    }
  }

  textParsed = textSplited.join('');

  const htmlParsed = parse(textParsed);

  return (
    <div className={classNames(className, styles.container)}>{htmlParsed}</div>
  );
};

export { DevToHTMLParser };
