/**
 * Created by ambidextrous on 6/1/14.
 */

var holder = document.getElementById('flip-text-holder');
holder.onclick = function () {
    var text1 = 'Ravi S Sinha is Ambidextrous';
    var text2 = 'Ambidextrous is Ravi S Sinha';
    holder.innerHTML = holder.innerHTML === text1 ? text2 : text1;

}

