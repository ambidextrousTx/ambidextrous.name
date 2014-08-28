/**
 * Created by ambidextrous on 6/1/14.
 */

var holder = document.getElementById('flip-text-holder');
holder.onclick = function () {
    var text1 = 'Ravi S Sinha is Ambidextrous';
    var text2 = 'Ambidextrous is Ravi S Sinha';
    holder.innerHTML = holder.innerHTML === text1 ? text2 : text1;

}

var skillsHolder = document.getElementById('skills-flash');
var skillIndex = 0;

function skillsFlash() {
    var skills = ['Engineer, researcher, scientist', 'Open sourcer, fitness enthusiast, trilingual', 'Work in progress', 'Passionate software developer'];
    var skillParticle = document.createElement('p');
    var skillText = document.createTextNode(skills[skillIndex]);
    skillParticle.appendChild(skillText);
    skillsHolder.innerHTML = skillParticle.innerHTML;
    skillIndex++;
    if (skillIndex >= skills.length) skillIndex = 0;
}

setInterval(skillsFlash, 2000);

skillsHolder.onclick = function() {
    if(skillsHolder.className == '' || skillsHolder.className == 'left')
        skillsHolder.className = 'right';
    else
        skillsHolder.className = 'left';

}

function populateTime() {
    var now = moment();
    var holder = document.getElementById('moment');
    var holderP = document.createElement('p');
    var timeText = document.createTextNode(now);
    holderP.appendChild(timeText);
    holder.innerHTML = holderP.innerHTML;

}

populateTime();