function delayLog(){
  for(var delay = 1; delay <= 10; delay ++){
    setTimeout(() => console.log(delay), delay*1000);
  }
}

delayLog();