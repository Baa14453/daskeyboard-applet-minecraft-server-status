const assert = require('assert');
const t = require('../index');
const q = require('daskeyboard-applet');
const config0Players = require('./config-0-players.json')
const config1Player = require('./config-1-player.json')
const config10Players = require('./config-10-players.json')


describe('MinecraftStatus', function () {
  let app = new t.MinecraftStatus();

  describe('#getMinecraftStatus()', function () {
    it('gets Minecraft server status', function () {
      app.getMinecraftStatus(config0Players.applet.user.serverAddress, config0Players.applet.user.serverPort).then(res => {
        console.debug("Minecraft Server Response: " + JSON.stringify(res));
          // Test if target is an online Minecraft server by checking if this value exists and is a number.
          assert.equal(res.players.online, "number")
      })
    })
  });

  describe('#generateSignal()', function () {
    it('generates a q signal for an offline server', function() {
      let signal = app.generateSignal(false, config0Players.applet.user.onlineColour, config0Players.applet.user.offlineColour)
      //console.debug("Generated signal: ", signal)
      assert.ok(signal)
    }),

    it('generates a q signal for a server with 0 players', function() {
      let signal = app.generateSignal(config0Players, config0Players.applet.user.onlineColour, config0Players.applet.user.offlineColour)
      //console.debug("Generated signal: ", signal)
      assert.equal(JSON.stringify(signal.points[0][1].color), '"' + config1Player.applet.user.offlineColour + '"')
    }),

    it('generates a q signal for a server with 1 player', function() {
      let signal = app.generateSignal(config1Player, config1Player.applet.user.onlineColour, config1Player.applet.user.offlineColour)
      //console.debug("Generated signal: ", signal)
      assert.equal(JSON.stringify(signal.points[0][0].color), '"' + config1Player.applet.user.onlineColour + '"')
    }),

    it('generates a q signal for a server with 10 players', function() {
      let signal = app.generateSignal(config10Players, config10Players.applet.user.onlineColour, config10Players.applet.user.offlineColour)
      //console.debug("Generated signal: ", signal)
      assert.equal(JSON.stringify(signal.points[0][9].color), '"' + config10Players.applet.user.onlineColour + '"')
    })
  });
})