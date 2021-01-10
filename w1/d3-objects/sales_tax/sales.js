const calculateSalesTax = function(salesData,taxRates) {
  let expectedresult = {};
  for (let item of salesData) {
    if (expectedresult[item.name]) {
      expectedresult[item.name]["totalsales"] += listadd(item.sales);
      expectedresult[item.name]["totalTaxes"] += taxtotal(item.province,listadd(item.sales));
    } else {
      expectedresult[item.name] = {};
      expectedresult[item.name]["totalsales"] = listadd(item.sales);
      expectedresult[item.name]["totalTaxes"] = taxtotal(item.province,expectedresult[item.name]["totalsales"]);
    }
    
  }
  return expectedresult;
};


const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
  
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
const listadd = function(array) {
  let totalsales = 0;
  for (let num of array) {
    totalsales += num;
  }
  return totalsales;
};

const taxtotal = function(province, sales) {
    
  let rate = salesTaxRates[province];
  return rate * sales;

};
console.log(calculateSalesTax(companySalesData,salesTaxRates));
