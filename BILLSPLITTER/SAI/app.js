

document.getElementById("calculateBtn").addEventListener("click", function() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    const numPeople = parseInt(document.getElementById("numPeople").value);
  
    if (isNaN(totalAmount) || isNaN(numPeople) || totalAmount <= 0 || numPeople <= 0) {
      document.getElementById("result").textContent = "Please enter valid values.";
      return;
    }
  
    const individualShare = totalAmount / numPeople;
    const roundedShare = Math.round(individualShare * 100) / 100;
  
    document.getElementById("result").textContent = `Each person should pay ${roundedShare}.`;
  });

