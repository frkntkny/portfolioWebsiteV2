import React from "react";
import styles from "./Bug.module.css";
import bugImage from "./images/bug.png";

function Bug({ width, height, setVisibleBug }) {
  function showPopUp() {
    alert("ohh! you found a bug in my code. Congrats!");
    setVisibleBug(false);
  }

  return (
    <button
      onClick={() => {
        showPopUp();
      }}
      className={styles.bugButton}
      style={{
        position: "absolute",
        left: `${width}px`,
        top: `${height}px`,
        zIndex: "100",
      }}
    >
      <img className={styles.bugImg} src={bugImage} />
    </button>
  );
}

export default Bug;
