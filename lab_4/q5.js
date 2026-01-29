function calculateTax() {

    let income = parseFloat(document.getElementById("income").value);
    let age = document.getElementById("age").value;

    if (isNaN(income) || income <= 0) {
        alert("Enter valid income!");
        return;
    }

    let tax = 0;
    let exemption = 250000;

    if (age === "senior") exemption = 300000;
    if (age === "super") exemption = 500000;

    if (income > exemption) {

        let taxable = income - exemption;

        if (taxable <= 250000) {
            tax = taxable * 0.05;
        } 
        else if (taxable <= 500000) {
            tax = 250000 * 0.05 + (taxable - 250000) * 0.20;
        } 
        else {
            tax = 250000 * 0.05 + 250000 * 0.20 + (taxable - 500000) * 0.30;
        }
    }

    let cess = tax * 0.04;
    let total = tax + cess;

    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("cess").innerText = cess.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}
