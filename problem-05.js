function  resultReport( marks ) {
          // You have to write your code here
          if(Array.isArray(marks) === false){
            return  "Invalid";
          }
          // === 0
          if(marks.length ){

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


    //       for(let i = 0; i < marks.length; i++){
    //         total  += marks[i];
    //         if(marks[i] >= 40){
    //             passCount++;
    //         }
    //         else{
    //             failCount++;
    //         }
    //       }
    //       let avg = Math.round(total / marks.length);
    // return {
    //     finalScore : avg,
    //     pass : passCount,
    //     fail : failCount
    // };
}

// const final = resultReport([]);
// console.log(final);
console.log(resultReport([]));