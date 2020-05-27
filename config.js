const config = {
    "ownerID": "236173144300191754", //kendi IDınızı yazınız
    "admins": ["236173144300191754236173144300191754"],
    "support": ["236173144300191754"],
    "token": "NzEwOTI2NTg1ODA0MzU3Njky.Xs5A4g.WQTJXb0Qx94L_l1GsxD3DLbPKGg", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "JmZhVq42pBQ_zIwru6Mh02jcJ_BrTrta", //botunuzun secretini yazınız
      "callbackURL": `https://vortex-altyaps.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://vortex-altyaps.glitch.me", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;