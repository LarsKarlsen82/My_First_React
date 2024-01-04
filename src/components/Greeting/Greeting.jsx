// Greeting.jsx
import styles from './Greeting.module.scss';

export const Greeting = (props) => {
  return (
    <div className={styles.greetingContainer}>
      <p className={styles.greeting}>Hello, {props.name}!</p>
    </div>
  );
};
