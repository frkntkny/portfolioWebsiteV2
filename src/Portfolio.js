import React from "react";
import styles from "./Portfolio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function Portfolio() {
  return (
    <div className={styles.parentDiv}>
      <br />
      <p className={styles.projectsTitle}>Projects</p>

      <div className={styles.myLayoutContainer + " container"}>
        <div className="row">
          <Card
            title="Portfolio Website V2"
            description="List of personal projects that I worked on. "
            imgSRC="portfolio-website.png"
            link1="/"
            linkText1="Website"
          />
          <Card
            title="LoonDoor"
            description=" A website for solving a real-life housing problem. The main purpose
            of this website is to provide the best experience for user as well
            as landlords."
            imgSRC="loondoor.png"
            link1="https://www.loondoor.com/"
            linkText1="Website"
          />
          <Card
            title="Cherry To Do"
            description="This app design for the become cutest to-do app in the market.
            This app provides you to list your to-do's on your phone
            without any difficulties. You can also add priority for each
            task. In its archive, we provide you +150 random tasks for
            free"
            imgSRC="cherry-to-do.png"
            link1="https://play.google.com/store/apps/details?id=com.furkantekinay.cherry_to_do_list_app"
            linkText1="Google Play Store"
          />
          <Card
            title="Pomolife Timer"
            description="PomoLife Timer is my first application works on Android. It’s
            created for those who has difficulties about starting and
            staying focused to study. Main purpose is preventing phone
            usage while studying. It's worth to try."
            imgSRC="pomolife-timer.png"
            link1="https://play.google.com/store/apps/details?id=com.tekinayfurkan.pomolife"
            linkText1="Play Store"
            link2="https://github.com/frkntkny/pomolife_timer"
            linkText2="Github"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
