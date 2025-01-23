const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  
  // Добавление класса активности на кнопку
  document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach((button) => {
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.swiper-button-next, .swiper-button-prev')
        .forEach((btn) => btn.classList.remove('swiper-button-active'));
      button.classList.add('swiper-button-active');
    });
  });
  