const today = new Date();
console.log(today);
const thisyear = today.getFullYear();
console.log(thisyear);
const footer = document.querySelector('footer');
console.log(footer);
const copyright = document.createElement('p');
console.log(copyright);
copyright.innerHTML = `Kelvin kirui &copy; ${thisyear}`;
footer.appendChild(copyright);
const skills = [
    'I.T Consultant', 'Java script', 'HTML', 'Linux', 'Windows'
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
console.log(skills);
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    console.log(skill.innerHTML);
    skillsList.appendChild(skill);
}
const messageForm = document.getElementById('leave_message');
console.log(messageForm)
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Message = e.target.message.value;
    console.log(Name, Email, Message);
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${Email}">${Name}</a> wrote:<span>${Message}</span>`
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove()
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});
const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/kiruikkev/repos');
githubRequest.send();
githubRequest.addEventListener('load', (event) => {
    const repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);


});
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');
console.log(projectList);
for (var i = 0; i < projectList.length; i++) {
    const project = document.createElement('li');
    project.innerHTML = projectList[i];
    projectList.appendChild(project);
}