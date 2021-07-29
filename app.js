//function for random # of customers within range of data given
function randNumCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

//reference for table
const table = document.getElementById("salesTable");

//Array that will be used to keep up with the sales numbers per hr
const bhours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
console.log(table);
//create table header function
function createHeader() {
  let headerRow = document.createElement("tr"); //this creates a tr node
  let tblHdr = document.createElement("th");
  tblHdr.textContent = "Locations";
  headerRow.appendChild(tblHdr);
  //for loop to go through bhours array
  for (let i = 0; i < bhours.length; i++) {
    tblHdr = document.createElement("th");
    tblHdr.textContent = bhours[i];
    headerRow.appendChild(tblHdr);
  }
  tblHdr = document.createElement("th");
  tblHdr.textContent = "Daily Location Total";
  headerRow.appendChild(tblHdr);
  table.appendChild(headerRow);
}

createHeader();

//Object literal for Seattle location
let Seattle = {
  //These are the properties for this object
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  //The arrays should be the same length as the business hours array
  custPerHour: [],
  cookiesSoldPerHr: [],
  totalDailyCookies: 0,

  //These are the methods for calculations
  getCustPerHr: function () {
    //Use the randNumCust method by using 'this'
    //Add each randNumCust to the array where each index aligns with a business hour in the bhours array
    for (let index = 0; index < bhours.length; index++) {
      //Add avg customer value for each hour to the array
      this.custPerHour.push(randNumCust(this.minCust, this.maxCust)); //pass in min & max cust
    }
    //console.log to check if the arrays and functions are working properly
    console.log(
      `The min value is ${this.minCust} the max value is ${this.maxCust}`
    );
  },
  //calculate avg cookies per person
  getCookiesSoldPerHour: function () {
    //counts total cookies
    totalDailyCookies = 0;
    this.getCustPerHr(); //loads up customer data
    //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
    for (let index = 0; index < this.custPerHour.length; index++) {
      //Calculate number of cookies
      let dailyCookies = Math.floor(
        this.custPerHour[index] * this.avgCookieSale
      );
      //Get a whole number
      this.cookiesSoldPerHr.push(dailyCookies);
      //add to total
      this.totalDailyCookies += dailyCookies;
    }
  },

  render() {
    this.getCookiesSoldPerHour();
    let dataRow = document.createElement("tr"); //this creates a tr node
    let seattleData = document.createElement("td");
    seattleData.textContent = "Seattle";
    dataRow.appendChild(seattleData);
    //for loop to go through bhours array
    for (let i = 0; i < bhours.length; i++) {
      seattleData = document.createElement("td");
      seattleData.textContent = this.cookiesSoldPerHr[i];
      dataRow.appendChild(seattleData);
    }
    seattleData = document.createElement("td");
    seattleData.textContent = this.totalDailyCookies;
    dataRow.appendChild(seattleData);
    table.appendChild(dataRow);
  },
};

//Object literal for Tokyo location
let Tokyo = {
  //These are the properties for this object
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  //The arrays should be the same length as the business hours array
  custPerHour: [],
  cookiesSoldPerHr: [],
  totalDailyCookies: 0,

  //These are the methods for calculations
  getCustPerHr: function () {
    //Use the randNumCust method by using 'this'
    //Add each randNumCust to the array where each index aligns with a business hour in the bhours array
    for (let index = 0; index < bhours.length; index++) {
      //Add avg customer value for each hour to the array
      this.custPerHour.push(randNumCust(this.minCust, this.maxCust)); //pass in min & max cust
    }
    //console.log to check if the arrays and functions are working properly
    console.log(
      `The min value is ${this.minCust} the max value is ${this.maxCust}`
    );
  },
  //calculate avg cookies per person
  getCookiesSoldPerHour: function () {
    //counts total cookies
    totalDailyCookies = 0;
    this.getCustPerHr(); //loads up customer data
    //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
    for (let index = 0; index < this.custPerHour.length; index++) {
      //Calculate number of cookies
      let dailyCookies = Math.floor(
        this.custPerHour[index] * this.avgCookieSale
      );
      //Get a whole number
      this.cookiesSoldPerHr.push(dailyCookies);
      //add to total
      this.totalDailyCookies += dailyCookies;
    }
  },
  render() {
    this.getCookiesSoldPerHour();
    let dataRow = document.createElement("tr"); //this creates a tr node
    let tokyoData = document.createElement("td");
    tokyoData.textContent = "Tokyo";
    dataRow.appendChild(tokyoData);
    //for loop to go through bhours array
    for (let i = 0; i < bhours.length; i++) {
      tokyoData = document.createElement("td");
      tokyoData.textContent = this.cookiesSoldPerHr[i];
      dataRow.appendChild(tokyoData);
    }
    tokyoData = document.createElement("td");
    tokyoData.textContent = this.totalDailyCookies;
    dataRow.appendChild(tokyoData);
    table.appendChild(dataRow);
  },
};

//Object literal for Dubai location
let Dubai = {
  //These are the properties for this object
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  //The arrays should be the same length as the business hours array
  custPerHour: [],
  cookiesSoldPerHr: [],
  totalDailyCookies: 0,

  //These are the methods for calculations
  getCustPerHr: function () {
    //Use the randNumCust method by using 'this'
    //Add each randNumCust to the array where each index aligns with a business hour in the bhours array
    for (let index = 0; index < bhours.length; index++) {
      //Add avg customer value for each hour to the array
      this.custPerHour.push(randNumCust(this.minCust, this.maxCust)); //pass in min & max cust
    }
    //console.log to check if the arrays and functions are working properly
    console.log(
      `The min value is ${this.minCust} the max value is ${this.maxCust}`
    );
  },
  //calculate avg cookies per person
  getCookiesSoldPerHour: function () {
    //counts total cookies
    totalDailyCookies = 0;
    this.getCustPerHr(); //loads up customer data
    //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
    for (let index = 0; index < this.custPerHour.length; index++) {
      //Calculate number of cookies
      let dailyCookies = Math.floor(
        this.custPerHour[index] * this.avgCookieSale
      );
      //Get a whole number
      this.cookiesSoldPerHr.push(dailyCookies);
      //add to total
      this.totalDailyCookies += dailyCookies;
    }
  },
  render() {
    this.getCookiesSoldPerHour();
    let dataRow = document.createElement("tr"); //this creates a tr node
    let dubaiData = document.createElement("td");
    dubaiData.textContent = "Dubai";
    dataRow.appendChild(dubaiData);
    //for loop to go through bhours array
    for (let i = 0; i < bhours.length; i++) {
      dubaiData = document.createElement("td");
      dubaiData.textContent = this.cookiesSoldPerHr[i];
      dataRow.appendChild(dubaiData);
    }
    dubaiData = document.createElement("td");
    dubaiData.textContent = this.totalDailyCookies;
    dataRow.appendChild(dubaiData);
    table.appendChild(dataRow);
  },
};
//Object literal for Paris location
let Paris = {
  //These are the properties for this object
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  //The arrays should be the same length as the business hours array
  custPerHour: [],
  cookiesSoldPerHr: [],
  totalDailyCookies: 0,

  //These are the methods for calculations
  getCustPerHr: function () {
    //Use the randNumCust method by using 'this'
    //Add each randNumCust to the array where each index aligns with a business hour in the bhours array
    for (let index = 0; index < bhours.length; index++) {
      //Add avg customer value for each hour to the array
      this.custPerHour.push(randNumCust(this.minCust, this.maxCust)); //pass in min & max cust
    }
    //console.log to check if the arrays and functions are working properly
    console.log(
      `The min value is ${this.minCust} the max value is ${this.maxCust}`
    );
  },
  //calculate avg cookies per person
  getCookiesSoldPerHour: function () {
    //counts total cookies
    totalDailyCookies = 0;
    this.getCustPerHr(); //loads up customer data
    //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
    for (let index = 0; index < this.custPerHour.length; index++) {
      //Calculate number of cookies
      let dailyCookies = Math.floor(
        this.custPerHour[index] * this.avgCookieSale
      );
      //Get a whole number
      this.cookiesSoldPerHr.push(dailyCookies);
      //add to total
      this.totalDailyCookies += dailyCookies;
    }
  },
  render() {
    this.getCookiesSoldPerHour();
    let dataRow = document.createElement("tr"); //this creates a tr node
    let parisData = document.createElement("td");
    parisData.textContent = "Paris";
    dataRow.appendChild(parisData);
    //for loop to go through bhours array
    for (let i = 0; i < bhours.length; i++) {
      parisData = document.createElement("td");
      parisData.textContent = this.cookiesSoldPerHr[i];
      dataRow.appendChild(parisData);
    }
    parisData = document.createElement("td");
    parisData.textContent = this.totalDailyCookies;
    dataRow.appendChild(parisData);
    table.appendChild(dataRow);
  },
};
//Object literal for Lima location
let Lima = {
  //These are the properties for this object
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  //The arrays should be the same length as the business hours array
  custPerHour: [],
  cookiesSoldPerHr: [],
  totalDailyCookies: 0,

  //These are the methods for calculations
  getCustPerHr: function () {
    //Use the randNumCust method by using 'this'
    //Add each randNumCust to the array where each index aligns with a business hour in the bhours array
    for (let index = 0; index < bhours.length; index++) {
      //Add avg customer value for each hour to the array
      this.custPerHour.push(randNumCust(this.minCust, this.maxCust)); //pass in min & max cust
    }
    //console.log to check if the arrays and functions are working properly
    console.log(
      `The min value is ${this.minCust} the max value is ${this.maxCust}`
    );
  },
  //calculate avg cookies per person
  getCookiesSoldPerHour: function () {
    //counts total cookies
    totalDailyCookies = 0;
    this.getCustPerHr(); //loads up customer data
    //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
    for (let index = 0; index < this.custPerHour.length; index++) {
      //Calculate number of cookies
      let dailyCookies = Math.floor(
        this.custPerHour[index] * this.avgCookieSale
      );
      //Get a whole number
      this.cookiesSoldPerHr.push(dailyCookies);
      //add to total
      this.totalDailyCookies += dailyCookies;
    }
  },
  render() {
    this.getCookiesSoldPerHour();
    let dataRow = document.createElement("tr"); //this creates a tr node
    let limaData = document.createElement("td");
    limaData.textContent = "Lima";
    dataRow.appendChild(limaData);
    //for loop to go through bhours array
    for (let i = 0; i < bhours.length; i++) {
      limaData = document.createElement("td");
      limaData.textContent = this.cookiesSoldPerHr[i];
      dataRow.appendChild(limaData);
    }
    limaData = document.createElement("td");
    limaData.textContent = this.totalDailyCookies;
    dataRow.appendChild(limaData);
    table.appendChild(dataRow);
  },
};

//Array for city objects
const citylocations = [Seattle, Tokyo, Paris, Lima, Dubai];

//function for total footers
function renderFooter() {
  let footerRow = document.createElement("tr"); //this creates a tr node
  let footerHdr = document.createElement("th");
  footerHdr.textContent = "Totals";
  footerRow.appendChild(footerHdr);

  let grandTotal = 0;
  //for loop to go through bhours array
  for (let i = 0; i < bhours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < citylocations.length; j++) {
      hourlyTotal += citylocations[j].cookiesSoldPerHr[i];
      grandTotal += hourlyTotal;
    }
    footerHdr = document.createElement("th");
    footerHdr.textContent = hourlyTotal;
    footerRow.appendChild(footerHdr);
  }
  footerHdr = document.createElement("th");
  footerHdr.textContent = grandTotal;
  footerRow.appendChild(footerHdr);
  table.appendChild(footerRow);
}

Seattle.render();
Paris.render();
Dubai.render();
Lima.render();
Tokyo.render();

renderFooter();
