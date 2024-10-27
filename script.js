let time = 60;

const typedSent = document.querySelector(".typed-sent");
const result = document.querySelector(".section3")

typedSent.addEventListener("input", function() {
    const countdown = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
      
        
        seconds = seconds < 10 ? '0' + seconds : seconds;
      
        
        document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
      
        
        time--;
      
        
          if (time < 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerHTML = "Time's up!";

            typedSent.setAttribute('readonly',true);

            let inputText = this.value;

            let words = inputText.trim().split(/\s+/).filter(word => word.length > 0);

            console.log(words.length);

            result.innerText = `Your Typing Speed is ${words.length} wpm.`; 
          }
      }, 1000);
}, { once : true});
