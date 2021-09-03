(function () {

  // получаем форму
  const form_quiz = document.getElementById('form__quiz');
  
  //получаем все кнопки "дальше" у квиза
  let btnsNext = form_quiz.querySelectorAll('.collection__btn');


  let quiz__items = form_quiz.querySelectorAll('.quiz__item')

  //создаём результирующий объект 
  let result = {};

  //вызываем обработчик событий handlerClickBtnNext по клику на каждую кнопку
  btnsNext.forEach(btn => {
    btn.addEventListener('click', handlerClickBtnNext)
  })


  function handlerClickBtnNext(e) {
    //отменяем на всякий случай действие по умолчанию
    e.preventDefault();

    //получаем кнопку
    let btn = e.target;

    //получаем сообщение об ошибке
    let errorDiv = btn.nextElementSibling

    //получаем id кнопки
    let idBtn = getIdForElement(btn);

    //если есть id у button
    if (idBtn) {

      //получаем число из строки
      let step = getNumberForSrting(idBtn);

      // если удалось получить число
      if (step) {

        // получаем данные шага и сохраняем объект в массив
        if (saveData(step, errorDiv)) {

          //если всё ок то переходим к следующему шагу 
          console.log(`добавили данные шага ${step}`, result);

          //переход
          //получаем следующий квиз
          let nextQuiz = getQuizItem(step + 1);
          

          console.log(`переходим на следующий шаг ${step + 1}`);


          showQuiz(nextQuiz);



        }
      }
    }
  }


  //получение id элемента
  function getIdForElement(el) {
    return el.id ? el.id : null;
  }

  //извлечение цифры со строки
  function getNumberForSrting(el){
    return parseInt(el.match(/\d+/)) ? parseInt(el.match(/\d+/)) : null;
  }

  //получить значение выбранного радио
  function getValueRadio(name) {
    let checked = form_quiz.querySelector(`input[name="${name}"]:checked`)?.value;
    return checked || null;
  }


  // получить 1 определённый элемент input с типом text
  function getInputText(name) {
    let value = form_quiz.querySelector(`input[name="${name}"]`)
    return value || null;
  }

  // получить все input определённого radio
  function getInputRadio(name) {
    let value = form_quiz.querySelectorAll(`input[name="${name}"]`)
    return value || null;
  }

  // получить значение input
  function getInputTextValue(name){
    let value = form_quiz.querySelector(`input[name="${name}"]`)?.value;
    return value.trim() || null;
  }


  //получаем данные шага
  function saveData(step, errorDiv) {

    if (step == 1) {
      console.log('начинаем сохранять данные в объект шага ' + step);


      let revenue_year = getValueRadio('revenue_year');
      let balance_currency = getValueRadio('balance_currency');
      let tax_regime = getValueRadio('tax_regime');
      let combination_modes = getInputTextValue('combination_modes')
      let combination_modes_elem = getInputText('combination_modes')

      //удаляем сообщение об ошибке
      removeErrorMessage(combination_modes_elem, errorDiv);


      if (tax_regime == 3 && combination_modes == null) {
        //добавляем сообщение об ошибке
        console.log('что то пошло не так на шаге ' + step);
        return addErrorMessage(combination_modes_elem, errorDiv);
      } 

      return Object.assign(result, {
        revenue_year,
        balance_currency,
        tax_regime,
        combination_modes
      })

    }


    //для второго пишем 

  }


  function showQuiz(quiz) {
    addActiveClass(quiz)
  }


  //функционал зависимых input
  function dependentsInputStep1() {
    let tax_regime = getInputRadio('tax_regime');
    let combination_modes = getInputText('combination_modes')

    tax_regime.forEach(tr => {
      tr.addEventListener('click', () => handleForDependentsRadio());
    })


    function handleForDependentsRadio() {
      let tax_regime_value = getValueRadio('tax_regime');
      if (tax_regime_value == 3) {
        toggleDisableInput(combination_modes);
      } else {
        disableInput(combination_modes);
      }
    }
  }


  function disableInput(el) {
    el.disabled = true;
    el.value = '';
  }

  function toggleDisableInput(el) {
    el.disabled = !el.disabled;

    if (el.disabled == false) {
      el.focus();
    }
  }


  function addErrorMessage(input, errorDiv) {
    input.classList.add('collection__input--error')
    errorDiv.classList.add('collection__error--active')
    return false;
  } 
  
  function removeErrorMessage(input, errorDiv) {
    input.classList.remove('collection__input--error')
    errorDiv.classList.remove('collection__error--active');
  }

  function getQuizItem(step) {
    return document.getElementById(`quiz__item${step}`) ? document.getElementById(`quiz__item${step}`) : null
  }


  function removeActiveClass() {
    quiz__items.forEach(el => {
      el.classList.remove('quiz__item--active')
    })
  }


  function addActiveClass(quiz) {
    removeActiveClass()
    quiz.classList.add('quiz__item--active')
  }









  //подключаем все зависимости
  function dependentsInput() {

    dependentsInputStep1();


  }

  //подключаем функционал зависимых input-ов
  dependentsInput();




}())