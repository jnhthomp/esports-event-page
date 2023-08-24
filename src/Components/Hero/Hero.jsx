import React from 'react';
import classes from './Hero.module.css';
import SlideList from '../SlideList/SlideList';
import Button from '../UI/Buttons/ScheduleButton/ScheduleButton.jsx';

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroContent}>
        <div className={classes.titlePrimary}>PrecisionShift</div>
        <div className={classes.titleSub}>E-Sports Sim-Racing League</div>
        <Button />
        <SlideList/>
      </div>
    </div>
  )
}

export default Hero