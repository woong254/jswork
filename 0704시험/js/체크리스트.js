let its = document.querySelector('#item');
let abtn = document.querySelector('#add');

let itbox = [];

abtn.onclick = additem;

function additem(){
  if(its.value == ''){
    alert('문자를 입력해주세요')
  }else if(itbox.indexOf(its.value) != -1){
    alert('중복된 물건입니다')
  }else{
    itbox.push(its.value)
    its.value = '';
    its.focus();
    show();
  }
}

function show() {
  let list = `<ul>`
  for(let i=0; i < itbox.length; i++){
    list += `<li>${itbox[i]}
    <span class='close' id= ${i}>X</span></li>`
  }
  list += '</ul>'
  document.querySelector('#itemList').innerHTML = list;
}
function delit() {
  let 
}
   