import awsIcon from '@iconify/icons-logos/aws';
import circleciIcon from '@iconify/icons-logos/circleci';
import contentfulIcon from '@iconify/icons-logos/contentful';
import css3 from '@iconify/icons-logos/css-3';
import dockerIcon from '@iconify/icons-logos/docker-icon';
import es6Icon from '@iconify/icons-logos/es6';
import figmaIcon from '@iconify/icons-logos/figma';
import gitIcon from '@iconify/icons-logos/git-icon';
import html5 from '@iconify/icons-logos/html-5';
import javascriptIcon from '@iconify/icons-logos/javascript';
import jestIcon from '@iconify/icons-logos/jest';
import linuxTux from '@iconify/icons-logos/linux-tux';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import pwaIcon from '@iconify/icons-logos/pwa';
import pythonIcon from '@iconify/icons-logos/python';
import reactIcon from '@iconify/icons-logos/react';
import sassIcon from '@iconify/icons-logos/sass';
import trelloIcon from '@iconify/icons-logos/trello';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import visualStudioCode from '@iconify/icons-logos/visual-studio-code';
import yarnIcon from '@iconify/icons-logos/yarn';
import scrumallianceIcon from '@iconify/icons-simple-icons/scrumalliance';
import testinglibraryIcon from '@iconify/icons-simple-icons/testinglibrary';
import fileTypeMongo from '@iconify/icons-vscode-icons/file-type-mongo';
import fileTypeRails from '@iconify/icons-vscode-icons/file-type-rails';
import { Icon } from '@iconify/react';

interface SkillItemComplete {
  technology: string;
  levelConfortable: string;
  icon: JSX.Element;
}

interface SkillItem {
  technology: string;
  icon: JSX.Element;
}

interface SkillList {
  [index: string]: SkillItem[];
}

interface TitleDescriptionItem {
  [index: string]: string;
}

const mySkills: SkillItemComplete[] = [
  // Less Confortable
  {
    technology: 'Jest',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={jestIcon} />,
  },
  {
    technology: 'Testing Library',
    levelConfortable: 'Less Confortable',
    icon: (
      <Icon
        icon={testinglibraryIcon}
        style={{ color: '#fe4646' }} //'radial-gradient(#a10808, #fe4646);'
      />
    ),
  },
  {
    technology: 'Ruby on Rails',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={fileTypeRails} />,
  },
  {
    technology: 'CircleCI',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={circleciIcon} />,
  },
  {
    technology: 'MongoDB',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={fileTypeMongo} />,
  },
  {
    technology: 'PWA',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={pwaIcon} />,
  },
  {
    technology: 'AWS',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={awsIcon} />,
  },
  {
    technology: 'Docker',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={dockerIcon} />,
  },
  {
    technology: 'Scrum',
    levelConfortable: 'Less Confortable',
    icon: <Icon icon={scrumallianceIcon} />,
  },
  // More Confortable
  {
    technology: 'HTML5',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={html5} />,
  },
  {
    technology: 'CSS3',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={css3} />,
  },
  {
    technology: 'JavaScript',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={javascriptIcon} />,
  },
  // {
  //   technology: 'GitHub',
  //   levelConfortable: 'More Confortable',
  //   icon: <Icon icon={githubIcon} />,
  // },
  {
    technology: 'Git',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={gitIcon} />,
  },
  {
    technology: 'Figma',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={figmaIcon} />,
  },
  {
    technology: 'SASS',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={sassIcon} />,
  },
  {
    technology: 'Linux',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={linuxTux} />,
  },
  // {
  //   technology: 'Terminal',
  //   levelConfortable: 'More Confortable',
  //   icon: <Icon icon={terminalIcon} />,
  // },
  {
    technology: 'ReactJS',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={reactIcon} />,
  },
  {
    technology: 'NextJS',
    levelConfortable: 'Confortable',
    icon: <Icon icon={nextjsIcon} />,
  },
  {
    technology: 'VSCode',
    levelConfortable: 'More Confortable',
    icon: <Icon icon={visualStudioCode} />,
  },
  // Confortable
  {
    technology: 'Python',
    levelConfortable: 'Confortable',
    icon: <Icon icon={pythonIcon} />,
  },
  {
    technology: 'Trello',
    levelConfortable: 'Confortable',
    icon: <Icon icon={trelloIcon} />,
  },
  {
    technology: 'Yarn',
    levelConfortable: 'Confortable',
    icon: <Icon icon={yarnIcon} />,
  },
  {
    technology: 'ES6',
    levelConfortable: 'Confortable',
    icon: <Icon icon={es6Icon} />,
  },
  {
    technology: 'TypeScript',
    levelConfortable: 'Confortable',
    icon: <Icon icon={typescriptIcon} />,
  },
  {
    technology: 'PostgreSQL',
    levelConfortable: 'Confortable',
    icon: <Icon icon={postgresqlIcon} />,
  },
  {
    technology: 'NodeJS',
    levelConfortable: 'Confortable',
    icon: <Icon icon={nodejsIcon} />,
  },
  {
    technology: 'Contentful',
    levelConfortable: 'Confortable',
    icon: <Icon icon={contentfulIcon} />,
  },
];

const mySkillsByConfortable = mySkills.reduce(function (acc, cur) {
  if (!Object.prototype.hasOwnProperty.call(acc, cur.levelConfortable)) {
    acc[cur.levelConfortable] = [];
  }
  const newItem: SkillItem = { technology: cur.technology, icon: cur.icon };
  acc[cur.levelConfortable].push(newItem);
  return acc;
}, {} as SkillList);

const titleDescriptions: TitleDescriptionItem = {
  'More Confortable': 'Understood and executed with full confidence',
  Confortable: 'Proficient with room for improvement',
  'Less Confortable': 'Amazing in theory, but still on a learning path',
};

export { mySkills, mySkillsByConfortable, titleDescriptions };
export type { SkillItem };
