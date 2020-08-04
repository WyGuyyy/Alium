  document.getElementById('btnHome').onclick = function() {goHome();}

  document.getElementById('btnAbout').onclick = function() {goAbout();}

  document.getElementById("btnContact").onclick = function() {goContact();}

  document.getElementById('btnRecruit').onclick = function() {goRecruit();}

  document.getElementById('btnForum').onclick = function() {goForum();}

  document.getElementById('btnPromote').onclick = function() {goPromote();}

  document.getElementById('btnSignUp').onclick = function() {goSignUp();}

  document.getElementById('btnSignUp1').onclick = function() {goSignUp();}

  document.getElementById('btnSignUp2').onclick = function() {goSignUp();}

  document.getElementById('btnReadMore').onclick = function() {goAbout();}

  document.getElementById('btnLearnMore').onclick = function() {goPromote();}

  function goHome(){
    window.location.href = 'index.html';
  }

  function goAbout(){
    window.location.href = 'about.html';
  }

  function goContact(){
    console.log("hi");
    window.location.href = 'contact.html';
  }

  function goRecruit(){
    window.location.href = 'find_user.html';
  }

  function goForum(){
    window.location.href = 'forum.html';
  }

  function goPromote(){
    window.location.href = 'promote.html';
  }

  function goSignUp(){
    window.location.href = 'sign_up.html';
  }