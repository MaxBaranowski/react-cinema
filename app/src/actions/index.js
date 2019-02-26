// show hide menu [ navigation bar ]
export function showHideNavigation(toggled) {
  return {
    type: "UPDATE_SHOWMENU",
    showMenu: toggled
  }
}
