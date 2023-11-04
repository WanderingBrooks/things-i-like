import React from "react";

import classes from "./thing.module.css";
import { cx } from "../../utils/general";

interface ThingProps {
  thing: string;
  className?: string;
}

const Thing: React.FC<ThingProps> = ({ thing, className }) => {
  const name = thing.replace(/-/g, " ")

  return (
    <div className={cx(thing, classes.thing, className)}>
      <div className={classes.imgContainer}>
        <img className={classes.thingImg} alt={`${thing} image`} src={`/${thing}.jpg`} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Thing;