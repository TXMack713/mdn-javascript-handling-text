let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;

let myString =
  'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
