import { useEffect, useState } from 'react';

const Timer = () => {

  const [time, setTime]= useState(0);
  const [start, setStart]= useState(false);
  const [timer, setTimer]= useState(null);

  useEffect(() => {
    if(start === true) {
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1))
      return () => {
        clearInterval(time);
      } 
    } else {
      clearInterval(timer)
    }
  },[start]) // useEffect odpali się za każdym razem gdy Start ulegnie zmianie 

 

  return(
    <div className='Timer'>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span> 
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setStart(true)}>Wznów</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}

/* 
60s = 1min i 1000ms= 1s (dlatego 60000ms=1min) i % 60 (60s = 1min)
1000 ms = 1s, 60% (60s= 1min) 
tysięczne
*/



/*
  useEffect(() => {    
    setTime(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
    return () => {
      clearInterval(time);
    }
  },[start, time])

  return(
    <div className='Timer'>
      <div>{time}</div>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setStart(true)}>Wznów</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
*/

export default Timer;