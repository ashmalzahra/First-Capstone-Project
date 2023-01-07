const experts = [
  {
    title: 'QUALITY APPROACH',
    email: 'info@techin.com',
    paragraph: 'Our Social Media Agency has a professional team with skills inherent to each member.',
    img1: './images/quality.jpeg',
    class: 'item',
  },

  {
    title: 'DESIGN OF YOUR PRODUCT',
    email: 'info@techin.com',
    paragraph: 'An upstream research is set up to study your industry web and marketing environment.',
    img1: './images/The-Product-Design-Process.webp',
    class: 'item',
  },
];

const addExperts = [

  {
    title: 'KEEPING TRACK',
    email: 'info@techin.com',
    paragraph: 'We keep you updated on the creation progress during development phase.',
    img1: './images/IC-OG-ProjectStatusReport.jpg',
    class: 'item',
    btnClass: 'add-speaker-sec',
  },

  {
    title: 'PROJECT MONITORING',
    email: 'info@techin.com',
    paragraph: 'For smooth development, we offer personal follow-up with a privileged interlocutor.',
    img1: './images/pm.png',
    class: 'item',
    btnClass: 'add-speaker-sec',
  },

];

const addExperts2 = [

  {
    title: 'EASY CONNECTION',
    email: 'info@techin.com',
    paragraph: 'We offer you the Digital Marketing service based on your specific and real needs.',
    img1: './images/creating-a-store-discount.jpg',
    class: 'item',
    btnClass: 'add-speaker-sec',
  },

  {
    title: 'YOU DESIGN IT',
    email: 'info@techin.com',
    paragraph: 'Whatever your demand, we create, develop and execute customized strategies.',
    img1: './images/cellphone-floats-above-light-blue-background.jpg',
    class: 'item',
    btnClass: 'add-speaker-sec',
  },

];

const speakerSection = document.querySelector('.speaker-sec');

let text1 = '';

experts.forEach((element) => {
  text1 += `

<div class="item">
    <div class="chess">
    <img class="img-item" src="${element.img1}" alt="">
    </div>
    <div class="description">
    <h5 class="description-heading">${element.title}</h5>
    <a class="email" href="">${element.email}</a>
    <hr class="chess-line">
    <p class="description-paragraph">${element.paragraph}</p>
    </div>
</div>
 
`;
});

speakerSection.innerHTML = text1;

const addSpeakerSection = document.querySelector('.add-speaker-sec');

let text2 = '';

addExperts.forEach((element) => {
  text2 += `

<div class=" item">
    <div class="chess">
    <img class="img-item" src="${element.img1}" alt="">
    </div>
    <div class="description">
    <h5 class="description-heading">${element.title}</h5>
    <a class="email" href="">${element.email}</a>
    <hr class="chess-line">
    <p class="description-paragraph">${element.paragraph}</p>
    </div>
</div>   `;
});

addSpeakerSection.innerHTML = text2;

const addSpeakerSection1 = document.querySelector('.add-speaker-sec1');

let text3 = '';

addExperts2.forEach((element) => {
  text3 += `

<div class=" item">
    <div class="chess">
    <img class="img-item" src="${element.img1}" alt="">
    </div>
    <div class="description">
    <h5 class="description-heading">${element.title}</h5>
    <a class="email" href="">${element.email}</a>
    <hr class="chess-line">
    <p class="description-paragraph">${element.paragraph}</p>
    </div>
</div>   `;
});

addSpeakerSection1.innerHTML = text3;
