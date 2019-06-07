// show hide menu [ navigation bar ]
export function showHideMenu(toggled) {
  console.log(1)

  return {
    type: "SHOW_HIDE_MENU",
    showMenu: toggled
  }
}

//show  menu [ navigation bar ]
export function showMenu() {
  console.log(2)

  return {
    type: "SHOW_MENU",
    showMenu: true
  }
}

// hide menu [ navigation bar ]
export function hideMenu() {
  console.log(3)

  return {
    type: "HIDE_MENU",
    showMenu: false
  }
}