import React from 'react';
import classes from './Navbar.module.css';
// import RaceIcon from '../../Assets/RaceIcon.svg';
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
        <button>
          <div className={classes.calIconContainer}>
            <svg fill="#1C2033" width="52" height="52" version="1.1" id="lni_lni-calendar" xmlns="http://www.w3.org/2000/svg" x="0px"
              y="0px" viewBox="0 0 64 64" style={{enableBackground: 'new 0 0 64 64'}} space="preserve">
              <g>
                <path d="M20.5,36.6h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C21.5,37.1,21,36.6,20.5,36.6z" />
                <path d="M33.5,36.6h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C34.5,37.1,34.1,36.6,33.5,36.6z" />
                <path d="M46.6,36.6h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C47.6,37.1,47.2,36.6,46.6,36.6z" />
                <path d="M20.5,49.5h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C21.5,50,21,49.5,20.5,49.5z" />
                <path d="M33.5,49.5h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C34.5,50,34.1,49.5,33.5,49.5z" />
                <path d="M46.6,49.5h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C47.6,50,47.2,49.5,46.6,49.5z" />
                <path d="M56,15.4H34.3v-1.9c2.3-0.9,3.9-3.1,3.9-5.7c0-3.4-2.8-6.1-6.2-6.1s-6.2,2.7-6.2,6.1c0,2.6,1.6,4.8,3.9,5.7v1.9H8
                  c-3.4,0-6.3,2.8-6.3,6.3V56c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V21.6C62.3,18.2,59.4,15.4,56,15.4z M32,6.2
                  c0.9,0,1.7,0.7,1.7,1.6c0,0.9-0.7,1.6-1.7,1.6s-1.7-0.7-1.7-1.6C30.3,6.9,31.1,6.2,32,6.2z M8,19.9h48c1,0,1.8,0.8,1.8,1.8v6.2H6.3
                  v-6.2C6.3,20.6,7,19.9,8,19.9z M56,57.8H8c-1,0-1.8-0.8-1.8-1.8V32.3h51.5V56C57.8,57,57,57.8,56,57.8z"/>
              </g>
            </svg>
          </div>
          <span className={classes.buttonText}>Schedule</span>
        </button>
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