// PageTitle.jsx
import styles from '../../assets/scss/PageTitle.module.scss';

export const PageTitle = (props) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.pageTitle}>{props.pagetitle}</h1>
    </div>
  );
};
