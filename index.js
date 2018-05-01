import api from './api'

let confirm =document.getElementById("confirm_button");
confirm.addEventListener("click",function () {
   api.request();
});





