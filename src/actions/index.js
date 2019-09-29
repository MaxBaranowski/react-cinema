// show hide menu [ navigation bar ]
export function showHideMenu(toggled) {
  return {
    type: "SHOW_HIDE_MENU",
    showMenu: toggled
  }
}

//show  menu [ navigation bar ]
export function showMenu(option) {
  return {
    type: "SHOW_MENU",
    showMenu: option
  }
}

// hide menu [ navigation bar ]
export function hideMenu(option) {
  return {
    type: "HIDE_MENU",
    showMenu: false
  }
}