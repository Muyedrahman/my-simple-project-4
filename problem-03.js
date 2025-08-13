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

const total = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"



);

console.log(total);