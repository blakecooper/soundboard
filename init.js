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

    document.getElementById("container").innerHTML += "<canvas id='canvas" + i + "' width='" + window.innerWidth/5 + "' height='" + window.innerHeight/3 + "' onclick='play(" + i + ")'>" + data[i].text + "</canvas>";

}

for (var i = 0; i < data.length; i++) {



        var canvasId = "canvas" + i;
        console.log(canvasId);
        var c = document.getElementById(canvasId);
        console.log(c);
        var ctx = c.getContext("2d");
        console.log(ctx);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(0, 0, c.width, c.height);
//        var img = new Image;
//        img.onload = function() {
//            ctx.drawImage(img, 20,20);
//            URL.revokeObjectURL(img.src)
//        }
//        img.src = "images/" + data[i].image + ".jpg";
        ctx.globalAlpha = 1;
        ctx.fillstyle = "#000000"; 
        ctx.font = "20px Arial";
ctx.fillText(data[i].text, c.width/3, c.height/2);
}
