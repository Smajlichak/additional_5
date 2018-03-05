module.exports = function check(str, bracketsConfig) {
  var strl = str.length, configl = bracketsConfig.length, openBrackets = [0];
  if (strl%2){
    return false;
  }
  for (var i = 0; i < strl; i++){
    for (var n = 0; n < configl; n++){
      if (str[i] ==  bracketsConfig[n][0]){
        openBrackets.push(str[i]);
      }
      if (str[i] ==  bracketsConfig[n][1]){

 var last = openBrackets.pop();
         if (bracketsConfig[n][0] == last){

 			continue;
         }
         else{
           return false;
         }
       }
     }
     if (i == (strl - 1) && openBrackets.length == 1){
       return true;
   }
   }
 }
