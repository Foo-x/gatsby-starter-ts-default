import { Link } from 'gatsby';
import * as styles from '~/styles/components/Header.module.css';

export type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header className={styles.header}>
    <div className={styles.headingWrapper}>
      <h1 className={styles.heading}>
        <Link to='/' className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
