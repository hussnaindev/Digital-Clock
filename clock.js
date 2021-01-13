setInterval(showTime, 1000);
function showTime()
{
    var myDate = new Date();
    var hrs = myDate.getHours();
    var min = myDate.getMinutes();
    var sec = myDate.getSeconds();
    var session;

    if(hrs<12)
    {
        session = "AM"; 
    }

    if(hrs>=12)
    {
        session = "PM";
    }

    if(hrs>12)
    {
        hrs = hrs - 12;
    }

    if(hrs<10)
    {
        hrs = "0"+hrs;
    }

    if(min<10)
    {
        min = "0"+min;
    }
    
    if(sec<10)
    {
        sec = "0"+sec;
    }

    var str = hrs + ": " + min;
    document.getElementById("time").innerHTML = str;  
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("session").innerHTML = session;

}

showTime();