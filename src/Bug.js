import React from "react";
import styles from "./Bug.module.css";
import bugImage from "./images/bug.png";

function Bug({
  width,
  height,
  setVisibleBug,
  setBugFoundCount,
  bugFoundCount,
}) {
  function showPopUp() {
    alert("ohh! you found a bug in my code. Congrats!");
    updateData();
    setVisibleBug(false);
  }

  function updateData() {
    const newNumber = { bugCount: bugFoundCount + 1 };
    setBugFoundCount(newNumber.bugCount);
    console.log(newNumber.count);
    fetch(
      "https://portfoliowebsite-98670-default-rtdb.firebaseio.com/count.json",
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: JSON.stringify({
          bugCount: newNumber.bugCount,
        }),
      }
    );
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
