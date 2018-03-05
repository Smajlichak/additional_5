module.exports = function check(str, bracketsConfig) {
 module.exports = function check(str, bracketsConfig) {
  var strl = str.length, configl = bracketsConfig.length;
  for (var n = 0; n < configl; n++){
    var count = 0;
    for (var i = 0; i < strl; i++){
      if (str[i] == bracketsConfig[n][0]){
      count ++;
      }
      if (str[i] == bracketsConfig[n][1]){
      count --;
      if (count < 0){
        break;
      }
      } 
    }
    if (count > 0 || count< 0){
      return false;
      break;
    }
  }
  if (count == 0){
    return true;
  }
}
}
