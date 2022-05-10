
$(document).ready(function () {
  let modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
  closeModal = $('.modal__dialog'),
  modalSend = $('.modal-send'),
  burger = $('.burger-menu'),
  burgerBtn = $('.burger__btn'),
  burgerClose = $('.burger__close'),
  navClose = $('.nav__item');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    $('.body').css("overflow", "hidden");
  });
  burgerBtn.on('click', function () {
    burger.toggleClass('burger--visible');
    $('.body').css("overflow", "hidden");
  });
  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
    modalSend.removeClass('modal-send--visible');
    $('.body').css("overflow", "auto");
  });
  navClose.on('click', function () {
    burger.toggleClass('burger--visible');
    $('.body').css("overflow", "auto");
  });
  burgerClose.on('click', function () {
    burger.removeClass('burger--visible');
    $('.body').css("overflow", "auto");
  });
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible');
      modalSend.removeClass('modal-send--visible');
      $('.body').css("overflow", "auto");
    }
  });

  $(modal).mousedown(function (e) {
    if (e.target === this) {
      modal.removeClass('modal--visible');
      $('.body').css("overflow", "auto");
    }
  });
  $(modalSend).mousedown(function (e) {
    if (e.target === this) {
      modalSend.removeClass('modal-send--visible');
      $('.body').css("overflow", "auto");
    }
  });

  var statistic = $('.statistic');
  var casesSwiper = new Swiper('.casesSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var feedbackSwiper = new Swiper('.feedbackSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var newsSwiper = new Swiper('.news-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userSite: {
        required: true,
        minlength: 3
      },
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 10,
        maxlength: 254
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userSite: {
        required: "Введите ваш сайт",
        minlength: "Введите корректный адрес сайта",
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите email в формате name@domain.com"
      },
      userQuestion: {
        required: "Поле обязельно для заполнения",
        minlength: "Напишите больше 10 букв",
        maxlength: "Ваш вопрос должен быть не более 244 символов"
      }
    },
    submitHandler: function submitHandler(form) {
      $.ajax({
        type: "POST",
        url: "send-form.php",
        data: $(form).serialize(),
        success: function success() {
          $(form)[0].reset();
          modalSend.toggleClass('modal-send--visible');
          $('.body').css("overflow", "hidden");
        },
      });
    }
  });
  $('.questions-form').validate({
    errorClass: "invalid-questions",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      },
      userQuestion: {
        required: true,
        minlength: 10,
        maxlength: 254
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: {
        required: "Введите ваш сайт",
        minlength: "Введите корректный адрес сайта",
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите email в формате name@domain.com"
      },
      userQuestion: {
        required: "Поле обязельно для заполнения",
        minlength: "Напишите больше 10 букв",
        maxlength: "Ваш вопрос должен быть не более 244 символов"
      }
    },
    submitHandler: function submitHandler(form) {
      $.ajax({
        type: "POST",
        url: "send-questions.php",
        data: $(form).serialize(),
        success: function success() {
          $(form)[0].reset();
          modalSend.toggleClass('modal-send--visible');
          $('.body').css("overflow", "hidden");
        },
      });
    }
  });
  $('.modal__form').validate({
    errorClass: "invalid-modal",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: {
        required: "Введите ваш телефон",
        minlength: "Введите корректный телефон",
      }
    },
    submitHandler: function submitHandler(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function success() {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalSend.toggleClass('modal-send--visible');
          $('.body').css("overflow", "hidden");
        },
      });
    }
  });
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7 999 888-88-88:"
  });


  var player;
  $('.video-play').on('click', function onYouTubeIframeAPIReady() {
    statistic.addClass('statistics--visible');
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      iv_load_policy: '3',
      rel: '0',
      showinfo: '0',
      videoId: 'vCd2kEA9Dv0',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  }
});