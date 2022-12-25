// ===== Toggle class =====

function toggle_class() {
  document.getElementById("position_fixed").classList.toggle("position_fixed");
  document.getElementById("body").classList.toggle("new_body");
  document.getElementById("main").classList.toggle("main");
  document.getElementById("burger").classList.toggle("open");
}

// ===== On hover scroll spy =====

function redirect_hover_home() {
  const element = document.getElementById("home");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

function redirect_hover_about() {
  const element = document.getElementById("about");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

function redirect_hover_service() {
  const element = document.getElementById("service");
  element.scrollIntoView({
    behavior: "smooth"
  });
}

// ===== "S" keypress open menu =====

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('keyup', activated);
});


function activated(event) {
  if (event.keyCode == 83 || event.type == 'click') {
    document.getElementById("position_fixed").classList.toggle("position_fixed");
    document.getElementById("body").classList.toggle("new_body");
    document.getElementById("main").classList.toggle("main");
    document.getElementById("burger").classList.toggle("open");
  }
}

// ===== Notification for open menu  =====

window.onload = function () {
  setTimeout(function () {
    document.getElementById("hideDiv").style.display = " none";
    document.getElementById("hideDiv").style.transition = "2s";
  }, 5000);
}

// ===== Pre loader  =====

// window.addEventListener("load", function () {
//   const preloader = document.querySelector(".preloader");
//   preloader.className += " hidden";
// });


// ======= Back to top ======

window.addEventListener('scroll', function () {
  var scrolled = window.scrollY;
  if (scrolled > 150) {
    document.querySelector('.go-top').style.display = 'block';
  } else {
    document.querySelector('.go-top').style.display = 'none';
  }
});

document.querySelector('.go-top').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// ====== Dark / Light Theme ======

var darkMode = false;

// default to system setting
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkMode = true;
}

// preference from localStorage should overwrite
if (localStorage.getItem('theme') === 'dark') {
  darkMode = true;
} else if (localStorage.getItem('theme') === 'light') {
  darkMode = false;
}

if (darkMode) {
  document.body.classList.toggle('dark');
}


document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

});






