const config = {
    "ownerID": "236173144300191754", //kendi IDınızı yazınız
    "admins": ["236173144300191754"],
    "support": ["236173144300191754"],
    "token": "NzEwOTI2NTg1ODA0MzU3Njky.Xs5y1w.xVHrn2OgJ0DCJMXZ_poA-nskIAU", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "Ku430cPleZhNeJ_Zi6jSjPUo4YhIrumh", //botunuzun secretini yazınız
      "callbackURL": `https://vortex-altyaps.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "super-secret-session-thing", //kalsın
      "domain": "https://vortex-altyaps.glitch.me", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;