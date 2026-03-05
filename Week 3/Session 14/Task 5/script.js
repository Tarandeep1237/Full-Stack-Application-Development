// ===== Promise function =====
function pizzaOrderSystem(pizzaName) {
  return new Promise((resolve, reject) => {
    document.getElementById("status").textContent =
      `Preparing your ${pizzaName}...`;

    // simulate kitchen delay
    setTimeout(() => {
      const isKitchenOpen = true; // change to false to test reject

      if (isKitchenOpen) {
        resolve(`✅ Your ${pizzaName} is ready!`);
      } else {
        reject("❌ Sorry, kitchen is closed.");
      }
    }, 3000);
  });
}

// ===== Button handler =====
function orderPizza() {
  const pizzaName = document.getElementById("pizzaType").value;

  pizzaOrderSystem(pizzaName)
    .then(message => {
      document.getElementById("status").textContent = message;
    })
    .catch(error => {
      document.getElementById("status").textContent = error;
    });
}
