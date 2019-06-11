export const loadGames = () => fetch("../src/data/gameData.json").then(res => res.json());

export const postUserData = (value) =>
  fetch("http://localhost:3000/users", {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "POST",
    body: JSON.stringify({
      name: value
    })
  })
  .then(res => res.json());

export const getToken = () =>
  fetch("http://localhost:3000/users/1")
    .then(resp => resp.json());
