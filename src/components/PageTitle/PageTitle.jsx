// PageTitle.jsx
import styles from './PageTitle.module.scss';

export const PageTitle = (props) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.pageTitle}>{props.pagetitle}</h1>
    </div>
  );
};
