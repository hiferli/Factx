$("#flexSwitchCheckDefault").change(function() {
    if(this.checked) {
      // document.getElementById("mode").href="darkTheme.css";
      $("#mode").prop("href" , "darkTheme.css");
    } else {
      // document.getElementById("mode").href="style.css";
      $("#mode").prop("href" , "style.css");
    }
  });