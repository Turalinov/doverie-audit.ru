(function() {

  let servicesBtns = document.querySelectorAll('.services__btn');
  
  servicesBtns.forEach(servicesBtn => {
    servicesBtn.addEventListener('click', function(e) {
      e.preventDefault();

      let btn = e.target;
      let parent = btn.closest('.services__item');
      let contents = parent.querySelectorAll('.services__info');

      if (!parent.classList.contains('services__item--opened')) {
        btn.innerHTML = 'Скрыть'
      } else {
        btn.innerHTML = 'Подробнее'
      }

      parent.classList.toggle("services__item--opened");
      contents.forEach(content => {
        content.classList.toggle("services__info--none");
      });
    })
  })
  
})()