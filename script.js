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