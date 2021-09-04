(function () {


  //открытие меню
  const menuToggle = document.querySelector('.menu__toggle');
  const menu = document.querySelector('.menu__list--adaptive');

  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('is-open')
  });


  //закрытие меню и скролл до секции
  function findParent(el, selector) {
    return el.closest(selector) !== null ? el.closest(selector) : false;
  }
  
  const menuLinks = document.querySelectorAll('.menu__link');

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {
      e.preventDefault();

      let blockId = menuLink.getAttribute('href')
      if (blockId != "#") {
        document.querySelector(blockId).scrollIntoView({
          behavior: 'smooth',
        })
      }
      
      //для закрытия меню берем родитель меню
      const parentMenu = findParent(menuLink, '.menu__list--adaptive');
      if (parentMenu !== false) {
        if (parentMenu.classList.contains('is-open')) {
          parentMenu.classList.toggle('is-open');
        }
      }
    })
  })







})()