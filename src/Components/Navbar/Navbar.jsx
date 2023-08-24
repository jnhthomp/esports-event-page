import React from 'react';
import classes from './Navbar.module.css';
import ScheduleButton from '../UI/Buttons/ScheduleButton/ScheduleButton.jsx';   
// import RaceIcon from '../../Assets/RaceIcon.svg'

const Navbar = () => {
  return (
    <nav className={classes.bar}>
      <div className={classes.navLeft}>
        <div className={classes.logoContainer}>
          {/* Race by DinosoftLabs from <a href="https://thenounproject.com/browse/icons/term/race/" target="_blank" title="Race Icons">Noun Project</a> (CC BY 3.0) */}
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"
            viewBox="0 0 52 65" enableBackground="new 0 0 52 52" space="preserve">
            <g>
              <path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                d="M10,37.5H4c-0.5522847,0-1-0.4477158-1-1v-12   c0-0.5522842,0.4477153-1,1-1h6c0.5522852,0,1,0.4477158,1,1v12C11,37.0522842,10.5522852,37.5,10,37.5z" />
              <path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                d="M48,37.5h-6c-0.5522842,0-1-0.4477158-1-1v-12   c0-0.5522842,0.4477158-1,1-1h6c0.5522842,0,1,0.4477158,1,1v12C49,37.0522842,48.5522842,37.5,48,37.5z" />
              <rect x="14" y="14.5" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="24" height="6" />
              <path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                d="M26.0000591,20.4999084   c-2.2092285,0-4,1.7910156-4,4v6h8v-6C30.0000591,22.2909241,28.2091656,20.4999084,26.0000591,20.4999084z" />
              <line fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" x1="11" y1="34.5" x2="40.9999084"
                y2="34.5" />
              <polyline fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                points="11,29.5 19.35186,29.5 22,34.5  " />
              <polyline fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                points="41,29.5 32.64814,29.5 30,34.5  " />
            </g>
          </svg>
        </div>
        <div className={classes.divider}/>
        <ScheduleButton />
      </div>
      <div className={classes.navMid}>
        <ul>
          {/* Assign active class dynamically instead of statically */}
          <li className={classes.active}>Sessions</li>
          <li>Leagues</li>
          <li>Teams</li>
          <li>Sponsors</li>
        </ul>
      </div>
      <div className={classes.navRight}>
        <div className={classes.leaderBoardContainer}>
          <div className={classes.leaderBoardIconContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 21l8 0" />
              <path d="M12 17l0 4" />
              <path d="M7 4l10 0" />
              <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
              <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            </svg>
          </div>
          <span className={classes.leaderBoardText}>Leaderboard</span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar