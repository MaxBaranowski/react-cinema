export default (state, action) => {
  switch (action.type) {
    case "UPDATE_SHOWMENU":
      return {
        ...state,
        showMenu: !action.showMenu
      };
    default:
      return state;
  }
};

