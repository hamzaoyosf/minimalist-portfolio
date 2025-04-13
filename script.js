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