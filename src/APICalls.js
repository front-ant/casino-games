export const loadGames = () => fetch("../src/data/gameData.json").then(res => res.json());

export const checkLogin = (value) =>
  fetch("http://localhost:3000/users", {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "POST",
    body: JSON.stringify({
      username: value
    })
  })
  .then(res => res.json());