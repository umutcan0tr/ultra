const config = {
    "ownerID": "236173144300191754", //kendi IDınızı yazınız
    "admins": ["236173144300191754"],
    "support": ["236173144300191754"],
    "token": "NzEwOTI2NTg1ODA0MzU3Njky.Xs5CxQ.std7Fpp0N0fx0oueYvRiNpOy7uU", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "___FGpMTcbms9FkoMUQdavztG2Lh-DYA", //botunuzun secretini yazınız
      "callbackURL": `https://vortex-altyaps.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://vortex-altyaps.glitch.me", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;