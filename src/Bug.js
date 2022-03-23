import React from "react";
import styles from "./Bug.module.css";

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
      <img className={styles.bugImg} src={process.env.PUBLIC_URL + "bug.png"} />
    </button>
  );
}

export default Bug;
