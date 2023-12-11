// Array to store projects
const projects = [
    {
        name: 'GPT-3',
        description: 'Modern UI/UX GPT-3 using React.js , Designed by Figma.',
        stack: ['React'],
        imageSrc: './img/gpt.png',
        githubLink: 'https://github.com/salwa-yehya/React-GPT3',
        demoLink: 'https://reactapp-43d72.web.app/'
    },
    {
        name: 'POM Loop',
        description: 'A Productivity Timer App for Efficient Study and Work',
        stack: ['React' ],
        imageSrc: './img/loop.png',
        githubLink: 'https://github.com/salwa-yehya/Pom_Loop',
        demoLink: 'https://pom-loop.web.app/'
    },
    {
        name: 'Reflection',
        description: 'Full Functionality Ecommerce & Admin Panel.',
        stack: ['Laravel','PHP'],
        imageSrc: './img/reflection.JPG',
        githubLink: 'https://github.com/salwa-yehya/MasterPe',
    //    demoLink: 'https://pom-loop.web.app/'
    },
];

function createProjectCard(project) {
    const projectsContainer = document.getElementById('projects-container');

    // Create a new project card element
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');

    // Add card image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const img = document.createElement('img');
    img.src = project.imageSrc;
    img.alt = 'Project Image';
    cardImage.appendChild(img);

    // Add stack information
    const stackContainer = document.createElement('div');
    stackContainer.classList.add('stack');
    project.stack.forEach(tech => {
        const stackBtn = document.createElement('span');
        stackBtn.classList.add('stack-btn', tech.toLowerCase());
        stackBtn.textContent = tech;
        stackContainer.appendChild(stackBtn);
    });

    // Add card content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <br>
        <a class="github" href="${project.githubLink}" target="_blank">GitHub</a>
        ${project.demoLink ? `<a class="status" href="${project.demoLink}" target="_blank">Live Demo</a>` : ''}

    `;

    // Assemble the project card
    projectCard.appendChild(cardImage);
    projectCard.appendChild(stackContainer);
    projectCard.appendChild(cardContent);

    // Append the project card to the container
    projectsContainer.appendChild(projectCard);
}

// Loop through the projects array and add each project card to the DOM
projects.forEach(createProjectCard);
