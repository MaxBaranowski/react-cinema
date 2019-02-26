// show hide menu [ navigation bar ]
export function showHideNavigation(toggled) {
  return {
    type: "SHOW_HIDE_MENU",
    showMenu: toggled
  }
}

//show hide menu [ navigation bar ]
export function showNavigation() {
  return {
    type: "SHOW_MENU",
    showMenu: true
  }
}