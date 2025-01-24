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


document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active'); // Меняем вид иконки
    const menu = document.querySelector('.header_list1');
    
    // Переключаем display для списка меню
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });


  const item = document.querySelector('.header-list-item12'); // Выбираем один элемент
  const svg = item.querySelector('.svg--rotate1'); // Стрелка внутри
  const submenu = item.querySelector('.header-list-item-ul1'); // Подменю
  
  item.addEventListener('click', () => {
    // Проверяем текущее состояние подменю
    if (getComputedStyle(submenu).display === 'none') {
      submenu.style.display = 'block'; // Показываем подменю
      svg.style.transform = 'rotate(180deg)'; // Поворачиваем стрелку
    } else {
      submenu.style.display = 'none'; // Скрываем подменю
      svg.style.transform = ''; // Сбрасываем поворот стрелки
    }
  });

  const item1 = document.querySelector('.header-list-item13'); // Выбираем один элемент
  const svg1 = item1.querySelector('.svg--rotate13'); // Стрелка внутри
  const submenu1 = item1.querySelector('.header-list-item-ul13'); // Подменю
  
  item1.addEventListener('click', () => {
    // Проверяем текущее состояние подменю
    if (getComputedStyle(submenu1).display === 'none') {
      submenu1.style.display = 'block'; // Показываем подменю
      svg1.style.transform = 'rotate(180deg)'; // Поворачиваем стрелку
    } else {
      submenu1.style.display = 'none'; // Скрываем подменю
      svg1.style.transform = ''; // Сбрасываем поворот стрелки
    }
  });

  const item2 = document.querySelector('.header-list-item14'); // Выбираем один элемент
  const svg2 = item2.querySelector('.svg--rotate12'); // Стрелка внутри
  const submenu2 = item2.querySelector('.header-list-item-ul12'); // Подменю
  
  item2.addEventListener('click', () => {
    // Проверяем текущее состояние подменю
    if (getComputedStyle(submenu2).display === 'none') {
      submenu2.style.display = 'block'; // Показываем подменю
      svg2.style.transform = 'rotate(180deg)'; // Поворачиваем стрелку
    } else {
      submenu2.style.display = 'none'; // Скрываем подменю
      svg2.style.transform = ''; // Сбрасываем поворот стрелки
    }
  });
  
  
  
  
  
  
  
  