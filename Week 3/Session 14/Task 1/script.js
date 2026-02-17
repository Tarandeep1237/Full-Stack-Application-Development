// ===== STATE (block scoped) =====
let scoreA = 0;
let scoreB = 0;

const scoreDisplayA = document.getElementById("scoreA");
const scoreDisplayB = document.getElementById("scoreB");

// ===== UPDATE SCORE =====
function updateScore(team, points) {
  if (team === "A") {
    scoreA += points;
    scoreDisplayA.textContent = scoreA;
  } else if (team === "B") {
    scoreB += points;
    scoreDisplayB.textContent = scoreB;
  }
}

// ===== RESET MATCH =====
function resetScore() {
  scoreA = 0;
  scoreB = 0;

  scoreDisplayA.textContent = scoreA;
  scoreDisplayB.textContent = scoreB;
}
