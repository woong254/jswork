//input 상자 접근
let uId = document.querySelector('#user-id');
let pw1 = document.querySelector('#user-pw1');
let pw2 = document.querySelector('#user-pw2');
//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
uId.onchange = idchc;
pw1.onchange = pw1chc;
pw2.onchange = pw2chc;
// id 길이 체크
function idchc(){
  let idlen = uId.value.length;
  if(idlen < 3 || idlen > 10){
    alert('3글자 이상 10글자 이하로 입력해주세요')
    uId.select();
  }
}
//비밀번호 길이 체크
function pw1chc(){
  let pwlen = pw1.value.length;
  if(pwlen < 4){
    alert('4자리 이상으로 입력하세요')
    pw1.value = '';
    pw1.focus();
  }
}
// 비밀번호가 맞는지 확인
function pw2chc(){
  if(pw1.value != pw2.value)
    alert('비밀번호가 일치하지 않습니다')
    pw2.value = '';
    pw2.focus();
}