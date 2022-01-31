import styles from "./ChangeItemStyles.module.scss";

export const ChangeItem = ({ title, change }) => {
  return (
    <div key={title} className={styles[`${title.toLowerCase()}`]}>
      {title}:&nbsp;
      <span className={change > 0 ? styles.plus : styles.minus}>{change}</span>
    </div>
  );
};
