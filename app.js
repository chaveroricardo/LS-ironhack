var nickName = document.getElementById('nickName');
var useNickName = localStorage.getItem('nickName');

window.onload = function (){
  if (localStorage.getItem('nickName') != null){
    nickName.innerHTML = useNickName;
  }
}

function registrarUsuario(){

  if(userName != ""){
    /*Saving in local storage*/
    localStorage.setItem('nickName', userName);
    nickName.innerHTML = userName;

  }else{
    alert('Ingresa un nombre válido');
  }
}

function clearLS(){
  nickName.innerHTML = '';
  localStorage.clear();
}