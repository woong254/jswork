let uId = document.querySelector('#user-id')
let pw1 = document.querySelector('#user-pw1')
let pw2 = document.querySelector('#user-pw2')
uId.onchange = idch;
pw1.onchange = pw1ch;
pw2.onchange = pw2ch;
function idch(){
  let idlen = uId.value.length;
  if(idlen < 4 || idlen > 15){
    alert('4글자 이상 15글자 이하로 입력해주세요.')
    uId.select();
  }
}
function pw1ch(){
  let pw1len = pw1.value.length;
  if(pw1len < 8){
    alert('8자리 이상으로 입력해주세요')
    pw1.value= '';
    pw1.focus();
  } 
}
function pw2ch(){
  if(pw2.value != pw1.value){
    alert('비밀번호가 일치하지 않습니다')
    pw2.value= '';
    pw2.focus();
  } 
}