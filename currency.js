class Currency{
    constructor()
    {
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency="
    }
    async exchangeRequest(amount,firstCurrency,secondCurrency){
        const response=await fetch(`${this.url}${firstCurrency}`)
        const responseText=await response.json()
        const result=amount * responseText.data[secondCurrency]
        return result
    }
}