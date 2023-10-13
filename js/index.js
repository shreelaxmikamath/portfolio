function myFunction(x) {
    if (x.matches) { 
      document.body.getElementsById('img').src="profile1.png";
    }
  }
  
  var x = window.matchMedia("(max-width: 800px)")
  myFunction(x) 