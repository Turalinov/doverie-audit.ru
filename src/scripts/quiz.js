(function () {

  // получаем форму
  const form_quiz = document.getElementById('form__quiz');
  
  //получаем все кнопки "дальше" у квиза
  let btnsNext = form_quiz.querySelectorAll('.collection__btn');


  //вызываем обработчик событий handlerClickBtnNext по клику на каждую кнопку
  btnsNext.forEach(btn => {
    btn.addEventListener('click', handlerClickBtnNext)
  })



  function handlerClickBtnNext(e) {
    //отменяем на всякий случай действие по умолчанию
    e.preventDefault();

    //создаём результирующий объект 
    let result = {

    }

    //получаем кнопку
    let btn = e.target;

    //получаем id кнопки
    let idBtn = getIdForElement(btn);

    //если есть id у button
    if (idBtn) {

      //получаем число из сроки
      let indexNumber = getNumberForSrting(idBtn);

      // если удалось получить число
      if(indexNumber) {

        // получаем данные первого шага 
        let dataFirst = getDataFirst();

        //если всё ок то переходим к следующему шагу сохраняя объект в массив
        if (dataFirst) {
          Object.assign(result, dataFirst)
        } else {
          
        }
        
        //переход





        //забираем число и вешаем класс на следующий за родителем quiz__item класс quiz__item--active
        //у остальных убираем
        // добавляем переход 
        // и трансформацию



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

  //получить выбранный радио
  function getValueRadio(name) {
    let checked = form_quiz.querySelector(`input[name="${name}"]:checked`)?.value;
    return checked || null;
  }


  // получить элемент input
  function getInputElement(name) {
    let value = form_quiz.querySelector(`input[name="${name}"]`)
    return value || null;
  }

  // получить все input radio
  function getInputRadio(name) {
    let value = form_quiz.querySelectorAll(`input[name="${name}"]`)
    return value || null;
  }

  // получить значение input
  function getInputValue(name){
    let value = form_quiz.querySelector(`input[name="${name}"]`)?.value;
    return value.trim() || null;
  }



  function getDataFirst() {
    console.log('проверяем инпуты у первого шага');

    //проверяем поля в этом блоке на пустоту, если хотя бы одно пусто, добавляем красную рамку элементу и оповещаем что поле не заполнено, если всё ок и красная рамка есть у элемента удаляем её и пропускаем для извлечение данных
    let revenue_year = getValueRadio('revenue_year');
    let balance_currency = getValueRadio('balance_currency');
    let tax_regime = getValueRadio('tax_regime');
    let combination_modes = getInputValue('combination_modes')


    if (tax_regime == 3 && combination_modes == null) {
      return false;
    }
    

    return {
      revenue_year,
      balance_currency,
      tax_regime,
      combination_modes
    };
  }



  function dependentsInput() {

    let tax_regime = getInputRadio('tax_regime');
    let combination_modes = getInputElement('combination_modes')

    tax_regime.forEach(tr => {
      tr.addEventListener('click', () => handleForDependentsRadio());
    })


    function handleForDependentsRadio() {
      let tax_regime_value = getValueRadio('tax_regime');
      if (tax_regime_value == 3 ) {
        toggleDisableInput(combination_modes);
      } else {
        disableInput(combination_modes);
      }
    }


    function disableInput(el) {
      el.disabled = true;
      el.value = '';
    }
    
    function toggleDisableInput(el) {
      el.disabled = !el.disabled;

      if(el.disabled == false) {
        el.focus();
      }
    }


  }

  //подключаем функционал зависимых input-ов
  dependentsInput();




}())