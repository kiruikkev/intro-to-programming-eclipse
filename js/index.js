const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = ("Kelvin Kirui @Copy:" + thisYear);
footer.appendChild(copyright);



let skills = ['Java script', 'HTML', 'Linux', 'Windows']

function addSkills(skills) {
    for (let i = 0, i < skills.length; i++) {
        let skill = document.createElement('li');
        skill.innerHTML = (skills[i]);
        skilllist.appendChild(skill);

    }


}
addSkills(skills);