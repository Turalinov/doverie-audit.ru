(function(){
  let heroBtn = document.querySelector('.hero__button')
  heroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let btn = e.target;
    let blockId = '#' + btn.dataset.link;

    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
    })
  })
})()