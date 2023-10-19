import React, { useState, useEffect } from 'react'
import { useTrail, a, useTransition, animated} from '@react-spring/web'
import styles from "./Home.module.css"

const slides = [
  'photo-1544511916-0148ccdeb877',
  'photo-1544572571-ab94fd872ce4',
  'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
  'photo-1540206395-68808572332f',
]

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function Home() {
  const [fotoIndex, setFotoIndex] = useState(0)
  const [fraseIndex, setFraseIndex] = useState(0);  
  const [open, setOpen] = useState(true)

  const transitions = useTransition(fotoIndex, {
    key: fotoIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    onRest: (_a, _b, item) => {
      setTimeout(() => {
        if (fotoIndex === item) {
          setFotoIndex(state => (state + 1) % slides.length)
        }
      }, 4000);
    },
    exitBeforeEnter: true,
  })

  useEffect(()=>{
    console.log(fraseIndex)
    const interval = setInterval(()=>{
      if(fraseIndex < 2) {
        setFraseIndex(fraseIndex => ++fraseIndex)
      } else {
        setFraseIndex(0)
      }
      setOpen(true)
      setTimeout(()=>{setOpen(false)}, 5000)
    }, 6000)
    return () => clearInterval(interval)
  },[fraseIndex])

  return (
    <>
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        />
      ))}
    </div>
    <div className={styles.container} onClick={() => setOpen(state => !state)}>
      {fraseIndex === 0 && <Trail open={open}>
        <span>Uno</span>
        <span>Ipsum</span>
        <span>Dolor</span>
        <span>Sit</span>
      </Trail>}
      {fraseIndex === 1 && <Trail open={open}>
        <span>Dos</span>
        <span>Ipsum</span>
        <span>Dolor</span>
        <span>Sit</span>
      </Trail>}
      {fraseIndex === 2 && <Trail open={open}>
        <span>Tres</span>
        <span>Ipsum</span>
        <span>Dolor</span>
        <span>Sit</span>
      </Trail>}
    </div>
    </>
  )
}