var ctx = document.getElementById("coffee-chart").getContext("2d");
var coffeeChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Coffee Beans", "Water", "Milk", "Sugar"],
    datasets: [
      {
        data: [60, 30, 70, 80],
        backgroundColor: ["#f1c40f", "#3498db", "#e74c3c", "#2ecc71"],
      },
    ],
  },
});

var wasteWarning = document.getElementById("waste-warning");
if (Math.random() < 0.5) {
  wasteWarning.style.display = "block";
}
