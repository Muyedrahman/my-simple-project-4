// function  onlyCharacter( str ) {
//           // You have to write your code here
//         if (typeof str !== "string" ){
//           return "Invalid";
//         }
// return str.split(' ').join('').toUpperCase();
// }

// const result = onlyCharacter(true);
// console.log(result);


// PRO-5
function  resultReport( marks ) {
          // You have to write your code here
          if(Array.isArray(marks) === false){
            return  "Invalid";
          }
          // === 0
          if(marks.length === 0){

            return { finalScore: 0 , pass: 0, fail: 0} 
          }

          let total = 0;
          let passCount = 0;
          let failCount = 0;

          for (let mark of marks){
            total += mark;
            if(mark >= 40){
              passCount++;
            }
            else{
              failCount++;
            }

          }

          return {
            finalScore: Math.round(total / marks.length),
            pass: passCount,
            fail: failCount
          };
}

// const final = resultReport([]);
// console.log(final);
console.log(resultReport([]));
