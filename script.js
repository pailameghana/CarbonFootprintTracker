google.charts.load('current', { packages: ['corechart'] });

function calculate() {

    let travel = Number(document.getElementById("travel").value);
    let electricity = Number(document.getElementById("electricity").value);
    let food = Number(document.getElementById("food").value);

    let travelEmission = travel * 0.21;
    let electricityEmission = electricity * 0.85;
    let foodEmission = food * 2.5;

    let total = travelEmission + electricityEmission + foodEmission;

    document.getElementById("result").innerHTML =
        "🌍 Total Carbon Footprint: " + total.toFixed(2) + " kg CO₂ / day";

    let levelText = "";
    let tipsText = "";

    if (total < 5) {
        levelText = "🟢 Impact Level: LOW";
        tipsText = "Great job! Keep using eco-friendly habits.";
    } 
    else if (total < 10) {
        levelText = "🟡 Impact Level: MEDIUM";
        tipsText = "Try reducing electricity use and prefer public transport.";
    } 
    else {
        levelText = "🔴 Impact Level: HIGH";
        tipsText = "Reduce travel, save energy, and eat more plant-based food.";
    }

    document.getElementById("level").innerHTML = levelText;
    document.getElementById("tips").innerHTML = "💡 Suggestion: " + tipsText;

    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Source', 'Emission'],
            ['Travel', travelEmission],
            ['Electricity', electricityEmission],
            ['Food', foodEmission]
        ]);

        let options = {
            title: 'Carbon Emission Breakdown'
        };

        let chart = new google.visualization.PieChart(
            document.getElementById('chart_div')
        );

        chart.draw(data, options);
    }
}