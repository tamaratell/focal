const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

// const calculateSalesTax = (salesData, taxRates) => {
//   const result = {};
//   let sum = 0;

//   for (const data in salesData) {
//     const companyData = salesData[data];
//     const companyName = companyData.name;

//     const companySales = companyData.sales;

//     result[companyName] = {
//       totalSales: companySales,
//       totalTax: 0
//     }; //so far, this creates the object setup but the problem is that it makes company sales only the same as the last telus object and doesn't include the first one. 

//   }


//   console.log(result);
// };

const calculateSalesTax = (salesData, taxRates) => {
  const result = {};

  for (const data of salesData) {
    const companyName = data.name;
    const province = data.province;
    const sales = data.sales.reduce((total, num) => total + num, 0);

    if (result[companyName]) {
      result[companyName].totalSales += sales;
    } else {
      result[companyName] = {
        totalSales: sales,
        totalTax: sales * taxRates[province]
      };
    }
  }
  console.log(result);
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));


//EXPECTED:
// result = {
//   Telus: {
//     totalSales = 1300,
//       totalTaxes = 144;
//   },
//   Bombardier: {
//     totalSales = 800,
//       totalTaxes = 40;
//   }
// }