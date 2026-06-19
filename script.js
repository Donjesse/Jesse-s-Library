const searchInput = document.getElementById("searchInput");  
  
searchInput.addEventListener("keyup", function () {  
  
let value = this.value.toLowerCase();  
  
document.querySelectorAll(".card").forEach(card => {  
  
let text = card.innerText.toLowerCase();  
  
if(text.includes(value)){  
card.style.display = "block";  
}else{  
card.style.display = "none";  
}  
  
});  
  
});  
  
document.getElementById("darkModeBtn").addEventListener("click", () => {  
document.body.classList.toggle("dark");  
});  
