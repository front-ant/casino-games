export const loadGames = () => fetch("../src/data/gameData.json").then(res => res.json());

// export const validateLogin = () => fetch("../src/LoginRequest.json").then(res => res.json());
