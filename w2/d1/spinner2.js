const timed = function(time,value) {
  setTimeout(() => {
    process.stdout.write(value);
  }, time);
};

timed(100,'\r|   ');
timed(300,'\r/   ');
timed(500,'\r|   ');
timed(700,'\r-   ');

