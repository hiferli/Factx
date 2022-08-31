$("#flexSwitchCheckDefault").change(function(e) {
  if(this.checked) {
    // document.getElementById("mode").href="darkTheme.css";
    $("#mode").prop("href" , "darkTheme.css");
    localStorage.setItem("Theme" , "Dark")
  } else {
    // document.getElementById("mode").href="style.css";
    $("#mode").prop("href" , "lightTheme.css");
    localStorage.setItem("Theme" , "Light")
  }
  
  });

  
  // When dark, 
  // Variable is true
  // Since had there been no dark mode
  // Thou Shall have no button
  //                ~ Sun Tzu
  //                ~ The Art of War