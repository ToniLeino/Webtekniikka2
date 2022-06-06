//Toivottavasti funktio joka vaihtaa tektiä sen päälle mentessä
const Header = document.getElementById("primary-header");

//  Tämä vaihtaa tektin väriä kun sen päälle mennään
Header.addEventListener('mouseover', function handleMouseOver() {
  Header.style.color = 'white';
});

// palauttaa normaaliksi
Header.addEventListener('mouseout', function handleMouseOut() {
  Header.style.color = "black";
});


const text = document.getElementById("description");


text.addEventListener('mouseover', function handleMouseOver() {
  text.style.color = 'black';
});


text.addEventListener('mouseout', function handleMouseOut() {
  text.style.color = "white";
});

const navi = document.getElementById("navi-link");


navi.addEventListener('mouseover', function handleMouseOver() {
  navi.style.color = 'pink';
});


navi.addEventListener('mouseout', function handleMouseOut() {
  navi.style.color = "white";
});