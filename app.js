//function for random # of customers within range of data given
function randNumCust(minCust, maxCust) {
  return(Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust);
}

//Array that will be used to keep up with the sales numbers per hr
const bhours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

//Object literals for each store location
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
       this.custPerHour.push(randNumCust)(this.minCust, this.maxCust);//pass in min & max cust
     }
     //console.log to check if the arrays and functions are working properly
    console.log( `The min value is ${this.minCust} the max value is ${this.maxCust}`);
    },
    //calculate avg cookies per person
    getCookiesSoldPerHour: function () {
      //counts total cookies
      totalDailyCookies = 0;
      this.getCustPerHr();//loads up customer data
      //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
      for (let index = 0; index < this.custPerHour.length; index++) {
        //Calculate number of cookies
        let dailyCookies = Math.floor(this.custPerHour[index] * this.avgCookieSale);
        //Get a whole number
        this.cookiesSoldPerHr.push(dailyCookies);
        //add to total
        this.totalDailyCookies+=dailyCookies;
      }
    },
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById('seattle');
      for (let i = 0; i < bhours.length; i++) {
        const listItem = document.createElement('li');
        //6am: 16 cookies
        listItem.textContent = bhours[i] + ': ' + this.cookiesSoldPerHr[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }

}
//Object literals for each store location
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
       this.custPerHour.push(randNumCust)(this.minCust, this.maxCust);//pass in min & max cust
     }
     //console.log to check if the arrays and functions are working properly
    console.log( `The min value is ${this.minCust} the max value is ${this.maxCust}`);
    },
    //calculate avg cookies per person
    getCookiesSoldPerHour: function () {
      //counts total cookies
      totalDailyCookies = 0;
      this.getCustPerHr();//loads up customer data
      //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
      for (let index = 0; index < this.custPerHour.length; index++) {
        //Calculate number of cookies
        let dailyCookies = Math.floor(this.custPerHour[index] * this.avgCookieSale);
        //Get a whole number
        this.cookiesSoldPerHr.push(dailyCookies);
        //add to total
        this.totalDailyCookies+=dailyCookies;
      }
    },
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById('seattle');
      for (let i = 0; i < bhours.length; i++) {
        const listItem = document.createElement('li');
        //6am: 16 cookies
        listItem.textContent = bhours[i] + ': ' + this.cookiesSoldPerHr[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }

}
//Object literals for each store location
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
       this.custPerHour.push(randNumCust)(this.minCust, this.maxCust);//pass in min & max cust
     }
     //console.log to check if the arrays and functions are working properly
    console.log( `The min value is ${this.minCust} the max value is ${this.maxCust}`);
    },
    //calculate avg cookies per person
    getCookiesSoldPerHour: function () {
      //counts total cookies
      totalDailyCookies = 0;
      this.getCustPerHr();//loads up customer data
      //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
      for (let index = 0; index < this.custPerHour.length; index++) {
        //Calculate number of cookies
        let dailyCookies = Math.floor(this.custPerHour[index] * this.avgCookieSale);
        //Get a whole number
        this.cookiesSoldPerHr.push(dailyCookies);
        //add to total
        this.totalDailyCookies+=dailyCookies;
      }
    },
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById('seattle');
      for (let i = 0; i < bhours.length; i++) {
        const listItem = document.createElement('li');
        //6am: 16 cookies
        listItem.textContent = bhours[i] + ': ' + this.cookiesSoldPerHr[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }

}
//Object literals for each store location
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
       this.custPerHour.push(randNumCust)(this.minCust, this.maxCust);//pass in min & max cust
     }
     //console.log to check if the arrays and functions are working properly
    console.log( `The min value is ${this.minCust} the max value is ${this.maxCust}`);
    },
    //calculate avg cookies per person
    getCookiesSoldPerHour: function () {
      //counts total cookies
      totalDailyCookies = 0;
      this.getCustPerHr();//loads up customer data
      //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
      for (let index = 0; index < this.custPerHour.length; index++) {
        //Calculate number of cookies
        let dailyCookies = Math.floor(this.custPerHour[index] * this.avgCookieSale);
        //Get a whole number
        this.cookiesSoldPerHr.push(dailyCookies);
        //add to total
        this.totalDailyCookies+=dailyCookies;
      }
    },
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById('seattle');
      for (let i = 0; i < bhours.length; i++) {
        const listItem = document.createElement('li');
        //6am: 16 cookies
        listItem.textContent = bhours[i] + ': ' + this.cookiesSoldPerHr[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }

}
//Object literals for each store location
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
       this.custPerHour.push(randNumCust)(this.minCust, this.maxCust);//pass in min & max cust
     }
     //console.log to check if the arrays and functions are working properly
    console.log( `The min value is ${this.minCust} the max value is ${this.maxCust}`);
    },
    //calculate avg cookies per person
    getCookiesSoldPerHour: function () {
      //counts total cookies
      totalDailyCookies = 0;
      this.getCustPerHr();//loads up customer data
      //the loop loads up cookiesSoldPerHour by iterating through avg customer per hour array
      for (let index = 0; index < this.custPerHour.length; index++) {
        //Calculate number of cookies
        let dailyCookies = Math.floor(this.custPerHour[index] * this.avgCookieSale);
        //Get a whole number
        this.cookiesSoldPerHr.push(dailyCookies);
        //add to total
        this.totalDailyCookies+=dailyCookies;
      }
    },
    render() {
      this.getCookiesSoldPerHour();
      const unorderedList = document.getElementById('seattle');
      for (let i = 0; i < bhours.length; i++) {
        const listItem = document.createElement('li');
        //6am: 16 cookies
        listItem.textContent = bhours[i] + ': ' + this.cookiesSoldPerHr[i] + ' cookies';
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
      unorderedList.appendChild(listItem);
    }

}