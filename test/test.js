const assert = require('assert');
const t = require('../index');
const config = require('./config.json')


describe('MinecraftStatus', function () {
  let app = new t.MinecraftStatus();

  describe('#getMinecraftStatus()', function () {
    it('gets Minecraft server status', function () {
      app.getMinecraftStatus(config.applet.user.serverAddress, config.applet.user.serverPort).then(res => {
        console.log("Minecraft Server Response: " + $JSON.stringify(res));
          // Test if target is an online Minecraft server by checking if this value exists and is a number.
          assert.ok(res.players.online === "number")
      })
    })
  });

  describe('#generateSignal()', function () {
    it('generates a q signal', function() {
      let signal = app.generateSignal(config, config.applet.user.onlineColour, config.applet.user.offlineColour)
      // If this return exists then we're happy
      console.log("Generated signal: ", signal)
      assert.ok(signal)
    })
  });

  /*
  describe('#run()', function () {
    // Not sure how to do run() without the q config property.
    this.config 
    it('runs the entire applet', function () {
      app.run().then((signal) => {
        console.log(JSON.stringify(signal));
        assert.ok(signal);
      }).catch(error => {
        assert.fail(error);
      });
    });
  })*/

})