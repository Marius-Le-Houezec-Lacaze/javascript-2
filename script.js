let i = 1
let foot = document.getElementsByTagName("footer")[0];
let nav = document.getElementsByTagName("header")[0];
let css = document.getElementsByTagName("link")[0];
let ham = document.getElementById("navbarHeader");
let collapse_btn = document.getElementsByClassName("navbar-toggler")[0];
let edit =  document.getElementsByClassName("btn-outline-secondary")[0]; 
let edit_2 =  document.getElementsByClassName("btn-outline-secondary")[1]; 
let album = document.querySelector(".album .row");
let range = album.childNodes.lenght - 1;
let right = document.querySelectorAll(".my-2")[1];
let left = document.querySelectorAll(".my-2")[0];

left.removeAttribute("href");

function click(){
  console.log("click");
  console.log(`Click numero ${ i++ }`)
}

function collapse(){
  if (ham.classList.contains("collapse")){ 
    ham.classList.remove("collapse")
  } else {
    ham.classList.add("collapse")
  }
}

function color(){
  edit.classList.add("text-danger");
}

function green(){
  if (edit_2.classList.contains("text-success")){ 
  edit_2.classList.remove("text-success");
  } else { 
  edit_2.classList.add("text-success");
}
}

function nuke(){
  if (css.getAttribute("href") != null){
  css.removeAttribute("href");
  } else {
    css.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  }
}

document.querySelectorAll('.card').forEach(item => {
  let btn = item.getElementsByTagName("button")[0];
  let p =  item.querySelector(".card-text");
  let img = item.querySelector(".card-img-top");
  btn.addEventListener('mouseover', function(){
    if (p.style.display != "none"){ 
      p.style.display = "none";
      img.style.width = "20%";
    } else {
      p.style.display = "";
      img.style.width = "100%";
    }
  });
})

function before(){
  album.insertBefore(album.lastChild, album.childNodes[0])
}

function after(){
  album.insertBefore(album.firstChild, album.childNodes.nextSibling);
}

function getSelectedText() {
  return window.getSelection ? window.getSelection() 
                             : document.selection.createRange().text;
}

function action() {
  if (window.getSelection().anchorNode.data === "JS & Events"){
    addEventListener('keypress', function(e) {
      switch(e.code){
        case 'KeyQ':
          document.body.className = "";
          document.body.classList.add("col-md-4");
          break;
        case 'KeyY':
          document.body.className = "";
          document.body.classList.add("offset-4", "col-md-4");
          break;
        case 'KeyP':
          document.body.className = "";
          document.body.classList.add("offset-8", "col-md-4");
          break;
        case 'KeyB':
          document.body.className = "";
          break;
      }
    })
  }
}

addEventListener('mouseup', action, false)
foot.addEventListener("click", click, false);
nav.addEventListener("dblclick", nuke, false);
collapse_btn.addEventListener("click", collapse, false);
edit.addEventListener("click", color, false);
edit_2.addEventListener("click", green, false);
right.addEventListener("click", before, false);
left.addEventListener("click", after, false);





