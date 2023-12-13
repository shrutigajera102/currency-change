function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // You can replace the fixed exchange rates with actual API calls for real-time rates
    const exchangeRates = {
        usd: {
            eur: 0.85,
            gbp: 0.75
        },
        eur: {
            usd: 1.18,
            gbp: 0.89
        },
        gbp: {
            usd: 1.33,
            eur: 1.12
        }
    };

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = convertedAmount;
}