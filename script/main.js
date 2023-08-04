//main.js

//next_btn을 클릭하면 top3가 상단으로 애니메이션되면서 올라오게 한다.

$(document).ready(function(){

  $('.next_btn').click(function(e){
    e.preventDefault(); //방법1

  $('html, body').animate({scrollTop:$('#top3').offset().top-70},500,'easeOutQuint');

  return false;// 방법2
  });

  //이벤트 무력화 방법
  //a태그의 #때문에 클릭시 새로고침되는 현상이 발생되는데
  //이런 경우는 함수의 마지막에 return false를 넣어주는 방법과
  //e(이벤트 객체)를 사용하여 e.preventDefault();를 작성해주는 방법이 있다.

}); 
