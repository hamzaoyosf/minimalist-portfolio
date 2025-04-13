// Headline Animation
const qa = document.querySelector(".qa");
const qaT = document.querySelector(".qa-t");

const texts = [qa, qaT];
let current = 0;

const speeds = {
  type: 75,
  delete: 50,
  pause: 1500
};

function typeText(el, callback) {
  const fullText = el.getAttribute('data-full');
  el.textContent = '';
  el.style.opacity = 1;
  let i = 0;

  const typer = setInterval(() => {
    el.textContent += fullText.charAt(i);
    el.style.width = `${el.textContent.length}ch`;
    i++;
    if (i >= fullText.length) {
      clearInterval(typer);
      setTimeout(() => callback(el), speeds.pause);
    }
  }, speeds.type);
}

function deleteText(el, callback) {
  let txt = el.textContent;
  const deleter = setInterval(() => {
    txt = txt.slice(0, -1);
    el.textContent = txt;
    el.style.width = `${txt.length}ch`;
    if (txt.length === 0) {
      clearInterval(deleter);
      el.style.opacity = 0;
      callback();
    }
  }, speeds.delete);
}

function loopTyping() {
  const currentEl = texts[current];
  const nextIndex = (current + 1) % texts.length;
  const nextEl = texts[nextIndex];

  // Make sure the next one is hidden and reset
  nextEl.style.opacity = 0;
  nextEl.textContent = '';
  nextEl.style.width = '0';

  typeText(currentEl, () => {
    deleteText(currentEl, () => {
      current = nextIndex;
      loopTyping();
    });
  });
}

// Start loop
loopTyping();


// Circle Animation   
let anim = document.getElementsByClassName('hero-pic');

for (let i = 0; i < anim.length; i++) {
    anim[i].addEventListener('click', function () {
      let style = document.createElement('style');
      style.innerHTML = `
      @keyframes loading {
        100% {
          stroke: #55ff00;
          stroke-dasharray: 8;
          transform: (rotate 210deg);
        }
      }
      .pic .statu svg {
        animation:loading 1500ms ease-in-out;
      }
      `;
      document.head.appendChild(style);

      anim[i].classList.add('dynamic-class');
        
        setTimeout(() => {
  style.parentNode.removeChild(style);
  alert;
}, 1600);
    });
}


// Highlights Circle One Animation
let highlightAnimationOne = document.getElementsByClassName('parent-block-one');

for (let i = 0; i < highlightAnimationOne.length; i++) {
    highlightAnimationOne[i].addEventListener('click', function () {
      let style = document.createElement('style');
      style.innerHTML = `
      @keyframes loading {
        100% {
          stroke: #55ff00;
          stroke-dasharray: 8;
          transform: (rotate 210deg);
        }
      }
      .parent-block-one .child-block-one svg {
        animation:loading 1500ms ease-in-out;
      }
      `;
      document.head.appendChild(style);

      highlightAnimationOne[i].classList.add('dynamic-class');
        
        setTimeout(() => {
  style.parentNode.removeChild(style);
  alert;
}, 1600);
    });
}

// Highlights Circle Two Animation
let highlightAnimationTwo = document.getElementsByClassName('parent-block-two');

for (let i = 0; i < highlightAnimationTwo.length; i++) {
    highlightAnimationTwo[i].addEventListener('click', function () {
      let style = document.createElement('style');
      style.innerHTML = `
      @keyframes loading {
        100% {
          stroke: #55ff00;
          stroke-dasharray: 8;
          transform: (rotate 210deg);
        }
      }
      .parent-block-two .child-block-two svg {
        animation:loading 1500ms ease-in-out;
      }
      `;
      document.head.appendChild(style);

      highlightAnimationTwo[i].classList.add('dynamic-class');
        
        setTimeout(() => {
  style.parentNode.removeChild(style);
  alert;
}, 1600);
    });
}

// Highlights Circle Three Animation
let highlightAnimationThree = document.getElementsByClassName('parent-block-three');

for (let i = 0; i < highlightAnimationThree.length; i++) {
    highlightAnimationThree[i].addEventListener('click', function () {
      let style = document.createElement('style');
      style.innerHTML = `
      @keyframes loading {
        100% {
          stroke: #55ff00;
          stroke-dasharray: 8;
          transform: (rotate 210deg);
        }
      }
      .parent-block-three .child-block-three svg {
        animation:loading 1500ms ease-in-out;
      }
      `;
      document.head.appendChild(style);

      highlightAnimationThree[i].classList.add('dynamic-class');
        
        setTimeout(() => {
  style.parentNode.removeChild(style);
  alert;
}, 1600);
    });
}


// First Highlight
// Left Side Hovering
let hoverOne = document.getElementsByClassName('parent-block-one');

for (let i = 0; i < hoverOne.length; i++) {
  let addedElement = null;

  hoverOne[i].addEventListener('mouseover', function () {
    if (!addedElement) {
      addedElement = document.createElement('div');
      addedElement.classList.add('bg-image'); // add class with styling

      addedElement.innerHTML = `
        <img src="/My_Projects/minimalist-portfolio/Media/Images/Left.png" alt="">
      `;

      const target = document.querySelector('.left-hover');
      if (target) {
        target.appendChild(addedElement);
      }
    }

    hoverOne[i].classList.add('left-hoverd');
  });

  hoverOne[i].addEventListener('mouseout', function () {
    if (addedElement && addedElement.parentNode) {
      addedElement.parentNode.removeChild(addedElement);
      addedElement = null;
    }

    hoverOne[i].classList.remove('left-hoverd');
  });
}


// Right Side Hovering
let rightHoverOne = document.getElementsByClassName('parent-block-one');

for (let i = 0; i < rightHoverOne.length; i++) {
  let addedElement = null;

  rightHoverOne[i].addEventListener('mouseover', function () {
    if (!addedElement) {
      addedElement = document.createElement('div');
      addedElement.classList.add('bg-image'); // add class with styling

      addedElement.innerHTML = `
        <img src="/My_Projects/minimalist-portfolio/Media/Images/Right.png" alt="">
      `;

      const target = document.querySelector('.right-hover');
      if (target) {
        target.appendChild(addedElement);
      }
    }

    rightHoverOne[i].classList.add('right-hoverd');
  });

  rightHoverOne[i].addEventListener('mouseout', function () {
    if (addedElement && addedElement.parentNode) {
      addedElement.parentNode.removeChild(addedElement);
      addedElement = null; 
    }

    rightHoverOne[i].classList.remove('right-hoverd');
  });
}


// Second Highlight
// Left Side Hovering
let hoverTwo = document.getElementsByClassName('parent-block-two');

for (let i = 0; i < hoverTwo.length; i++) {
  let addedElement = null;

  hoverTwo[i].addEventListener('mouseover', function () {
    if (!addedElement) {
      addedElement = document.createElement('div');
      addedElement.classList.add('bg-image'); // add class with styling

      addedElement.innerHTML = `
        <img src="/My_Projects/minimalist-portfolio/Media/Images/Left.png" alt="">
      `;

      const target = document.querySelector('.left-hover');
      if (target) {
        target.appendChild(addedElement);
      }
    }

    hoverTwo[i].classList.add('left-hoverd');
  });

  hoverTwo[i].addEventListener('mouseout', function () {
    if (addedElement && addedElement.parentNode) {
      addedElement.parentNode.removeChild(addedElement);
      addedElement = null;
    }

    hoverTwo[i].classList.remove('left-hoverd');
  });
}


// Right Side Hovering
let rightHoverTwo = document.getElementsByClassName('parent-block-two');

for (let i = 0; i < rightHoverTwo.length; i++) {
  let addedElement = null;

  rightHoverTwo[i].addEventListener('mouseover', function () {
    if (!addedElement) {
      addedElement = document.createElement('div');
      addedElement.classList.add('bg-image'); // add class with styling

      addedElement.innerHTML = `
        <img src="/My_Projects/minimalist-portfolio/Media/Images/Right.png" alt="">
      `;

      const target = document.querySelector('.right-hover');
      if (target) {
        target.appendChild(addedElement);
      }
    }

    rightHoverTwo[i].classList.add('right-hoverd');
  });

  rightHoverTwo[i].addEventListener('mouseout', function () {
    if (addedElement && addedElement.parentNode) {
      addedElement.parentNode.removeChild(addedElement);
      addedElement = null; 
    }

    rightHoverTwo[i].classList.remove('right-hoverd');
  });
}

// Third Highlight
// Left Side Hovering
let hoverThree = document.getElementsByClassName('parent-block-three');

for (let i = 0; i < hoverThree.length; i++) {
  let addedElement = null;

  hoverThree[i].addEventListener('mouseover', function () {
    if (!addedElement) {
      addedElement = document.createElement('div');
      addedElement.classList.add('bg-image'); // add class with styling

      addedElement.innerHTML = `
        <img src="/My_Projects/minimalist-portfolio/Media/Images/Left.png" alt="">
      `;

      const target = document.querySelector('.left-hover');
      if (target) {
        target.appendChild(addedElement);
      }
    }

    hoverThree[i].classList.add('left-hoverd');
  });

  hoverThree[i].addEventListener('mouseout', function () {
    if (addedElement && addedElement.parentNode) {
      addedElement.parentNode.removeChild(addedElement);
      addedElement = null;
    }

    hoverThree[i].classList.remove('left-hoverd');
  });
}


// Right Side Hovering
let rightHoverThree = document.getElementsByClassName('parent-block-three');

for (let i = 0; i < rightHoverThree.length; i++) {
  let addedElement = null;

  rightHoverThree[i].addEventListener('mouseover', function () {
    if (!addedElement) {
      addedElement = document.createElement('div');
      addedElement.classList.add('bg-image'); // add class with styling

      addedElement.innerHTML = `
        <img src="/My_Projects/minimalist-portfolio/Media/Images/Right.png" alt="">
      `;

      const target = document.querySelector('.right-hover');
      if (target) {
        target.appendChild(addedElement);
      }
    }

    rightHoverThree[i].classList.add('right-hoverd');
  });

  rightHoverThree[i].addEventListener('mouseout', function () {
    if (addedElement && addedElement.parentNode) {
      addedElement.parentNode.removeChild(addedElement);
      addedElement = null; 
    }

    rightHoverThree[i].classList.remove('right-hoverd');
  });
}