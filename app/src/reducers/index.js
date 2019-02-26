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
    default:
      return state;
  }
};

