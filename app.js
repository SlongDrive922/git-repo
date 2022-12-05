let person = 'Lee';

function greeting() {
 // Function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting() {
 // Function scope2
  let person = 'Robert';
  alert(`Good Morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`);
greeting();