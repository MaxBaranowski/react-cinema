// Akcje są to obiekty, które zostają przekazane do reducer-a,
// na podstawie ich typu powinien być zwrócony inny nowy stan aplikacji,

// show hide menu [ navigation bar ]
export function showHideMenu(toggled) {
  return {
    type: "SHOW_HIDE_MENU",
    showMenu: toggled
  };
}

//show  menu [ navigation bar ]
export function showMenu() {
  return {
    type: "SHOW_MENU",
    showMenu: true
  };
}

// hide menu [ navigation bar ]
export function hideMenu() {
  return {
    type: "HIDE_MENU",
    showMenu: false
  };
}

export function getPostersList(movieId) {
  return fetch(`https://${window.location.hostname}:443/api/poster`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: movieId
    })
  })
    .then(response =>
      response.json().then(data => {
        if (data.length < 1) {
          return [];
        }
        return data;
      })
    )
    .catch(error => console.log(error));
}
