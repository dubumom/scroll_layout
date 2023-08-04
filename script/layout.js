//layout.js

$(document).ready(function(){

  //세로스크롤 값 구하기
  $(window).scroll(function(){

    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos>=900){
      //1.배경색변경
      $('header').addClass('act'); 
      //2.로고변경
      $('header h1 img').attr('src','./images/logo-casper_black.png');
      //3.메뉴, 아이콘 색상변경
      $('header .gnb>li>a, header i.fas').css('color','#333');
    }else{
      $('header').removeClass('act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
      $('header .gnb>li>a, header i.fas').css('color','#fff');
    }
  });

  //화면 스크롤 내리지 않고 헤더에 마우스 오버시 색상변경
    $('header').hover(function(){
      $('header').addClass('act'); 
      $('header h1 img').attr('src','./images/logo-casper_black.png');
      $('header .gnb>li>a, header i.fas').css('color','#333');
    },function(){
      $('header').removeClass('act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
      $('header .gnb>li>a, header i.fas').css('color','#fff');
    });

  //내비게이션 변수선언
  let gnb = $('.gnb li,#m_nav ul li');

  gnb.click(function(){
    let i = $(this).index()+2;
    console.log(i); //2,3,4,5

    $('html,body').animate({scrollTop:$('main section').eq(i).offset().top-70},400,'easeOutCubic');
    return false;
  });

  //모달창
    $(document).ready(function(){
      //1. 모달 변수 생성하기
      const modal = `
        <div class="modal">
          <div class="inner">
            <a href="#" title=""><img src="./images/main_Popup_PC_450x600.jpg" alt=""></a>
            <p>
              <input type="checkbox" id="ch">
              <label for="ch">오늘 하루 열지 않음</label>
              <input type="button" value="닫기" id="c_btn">
            </p>
          </div>
        </div>
      `;

      //모달 변수를 body의 맨 뒤쪽에 출력한다.
      $('body').append(modal);

      //쿠키생성하기
      let ch = $('.modal #ch'); //체크박스 변수
      
      //현재 브라우저에 쿠키정보가 있는지 없는지 유무를 판단하여 모달이 나오지 않게 함.
      if($.cookie('popup')=='none'){
        $('.modal').hide();
      }

      //쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도 숨기기
      function closeModal(){
        if(ch.is(':checked')){ //만약에 체크박스에 체크가 된 경우라면
          //.is(선택자) : 선택자와 일치할 경우 true, 아닐 경우 false (부울함수)
          //쿠키 생성하기
          $.cookie('popup','none',{expires:1, path:'/'});
        }
        //체크박스에 체크 안한 경우 그냥 모달숨기기
        $('.modal').hide();
      }

      //닫기 버튼을 클릭하면 closeModal함수 실행하여 쿠키생성하고 모달 숨기기
      $('.modal #c_btn').click(function(){
        closeModal();
      });
    });

});