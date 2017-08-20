/**
 * Created by cktuser on 16.01.2017.
 */
var hour;
cheker = 0;
 var secondS = new Date().getSeconds();
n2 = 0;
function checkInternetConnection() {
    // var x = new XMLHttpRequest();
    // x.open("GET", "/echo/json/", true);
    // x.onload = function (){
    //     alert( x.responseText);
    // }
    // x.send(null);
}

function OnStart() {
    digitalWatch();
    SecondStart();
    $('img').attr({
        "ondrag":"return false",
        "ondragdrop":"return false",
        "ondragstart":"return false"
    });
}

function SecondStart() {
    secondS++;
    var hour = document.getElementById('sec');
    hour.style.transform = "rotate(" + secondS * 6 + "deg)";
    hour.style.transformOrigin = "50% 80.2%";
    setTimeout("SecondStart()", 1000);
}

function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var NowTimeY = date.getFullYear();
    var NowTimeMon = date.getMonth();
    var NowTimeD = date.getDay();
    if (NowTimeD < 10 && NowTimeMon > 9) {
        document.getElementById("date").innerHTML = "0" + NowTimeD + "." + NowTimeMon + "." + NowTimeY;
    } else if (NowTimeMon < 10 && NowTimeD > 9) {
        document.getElementById("date").innerHTML = NowTimeD + ".0" + NowTimeMon + "." + NowTimeY;
    } else if (NowTimeD < 10 && NowTimeMon < 10) {
        document.getElementById("date").innerHTML = "0" + NowTimeD + ".0" + NowTimeMon + "." + NowTimeY;
    }
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    document.getElementById("time").innerHTML = hours + ":" + minutes;
    setTimeout("digitalWatch()", 1000);
}

function Time() {
    var Time = new Date();
    alert(Time);
    var TmeBlock = document.getElementById('time');
    TextTime=Time;
    TmeBlock.innerHTML = TextTime;

}

function setWatchUp() {
    var pointer = document.getElementById('wh').innerHTML;
    var n;
    cheker++;
    var con = {
        number: pointer,
        valueOf: function() { return this.number; }
    };
    n = +con + 1;
    n2 = n2 + 1;
    if (n > 60) {n = 1;}
        if (n < 10) {
            document.getElementById('wh').innerHTML = "0" + n;
        } else {
            document.getElementById('wh').innerHTML = n;
        }
    if (n !== 0) {
        var min = document.getElementById('min');
        min.style.transform = "rotate(" + n2 * 6 + "deg)";
        min.style.transformOrigin = "50% 91%";
        var hour = document.getElementById('hour');
        hour.style.transform = "rotate(" + n2 * 0.5 + "deg)";
        hour.style.transformOrigin = "50% 84%";
        // alert("ok");
    }

}

function setWatchDown() {
    var pointer = document.getElementById('wh').innerHTML;
    var n;
    var con = {
        number: pointer,
        valueOf: function() { return this.number; }
    };
    n = +con - 1;
    n2 = n2 - 1;
    if (n < 1) {n = 60;}
    if (n < 10) {
        document.getElementById('wh').innerHTML = "0" + n;
    } else {
        document.getElementById('wh').innerHTML = n;
    }

        var el = document.getElementById('min');
        el.style.transform = "rotate(" + n2 * 6 + "deg)";
        el.style.transformOrigin = "50% 91%";
        var hour = document.getElementById('hour');
        hour.style.transform = "rotate(" + n2 * 0.5 + "deg)";
        hour.style.transformOrigin = "50% 84%";

}


