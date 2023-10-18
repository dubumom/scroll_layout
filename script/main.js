//main.js

$(document).ready(function(){


//next_btn을 클릭하면 top3가 상단으로 애니메이션되면서 올라오게 한다.

  $('.next_btn').click(function(){
    //e.preventDefault();

    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500, 'easeOutQuint');

    return false;
  });

//이벤트 무력화 방법
//a태그의 #때문에 클릭시 새로고침되는 현상이 발생되는데
//이런경우는 함수의 마지막에 return false를 넣어주는 방법과
//e(이벤트 객체)를 사용하여 e.preventDefault();를 작성해주는 방법이 있다.

  // 이벤트배너 구현
  const e_banner = $('.e_banner > ul');
  const c_btn = $('.e_banner .ctrl_btn span');
  let i = $('.e_banner .ctrl_btn span').index();
  let e_w = $('.e_banner').width(); //1200
  // console.log(i); //0

  function moveLeft(){
    if(i==3){
      i=0;
    }else {
      i++;
    }
    let mv= -(e_w*i);
    // console.log(mv); //0,1,2,3....
    e_banner.animate({'left':mv},500);

    c_btn.removeClass('act_1');
    $('.ctrl_btn span').eq(i).addClass('act_1');//해당하는 콘트롤 버튼 서식에 적용
  }


  // 1.콘트롤 버튼을 클릭하면 해당 이미지가 나오게
  c_btn.click(function(){ //콘트롤 버튼 클릭 시
    i = $(this).index(); //해당 인덱스값을 변수에 담아서

    clearInterval(Timer); //자동으로 움직이는 것을 막는다.

    let mv= -(e_w*i);
    // console.log(i); //0,1,2,3....
    e_banner.animate({'left':mv},500);

    moveLeft(i); //함수로 넘겨준다

    c_btn.removeClass('act_1');
    $(this).addClass('act_1');
    
  });
  // 2. 자동으로 움직이게 시간객체를 사용
  let Timer = setInterval(moveLeft,3000);
  
  // 3. 콘트롤 버튼을 클릭 시 시간 제거하여 멈추게 하고 마우스 오버 시 다시 시간을 재생하여 움직이게 한다.
  c_btn.mouseleave(function(){
    clearInterval(Timer);
    Timer = setInterval(moveLeft,3000);
  });

  // 배너
  b_num = Math.floor(Math.random()*5)+1;
  document.getElementById('b_img').src=`./images/banner${b_num}.jpg`;

  $(window).scroll(function(){
    let sPos=Math.ceil((($(this).scrollTop()/$(this).height())*100));
    console.log(sPos);

    if(sPos>=157 && sPos<=222){
      $('#m_nav > ul > li:first-child').css('width','200px');
    } else {
      $('#m_nav > ul > li:first-child').css('width','40px');
    }

    if(sPos>=223 && sPos<=287){
      $('#m_nav > ul > li:nth-child(2)').css('width','200px');
    } else {
      $('#m_nav > ul > li:nth-child(2)').css('width','40px');
    }

    if(sPos>=288 && sPos<=330){
      $('#m_nav > ul > li:nth-child(3)').css('width','200px');
    } else {
      $('#m_nav > ul > li:nth-child(3)').css('width','40px');
    }

    if(sPos>=331 && sPos<=465){
      $('#m_nav > ul > li:nth-child(4)').css('width','200px');
    } else {
      $('#m_nav > ul > li:nth-child(4)').css('width','40px');
    }

    if(sPos>=466 && sPos<=559){
      $('#m_nav > ul > li:last-child').css('width','200px');
    } else {
      $('#m_nav > ul > li:last-child').css('width','40px');
    }
  });
});