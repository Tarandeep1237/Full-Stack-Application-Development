// Arrow function as required
const generateReceipt = (price, tip) => {
  const total = price + tip;
  return `Total Amount to Pay: ₹${total}`;
};

// Button handler
function handleGenerate() {
  const price = Number(document.getElementById("price").value);
  const tip = Number(document.getElementById("tip").value);

  const message = generateReceipt(price, tip);
  document.getElementById("output").textContent = message;
}
