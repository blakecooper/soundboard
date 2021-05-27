function $(id) {
	return document.getElementById(id);
}

function play(idx) {
	if (data[idx].audio != null) {
		$(data[idx].audio).play();
	}
}

function setTable() {
	let dataIdx = 0;

	for (let i = 0; i < numberRows[screenOrientation]; i++) {
		let rowId = "r" + i;
		table.innerHTML += "<tr id='" + rowId + "'></tr>";
		for (let j = 0; j < numberCols[screenOrientation]; j++) {
			let colId = "c" + j;
			$(rowId).innerHTML += 
				"<td id='" + rowId + colId + "'" + 
				"style='width:" + cellWidth[screenOrientation] + "px; height:" + cellHeight[screenOrientation] + "px;" + 
				"background-image:url(images/" + data[dataIdx].image + ".jpg);background-color:rgba(8,78,2,0.4);background-blend-mode:overlay;background-size:cover;opacity:0.6;'" + 
				"onclick='play(" + dataIdx + ")'" +
				"><p style='margin:auto;font-family: Arial, Helvetica, sans-serif;font-weight:bold;font-size:1.8em;' align='center'>" + data[dataIdx].text + "</p></td>";
			if (dataIdx < data.length - 1) { dataIdx++; } else { $(rowId + colId).innerHTML = ""; }
		}
	}
}

const PORTRAIT = 0;
const LANDSCAPE = 1;

const cellWidth = [window.innerWidth/3, window.innerWidth/6];
const cellHeight = [window.innerWidth/3, window.innerWidth/6];

const numberRows = [7, 3];
const numberCols = [2, 5];

const defaultOpacity = 0.6;

var screenOrientation = LANDSCAPE;


window.onload = function() 
{
    if (window.innerHeight > window.innerWidth) 
    {
        screenOrientation = PORTRAIT;
    }
}


const table = $("table");

const data = [
    {
        "text" : "Better luck next time",
        "audio" : "betterlucknexttime",
        "image": "disappointed"
    },
    {
        "text" : "Damn!",
        "audio" : "damn",
        "image": "scared"
    },
    {
        "text" : "[Grunt]",
        "audio" : "grunt1",
        "image": "pain"
    },
    {
        "text" : "I'm fading fast guys",
        "audio" : "imfadingfastguys",
        "image": "pain"
    },
    {
        "text" : "Nice!",
        "audio" : "nice",
        "image": "excited"
    },
    {
        "text" : "Ouch!",
        "audio" : "ouch",
        "image": "pain"
    },
    {
        "text" : "Show 'em who's boss!",
        "audio" : "showemwhosboss",
        "image": "excited"
    },
    {
        "text" : "That's gonna leave a mark!",
        "audio" : "thatsgonnaleaveamark",
        "image": "scared"
    },
    {
        "text" : "They got me!",
        "audio" : "theygotme",
        "image": "scared"
    },
    {
        "text" : "[Thwomp noise]",
        "audio" : "thwomp",
        "image": "pain"
    },
    {
        "text" : "Well, at least you tried your hardest",
        "audio" : "wellatleastyoutriedyourhardest",
        "image": "disappointed"
    },
    {
        "text" : "We really got ourselves into a pickle, huh guys?",
        "audio" : "wereallygotourselvesinapicklehuhguys",
        "image": "scared"
    },
    {
        "text" : "Yeah!",
        "audio" : "yeah",
        "image": "satisfied"
    },
    {
        "text" : "Yikes",
        "audio" : "yikes",
        "image": "upset"
    },
	{}];

setTable();


