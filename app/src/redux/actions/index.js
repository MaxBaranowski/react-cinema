// show hide menu [ navigation bar ]
export function showHideMenu(toggled) {
  return {
    type: "SHOW_HIDE_MENU",
    showMenu: toggled
  }
}

//show  menu [ navigation bar ]
export function showMenu() {
  return {
    type: "SHOW_MENU",
    showMenu: true
  }
}

// hide menu [ navigation bar ]
export function hideMenu() {
  return {
    type: "HIDE_MENU",
    showMenu: false
  }
}