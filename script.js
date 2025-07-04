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
let pop = document.getElementsByClassName('hero-pic');

for (let i = 0; i < pop.length; i++) {
  pop[i].addEventListener('click', function () {
    // Add circle animation styles
    let style = document.createElement('style');
    style.innerHTML = `
      @keyframes loading {
        100% {
          stroke: #55ff00;
          stroke-dasharray: 10;
          transform: rotate(210deg);
        }
      }
      .pic .statu svg {
        animation: loading 1400ms ease-in-out;
      }
    `;
    document.head.appendChild(style);

    pop[i].classList.add('dynamic-class');

    // Wait 1400ms before showing the "About Me" section
    setTimeout(() => {
      style.remove(); // Remove animation style

      let aboutMeSection = document.createElement('section');
      aboutMeSection.innerHTML = `
          <div class="top-head">
              <div class="logo">
                  <img src="Media/Images/Hero-pic.jpg" alt="Hamza Ouyoussef">
                  <div class="name">
                      <h1>Hamza Ouyoussef</h1>
                      <h2>@hamzaoyosf</h2>  
                  </div>
              </div>
              <div class="close-button">
                  <button>Close</button>
              </div>
          </div>
          <div class="content">
              <h1>About Me</h1>
              <img src="Media/Images/Right.png" alt="hamzaoyosf">
              <p>Hi! My name is Hamza Ouyoussef, AKA Hamza OYOSF. I'm <span class="age"></span> years old and I'm from MOROCCO. I'm a Quality Assurance (QA) Engineer. I have several skills that help me in QA engineering, like social media marketing and management, basics in design, and strong research and self-learning abilities.</p>
          </div>
      `;

      aboutMeSection.classList.add('about-me');
      document.body.appendChild(aboutMeSection);

      // Add close event
      const closeBtn = aboutMeSection.querySelector('.close-button button');
      closeBtn.addEventListener('click', function () {
        aboutMeSection.remove();
      });

      const age = aboutMeSection.querySelector(".age");

        // Calculate age
        const birthDate = new Date(1999, 3, 15); // Months are zero-indexed: 3 = April
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();

        // Adjust if the birthday hasn't occurred yet this year
        const hasHadBirthdayThisYear = 
            today.getMonth() > birthDate.getMonth() || 
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) {
          calculatedAge--;
        }

      age.textContent = calculatedAge;

      

    }, 1200);
  });
}


// Highlights Circle One Animation
let highlightAnimationOne = document.getElementsByClassName('parent-block-one');

for (let i = 0; i < highlightAnimationOne.length; i++) {
  highlightAnimationOne[i].addEventListener('click', function () {
    // Add circle animation styles
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

    // Wait 1400ms before showing the "About Me" section
    setTimeout(() => {
      style.remove(); // Remove animation style

      let aboutMeSection = document.createElement('section');
      aboutMeSection.innerHTML = `
          <div class="top-head">
              <div class="logo">
                  <img src="Media/Images/Hero-pic.jpg" alt="Hamza Ouyoussef">
                  <div class="name">
                      <h1>Hamza Ouyoussef</h1>
                      <h2>@hamzaoyosf</h2>  
                  </div>
              </div>
              <div class="close-button">
                  <button>Close</button>
              </div>
          </div>
          <div class="content">
              <h1>About Me</h1>
              <img src="Media/Images/Right.png" alt="hamzaoyosf">
              <p>Hi! My name is Hamza Ouyoussef, AKA Hamza OYOSF. I'm <span class="age"></span> years old and I'm from MOROCCO. I'm a Quality Assurance (QA) Engineer. I have several skills that help me in QA engineering, like social media marketing and management, basics in design, and strong research and self-learning abilities.</p>
          </div>
      `;

      aboutMeSection.classList.add('about-me');
      document.body.appendChild(aboutMeSection);

      // Add close event
      const closeBtn = aboutMeSection.querySelector('.close-button button');
      closeBtn.addEventListener('click', function () {
        aboutMeSection.remove();
      });

      const age = aboutMeSection.querySelector(".age");

        // Calculate age
        const birthDate = new Date(1999, 3, 15); // Months are zero-indexed: 3 = April
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();

        // Adjust if the birthday hasn't occurred yet this year
        const hasHadBirthdayThisYear = 
            today.getMonth() > birthDate.getMonth() || 
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) {
          calculatedAge--;
        }

      age.textContent = calculatedAge;

      

    }, 1200);
  });
}

// Highlights Circle Two Animation
let highlightAnimationTwo = document.getElementsByClassName('parent-block-two');

for (let i = 0; i < highlightAnimationTwo.length; i++) {
  highlightAnimationTwo[i].addEventListener('click', function () {
    // Add circle animation styles
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

    // Wait 1400ms before showing the "About Me" section
    setTimeout(() => {
      style.remove(); // Remove animation style

      let myWorkSection = document.createElement('section');
      myWorkSection.innerHTML = `
        <div class="top-head">
          <div class="logo">
              <a href="#"><img src="Media/Images/Hero-pic.jpg" alt="Hamza Ouyoussef"></a>
              <div class="name">
                  <a href="#"><h1>Hamza Ouyoussef</h1></a>
                  <a href="#"><h2>@hamzaoyosf</h2></a>
              </div>
          </div>
          <div class="close-button">
              <button>Close</button>
          </div>
        </div>
        <div class="content">
          <h1>My Work</h1>
          <section class="gallery">
              <div class="one">
                  <img src="Media/Images/Hero-pic.jpg" alt="First Project<">
                  <div class="title">
                      <h2>First Project</h2>
                      <h3>description</h3> 
                  </div>
                  
              </div>
              <div class="two">
                  <img src="Media/Images/Hero-pic.jpg" alt="Second Project">
                  <div class="title">
                      <h2>Second Project</h2>
                      <h3>description</h3> 
                  </div>
                  
              </div>
              <div class="three">
                  <img src="Media/Images/Hero-pic.jpg" alt="Third Project">
                  <div class="title">
                      <h2>Third Project</h2>
                      <h3>description</h3> 
                  </div>
                  
              </div>
              <div class="fore">
                  <img src="Media/Images/Hero-pic.jpg" alt="Forth Project">
                  <div class="title">
                      <h2>Forth Project</h2>
                      <h3>description</h3> 
                  </div>
                  
              </div>
          </section>
        </div>
      `;

      myWorkSection.classList.add('my-work');
      document.body.appendChild(myWorkSection);

      // Add close event
      const closeBtn = myWorkSection.querySelector('.close-button button');
      closeBtn.addEventListener('click', function () {
        myWorkSection.remove();
      });     

    }, 1200);
  });
}

// Highlights Circle Three Animation
let highlightAnimationThree = document.getElementsByClassName('parent-block-three');

for (let i = 0; i < highlightAnimationThree.length; i++) {
  highlightAnimationThree[i].addEventListener('click', function () {
    // Add circle animation styles
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

    // Wait 1400ms before showing the "About Me" section
    setTimeout(() => {
      style.remove(); // Remove animation style

      let aboutMeSection = document.createElement('section');
      aboutMeSection.innerHTML = `
          <div class="top-head">
            <div class="logo">
                <a href="#"><img src="Media/Images/Hero-pic.jpg" alt="Hamza Ouyoussef"></a>
                <div class="name">
                    <a href="#"><h1>Hamza Ouyoussef</h1></a>
                    <a href="#"><h2>@hamzaoyosf</h2></a>
                </div>
            </div>
            <div class="close-button">
                <button>Close</button>
            </div>
        </div>
        <div class="content">
            <h1>Skills</h1>
            <div class="skills-content">
                <div class="it-skills">
                    <h2>IT Skills</h2>
                    <div class="it-skills-content">
                        <div class="first-skill">
                            <img src="Media/Images/html-icon.png" alt="HTML">
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                            <h3 class="porsentage">60%</h3>
                        </div>
                        <div class="second-skill">
                            <img src="Media/Images/css-icon.png" alt="CSS">
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                            <h3 class="porsentage">50%</h3>
                        </div>
                        <div class="third-skill">
                            <img src="Media/Images/js-icon.svg" alt="JavaScript">
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                            <h3 class="porsentage">40%</h3>
                        </div>
                        <div class="fourth-skill">
                            <img src="Media/Images/react-icon.png" alt="React.js">
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                            <h3 class="porsentage">30%</h3>
                        </div>
                        <div class="fifth-skill">
                            <img src="Media/Images/api-icon.png" alt="API">
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                            <h3 class="porsentage">40%</h3>
                        </div>
                    </div>
                </div>
                <div class="business-skills">
                    <h2>Business Skills</h2>
                    <div class="content">
                        <div class="first-skill">
                            <div class="logo">
                                <img src="Media/Images/social media management.png" alt="Social Media">
                            </div>
                            <h3 class="name">Social Media Management</h3>
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                        </div>
                        <div class="second-skill">
                            <div class="logo">
                                <img src="Media/Images/copywriting.png" alt="Copywriting">
                            </div>
                            <h3 class="name">Copywriting</h3>
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                        </div>
                        <div class="third-skill">
                            <div class="logo">
                                <img src="Media/Images/crm.png" alt="CRM">
                            </div>
                            <h3 class="name">Custumer Relationship Management (CRM)</h3>
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                        </div>
                        <div class="fourth-skill">
                            <div class="logo">
                                <img src="Media/Images/envintory management.png" alt="Managenent">
                            </div>
                            <h3 class="name">Envintory Management</h3>
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                        </div>
                        <div class="fifth-skill">
                            <div class="logo">
                                <img src="Media/Images/commerc.png" alt="Commerce">
                            </div>
                            <h3 class="name">Commerce</h3>
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                        </div>
                        <div class="sixth-skill">
                            <h3 class="name"></h3>
                            <div class="back-line">
                                <div class="front-line"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="tools">
                    <h2>Tools</h2>
                    <div class="tools-content">
                        <div class="logos">
                            <img src="Media/Images/make.webp" alt="Make.com">
                            <img src="Media/Images/Sage.webp" alt="Sage">
                            <img src="Media/Images/figma.png" alt="Figma">
                            <img src="Media/Images/manychat.webp" alt="ManyChat">
                        </div>
                        <div class="logos">
                            <img src="Media/Images/make.webp" alt="Make.com">
                            <img src="Media/Images/Sage.webp" alt="Sage">
                            <img src="Media/Images/figma.png" alt="Figma">
                            <img src="Media/Images/manychat.webp" alt="ManyChat">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;

      aboutMeSection.classList.add('skills');
      document.body.appendChild(aboutMeSection);

      // Add close event
      const closeBtn = aboutMeSection.querySelector('.close-button button');
      closeBtn.addEventListener('click', function () {
        aboutMeSection.remove();
      });

    }, 1200);
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
        <img src="Media/Images/Left.png" alt="Hamza Ouyoussef">
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
        <img src="Media/Images/Right.png" alt="Hamza Ouyoussef">
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
        <img src="Media/Images/Left.png" alt="Hamza Ouyoussef">
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
        <img src="Media/Images/Right.png" alt="Hamza Ouyoussef">
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
        <img src="Media/Images/Left.png" alt="Hamza Ouyoussef">
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
        <img src="Media/Images/Right.png" alt="Hamza Ouyoussef">
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