/* gallery.js */
$(function(){
  // 초기화(첫번째 이미지만 출력)
  $('.gallery img').hide().eq(0).show();

  var imgNum = 0; // 이미지 번호
  var pauseTime = 4000; // 정지 시간

  // 이미지 변경 함수 changeGallery(이미지 번호)
  function changeGallery(imgNum) {
    $('.gallery img').stop().fadeOut().eq(imgNum).fadeIn();

    /* 인디케이터 버튼 스타일 */
    $('.indicator li').removeClass('active');
    $('.indicator li').eq(imgNum).addClass('active');
  }

  // 추가 기능: 자동재생 기능
  setInterval(function(){
    imgNum = imgNum + 1;
    if(imgNum > 2) { imgNum = 0;}
    changeGallery(imgNum); 
  }, pauseTime);

  // 인디케이터 버튼1 -> 첫번째 배너
  $('.indicator li').eq(0).click(function(){
    changeGallery(0);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
  })
  // 인디케이터 버튼2 -> 두번째 배너
  $('.indicator li').eq(1).click(function(){
    changeGallery(1);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
  })
  // 인디케이터 버튼3 -> 두번째 배너
  $('.indicator li').eq(2).click(function(){
    changeGallery(2);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');    
  })
     

});