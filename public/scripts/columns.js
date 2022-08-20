const rightColumnItems = document.getElementsByClassName('right-column-content');
var mainColumnContent = document.getElementById('main-column-content');
var rightColumn = document.getElementById('right-column-content');
var rightColumnLinkees = document.getElementsByClassName('right-column-linkee');

if (window.outerWidth >= 600){
    var mobile_view = false;
} else {
    var mobile_view = true;
}

function resizeChecker() {
    console.log('resize' + window.outerWidth);
//    if ()
}

document.body.onresize = resizeChecker;

function setUpColumns() {
    if (mobile_view == true) {
        console.log('mobile');
    } else if (mobile_view == false) { // DESKTOP
        console.log('not mobile');
        for (var cs = 0; cs < rightColumnItems.length; cs++) {
            var child = rightColumnItems[0].parentNode.removeChild(rightColumnItems[0]);
            //    var child = mainColumnContent.removeChild(rightColumnItems[cs]);
            rightColumn.appendChild(child);
        }
    }
}

setUpColumns();


function columnLink(linkToId) {
    console.log('works');
    if (mobile_view == true) {

        if (document.getElementById(linkToId).style.display == 'block') {
            document.getElementById(linkToId).style.display = 'none';
        } else {
        for (var i = 0; i < rightColumnLinkees.length; i++) {
            if (rightColumnLinkees[i].style.display == 'block') {
                rightColumnLinkees[i].style.display = 'none';
            }
        }
        var close_buttons = document.getElementsByClassName('linkee-popup-close-button');
        for (var i = 0; i < close_buttons.length; i++) {
            close_buttons[i].remove();
        }

        document.getElementById(linkToId).style.display = 'block';
        document.getElementById(linkToId).addEventListener('click', () => {
            document.getElementById(linkToId).style.display = 'none';
        }, false);
        }

        // positioner for linkee pop-up
        document.getElementById(linkToId).style.top = event.target.offsetTop - (document.getElementById(linkToId).offsetHeight / 2) + 'px' ;

        // close button for linkee
        var close_button = document.createElement("div");
        close_button.innerHTML = 'X';
        close_button.classList.add('linkee-popup-close-button');
        if (document.getElementById(linkToId).nodeName == "IMG") {
            close_button.style.top = event.target.offsetTop - (document.getElementById(linkToId).offsetHeight / 2) -30 + 'px';
            close_button.style.right = window.outerWidth - document.getElementById(linkToId).getBoundingClientRect()['right'] -10 + 'px';
            close_button.addEventListener('click', () => {
                document.getElementById(linkToId).style.display = 'none';
                close_button.remove();
                }, false);
            document.getElementById(linkToId).parentNode.appendChild(close_button);
        } else {
            document.getElementById(linkToId).appendChild(close_button);
        }

        // ADD SIZER //
    } else if (mobile_view == false) {
        document.getElementById('column-right').scrollTop = document.getElementById(linkToId).offsetTop - event.clientY + (document.getElementById(linkToId).clientHeight * 0.55);
        console.log(event);
    }
}



//var subjects = document.getElementsByClassName('subject');
//const objects = document.getElementsByClassName('object');
//
//console.log(subjects);
//console.log(objects);
//console.log(objects[0].offsetTop);
//var iteration = 0;
//
//for (let sub_it = 0; sub_it < subjects.length; sub_it++) {
//    iteration = sub_it;
//
//    subjects[iteration].addEventListener("click", showNextCol, false);
//}

//function showNextCol() {
//    console.log(subjects);
//    subjects.indexOf(event.target);
//}
