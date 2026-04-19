// 1
function totalFine( fare ) {
         
          if (typeof fare != "number" || fare <= 0){
            return "Invalid";
          }
        let surCharge = fare * 20 / 100 ;
          let servicesCharge = 30;
          let total = fare + surCharge + servicesCharge;
          return total;  

}
// 2
function  onlyCharacter( str ) {
         
        if (typeof str !== "string" ){
          return "Invalid";
        }
return str.split(' ').join('').toUpperCase();
}

// 3
function  bestTeam( player1, player2 ) {
          
         if(typeof player1 !== 'object' || typeof player2 !== 'object' ){
           return  "Invalid";
         }
        const totalPlayer1 = player1.foul + player1.cardY + player1.cardR ;
        const totalPlayer2 = player2.foul + player2.cardY + player2.cardR ;

         if( totalPlayer1 < totalPlayer2){
            return player1.name;
         }
         else  if(totalPlayer1 > totalPlayer2){
            return player2.name;
         }
         else if(totalPlayer1 === totalPlayer2) {
           return  "Tie";
         }

}
// 4
function  isSame(arr1 , arr2 ) {
          
          if (Array.isArray(arr1) === false || Array.isArray(arr2) === false){
            return "Invalid";

          }
        if(arr1.length !== arr2.length) {
            return false;
        } 
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
}

// 5
function  resultReport( marks ) {
         
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
