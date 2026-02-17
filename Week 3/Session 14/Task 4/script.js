function prepareParty() {
  // ===== Step 1: Two friend lists =====
  const collegeFriends = ["Rahul", "Aman", "Neha"];
  const workFriends = ["Priya", "Karan", "Sneha"];

  // ===== Step 2: Merge using SPREAD + add "Me" at start =====
  const partyList = ["Me", ...collegeFriends, ...workFriends];

  // ===== Step 3: Function with normal + REST parameter =====
  function welcome(host, ...guests) {
    return `Host: ${host}
Guests: ${guests.join(", ")}`;
  }

  // ===== Call function =====
  const message = `
Party List:
${partyList.join(", ")}

${welcome(partyList[0], ...partyList.slice(1))}
`;

  document.getElementById("output").textContent = message;
}
