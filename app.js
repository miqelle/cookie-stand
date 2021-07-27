//object literals for each shop location
let Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHr: Math.floor(Math.random() * 65) + 1, ////method to generate a random # between 1-65 customers per hour
  cookiesPerHr: function () {
    //console.log(this.custPerHr); //this logs the random customers per hour
    return this.custPerHr / this.avgCookieSale; //this returns the avg cookies sold per hour
  },
  results: [
    this.minCust,
    this.maxCust,
    this.avgCookieSale,
    this.custPerHr,
    this.cookiesPerHr,
  ],
};
console.log(Seattle.cookiesPerHr()); //logs cookies sold per hr
//console.log(Seattle.results);
//console.log(results);

let Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHr: Math.floor(Math.random() * 24) + 1, ////method to generate a random # between 1-24 customers per hour
  cookiesPerHr: function () {
    //console.log(this.custPerHr); //this logs the random customers per hour
    return this.custPerHr / this.avgCookieSale; //this returns the avg cookies sold per hour
  },
};
console.log(Tokyo.cookiesPerHr()); //logs cookies sold per hr

let Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHr: Math.floor(Math.random() * 38) + 1, ////method to generate a random # between 1-38customers per hour
  cookiesPerHr: function () {
    //console.log(this.custPerHr); //this logs the random customers per hour
    return this.custPerHr / this.avgCookieSale; //this returns the avg cookies sold per hour
  },
};
console.log(Dubai.cookiesPerHr()); //logs cookies per hour based on a custPerHr/avgCookieSale in Dubai
console.log(Dubai.custPerHr); //logs random customers per hr

let Paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHr: Math.floor(Math.random() * 38) + 1, ////method to generate a random # between 1-38 customers per hour
  cookiesPerHr: function () {
    //console.log(this.custPerHr); //this logs the random customers per hour
    return this.custPerHr / this.avgCookieSale; //this returns the avg cookies sold per hour
  },
};
console.log(Paris.cookiesPerHr()); //logs cookies per hour based on a custPerHr/avgCookieSale in Paris
console.log(Paris.custPerHr); //logs random customers per hr
let Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHr: Math.floor(Math.random() * 16) + 1, ////method to generate a random # between 1-16 customers per hour
  cookiesPerHr: function () {
    //console.log(this.custPerHr); //this logs the random customers per hour
    return this.custPerHr / this.avgCookieSale; //this returns the avg cookies sold per hour
  },
};
console.log(Lima.cookiesPerHr()); //logs cookies per hour based on a custPerHr/avgCookieSale in Paris
console.log(Lima.custPerHr); //logs random customers per hr

//Calculate the sum of the hourly totals....Display lists on sales.html
