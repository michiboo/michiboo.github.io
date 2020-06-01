function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

window.onload = type_char;
setInterval(type_char, 500);

function add_text(content, anime){
    anime.appendChild(content);
}


function type_char() {
var a = ['print("Hello, World!")', "alert( 'Hello, world!');"];
for(var i = 0; i < a.length; i++){
    for(var k = 0; k < a[i].length; k ++){
        var c = a[i][k];
        add_text(document.createTextNode(c), document.getElementById("anime"))
    }
    if(i%2 == 0 && i > 0)
    anime.appendChild(document.createElement('br'));
}
}