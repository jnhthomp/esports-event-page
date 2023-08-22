import React, { useRef, useState } from 'react';
import classes from './SlideList.module.css';
import ListItem from './ListItem/ListItem';

const SlideList = () => {

  // Left off: Determining how to get the list to know when you have reached the total amount of slides then disabling any further scrolling

  const wrapperRef = useRef()
  const listRef = useRef()
  const lArrowRef = useRef()
  const rArrowRef = useRef()
  const [lArrowDisabled, setLArrowDisabled] = useState(false)
  const [rArrowDisabled, setRArrowDisabled] = useState(false)
  const [lArrowHide, setLArrowHide] = useState(true)
  const [rArrowHide, setRArrowHide] = useState(false)

  const handleDisable = (arrowDirection) => {
  
    if(arrowDirection === 'left'){
      setLArrowDisabled(true);
      setTimeout(() => {
        return setLArrowDisabled(false)}, 800)
    }
    if (arrowDirection === 'right') {
      setRArrowDisabled(true);
      setTimeout(() => { 
        // const lastItemPos = listRef.current.lastChild.getBoundingClientRect().x
        // const lastItemWidth = listRef.current.lastChild.offsetWidth;
        // const rArrowPos = rArrowRef.current.getBoundingClientRect().x
        
        // if(lastItemPos + lastItemWidth <= rArrowPos ){
        //   setRArrowHide(true)
        // } else {
        //   setRArrowHide(false)
        // }

        return setRArrowDisabled(false) }, 800)
    }
  }

  const handleClick = (dir) => {
    console.log(dir);
    // handleDisable(dir) // temp disable to prevent items being offset should match or be greater than transition time 
                       // (see SlideList.module.css -> .wrapper .container)
    // Translate distance should be equal to size of <ListItem/> + margin (check ListItem.module.css)

    // console.log(listRef.current.getBoundingClientRect())
    // console.log(listRef.current.firstChild.);

    // will give position of <ListItem/> subtracting width of arrow svg (check SlideList.Module.css)
    // This tells how far from the edge of the arrow svg the first listItem is
    let lArrowDist = lArrowHide ? wrapperRef.current.getBoundingClientRect().x + 50: lArrowRef.current.getBoundingClientRect().x + 50 //50px being the width of the svg adjust as needed
    let distance = listRef.current.getBoundingClientRect().x - (lArrowDist) 
    console.log(distance)
    if(dir === 'left'){
      listRef.current.style.transform = `translateX(${230 + distance}px)`
      setLArrowDisabled(true);
      setTimeout(() => { setLArrowDisabled(false) }, 800)
    }
    if (dir === 'right') {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
      setRArrowDisabled(true);
      setTimeout(() => { setRArrowDisabled(false) }, 800)
    }

    

    setTimeout(() => {  
      const firstItemPos = listRef.current.firstChild.getBoundingClientRect().x
      const lArrowPos = wrapperRef.current.getBoundingClientRect().x
      const lastItemPos = listRef.current.lastChild.getBoundingClientRect().x
      const lastItemWidth = listRef.current.lastChild.offsetWidth;
      const rArrowPos = rArrowRef.current.getBoundingClientRect().x 
      console.log('firstItemPos: ' + firstItemPos)
      console.log('lArrowPos: ' + lArrowPos)

      if (firstItemPos > lArrowPos) {
        setLArrowHide(true);
      } else {
        setLArrowHide(false);
      }

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
          ref={lArrowRef}
          onClick={() => handleClick('left')}
          className={`${classes.sliderArrow} ${classes.left} ${lArrowDisabled ? `${classes.disabled}` : ''} icon icon-tabler icon-tabler-arrow-badge-left-filled`} 
          style={{display: lArrowHide && 'none'}}
          width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="currentColor" />
        </svg>
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
          ref={rArrowRef}
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