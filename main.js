  // adding reference to div's
  const hoursHand = document.querySelector('.hours');
  const minsHand = document.querySelector('.mins');
  const secsHand = document.querySelector('.secs');

  function runClock(){
      let day = new Date();
      let secs = day.getSeconds() / 60;
      let mins = (day.getMinutes() + secs)/60;
      let hours = (day.getHours() + mins)/12;
  
      hoursHand.style.transform =  "rotate(" + (hours * 360) + "deg)";
      minsHand.style.transform =  "rotate(" + (mins * 360) + "deg)";
      secsHand.style.transform =  "rotate(" + (secs * 360) + "deg)";
      // console.log(hours+ ":" + mins + ":" + secs);
  }
  setInterval(runClock,1000);

  runClock();