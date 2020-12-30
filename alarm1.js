//localStorage.setItem("alarmtime",1000);
var sound=document.getElementById("music");

//document.querySelector("alarmtime").innerHTML="22";

window.onload=function(){
    var sound=document.getElementById("music");
    //sound.mute=true;
setInterval(updateDate, 1000);

function updateDate(){

 let date= new Date();
 let day=date.getDay();
 let sec = date.getSeconds();
 let min = date.getMinutes();
 let hour = date.getHours();
 let m="";
 if(hour==12)
 {
  m="PM"
  //hour=hour-12;
 }
 else if(hour>12)
 {
     m="PM";
     hour=hour-12;
 }
 else 
  m="AM"; 
 if(sec<10)
 {
     sec="0"+sec;
 }
 if(min<10)
 {
     min="0"+min;
 }
 if(hour<10)
 {
     hour="0"+hour;
 }  
 if(day==1)
  day="Monday";
 if(day==2)
  day="Tuesday";
 if(day==3)
  day="Wednesday";
 if(day==4)
  day="Thursday";
 if(day==5)
  day="Friday";
 if(day==6)
  day="Saturday";
 if(day==0)
  day="Sunday";    
 var time= hour + ":" + min +":"+sec+" "+m;
 document.getElementById("dt").innerHTML= day+"<br><p class='time'>"+hour + ":" + min +":"+sec+" "+m+"</p>" ;
 //console.log(time);
//  if(time==localStorage.y){
//      //sound.play();
//      sound.muted=false;
//      //document.getElementById("music").play();
//      console.log("yes");
//   q=5;     
//  }
}

setInterval(updateClock, 1000);

function updateClock(){
 let date= new Date();
 let sec = date.getSeconds() / 60;
 let min = date.getMinutes() / 60;
 let hour = date.getHours() / 12;

 document.getElementById('sec').style.transform = "rotate(" + (sec * 360) + "deg)";
 document.getElementById('min').style.transform = "rotate(" + (min * 360) + "deg)";
 document.getElementById('hour').style.transform = "rotate(" + (hour * 360) + "deg)";
}
if(localStorage.getItem("alarmtime")==1000)
{
    console.log("open");
    document.getElementById("cover").classList.add("hide");
    document.getElementById("Unset").classList.add("hide");
}
else
{
    document.getElementById("welcome").classList.remove("hide");
    console.log("where");
    //playalarm();
}
}


function disappear()
{
//     // sound.play();
//     // sound.mute=true;
//     // sound.loop=true;
    //console.log("hey");
    playalarm();
    document.getElementById("welcome").classList.add("hide");
}
// function setalarm(){
//     document.getElementById("set").innerText="Unset";
//     console.log("gogo"); 
//     // sound.play();
//     // sound.loop=true;
//     // sound.mute=true;
//    var time=document.getElementById("alarmtime").value;
//    var time1=document.getElementById("alarmtime").valueAsNumber;
//    if(isNaN(time1))
//    {
//        alert("Invalid date");
//        return;
//    }
//    //var time=localStorage.getItem("alarmtime");
//    var alarmhours= time.substring(0,2);
//    var alarmmin=time.substring(3,5);
//    var current= new Date();
//    var alarmtime=new Date(current.getUTCFullYear(),current.getUTCMonth(),current.getUTCDate(),alarmhours,alarmmin,"00");
//    console.log(alarmtime);
//    console.log("cuurent"+current);
//    timeleft= alarmtime.getTime()- current.getTime();
//    console.log(timeleft);
//    if(timeleft<0)
//    {
//        console.log("ji");
//        timeleft = 86400000 + timeleft;
//        console.log(timeleft);
//    }
//    localStorage.setItem("alarmtime",time);
//    playalarm();
//    console.log(q);
// }
// function playalarm(){   
//    var time=localStorage.getItem("alarmtime");
//    var alarmhours= time.substring(0,2);
//    console.log(alarmhours);
//    var alarmmin=time.substring(3,5);
//    console.log(alarmmin);
//    var current= new Date();
//    var alarmtime=new Date(current.getUTCFullYear(),current.getUTCMonth(),current.getUTCDate(),alarmhours,alarmmin,"00");
//    var timeleft= alarmtime.getTime()- current.getTime();
//    console.log(timeleft);
//    if(timeleft>=0)
//    {
//        setTimeout(()=>
//        {
//            sound.play();
//            sound.loop=true;
//          console.log("yesyes");
//        },timeleft);
//    }
// }
// function stopalarm(){
//     document.getElementById("set").innerText="Set";
//     sound.pause();
//     sound.currentTime=0;
// }


function setalarm(){
    var time=document.getElementById("alarmtime").value;
    var time1=document.getElementById("alarmtime").valueAsNumber;
    // console.log(time);
    // console.log(time1);
       if(isNaN(time1))
       {
           alert("Invalid date");
           return;
       }
    var alarmhours= time.substring(0,2);
    var alarmmin=time.substring(3,5);
    // console.log(alarmhours);
    // console.log(alarmmin);
    localStorage.setItem("alarmtime",time);
    playalarm();
}
function playalarm(){
    var time=localStorage.getItem("alarmtime");
    //document.getElementById("set").innerText="Unset"
    var alarmhours= time.substring(0,2);
    var alarmmin=time.substring(3,5);
    //var alarmmedian=time.substring(6,8);
    //console.log(time);
    //console.log(alarmhours);
    console.log("hey");
    //console.log(alarmmin);
    var go;
    if(alarmhours>12)
    {
       go= alarmhours-12 + ":" + alarmmin + " " + "PM"
    }
    else{
        go= alarmhours + ":" + alarmmin + " " + "AM"
    }
    //console.log(alarmmedian);
    document.getElementById("cover").innerText= go;
    document.getElementById("alarmtime").classList.add("hide");
    document.getElementById("cover").classList.remove("hide");
    document.getElementById("set").classList.add("hide");
    document.getElementById("Unset").classList.remove("hide");
    setInterval(updateAlarmdate,1000);

    function updateAlarmdate(){
        let amin = new Date().getMinutes();
        let ahour = new Date().getHours();
        let asec = new Date().getSeconds();
        if(amin==alarmmin && ahour==alarmhours && asec==00)
        {
            sound.play();
            sound.loop=true;
            console.log("gotit");
            return;
        }
    }
}
function stopalarm(){
        document.getElementById("set").innerText="Set";
        sound.pause();
        sound.currentTime=0;
}
function Unsetalarm(){
    document.getElementById("set").classList.remove("hide");
    document.getElementById("Unset").classList.add("hide");
    document.getElementById("cover").classList.add("hide");
    document.getElementById("alarmtime").classList.remove("hide");
    localStorage.setItem("alarmtime",1000);
    window.location.reload();
    // if(sound.play()==true)
    // {
    //     sound.pause();
    // }
}
