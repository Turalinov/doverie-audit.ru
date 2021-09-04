(function () {



  // получаем форму
  const form_quiz = document.getElementById('form__quiz');

  let regions = ['Амурская область (Благовещенск)',
    'Архангельская область (Архангельск)',
    'Астраханская область (Астрахань)',
    'Белгородская область (Белгород)',
    'Брянская область (Брянск)',
    'Челябинская область (Челябинск)',
    'Иркутская область (Иркутск)',
    'Ивановская область (Иваново)',
    'Калининградская область (Калининград)',
    'Калужская область (Калуга)',
    'Кемеровская область (Кемерово)',
    'Кировская область (Киров)',
    'Костромская область (Кострома)',
    'Курганская область (Курган)',
    'Курская область (Курск)',
    'Ленинградская область (Санкт-Петербург)',
    'Липецкая область (Липецк)',
    'Магаданская область (Магадан)',
    'Московская область (Москва)',
    'Мурманская область (Мурманск)',
    'Нижегородская область (Нижний Новгород)',
    'Новгородская область (Великий Новгород)',
    'Новосибирская область (Новосибирск)',
    'Омская область (Омск)',
    'Оренбургская область (Оренбург)',
    'Орловская область (Орёл)',
    'Пензенская область (Пенза)',
    'Псковская область (Псков)',
    'Ростовская область (Ростов-на-Дону)',
    'Рязанская область (Рязань)',
    'Сахалинская область (Южно-Сахалинск)',
    'Самарская область (Самара)',
    'Саратовская область (Саратов)',
    'Смоленская область (Смоленск)',
    'Свердловская область (Екатеринбург)',
    'Тамбовская область (Тамбов)',
    'Томская область (Томск)',
    'Тверская область (Тверь)',
    'Тульская область (Тула)',
    'Тюменская область (Тюмень)',
    'Ульяновская область (Ульяновск)',
    'Владимирская область (Владимир)',
    'Волгоградская область (Волгоград)',
    'Вологодская область (Вологда)',
    'Воронежская область (Воронеж)',
    'Ярославская область (Ярославль)'];


  let data = {
    revenue_year: [
      'До 15 млн. руб.',
      '15-60 млн. руб.',
      '60-100 млн. руб.',
      '100-500 млн. руб.',
      '500-1000 млн. руб.',
      'Более 1 млрд. руб',
    ],
    balance_currency: [
      'До 20 млн. руб.',
      '20-60 млн. руб.',
      '60-100 млн. руб.',
      '100-500 млн. руб.',
      '500-1000 млн. руб.',
      'Более 1 млрд. руб',
    ],
    tax_regime: [
      'ОСНО(Общий)',
      'Общий + ЕНВД',
      'Упрощенная система(УСН)',
      'Совмещение режимов, указать какие',
    ], 
    activities: [
      '1',
      '2-3',
      '4 и более'
    ],
    branches: [
      'Нет',
      'Есть не выделенные на самостоятельный баланс',
      'Есть выделенные на самостоятельный баланс',
    ],
    region: regions,
    departure: [
      'Нет',
      'Требуется, указать ниже',
    ],
    number__assets: [
      'До 20 ед.',
      '20-100 ед.',
      '100-200 ед.',
      'более 200 ед.'
    ],
    receipt: [
      'до 100 операций',
      '100-500 операций',
      '500-1000 операций',
      'более 1000 операций',
    ],
    contractor: [
      'до 10',
      '10-50',
      'более 50',
    ],
    implementation: [
      'до 100 операций',
      '100 - 500 операций',
      '500 - 1000 операций',
      'более 1000 операций',
    ],
    buyers: [
      'мало или только розница(1 - 20)',
      'немного(20 - 50)',
      'достаточно(50 - 200)',
      'много(200 - 1000)',
      'очень много(более 1000)',
    ],
    investments: [
      'Отсутвуют или несущественны',
      'Существенная величина',
    ],
    credits: [
      'займы, кредиты несущественны',
      'существенная величина',
    ],
    export_import: [
      'экспорт, импорт не осуществляется',
      'осуществляется экспорт',
      'осуществляется импорт',
      'осуществляется экспорт и импорт',
    ],
    mpz: [
      'остатки МПЗ несущественны',
      'существенный остаток МПЗ',
    ],
    accounting: [
      '1С',
      'Прочие бухгалтерские программы, указать ниже',
    ],
    audit: [
      'нет',
      'да',
    ],
    tax_audit: [
      'Последние 3 года не было',
      'была 2 года назад',
      'была год назад',
    ],
    change: [
      'Последние 2 года не менялся',
      'менялся примерно год назад',
      'менялся менее чем год назад',
    ]
  }

  function getData(key, index) {
    return data[key][index];
  }

  console.log(`1. Выручка организации за год: ` + getData('revenue_year', 1));
  console.log(`2. Стоимость имущества организации (Валюта Баланса): ` + getData('balance_currency', 1));
  console.log(`3. Применяемый режим налогообложения: ` + getData('tax_regime', 3));
  // combination_modes если tax_regime == 3  
  console.log(`4. Сколько видов деятельности осуществляет организация? ` + getData('activities', 2));
  //activities__additional если activities == 2
  console.log(`5. Есть ли обособленные подразделения(филиалы, представительства)? ` + getData('branches', 2));
  console.log(`6. В каком регионе организация ведет основную деятельность? ` + getData('region', 2));
  console.log(`7. Кроме данного региона, требуется ли выезд аудитора в другие регионы? ` + getData('departure', 1));
  // departure__additional если departure == 2
  console.log(`8. Численность работников организации(указать количество человек) `); 
  //number__employees
  console.log(`9. Количество основных средств: ` + getData('number__assets', 1));

  console.log(`10. «Поступление товаров и услуг» – количество операций за аудируемый период: ` + getData('receipt', 1))
  console.log(`11. Примерное количество ваших поставщиков(подрядчиков): ` + getData('contractor', 1))
  console.log(`12. «Реализация товаров и услуг» - количество операций за аудируемый период: ` + getData('implementation', 1))
  console.log(`13. Количество покупателей, заказчиков(без учета розницы): ` + getData('buyers', 1))
  console.log(`14. Финансовые вложения: ` + getData('investments', 1))
  console.log(`15. Организация привлекает займы, кредиты? ` + getData('credits', 1))


  console.log(`16. Организация осуществляет экспортно-импортные операции? ` + getData('export_import', 1))
  console.log(`17. Остаток МПЗ на конец года составляет существенную величину (более 5% от валюты баланса)? ` + getData('mpz', 1))
  console.log(`18. Способ ведения бухгалтерии ` + getData('accounting', 1))
  //accounting__additional если accounting == 1
  console.log(`19. Проводился ли аудит за предыдущий год? ` + getData('audit', 1))
  console.log(`20. Как давно была выездная налоговая проверка вашей фирмы? ` + getData('tax_audit', 1))
  console.log(`21. Когда последний раз менялся главный бухгалтер (кроме случаев назначения другого лица из вашей же бухгалтерии)? ` + getData('change', 1))
  
  
  
  
  
  
  

  
 

  





  let selectRegions = form_quiz.querySelector(`select[name="region"]`);
  
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
          getUpPriceBlock();
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

  function getValueSelect(select) {
    return select.value || null
  }


  // получить 1 определённый элемент input с типом text
  function getInputText(name) {
    let input = form_quiz.querySelector(`input[name="${name}"]`)
    return input || null;
  }

  // получить все input определённого radio
  function getInputRadio(name) {
    let radio = form_quiz.querySelectorAll(`input[name="${name}"]`)
    return radio || null;
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

    } else if (step == 2) {
      console.log('начинаем сохранять данные в объект шага ' + step);
    
      let activities = getValueRadio('activities');
      let branches = getValueRadio('branches');
      let region = getValueSelect(selectRegions);
      let departure = getValueRadio('departure');

      let activities__additional = getInputTextValue('activities__additional');
      let activities__additional_elem = getInputText('activities__additional');

      let departure__additional = getInputTextValue('departure__additional');
      let departure__additional_elem = getInputText('departure__additional');


      let number__employees = getInputTextValue('number__employees');
      let number__employees_elem = getInputText('number__employees');

      let number__assets = getValueRadio('number__assets');



      //удаляем сообщение об ошибке
      removeErrorMessage(activities__additional_elem, errorDiv);
      removeErrorMessage(departure__additional_elem, errorDiv);
      removeErrorMessage(number__employees_elem, errorDiv);



      if (activities == 2 && activities__additional == null) {
          //добавляем сообщение об ошибке
          console.log('что то пошло не так на шаге ' + step);
          return addErrorMessage(activities__additional_elem, errorDiv);
        }


      if (departure == 1 && departure__additional == null) {
        //добавляем сообщение об ошибке
        console.log('что то пошло не так на шаге ' + step);
        return addErrorMessage(departure__additional_elem, errorDiv);
      }
      if (number__employees == null) {
        //добавляем сообщение об ошибке
        console.log('что то пошло не так на шаге ' + step);
        return addErrorMessage(number__employees_elem, errorDiv);

      }


      return Object.assign(result, {
        activities,
        branches,
        region,
        departure,
        activities__additional,
        departure__additional,
        number__employees,
        number__assets
      })


    } else if (step == 3) {

      let receipt = getValueRadio('receipt');
      let contractor = getValueRadio('contractor');
      let implementation = getValueRadio('implementation');
      let buyers = getValueRadio('buyers');
      let investments = getValueRadio('investments');
      let credits = getValueRadio('credits');


      return Object.assign(result, {
        receipt,
        contractor,
        implementation,
        buyers,
        investments,
        credits
      })

    } else if (step == 4) {

      let export_import = getValueRadio('export_import');
      let mpz = getValueRadio('mpz');
      let accounting = getValueRadio('accounting');

      
      let accounting__additional = getInputTextValue('accounting__additional');
      let accounting__additional_elem = getInputText('accounting__additional');


      let audit = getValueRadio('audit');
      let tax_audit = getValueRadio('tax_audit');
      let change = getValueRadio('change');



      //удаляем сообщение об ошибке
      removeErrorMessage(accounting__additional_elem, errorDiv);

      if (accounting == 1 && accounting__additional == null) {
        //добавляем сообщение об ошибке
        console.log('что то пошло не так на шаге ' + step);
        return addErrorMessage(accounting__additional_elem, errorDiv);
      }


      return Object.assign(result, {
        export_import,
        mpz,
        accounting,
        accounting__additional,
        audit,
        tax_audit,
        change,
      })

    } else if (step == 5) {

      let service = getValueRadio('service');
      let required = getValueRadio('required');
      let plan = getValueRadio('plan');
      let timing = getInputTextValue('timing');
      let timing_elem = getInputText('timing');
      let period = getInputTextValue('period');
      let period_elem = getInputText('period');



      removeErrorMessage(timing_elem, errorDiv);
      removeErrorMessage(period_elem, errorDiv);
      if (timing == null) {
        //добавляем сообщение об ошибке
        console.log('что то пошло не так на шаге ' + step);
        return addErrorMessage(timing_elem, errorDiv);

      } if (period == null) {
        //добавляем сообщение об ошибке
        console.log('что то пошло не так на шаге ' + step);
        return addErrorMessage(period_elem, errorDiv);

      }
      

      return Object.assign(result, {
        service,
        required,
        plan,
        timing,
        period,
      })

    } else if (step == 6) {

      let name_of_organizations = getInputTextValue('name_of_organizations');
      let name_of_organizations_elem = getInputText('name_of_organizations');

      let location = getInputTextValue('location');
      let location_elem = getInputText('location');

      let tax_status = getInputTextValue('tax_status');
      let tax_status_elem = getInputText('tax_status');

      let actual_address = getInputTextValue('actual_address');
      let actual_address_elem = getInputText('actual_address');

      let email = getInputTextValue('email');
      let email_elem = getInputText('email');

      let phone = getInputTextValue('phone');
      let phone_elem = getInputText('phone');

      let tin = getInputTextValue('tin');
      let tin_elem = getInputText('tin');

      let chief_accountant = getInputTextValue('chief_accountant');
      let chief_accountant_elem = getInputText('chief_accountant');

      let head = getInputTextValue('head');
      let head_elem = getInputText('head');

      let contact_person = getInputTextValue('contact_person');
      let contact_person_elem = getInputText('contact_person');
      



      
      
      
       
      
      

      removeErrorMessage(name_of_organizations_elem, errorDiv);
      removeErrorMessage(location_elem, errorDiv);
      removeErrorMessage(tax_status_elem, errorDiv);
      removeErrorMessage(actual_address_elem, errorDiv);
      removeErrorMessage(email_elem, errorDiv);
      removeErrorMessage(phone_elem, errorDiv);
      removeErrorMessage(tin_elem, errorDiv);
      removeErrorMessage(chief_accountant_elem, errorDiv);
      removeErrorMessage(head_elem, errorDiv);
      removeErrorMessage(contact_person_elem, errorDiv);
      

      if (name_of_organizations == null) {
        return addErrorMessage(name_of_organizations_elem, errorDiv);
      }
      if (location == null) {
        return addErrorMessage(location_elem, errorDiv);
      }
      if (tax_status == null) {
        return addErrorMessage(tax_status_elem, errorDiv);
      }
      if (actual_address == null) {
        return addErrorMessage(actual_address_elem, errorDiv);
      }
      if (email == null) {
        return addErrorMessage(email_elem, errorDiv);
      }
      if (phone == null) {
        return addErrorMessage(phone_elem, errorDiv);
      }
      if (tin == null) {
        return addErrorMessage(tin_elem, errorDiv);
      }
      if (chief_accountant == null) {
        return addErrorMessage(chief_accountant_elem, errorDiv);
      }
      if (head == null) {
        return addErrorMessage(head_elem, errorDiv);
      }
      if (contact_person == null) {
        return addErrorMessage(contact_person_elem, errorDiv);
      }
      

      return Object.assign(result, {
        name_of_organizations,
        location,
        tax_status,
        actual_address,
        email,
        phone,
        tin,
        chief_accountant,
        head,
        contact_person,
      })
    }

  }


  function showQuiz(quiz) {
    addActiveClass(quiz)
  }


  //функционал зависимых input шаг 1
  function dependentsInputStep1() {
    let tax_regime = getInputRadio('tax_regime');
    let combination_modes = getInputText('combination_modes')

    tax_regime.forEach(tr => {
      tr.addEventListener('click', () => handleForDependentsTaxRegime());
    })


    function handleForDependentsTaxRegime() {
      let tax_regime_value = getValueRadio('tax_regime');
      let errorDiv = form_quiz.querySelector('#quiz__item1 .collection__error');
      if (tax_regime_value == 3) {
        turnOnInput(combination_modes);
      } else {
        disableInput(combination_modes);
        removeErrorMessage(combination_modes, errorDiv);
      }
    }
  }
  //функционал зависимых input шаг 2
  function dependentsInputStep2() {


    let errorDiv = form_quiz.querySelector('#quiz__item2 .collection__error');

    let activities_elem = getInputRadio('activities');
    let activities__additional_elem = getInputText('activities__additional')

    activities_elem.forEach(el => {
      el.addEventListener('click', () => handleForDependentsActivities());
    })


    function handleForDependentsActivities() {
      let activities_value = getValueRadio('activities');
      if (activities_value == 2) {
        turnOnInput(activities__additional_elem);
      } else {
        disableInput(activities__additional_elem);
        removeErrorMessage(activities__additional_elem, errorDiv);
      }
    }



    let departure_elem = getInputRadio('departure');
    let departure__additional_elem = getInputText('departure__additional')

    departure_elem.forEach(el => {
      el.addEventListener('click', () => handleForDependentsDeparture());
    })

    function handleForDependentsDeparture() {
      let departure_value = getValueRadio('departure');
      if (departure_value == 1) {
        turnOnInput(departure__additional_elem);
      } else {
        disableInput(departure__additional_elem);
        removeErrorMessage(departure__additional_elem, errorDiv);
      }

    }


  }
  //функционал зависимых input шаг 4
  function dependentsInputStep4() {


    let errorDiv = form_quiz.querySelector('#quiz__item3 .collection__error');

    let accounting_elem = getInputRadio('accounting');
    let accounting__additional_elem = getInputText('accounting__additional')

    accounting_elem.forEach(el => {
      el.addEventListener('click', () => handleForDependentsAccounting());
    })


    function handleForDependentsAccounting() {
      let accounting_value = getValueRadio('accounting');
      if (accounting_value == 1) {
        turnOnInput(accounting__additional_elem);
      } else {
        disableInput(accounting__additional_elem);
        removeErrorMessage(accounting__additional_elem, errorDiv);
      }
    }




  }


  function disableInput(el) {
    el.disabled = true;
    el.value = '';
  }

  function turnOnInput(el) {
      el.disabled = false;
      el.focus();
  }


  function addErrorMessage(input, errorDiv) {
    input.classList.add('collection__input--error')
    errorDiv.classList.add('collection__error--active')
    deleteInputErrorMessage();
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
    dependentsInputStep2();
    dependentsInputStep4();

  }

  //подключаем функционал зависимых input-ов
  dependentsInput();






  function initSelectQuiz(regions, select) {

    regions.forEach((current, index) => {
      let option = document.createElement('option');
      option.value = index;

      if(index == 18) {
        option.setAttribute('selected', 'selected');
      }
      option.innerHTML = current;
      select.appendChild(option);
    })

  }







  initSelectQuiz(regions, selectRegions)

  //потеря информирования ошибки
  function deleteInputErrorMessage() {
    let inputWithError = form_quiz.querySelectorAll('.collection__input--error');
    
    if (inputWithError.length != 0) {

      inputWithError.forEach(el => {
        el.addEventListener('focus', setFocusInput);
      })

    }
  }

  function setFocusInput(event) {
    let el = event.target
    if (el.classList.contains('collection__input--error')) {
      el.classList.remove('collection__input--error')
    }
  }


  deleteInputErrorMessage();

  function getUpPriceBlock() {
    document.querySelector('#price').scrollIntoView({
      behavior: 'smooth',
    })
  }

  

}())