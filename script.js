let timerInterval;
            function startTimer(){
                const time=prompt("Set the date and time",new Date());
                const target=new Date(time).getTime();
                clearInterval(timerInterval)
                timerInterval=setInterval(()=>{
                const now=new Date().getTime();
                const timeDifference=target-now;
                const MS_PER_SECOND=1000;
                const SECONDS_PER_MINUTE=60;
                const MINUTES_PER_HOUR=60;
                const HOURS_PER_DAY=24;
                const day=Math.floor(timeDifference/(MS_PER_SECOND*SECONDS_PER_MINUTE*MINUTES_PER_HOUR*HOURS_PER_DAY));
                const hour=Math.floor((timeDifference%(MS_PER_SECOND*SECONDS_PER_MINUTE*MINUTES_PER_HOUR*HOURS_PER_DAY))/(MS_PER_SECOND*SECONDS_PER_MINUTE*HOURS_PER_DAY));
                const minutes=Math.floor((timeDifference%(MS_PER_SECOND*SECONDS_PER_MINUTE*HOURS_PER_DAY))/(MS_PER_SECOND*SECONDS_PER_MINUTE));
                const seconds=Math.floor((timeDifference%(MS_PER_SECOND*SECONDS_PER_MINUTE))/MS_PER_SECOND);
                const timerElement=document.getElementById("timer");
                const Days=String(day).padStart(2,'0');
                const Hours=String(hour).padStart(2,'0');
                const Minutes=String(minutes).padStart(2,'0');
                const Seconds=String(seconds).padStart(2,'0');
                if(timeDifference>0){
                    timerElement.innerHTML=`${Days}:${Hours}:${Minutes}:${Seconds}`;;
                }
                else{
                    clearInterval(timerInterval);
                    timerElement.innerHTML="Time's up";
                    const message=document.getElementById("message");
                    message.innerHTML="The Countdown is over!"
                }
            })
            }
            function resetTimer(){
                document.getElementById("buttons").style.display="none";
                document.getElementById("reuse").innerHTML="";
                message.innerHTML="";
                startTimer();
            }
            function endTimer(){
                document.getElementById("buttons").style.display="none";
                document.getElementById("reuse").innerHTML="";
                message.innerHTML="Thank you for using the countdown timer";
            }
         startTimer();  