const input = document.querySelector(`input`)
const ul = document.querySelector(`ul`)
console.log(ul);
const p = document.querySelector(`p`)

input.addEventListener(`input`, function() {
  let test = ul.children
  for (let i = 0; i < test.length; i++) {
    console.log(test[i].textContent);
  }
})