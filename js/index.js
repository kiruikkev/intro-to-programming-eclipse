const today = new Date()
console.log(today)
const thisyear = today.getFullYear()
console.log(thisyear)
const footer = document.querySelector('footer')
console.log(footer)
const copyright = document.createElement('p')
console.log(copyright)
copyright.innerHTML = `Kelvin kirui &copy; ${thisyear}`;
footer.appendChild(copyright)
const skills = [
    'Java script', 'HTML', 'Linux', 'Windows'
]
const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector('ul')
console.log(skills)
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    console.log(skill.innerHTML)
    skillsList.appendChild(skill)
}