
//Toggles the sidebar
function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
}

//Creates  a fixed header
window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var fixedHeader = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >fixedHeader ) {
    header.classList.add("fixedHeader");
  } else {
    header.classList.remove("fixedHeader");
  }
}

//Open Slide menu
function openSideMenu(){
  document.getElementById('side-menu').style.width = '250px';

  document.getElementById('main').style.marginLeft = '250px';
}


//Close Slide menu
function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';

  document.getElementById('main').style.marginLeft = '0';
}
