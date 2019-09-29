export default (state, action) => {
  switch (action.type) {
    case "SHOW_HIDE_MENU":
      return {
        ...state,
        showMenu: !action.showMenu
      };
    case "SHOW_MENU":
      return {
        ...state,
        showMenu: true
      };
    case "HIDE_MENU":
      return {
        ...state,
        showMenu: false
      };
    default:
      return state;
  }
};

