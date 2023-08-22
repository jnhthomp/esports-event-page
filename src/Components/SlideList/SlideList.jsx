import React, { useRef, useState } from 'react';
import classes from './SlideList.module.css';
import ListItem from './ListItem/ListItem';

const SlideList = () => {
  // NOTE: One thing that can cause confusion when working on this component is that the arrows move the list the opposite direction of the arrows
  //        ex: Clicking left arrow will increase X position and clicking right arrow will decrease X position
  //        This is causes items to the left to be revealed when left arrow is clicked and items to the right to be revealed when right arrow is clicked

  const wrapperRef = useRef() // used to get leftmost position of box containing list item container and arrows
  const listRef = useRef() // list container
  const [lArrowDisabled, setLArrowDisabled] = useState(false)
  const [rArrowDisabled, setRArrowDisabled] = useState(false)
  const [lArrowHide, setLArrowHide] = useState(true)
  const [rArrowHide, setRArrowHide] = useState(false)

  const handleClick = (dir) => {

    // will give position of <ListItem/> subtracting width of arrow svg (check SlideList.Module.css)
    // This tells how far from the edge of the arrow svg the first listItem is
    let lArrowDist = wrapperRef.current.getBoundingClientRect().x + 50 // Calc position of right edge of left arrow (position of container + width of arrow see SlideList.module.css for arrow width)
    let distance = listRef.current.getBoundingClientRect().x - (lArrowDist) // Calculate distance between where <ListItems /> start being rendered and left arrow
    
    // Handle left arrow clicks
    if(dir === 'left'){
      listRef.current.style.transform = `translateX(${230 + distance}px)` // Move list right by width of a list item + current distance from wrapper edge
      setLArrowDisabled(true); // Disable arrow
      setTimeout(() => { setLArrowDisabled(false) }, 800) // Re-enable arrow after transition ends (see SliderList.module.css -> .wrapper .container)
    }
    if (dir === 'right') {
      listRef.current.style.transform = `translateX(${-230 + distance}px)` // Move list left by width of a list item + current distance from wrapper edge
      setRArrowDisabled(true); // Disable arrow
      setTimeout(() => { setRArrowDisabled(false) }, 800) // Re-enable arrow after transition ends (see SliderList.module.css -> .wrapper .container)
    }

    // Determine if list is in a positin that should show arrows or hide them. 
    setTimeout(() => {  // TODO: Extract all of this to be it's own method and run inside of a setTimeout
      const firstItemPos = listRef.current.firstChild.getBoundingClientRect().x // leftmost x coord of first list item
      const lArrowPos = wrapperRef.current.getBoundingClientRect().x //leftmost x coord of left arrow svg
      const lastItemPos = listRef.current.lastChild.getBoundingClientRect().x // leftmost x coord of last list item
      const lastItemWidth = listRef.current.lastChild.offsetWidth; // width of last list item (used to calcuate rightmost x coord of last list item)
      const rArrowPos = wrapperRef.current.getBoundingClientRect().x + wrapperRef.current.offsetWidth; // leftmost x coord of right arow svg

      // Check if first item in list is to the right of the left arrow 
      // (list doesn't need to move right anymore as there are no more items hidden to the left)
      if (firstItemPos > lArrowPos) {
        setLArrowHide(true);
      } else {
        setLArrowHide(false);
      }

      // Check if list is to the left of the left arrow 
      // (list doesn't need to move right anymore as there are no more items hidden to the left)
      if (lastItemPos + lastItemWidth < rArrowPos) {
        setRArrowHide(true)
      } else {
        setRArrowHide(false)
      }
    }, 1000)
    
    
  }


  return (
    <div className={classes.slideList}>
      <span className={classes.listTitle}>Scheduled Events</span>
      <div ref={wrapperRef} className={classes.wrapper}>
        {/* Arrow-left svg */}
        <svg xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick('left')}
          className={`${classes.sliderArrow} ${classes.left} ${lArrowDisabled ? `${classes.disabled}` : ''} icon icon-tabler icon-tabler-arrow-badge-left-filled`} 
          style={{display: lArrowHide && 'none'}}
          width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="currentColor" />
        </svg>
        {/* List item container */}
        <div className={classes.container} ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        {/* Arrow-right svg */}
        <svg xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick('right')} 
          className={`${classes.sliderArrow} ${classes.right} ${rArrowDisabled ? `${classes.disabled}` : ''} icon icon-tabler icon-tabler-arrow-badge-right-filled`} 
          style={{ display: rArrowHide && 'none' }}
          width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

export default SlideList