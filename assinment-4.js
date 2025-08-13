// 1
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
// 2
function  onlyCharacter( str ) {
          // You have to write your code here
        if (typeof str !== "string" ){
          return "Invalid";
        }
        let result = "";
        for(let i = 0; i < str.length; i++ ){
          let character = str[i] ;
          if( character !== " "){
          result += character.toUpperCase();
          }

        }
return result;
}
// 3
function  bestTeam( player1, player2 ) {
          // You have to write your code here
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
          // You have to write your code here
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