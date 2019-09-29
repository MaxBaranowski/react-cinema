import React from "react"

export default function Avatar() {
  return (
    <header>
      <picture>
        {/* <source media="(min-width: 650px)" srcset="" /> */}
        {/* <source media="(min-width: 465px)" srcset="" /> */}
        <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Jenna avatar"/>
      </picture>
      <p className="user_hello">Hi, <span id="user_name">Jenna</span></p>
    </header>
  )
}
