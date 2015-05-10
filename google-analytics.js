
var currentScript = document.currentScript;
if(!currentScript) {  //  IE
  var scripts = document.getElementsByTagName( 'script' );
  currentScript = scripts[ scripts.length - 1 ];
}
console.log(currentScript);
