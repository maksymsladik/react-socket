import { memo } from "react";

import { ChangeItem } from "../ChangeItem";
import { titlesOfTickers } from "../../../../utils/constants";

import styles from "./ChangesStyles.module.scss";
export const Changes = memo(({ changes }) => {
  return (
    <div className={styles.changes_block}>
      {titlesOfTickers.map((title) => (
        <ChangeItem key={title} title={title} change={changes[title]} />
      ))}
    </div>
  );
});
