import React from 'react'
import classes from './ListItem.module.css'

const ListItem = (props) => {
  return (
    <div className={classes.listItem}>
      {/* Date/Time */}
      <span className={classes.date}>{props.eventDetails.date}</span>
      <span className={classes.time}>{props.eventDetails.time}</span>
      {/* Series + Round*/}
      <span>{props.eventDetails.series}: Round {props.eventDetails.round}</span>
      {/* Track */}
      <span>{props.eventDetails.circuit}</span>
    </div>
  )
}

export default ListItem