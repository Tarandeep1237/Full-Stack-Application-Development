function showData() {
  // ===== Complex Object =====
  const match = {
    team: "India",
    opponent: "Australia",
    score: {
      runs: 250,
      wickets: 3
    },
    players: ["Rohit", "Virat", "Gill", "Hardik"]
  };

  // ===== Object Destructuring =====
  const {
    team,
    opponent,
    score: { runs, wickets },
    players
  } = match;

  // ===== Array Destructuring (no index used) =====
  const [player1, player2, ...others] = players;

  // ===== Output =====
  const message = `
Team: ${team}
Opponent: ${opponent}
Runs: ${runs}
Wickets: ${wickets}

Top Players:
1. ${player1}
2. ${player2}
Others: ${others.join(", ")}
`;

  document.getElementById("output").textContent = message;
}
