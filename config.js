const config = {
    "ownerID": "282453998529806338", //kendi IDınızı yazınız
    "admins": [""],
    "support": [""],
    "token": "NjEyNzI2NzcxNjMyMzA4MjI1.XmlFdQ.ebe7u3vyjj8f1jV8trZ5eHALPXw", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "vBZnwpizI1EagY3Rxowd9s84IXFFQvoH", //botunuzun secretini yazınız
      "callbackURL": `https://dash.vortexbot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.vortexbot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;