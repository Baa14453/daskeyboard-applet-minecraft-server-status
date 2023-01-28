const { getStatus } = require("mc-server-status")
const q = require('daskeyboard-applet');
const logger = q.logger;

class MinecraftStatus extends q.DesktopApp {
    constructor() {
        super();
        // run every 10 seconds
        this.pollingInterval = 10000;
    }

    // Function to get Minecraft server status.
    async getMinecraftStatus(host, port) {
        logger.info("Running getMinecraftStatus");
        try {
            let res = await getStatus(host,port);
            logger.info(`Response from Minecraft Server: ${JSON.stringify(res)}`)
            return (res);
        } catch(err) {
            logger.warn(`Error while getting Minecraft Server details: ${err}`);
            return false;
        }
    }

    generateSignal(serverStatus, onlineColour, offlineColour) {
        // If server is live/if there are any results.
        if (serverStatus) {
            const max = Math.min(serverStatus.players.online, 11) + 1; //+1 is the server online indicator. Remaining entries are people online.
            let pointsList = [];
            // Populate list of points based on number of players, can't have more than 10 though.
            for (let a=0; a<max; a++) {
                pointsList.push(new q.Point(onlineColour))
            }

            // Populate remaining spaces with offline colours. I would clear them instead but no idea how.
            for (let a=max; a<11; a++) {
                pointsList.push(new q.Point(offlineColour))
            }
            return new q.Signal({
                points: [pointsList],
                name: "Minecraft server online!",
                message: `${this.config.serverAddress} is online. | ${JSON.stringify(serverStatus.players.online)}/${JSON.stringify(serverStatus.players.max)} | ${JSON.stringify(serverStatus.description.text)}`,
            }
            );

        } else {
        // If Server is offline.
            return new q.Signal({
                points: [
                    Array.from({ length: 11 }).map((_,i) => i === 0 ? new q.Point(offlineColour) : new q.Point(offlineColour))
                ],
                name: "Minecraft server offline!",
                message: `${this.config.serverAddress} is offline.`
            });
        }};

    async run() {

        const onlineColour = this.config.onlineColour;
        const offlineColour = this.config.offlineColour;
        const serverAddress = this.config.serverAddress;
        const serverPort = this.config.serverPort;

        if (serverAddress) {
            return this.getMinecraftStatus(serverAddress, serverPort).then(serverStatus => {
                return this.generateSignal(serverStatus, onlineColour, offlineColour);
            }).catch((err) => {
                logger.error(`Error while getting server status: ${err}`);
                return this.generateSignal(false, onlineColour, offlineColour);
            });
        } else {
            return this.generateSignal(false, onlineColour, offlineColour);
        }
    }
}

module.exports = {
  MinecraftStatus: MinecraftStatus
};

const applet = new MinecraftStatus();
