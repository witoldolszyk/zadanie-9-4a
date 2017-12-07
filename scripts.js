function drawtree(t){
  for (var  i = 0; i < t ; i++) {
    var star = '';
    for ( var j = 0; j < i; j++) {
      star += "*";
      }
     console.log(star)
     }
 
  }
  drawtree(5)
