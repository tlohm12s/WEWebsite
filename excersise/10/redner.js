let lasttimer = undefined;
let lastbutton = undefined;

let redner = [];

function Redner(button) {
    this.running = false;
    this.button = button;
}

function addRedner(rednerName) {
    let bullet_point = document.createElement("li");
    bullet_point.appendChild(document.createTextNode(rednerName));

    let time_field = document.createElement("span");

    //https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
    let time = new Date(0);
    time_field.textContent = time.toISOString().substr(11, 8);
    //

    let timerButton = document.createElement("input");
    timerButton.type = "button";
    timerButton.value = "Start!";

    let newRedner = new Redner(timerButton);
    redner.push(newRedner);

    timerButton.onclick = function() {
        if(newRedner.running) {
            newRedner.running = false;
            timerButton.value = "Start!";
            clearInterval(lasttimer);
        } else {
            for(let i = 0; i < redner.length; i++) {
                redner[i].running = false;
                redner[i].button.value = "Start!";
            }

            timerButton.value = "Stop!";
            newRedner.running = true;

            if(lasttimer != undefined) { 
                clearInterval(lasttimer);
            }

            lastbutton = timerButton;

            lasttimer = setInterval(() => {
                time.setSeconds(time.getSeconds()+1);
                time_field.textContent = time.toISOString().substr(11, 8);
            }, 1000);
        }
    };

    bullet_point.appendChild(time_field);
    bullet_point.appendChild(timerButton);

    let list = document.getElementById("list");
    list.appendChild(bullet_point);
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("redner_name").addEventListener("keyup", function(event) {
        if (event.key === "Enter" && document.getElementById("redner_name").value !== "") {
            addRedner(document.getElementById("redner_name").value);
            document.getElementById("redner_name").value = ""; 
        }
    });
});

