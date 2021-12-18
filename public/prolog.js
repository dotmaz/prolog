// Prolog.js v1.0.0
// Created by Mazin Abubeker
const BUF_TIMEOUT = 100;

function closeLog(){
    document.getElementById("prolog-console").style.display = "none";
    document.getElementById("prolog-console-maximize").style.display = "block";
}

function openLog(){
    document.getElementById("prolog-console").style.display = "block";
    document.getElementById("prolog-console-maximize").style.display = "none";
}

(function(){
    console.log("Prolog.js v1.0.0 loaded");
    var thisline = new Error().lineNumber;
    console.log(thisline);
    window.addEventListener("load", function(){
        bindConsole();
    })

    

    function bindConsole(){
        if(document && document.body){
            let consoleStyle = document.createElement("link");
            consoleStyle.rel = "stylesheet";
            consoleStyle.href = "http://localhost:3030/prolog_styles.css";
            document.head.appendChild(consoleStyle);

            let consoleHTML = `
            <div id="prolog-console-maximize" onclick="openLog()">+</div>
            <div id="prolog-console" class="prolog-console">
                <div id="prolog-console-log" class="prolog-console-log">
                </div>
                <div class="prolog-console-toolbox">
                    <div onclick="closeLog()" class="prolog-console-toolbox-item">-</div>
                </div>
            </div>
            `;
            document.body.innerHTML += consoleHTML;
        }
    }
})();

function Prologger(){
    this.buf = [];
    this.log = function(message){
        // Buffer timeout system for logs that are executed before the console is ready
        if(!document.getElementById("prolog-console-log")){
            setTimeout(()=>{this.log(message)}, BUF_TIMEOUT);
            return;
        }
        let logItemHTML = `
        <div class="prolog-console-log-item">${JSON.stringify(message)}</div>
        `;
        document.getElementById("prolog-console-log").innerHTML += logItemHTML;
        this.buf.push(message)
    }
}