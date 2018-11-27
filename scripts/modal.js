$(document).ready(function(){

  // MODAL
  var modalText = {
    roambi: {
      title: 'Tetris',
      tag: 'Game coded in Javascript',
      detail: 'A great game for those boring days',
      link: 'tetris.html'
    },
    walker: {
      title: 'Travel Agency App',
      tag: 'E-COMMERCE MOBILE APP',
      detail: 'Travel and Tourism is an industry that adds a great a deal of input to the GDP of any economy. In order to help Travel Agencies to maximize on profit, I have embarked on developing an application that can be customized to fit any Agency.',
    },
    powur: {
      title: 'ConnectUS',
      tag: 'ICT SERVICES COMPANY',
      detail: '',
      link: 'https://www.connectus.org.za'
    },
    mystand: {
      title: 'AMANDLA',
      tag: 'FREELANCE WEB PORTAL',
      detail: 'Freelance Web Portal aimed at tackling the umemployment crisis in Africa.',
    },
    never: {
      title: 'POP BALLOONS',
      tag: 'PURELY JAVASCRIPT GAME',
      detail: 'A game aimed at educating kids and entertaining them by poping balloons ',
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail: 'The Mall is a place to follow the latest specials and discount sales on food items and other goods and services shared by friends and family. Built with Node.js and Handlebars. Features the ability to import sales discounts products and services into one shopping site.',
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
