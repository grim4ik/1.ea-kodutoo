//avalikud muutujad
var firstname;
var last;

// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    // e on ise m��ratud muutuja nimi
    window.addEventListener("keypress", function(e){
        console.log(e);

        if (e.charCode == 13) {
            console.log('Keegi vajutas Enter klahvi');
        }
    });

    var clickMeButton = document.getElementById("click-me-button");
    clickMeButton.addEventListener('click', function(){
        clickMeButton.style.display = "none";
    });

    addAuthor("Kirill Kotkas");


    window.addEventListener('dblclick', function(){
        var clockDiv = document.getElementById('clock');
        console.log(clockDiv);
        if(clockDiv.className == "big"){
            clockDiv.className = "small";
        }else{
            clockDiv.className = "big";
        }
    });
	
	    window.addEventListener('click', function(){
        var clockDiv = document.getElementById('clock');
        console.log(clockDiv);
        if(clockDiv.className == "big"){
            clockDiv.className = "small";
        }else{
            clockDiv.className = "big";
        }
    });
};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

	var year = currentDate.getFullYear();
	var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var n = month[currentDate.getMonth()];
	var day = currentDate.getDate();

	var dayOfWeek = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + ' ' + addZeroBefore(day) + '-' + addZeroBefore(n) + '-' + addZeroBefore(year) + '  ' + addZeroBefore(dayOfWeek);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

function addAuthor(name){

    firstname = document.createElement('span');
    firstname.innerHTML = name.split(" ")[0];
    last = document.createElement('span');
    last.innerHTML = name.split(" ")[1];

    var p = document.createElement('p');
    p.appendChild(firstname);
    var space = document.createElement('span');
    space.innerHTML=" ";
    p.appendChild(space);
    p.appendChild(last);

    document.body.appendChild(p);
}
