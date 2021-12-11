window.onload = function() {
  
  document.querySelector("#crinkleHeader").classList.add ("tp6");
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }
  
  document.querySelector("#crinkleHeader").onclick = function(){
    this.classList.toggle("tp6");
  }
  
  document.querySelector("#footer").innerHTML += "<p>This was not my own recipe.</p>";
} // end of window.onload
