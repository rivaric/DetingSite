import { useRef, useState, useEffect, createRef, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../..";
import { gsap } from "gsap";

import './Layout.scss';

const Layout = () => {

  const items = [
    {
      name: "Home",
      color: "#e91e63",
      href: ""
    },
    {
      name: "Profile",
      color: "#f44336",
      href: "profile"
    },
    {
      name: "likes",
      color: "#673ab7",
      href: "likes"
    },
    {
      name: "Help",
      color: "#3f51b5",
      href: "help"
    }
  ];
  
  
  const $root = useRef()
  const $indicator1 = useRef()
  const $indicator2 = useRef()
  const $items = useRef(items.map(createRef))
  const [ active, setActive ] = useState(0)
  const {store} = useContext(Context);
  
  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect()
    const activeItem = $items.current[active].current
    const { width, height, top, left } = activeItem.getBoundingClientRect()
    
    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: 'elastic.out(.7, .7)',
      duration: .8
    }
    
    gsap.to($indicator1.current, {
      ...settings,
    })
    
    gsap.to($indicator2.current, {
      ...settings,
      duration: 1
    })
  }
  
  useEffect(() => {
    // other code
    if (store.isAuth) {
      animate()
      window.addEventListener('resize', animate)
      
      return (() => {
        window.removeEventListener('resize', animate)
      })    
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, store.isAuth])
  
  return (
    <>
      <div
      ref={$root}
      className="menu"
      >
        {items.map((item, index) => (
          <Link
            to={store.isAuth ? item.href : ''}
            key={item.name}
            ref={$items.current[index]}
            className={store.isAuth ? `item ${active === index ? 'active' : ''}` : 'item'}
            onClick={() => {
              setActive(index)
            }}
            href={item.href}
            pointerEvents = {store.isAuth ? '' : 'none'}
          >
            {item.name}
          </Link>
        ))}
        <div
          ref={$indicator1}
          className="indicator"
        />
        <div
          ref={$indicator2}
          className="indicator"
        />
      </div>

      <div className="container">
        <Outlet/>
      </div>

    </>
  )
}

export default Layout;