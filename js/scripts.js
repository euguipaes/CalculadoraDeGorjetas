function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQuality == 0){
        alert('Por favor, preencha os valores.')
        return;
    }

    if(numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQuality) / numOfPeople;
    let totalValue = +bill + +total;
    total = total.toFixed(2);
    totalValue = totalValue.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalValue').innerHTML = totalValue;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('tipsForm').addEventListener('submit', calculateTip);