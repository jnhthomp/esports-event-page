import React from 'react';
import classes from './TeamShowcase.module.css';

const TeamShowcase = () => {
  // Generate all the teams for the team showcase
  // Add variety of colors by adding a color property to each object and using that to assign a classname to the generated li
  const teams = [
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'},
    {name: 'Team Name'}
  ]

  const teamLI = teams.map((el, i) => {
    return (
      <li key={i} className={classes.team}>{el.name}</li>
    )
  }
  )
  return (
    <div className={classes.showcaseContainer}>
      <div className={classes.title}>Teams</div>
      <div>
        <ul className={classes.teamList}>
          {teamLI}
        </ul>
      </div>
    </div>
  )
}

export default TeamShowcase