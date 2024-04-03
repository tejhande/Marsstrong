function openNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "0%";
}

function showMapsAlert() {
	alert("Redirecting To Google Maps!");
  }
  
  document.getElementById("explore_button").addEventListener("click", showMapsAlert);
  
function showWebsiteAlert() {
	alert("Redirecting To Creators Portfolio Website!");
  }
  
  document.getElementById("website").addEventListener("click", showWebsiteAlert);
  
function myFunc(){
	alert(`Welcome To Marsstrong`);
}

function form_submit(event) {
    event.preventDefault(); 
    var form = document.getElementById("myForm");
    if (form.checkValidity()) {
        window.location.href = 'success.html';
    } else {
        alert("Please fill out all required fields correctly.");
    }
    
    return false; 
}

// Tejas Hande
// tejasamolhande@gmail.com
// 8600828734