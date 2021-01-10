const beep = function() {
  const { exec } = require("child_process");
  exec('paplay /usr/share/sounds/ubuntu/stereo/dialog-information.ogg');
};

beep();

