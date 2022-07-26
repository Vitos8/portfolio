import React from 'react'
import "./Button.css";

export default function Button({children, link, color, bg, display}) {
     return (
          <a target='_blank' href={link}>
               <button className={`btn font-bold text-${color} before:bg-${bg} py-[0.8em] px-[1.4em] lg:${display} dark:border-darkPurlpe dark:text-darkPurlpe`}>{children}</button>
          </a>
     )
}
