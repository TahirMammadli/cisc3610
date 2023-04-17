const scene = document.getElementById('scene');
const personA = createPerson('personA');
const personB = createPerson('personB', true);
const bubbleA = createBubble('bubbleA');
const bubbleB = createBubble('bubbleB');

function createPerson(id, flip = false) {
  const person = document.getElementById(id);

  person.innerHTML = `
    <div class="circle head"></div>
    <div class="body">
      <div class="arm left-arm"></div>
      <div class="arm right-arm"></div>
    </div>
    <div class="leg left-leg"></div>
    <div class="leg right-leg"></div>
  `;

  if (flip) {
    person.style.transform = 'scaleX(-1)';
  }

  return person;
}

function createBubble(id) {
  const bubble = document.getElementById(id);
  scene.appendChild(bubble);
  return bubble;
}

const story = [
  {
    textA: 'Hi there!',
    textB: 'Hello!'
  },
  {
    textA: 'How are you?',
    textB: 'Good, thanks!'
  },
  {
    textA: 'Nice weather today!',
    textB: 'Yes, it is!'
  }
];

let frame = 0;

function animate() {
  const currentFrame = story[frame % story.length];

  bubbleA.textContent = currentFrame.textA;
  bubbleA.style.display = 'block';
  bubbleA.style.left = personA.offsetLeft + personA.offsetWidth + 'px';
  bubbleA.style.top = personA.offsetTop + 'px';

  bubbleB.textContent = currentFrame.textB;
  bubbleB.style.display = 'block';
  bubbleB.style.right = scene.offsetWidth - (personB.offsetLeft + personB.offsetWidth) + 'px';
  bubbleB.style.top = personB.offsetTop + 'px';

  frame++;

  setTimeout(() => {
    bubbleA.style.display = 'none';
    bubbleB.style.display = 'none';
    setTimeout(animate, 1000);
  }, 2000);
}

animate();
