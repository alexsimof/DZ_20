let play1 = document.querySelector('.play1'); // Получаем кнопку
play1.addEventListener('click', function (e) {
  e.preventDefault();
  let intro = "Вітаю! це ігра Вгадай число! Програма генерує число від 1 до 10. Вгадай число!";
  alert(intro); // Выводим приветственное сообщение
  let start = confirm("Почнемо?");

  if ( start ) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let result = prompt("Введіть число!");

    if ( Number(result) && result <= 10 ) {

      if (randomNumber === number) {
        alert(`Ура! Ви виграли! Це число ${randomNumber} Молодець!!!`);
      } else {
        alert(`Не турбуйтеся! Це число ${randomNumber}.`);
      }

    } else {
      alert("Ви ввели не число чи воно більше 10!")
    }

  } else {
    alert("Можливо, в інший раз. До побачення!");
  };

});


let play2 = document.querySelector('.play2'); // Получаем кнопку
play2.addEventListener('click', function(e){
  e.preventDefault();
  



});

