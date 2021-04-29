var master = [
  "academicsdiv",
  "infodiv",
  "admsdiv",
  "facultydiv",
  "ugdiv",
  "pgdiv",
];
function primary(name, radio) {
  var arr = ["academicsdiv", "infodiv", "admsdiv", "facultydiv"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    //alter.style.display = "none";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) {
        var alter = document.getElementById(arr[i]);
        alter.style.display = "none";
      }
    }
  }
}

function academics(name, radio) {
  var arr = ["ugdiv", "pgdiv"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var x = document.getElementById("academicsdiv");
  x.style.display = "block";
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    //alter.style.display = "none";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) {
        var alter = document.getElementById(arr[i]);
        alter.style.display = "none";
      }
    }
  }
}

function info(name, radio) {
  var arr = ["clgaddr", "contactinfo", "web"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var x = document.getElementById("infodiv");
  x.style.display = "block";
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) {
        var alter = document.getElementById(arr[i]);
        alter.style.display = "none";
      }
    }
  }
}

function admission(name, radio) {
  var arr = ["brochure", "appform", "moreinfo"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var x = document.getElementById("admsdiv");
  x.style.display = "block";
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) {
        var alter = document.getElementById(arr[i]);
        alter.style.display = "none";
      }
    }
  }
}

function faculty(name, radio) {
  var arr = ["bsc", "bcom", "msc", "mcom"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var x = document.getElementById("facultydiv");
  x.style.display = "block";
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) {
        var alter = document.getElementById(arr[i]);
        alter.style.display = "none";
      }
    }
  }
}

function undergrad(name, radio) {
  var arr = ["b.sc", "b.com"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var x = document.getElementById("ugdiv");
  x.style.display = "block";
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) var alter = document.getElementById(arr[i]);
      alter.style.display = "none";
    }
  }
}

function postgrad(name, radio) {
  var arr = ["m.sc", "m.com"];
  for (var i = 0; i < master.length; i++) {
    if (master[i] in arr) continue;
    else {
      var x = document.getElementById(master[i]);
      x.style.display = "none";
    }
  }
  var x = document.getElementById("pgdiv");
  x.style.display = "block";
  var text = document.getElementById(name);
  var rad = document.getElementById(radio);
  if (rad.checked == true) {
    text.style.display = "block";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != name) var alter = document.getElementById(arr[i]);
      alter.style.display = "none";
    }
  }
}
