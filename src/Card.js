import React from "react";
import styles from "./Card.module.css";

const Card = ({
  title,
  description,
  imgSRC,
  link1,
  linkText1,
  link2,
  linkText2,
}) => {
  if (link2 !== undefined) {
    return (
      <div
        className={
          styles.cardDiv + " col-sm d-flex justify-content-center mt-4"
        }
      >
        <div className="card d-flex " style={{ width: "18rem" }}>
          <img
            src={process.env.PUBLIC_URL + imgSRC}
            className="card-img-top"
            alt={title + "-img"}
          />
          <div className="card-body ">
            <h3 className="card-title text-dark">{title}</h3>
            <p className="card-text text-dark align-start">{description}</p>

            <a href={link1} className={styles.cardButton50} target="_blank">
              {linkText1}
            </a>
            <a href={link2} className={styles.cardButton50} target="_blank">
              {linkText2}
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={styles.cardDiv + " col-sm d-flex justify-content-center mt-4"}
    >
      <div className="card d-flex " style={{ width: "18rem" }}>
        <img
          src={process.env.PUBLIC_URL + imgSRC}
          className="card-img-top"
          alt={title + "-img"}
        />
        <div className="card-body ">
          <h3 className="card-title text-dark">{title}</h3>
          <p className="card-text text-dark align-start">{description}</p>

          <a href={link1} className={styles.cardButton} target="_blank">
            {linkText1}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
