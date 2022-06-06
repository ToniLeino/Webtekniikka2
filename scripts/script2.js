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

//Toivottavasti funktio joka vaihtaa tektiä sen päälle mentessä
const text = document.getElementById("description");

//  Tämä vaihtaa tektin väriä kun sen päälle mennään
text.addEventListener('mouseover', function handleMouseOver() {
  text.style.color = 'black';
});

// palauttaa normaaliksi
text.addEventListener('mouseout', function handleMouseOut() {
  text.style.color = "white";
});