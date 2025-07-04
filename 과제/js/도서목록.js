// 입력상자와 버튼에 접근
let bt = document.querySelector('#book');
let aBtn = document.querySelector('#add');

// 도서 목록 저장 배열 생성
let bts = [];

// 추가 버튼에 클릭 이벤트 연결
aBtn.onclick = addBook;
// 배열에 도서 목록 추가
function addBook(){
  if(bt.value == ''){
    alert('책 제목을 입력하세요');
    bt.focus();
  }else if(bts.indexOf(bt.value) != -1){
    alert('중복된 책입니다');
  } else{
    bts.push(bt.value);    
  }
  bt.value = '';
  bt.focus()
  show();
}
// 문서에 도서목록 출력(<ul><li>)
function show(){
  let list = `<ul>`;
  for(let i=0; i<bts.length; i++){
    list += `<li>${bts[i]}
    <span class= 'del' id=${i}>삭제</span></li>`
  }
  list += `</ul>`;
  document.querySelector('#bookList').innerHTML = list;
  
  let delist = document.querySelectorAll('.del');
  // console.log(delist);
  for(let ele of delist){
    ele.onclick = remove;
  }
}



// 문서에 도서 목록 삭제
function remove(){
  let delNum = this.getAttribute('id');
  bts.splice(delNum,1);
  show();
}

