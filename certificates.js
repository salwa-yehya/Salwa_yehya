const certificates = [
    {
        name :'Full Stack web Developer Certificate',
        description :'Issued by Simplon.co',
        link : 'https://www.linkedin.com/company/simplon-co/',
        skills :['HTML' , 'CSS' , 'JS', 'React' , 'PHP' , 'Laravel'],
        imageSrc:'./img/full.jpeg',       
    },
    {
        name :'Introduction to Python Certificate',
        description :'Issued by soloLearn',
        link : 'https://www.sololearn.com/en/',
        skills :['Python'],
        imageSrc:'./img/python_course.jpg',       
    },
    {
        name :'Google Analytics for Beginners',
        description :'Issued by Google Analytics Academy',
        link :'https://analytics.google.com/analytics/academy/',
        skills :['GoogleAnalytics'],
        imageSrc:'./img/Google.jpeg',       
    },
];

function creatCertificatesCard(certificate){
    const certificateContainer = document.getElementById('certificates-container');

    //Creat certificate card element 
    const certificateCard = document.createElement('div')
    certificateCard.classList.add('card');
 
    // add card image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const img = document.createElement('img');
    img.src = certificate.imageSrc;
    img.alt ='Certificate Image';

    
    cardImage.appendChild(img);

    // add skills info
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('stack');
    certificate.skills.forEach(tech =>{
        const stackBtn = document.createElement('span');
        stackBtn.classList.add('stack-btn' ,tech.toLowerCase());
        stackBtn.textContent = tech ;
        skillContainer.appendChild(stackBtn);
    });

    //add content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `
    <h3> ${certificate.name} </h3>
    <a class="link" title="click me" href="${certificate.link}" target="_blank"><p> ${certificate.description}</p></a>

    
    `;

    // Assemble the certificate card
    certificateCard.appendChild(cardImage);
    certificateCard.appendChild(skillContainer);
    certificateCard.appendChild(cardContent);
   
    // Append the certificate card to the container
    certificateContainer.appendChild(certificateCard);
 
}

// Loop through the certificates array and add each certificate card to the DOM
certificates.forEach(creatCertificatesCard);