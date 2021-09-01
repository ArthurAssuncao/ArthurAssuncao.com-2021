import bxAtom from '@iconify/icons-bx/bx-atom';
import bxLinkExternal from '@iconify/icons-bx/bx-link-external';
import bxlGithub from '@iconify/icons-bx/bxl-github';
import educationIcon from '@iconify/icons-cil/education';
import baselineScience from '@iconify/icons-ic/baseline-science';
import baselineWork from '@iconify/icons-ic/baseline-work';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import parse from 'html-react-parser';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import nextId from 'react-id-generator';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ButtonSection } from '../../components/ButtonSection';
import styles from './MyJourney.module.scss';
import myTimeline from './TimelineData';

interface MyJourneyProps {
  className?: string;
}

interface FilterObject {
  [key: string]: boolean;
}

interface FilterType {
  name: string;
  data: FilterObject;
}

const MyJourney = (props: MyJourneyProps): JSX.Element => {
  const { className } = props;
  const [filter, setFilter] = useState<FilterType>({
    name: 'filter',
    data: {},
  });

  const defineIcon = (type: string) => {
    if (type == 'education') {
      return <Icon className={styles.timelineItemIcon} icon={educationIcon} />;
    }
    if (type == 'work') {
      return <Icon className={styles.timelineItemIcon} icon={baselineWork} />;
    }
    if (type == 'project') {
      return <Icon className={styles.timelineItemIcon} icon={bxlGithub} />;
    }
    if (type == 'science') {
      return (
        <Icon className={styles.timelineItemIcon} icon={baselineScience} />
      );
    }
    return <Icon className={styles.timelineItemIcon} icon={bxAtom} />;
  };

  const types = myTimeline
    .map((item) => {
      return item.type;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    .sort();

  const filterToggle = (type: string) => {
    if (types.includes(type)) {
      filter.data[type] = !filter.data[type];
      setFilter((f) => ({ ...f, data: filter.data }));
    }
  };

  const FilterItens = types.map((item, index) => {
    return (
      <li
        key={index}
        className={styles.timelineFilterListItem}
        data-active={filter && filter.data[item]}
        onClick={() => filterToggle(item)}
      >
        <span className={styles.timelineFilterIcon}>{defineIcon(item)}</span>
        <span className={styles.timelineFilterText}>{item}</span>
      </li>
    );
  });

  const TimelineItens = myTimeline.map((item) => {
    if (!filter.data[item.type]) {
      return <></>;
    }
    return (
      <VerticalTimelineElement
        className={classNames(
          'vertical-timeline-element--work',
          styles.timelineItem
        )}
        icon={defineIcon(item.type)}
        key={nextId()}
        textClassName={styles.timelineContainer}
        dateClassName={styles.timelineItemDate}
      >
        <div
          className={styles.timelineItemTitleWrapper}
          data-has-link={!!item.link}
        >
          <h3
            className={classNames(
              'vertical-timeline-element-title',
              styles.timelineItemTitle
            )}
          >
            {item.title}
          </h3>
          {item.link && (
            <Link href="" passHref={true}>
              <a className={styles.timelineItemLink}>
                <span className={styles.timelineItemLinkIcon}>
                  <Icon icon={bxLinkExternal} />
                </span>
              </a>
            </Link>
          )}
        </div>
        <h4
          className={classNames(
            'vertical-timeline-element-subtitle',
            styles.timelineItemSubtitle
          )}
        >
          <span className={styles.timelineItemSubtitleText}>
            {item.subtitle}
          </span>

          <span className={styles.timelineItemSubtitleDate}>{item.date}</span>
        </h4>
        <p className={styles.timelineItemDescription}>
          {parse(item.description)}
        </p>
      </VerticalTimelineElement>
    );
  });

  useEffect(() => {
    const types = myTimeline
      .map((item) => {
        return item.type;
      })
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
      .sort();

    const initFilter: FilterObject = types.reduce<FilterObject>(function (
      result,
      item
    ) {
      result[item] = true;
      return result;
    },
    {});

    setFilter((f) => ({ ...f, data: initFilter }));
  }, [filter.name]);

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="Meet My Journey" className={styles.title} />
      <div className={styles.containerInner}>
        <ul className={styles.timelineFilterList}>{FilterItens}</ul>
        {Object.values(filter.data).includes(true) && (
          <VerticalTimeline className={styles.timeline}>
            {TimelineItens}
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export { MyJourney };
