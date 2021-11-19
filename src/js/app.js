// TODO: write your code here

const button = document.querySelector('.btn');
const widget = document.getElementById('widget');

button.addEventListener('click', () => {
  widget.classList.toggle('hidden');
  widget.classList.toggle('widget');
});
