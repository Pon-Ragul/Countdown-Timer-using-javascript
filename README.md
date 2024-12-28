Countdown-Timer-using-javascript

This project is a simple and interactive web application designed to create a countdown timer. The application allows users to set a target date and time and provides an intuitive interface for tracking the countdown. Once the countdown ends, users can either reset the timer or end the session.

Features:

  Countdown Timer: Users can set a specific target date and time, and the timer will count down to it in real-time.
  Reset and End Options: Once the countdown ends, users can choose to reset the timer or end the session.
  Interactive Interface: Displays time remaining in a visually appealing circular layout.
  Dynamic Alerts: Alerts the user when the countdown ends with a message.

Files:

1. `index.html`
- Entry point of the web application.
- Contains the structure for the countdown timer, including buttons for user interaction.
- Uses JavaScript for dynamic functionality and CSS for styling.

Code Snippet:
```html
<!DOCTYPE html> 
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Countdown Timer</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="countdown">
            <h1>COUNTDOWN TIMER</h1>
            <div id="timer">Loading...</div>
            <div id="message" class="message"></div><br>
            <div id="reuse">Click on "YES" or "NO" to reset another timer for once</div>
            <div id="buttons" class="buttons">
                <button class="yes" onclick="resetTimer()">YES</button>
                <button class="no" onclick="endTimer()">NO</button>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```
2. `script.js`
-Logic: Implements the core functionality of the countdown timer.
-Handles time input, countdown calculations, and UI updates.
-Functions for resetting or ending the timer.

Code Snippet:
```js
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
```

3. `style.css`
- Provides styling for the countdown timer.
- Includes a responsive layout for better display on different devices.

Code Snippet:
```css
body{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-image: url('clock.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

#countdown {
    display: grid;
    justify-content: center;
    border: 2px; 
    border-radius: 10px;
    padding: 30px;
    margin: 20px auto;
    width: fit-content;
    box-shadow: 0px 2px 4px 6px rgba(0, 0, 0, 0.2);
    background-color: white;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#timer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 150%;
    border: 2px solid white;  
    border-radius: 50%;       
    padding: 20px;
    margin: 20px auto;
    width: 150px;             
    height: 150px;           
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

#message{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 120%;
    font-weight: bold;
    color: green;
}

.buttons{
    margin-top: 20px;
}
.buttons button {
    font-size: 110%;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px;
    width:fit-content;
    border: none;
}
.buttons button.yes {
    background-color: green;
    color: white;
}
.buttons button.no {
    background-color: red;
    color: white;
}
```

Usage:
1. Clone the repository:
    git clone https://github.com/Pon-Ragul/Countdown-Timer-using-javascript.git
3. Navigate to the project directory:
    cd Countdown-Timer-using-javascript
4. Open index.html in your browser to start the application.
5. Set the target date and time via the prompt.
6. Watch the countdown and interact with the reset or end buttons once the countdown finishes.

License:
This project is licensed under the MIT License.
