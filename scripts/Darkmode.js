const drakmode_button = document.getElementById("drakmode_button")
const html = document.querySelector("html")

var drakmode = false

drakmode_button.addEventListener("click",e=>{
  drakmode=!drakmode
  html.className = drakmode?"dark":""
  drakmode.classList.remove("animate-ping")
  void drakmode.offsetWidth
  drakmode.classList.add("animate-ping")
})
