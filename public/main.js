var star = document.getElementsByClassName("fa-star");
var trash = document.getElementsByClassName("ph-trash");
const meat = document.getElementsByClassName('meat')

let protein = ['Chicken', 'Pork', 'Beef', 'Fish', 'Lamb'];
let veggies = ['Spinach', 'Carrots', 'Broccoli', 'Brussel Sprouts', 'Kale'];

function randomProtein() {
  document.getElementById('meatContainer').value = protein[Math.floor(Math.random() * protein.length)];
}

function randomVeggies() {
  document.getElementById('vegContainer').value = veggies[Math.floor(Math.random() * veggies.length)];
}

document.addEventListener('DOMContentLoaded', function() {
  var proteinButton = document.getElementById('proteinButton');
  var veggieButton = document.getElementById('veggieButton');

  proteinButton.addEventListener('click', function() {
    randomProtein();
  });

  veggieButton.addEventListener('click', function() {
    randomVeggies();
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const drink = this.parentNode.parentNode.childNodes[5].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'drink':drink
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
