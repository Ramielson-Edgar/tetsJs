const btn = document.querySelector('.js-btn');

btn.addEventListener('click', () => {
  const imgEl = document.querySelector('.hot__Lusy');
  console.log(imgEl.src);
  imgEl.src = 'https://files.tpg.ua/pages2/87839/Maldives_rest_1.jpg';
});
