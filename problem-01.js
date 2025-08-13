function totalFine( fare ) {
          // You have to write your code here
          if (typeof fare != "number" || fare <= 0){
            return "Invalid";
          }
        let surCharge = fare * 20 / 100 ;
          let servicesCharge = 30;
          let total = fare + surCharge + servicesCharge;
          return total;  

}

const result = totalFine(200);
console.log(result);