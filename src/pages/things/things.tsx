'use client';

import React from "react";

import classes from "./things.module.css";
import Page from "@/components/page";
import Thing from "@/components/thing";
import DvdBouncer from "@/components/dvdBouncer";
import { cx } from '@/utils/general';
import { sixtySeconds } from '@/utils/constants';

const things = [
  { thing: 'according-to-need', type: 'podcast' },
  { thing: 'past-lives', type: 'movie' },
  { thing: 'over-the-garden-wall', type: 'tv-show' },
  { thing: 'doughnut-economics', type: 'book' },
  { thing: 'de-todas-las-flores', type: 'album' },
  { thing: 'lianne-la-havas', type: 'album' },
];

const Things = () => {
  const [filter, setFilter] = React.useState('');
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!shouldAnimate) {
        setShouldAnimate(true);
      }
    }, sixtySeconds);

    return () => clearTimeout(timeoutId);
  }, [shouldAnimate]);
  
  return (
    <Page>
      <div className={classes.titleRow}>
        <h1>things i like</h1>
        <div className={classes.flexRowWithSpacing}>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">filter</option>
            <option value="podcast">podcast</option>
            <option value="movie">movie</option>
            <option value="tv-show">tv-show</option>
            <option value="album">album</option>
          </select>
          {shouldAnimate && <button onClick={() => setShouldAnimate(false)}>send everybody home</button>}
        </div>
      </div>
      <div className={classes.thingsContainer}>
        {things.map(({ thing, type }) => {
          const shouldHide = filter && type !== filter;
          const WrapperComponent = !shouldHide && shouldAnimate ? DvdBouncer : React.Fragment;

          
          return (
            <WrapperComponent key={`${name}-${type}`} selector={`.${thing}`}>
              <Thing thing={thing} className={cx(shouldHide && classes.hidden)} />
            </WrapperComponent>
          )
      })}
      </div>
    </Page>
  );
};

export default Things;