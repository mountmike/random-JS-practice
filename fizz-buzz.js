// declare container variables
const container = document.querySelector('#container');

// declare child variables
const para = document.createElement('p');
const heading3 = document.createElement('h3');
const divContainer = document.createElement('div');
const heading1 = document.createElement('h1');
const subPara = document.createElement('p');

// create class for child variables
para.classList.add('redPara');
heading3.classList.add('blueHeading');
divContainer.classList.add('divContainer');
heading1.classList.add('h1Div')
subPara.classList.add('subPara');


// create text content for child variables
para.textContent = "Hey I'm red!";
heading3.textContent = "I'm a blue H3!";
heading1.textContent = "I'm in a div";
subPara.textContent = "Me TOO!";

// inject text into child variables
container.appendChild(para);
container.appendChild(heading3);
container.appendChild(divContainer);
divContainer.appendChild(heading1);
divContainer.appendChild(subPara);

// style variables
para.style.color = 'red';
heading3.style.color = "blue";
divContainer.style.cssText = "background-color: pink; border: 3px black solid";





/*

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  */