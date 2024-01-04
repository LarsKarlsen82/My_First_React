// ListComponent.jsx
import { ListItem } from './ListItem'; // Assuming ListItem is a named export
import styles from './ListItem.module.scss';

export const ListComponent = (props) => {
  return (
    <div className={styles.listContainer}>
      <h2>{props.title}</h2>
      <ul>
        {props.listItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
