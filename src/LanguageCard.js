import React from "react";
import styles from "./LanguageCard.module.css";

function LanguageCard({ classOfIcon }) {
  return (
    <div className={styles.LanguageCardDiv}>
      <i className={classOfIcon}></i>
    </div>
  );
}

export default LanguageCard;
