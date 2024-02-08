(function () {
    'use strict';
    console.log('reading js');
  })();
  
  const form = document.querySelector('#form');
  const formWrapper = document.querySelector('#form-wrapper');
  const story = document.querySelector('#story');
  const storyWrapper = document.querySelector('#story-wrapper');
  const landingTitle = document.querySelector('#landing-title');
  const onsubmitTitle = document.querySelector('#onsubmit-title');
  const img = document.querySelector('#bdaycake');
  const bdayName = document.querySelector('#name');
  const food = document.querySelector('#food');
  const food2 = document.querySelector('#food2');
  const bodyPart = document.querySelector('#bodyPart');
  const bodyPart2 = document.querySelector('#bodyPart2');
  const noun = document.querySelector('#noun');
  const num = document.querySelector('#num');
  const adj = document.querySelector('#adj');
  const sound = document.querySelector('#sound');
  const animalChoice = document.querySelector('#choice');
  
  form?.addEventListener("submit", function(e) {
    e.preventDefault();

    landingTitle.style.display = "none";
    onsubmitTitle.style.display = "block";
    onsubmitTitle.textContent = `Happy Birthday To ${bdayName.value} !`;
    img.src = "images/bdaycake2.png";
    img.classList.add('bdaycake2'); 
    formWrapper.style.display = "none";
    storyWrapper.style.display = "block";
  
    const htmlContent = `<span>Today is <span style="color: red">${bdayName.value}</span>'s birthday, so I decided to make him/her a yummy birthday cake ! </span>
  
    <span>I mainly used <span style="color: brown">${food.value}</span> and <span style="color: brown">${food2.value}</span> to make the cake. I mixed these ingredients with my <span style="color: brown">${bodyPart.value}</span> and it was exhausting and he/she better likes my cake! The cake turned out to be <span style="color: brown">${noun.value}</span> shape . I told him/her that he/she needs to use <span style="color: brown">${bodyPart.value}</span> to eat the cake , so it would match my idea behind making this cake.</span>
        
    <span>He/She took <span style="color: brown">${num.value}</span> consecutive bites of the cake and his/her face suddenly turns <span style="color: brown">${adj.value}</span> And said <span style="color: brown">${sound.value}</span>.</span>
        
    <span>After tasting the cake, he/she said he <span style="color: brown">${animalChoice.value}</span> want to try the cake again!</span>`;
    
    story.insertAdjacentHTML('beforeend', htmlContent);
    
  });