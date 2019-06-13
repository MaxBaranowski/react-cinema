// Reducer jest to funkcja, która zwraca nowy stan bazując na starym.
// Przyjmuje dwa argumenty, poprzedni stan oraz akcje,

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
    case "BG":
      return {
        ...state,
        background: action.background
      };
    default:
      return state;
  }
};
