// main_ver1.1.js
// event메뉴 화면 회전

(function($){
  var lBtn = $('.l_btn');
  var rBtn = $('.r_btn');
  var timed = 600;
  var ul_grp = $('#eventBox').children('ul');
  var li_grp = ul_grp.children('li');
  var ul_grp_marginLeft = parseInt(ul_grp.css('marginLeft'));
  var li_length = li_grp.length;
  // var li_grp_width = li_grp.outerWidth(true);
  // var last_li_width = li_grp.last().outerWidth(true);
  // var ul_grp_width = li_grp_width * (li_grp.length-1) + last_li_width;
  
  // ul_grp.css({width:ul_grp_width, height:'auto', marginLeft:-ul_grp_width/2, position:'absolute', left:'50%'});

// console.log(ul_grp_width);




  lBtn.on('click',move);  // rBtn

    li_grp.eq(2).css({'transform':'scale(1.5)', 'zIndex':200});
  function move(e){
    e.preventDefault();
    li_grp = ul_grp.children('li');

    ul_grp.stop().animate({marginLeft: ul_grp_marginLeft + 410+'px'}, timed, function(){
      li_grp.last().prependTo(ul_grp);
      ul_grp.css({marginLeft: ul_grp_marginLeft+'px'});
    });
      li_grp.eq(1).css({'transform':'scale(1.5)', 'transition':'all '+timed+'ms','zIndex':200});
      li_grp.eq(1).siblings().css({'transform':'scale(1)', 'transition':'all '+timed+'ms','zIndex':100,});
  }; // function move

//--------------------------------------

  rBtn.on('click',move2);  // rBtn

  // li_grp.eq(2).css({'transform':'scale(1.5)', 'zIndex':200});
  function move2(e){
    e.preventDefault();
    li_grp = ul_grp.children('li');

    ul_grp.stop().animate({marginLeft: ul_grp_marginLeft-410+'px'}, timed, function(){
      li_grp.first().appendTo(ul_grp);
      ul_grp.css({marginLeft: ul_grp_marginLeft+'px'});
    });
      li_grp.eq(3).css({'transform':'scale(1.5)', 'transition':'all '+timed+'ms','zIndex':200});
      li_grp.eq(3).siblings().css({'transform':'scale(1)', 'transition':'all '+timed+'ms','zIndex':100,});
  }; // function move


})(this.jQuery);



  // 클릭이벤트 걸거고
  // 어떻게? r누르면 사진이 왼쪽으로 이동
  // 또, l누르면 사진이 오른쪽으로 이동