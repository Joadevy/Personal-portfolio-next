import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <input
          type="checkbox"
          id="nav__checkbox"
          className={styles.nav__checkbox}
        />
        <label htmlFor="nav__checkbox" className={styles.nav__toggle}>
          <svg
            className={styles.menu}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="32.000000pt"
            height="32.000000pt"
            viewBox="0 0 32.000000 32.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M20 240 c0 -6 55 -10 145 -10 90 0 145 4 145 10 0 6 -55 10 -145 10
                    -90 0 -145 -4 -145 -10z"
              />
              <path
                d="M10 160 c0 -6 57 -10 150 -10 93 0 150 4 150 10 0 6 -57 10 -150 10
                    -93 0 -150 -4 -150 -10z"
              />
              <path
                d="M10 80 c0 -6 57 -10 150 -10 93 0 150 4 150 10 0 6 -57 10 -150 10
                    -93 0 -150 -4 -150 -10z"
              />
            </g>
          </svg>

          <svg
            className={styles.close}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="32.000000pt"
            height="32.000000pt"
            viewBox="0 0 32.000000 32.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M4 309 c-3 -6 24 -41 62 -80 l68 -69 -69 -70 c-55 -55 -67 -72 -57
                        -82 10 -10 27 2 82 57 l70 69 70 -69 c55 -55 72 -67 82 -57 10 10 -2 27 -57
                        82 l-69 70 69 70 c55 55 67 72 57 82 -10 10 -27 -2 -82 -57 l-70 -69 -68 67
                        c-71 70 -77 74 -88 56z"
              />
            </g>
          </svg>
        </label>

        <ul className={styles.nav__menu}>
          <li>
            <a className={styles.nav__link} href="#welcome-section">
              About
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
