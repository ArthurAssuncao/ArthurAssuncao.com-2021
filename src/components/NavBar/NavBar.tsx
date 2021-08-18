import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { MenuHamburguer } from '../MenuHamburguer';
import Logo from './../../assets/images/arthur-logo-so-A.svg';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { className } = props;
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [sideMenuWillDisappear, setSideMenuWillDisappear] = useState(false);

  const scrollOptions = {
    class: styles.active,
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
  };

  const toggleSideMenu = (): void => {
    setSideMenuOpened((prev) => {
      if (prev) {
        setSideMenuWillDisappear(true);
        setTimeout(() => {
          setSideMenuWillDisappear(false);
        }, 1000);
      } else {
        setSideMenuWillDisappear(true);
      }
      return !prev;
    });
  };

  return (
    <nav className={classNames(className, styles.container)}>
      <div className={styles.menuMobileFix}></div>
      <Link href="/" passHref={true}>
        <div className={styles.logoWrapper}>
          <Image
            src={Logo}
            alt="Logo"
            height={60}
            width={41}
            className={styles.logo}
          />

          <span className={styles.logoText}>Assuncao</span>
        </div>
      </Link>

      <div className={styles.menuWrapper}>
        <div
          className={styles.menuIconWrapper}
          onClick={() => toggleSideMenu()}
        >
          <MenuHamburguer className={styles.menuIcon} opened={sideMenuOpened} />
        </div>
        <div
          className={styles.menu}
          data-sidemenuopened={sideMenuOpened}
          data-sidemenuwilldisappear={sideMenuWillDisappear}
        >
          <div
            className={styles.menuOverlay}
            onClick={() => toggleSideMenu()}
          />
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="meet-my-journey"
                data-to="Meet My Journey"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                className={styles.menuItemLink}
              >
                <span className={styles.menuItemLinkText}>Meet My Journey</span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="results"
                data-to="Results"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                className={styles.menuItemLink}
              >
                <span className={styles.menuItemLinkText}>Results</span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="skills"
                data-to="Skills"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                className={styles.menuItemLink}
              >
                <span className={styles.menuItemLinkText}>Skills</span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="courses"
                data-to="Courses"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                className={styles.menuItemLink}
              >
                <span className={styles.menuItemLinkText}>Courses</span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="blog"
                data-to="Blog"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                className={styles.menuItemLink}
              >
                <span className={styles.menuItemLinkText}>Blog</span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="contact"
                data-to="Contact"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                className={styles.menuItemLink}
              >
                <span className={styles.menuItemLinkText}>Contact</span>
              </LinkScroll>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
