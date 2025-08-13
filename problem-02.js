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

const result = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(result);
