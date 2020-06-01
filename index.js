function play() {
    document.querySelector(".box").className = "box";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector(".box").className = "box changing";
      });
    });
  }
  document.querySelector(".runButton").addEventListener("click", play, false);

  function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}


function dynamicallyLoadStyle(url) {
    var script = document.createElement("link");  // create a script DOM node
    script.rel = 'stylesheet';  // set its src to the provided URL
    script.href= url;
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function template(){
    var nav_bar = document.createElement("div");
    nav_bar.setAttribute("class", "nav_bar");
    var img = document.createElement('img');
    img.setAttribute('src', './images/signature.png');
    nav_bar.appendChild(img);
    var nav_list = document.createElement("ul");
    add_item_ul(nav_list);
    nav_bar.appendChild(nav_list);
    document.body.insertBefore(nav_bar, document.body.childNodes[0]);
}


function add_item_ul(nav_list) {
    arr = ['Home', 'Education', 'Experience', 'Project', 'Open Source', 'Contact me'].reverse();
    for(var i = 0; i < arr.length; i ++){
        var opt = document.createElement('li');
        var a_tag = document.createElement('a');
        a_tag.appendChild(document.createTextNode(arr[i]));
        a_tag.setAttribute("href",'');
        opt.appendChild(a_tag);
        nav_list.appendChild(opt); 
      }
  } 

  template();
  dynamicallyLoadStyle('./css/nav_bar.css');
  dynamicallyLoadStyle('./css/anime.css');
  dynamicallyLoadScript('./js/anime.js');