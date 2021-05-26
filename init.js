const PORTRAIT = 0;
const LANDSCAPE = 1;
var screenOrientation = LANDSCAPE;

function play(idx) {
    document.getElementById(data[idx].audio).play();
}

const data = [
    {
        "text" : "Better luck next time",
        "audio" : "betterlucknexttime",
        "image": "disappointed"
    },
    {
        "text" : "Damn!",
        "audio" : "damn",
        "image": "disappointed"
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
        "image": "happy"
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
    }];

window.onload = function() 
{
    if (window.innerHeight > window.innerWidth) 
    {
        screenOrientation = PORTRAIT;
    }
}

    for (var i = 0; i < data.length; i++) {
        document.getElementById("container").innerHTML += "<canvas id='canvas" + i + "' width='" + window.innerWidth + "' height='" + window.innerHeight/14 + "'" + data[i].image + ".jpg');\" onclick='play(" + i + ")'>" + data[i].text + "</canvas>";
        
        var c = document.getElementById("canvas" + i);
        var ctx = c.getContext("2d");
        var img = document.getElementById(data[i].image);
        ctx.drawImage(img,10,10);
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50);
}
