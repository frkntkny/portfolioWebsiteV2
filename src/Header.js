import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Bug from "./Bug";
import LanguageCard from "./LanguageCard";
import profileImage from "./images/profile-photo.png";

const rHeightNumber = Math.floor(Math.random() * window.innerHeight);
const rWidthNumber = Math.floor(Math.random() * window.innerWidth);

const Header = () => {
  const [visibileBug, setVisibleBug] = useState(true);
  const [visitedCount, setVisitedCount] = useState();

  useEffect(() => {
    fetch(
      "https://portfoliowebsite-98670-default-rtdb.firebaseio.com/count.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const newNumber = { count: data.count + 1 };
        setVisitedCount(newNumber.count);
        console.log(newNumber.count);
        fetch(
          "https://portfoliowebsite-98670-default-rtdb.firebaseio.com/count.json",
          {
            method: "PATCH",
            headers: {
              "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: JSON.stringify({
              count: newNumber.count,
            }),
          }
        );
      });
  }, []);

  function smoothScroll() {
    const wHeight = window.innerHeight;
    console.log(wHeight);
    window.scrollBy(0, wHeight);
  }

  return (
    <div className={styles.topHeader}>
      {visibileBug && (
        <Bug
          width={rHeightNumber}
          height={rWidthNumber}
          setVisibleBug={setVisibleBug}
        />
      )}

      <div className={styles.textContent}>
        <p>
          Hello,I'm <br /> Furkan Tekinay
        </p>
      </div>
      <div className={styles.textDescription}>
        <p>I'm Web & Mobil App Developer.</p>
        <p>
          <LanguageCard classOfIcon="fa-brands fa-react" />
          <LanguageCard classOfIcon="fa-brands fa-node" />
          <LanguageCard classOfIcon="fa-brands fa-html5" />
          <LanguageCard classOfIcon="fa-brands fa-css3" />
          <LanguageCard classOfIcon="fa-brands fa-js" />
          <LanguageCard classOfIcon="fa-solid fa-database" />
          Flutter & Dart
        </p>
        <br />
        <br />
        <h6>Contact: tekinayfurkan@gmail.com</h6>
      </div>
      <button className={styles.portfolioButton} onClick={smoothScroll}>
        View My Portfolio
        <span> &#8594;</span>
      </button>

      <div className={styles.counterDiv}>{visitedCount}</div>
      <img
        className={styles.profilePhoto}
        alt="profile-photo"
        src={profileImage}
      />
    </div>
  );
};

export default Header;
