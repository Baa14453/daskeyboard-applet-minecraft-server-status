# Q Applet: Minecraft Server Status

Displays the status of your chosen Minecraft server as a row of colours on your keyboard.
The first key indicates the server is online, proceeding keys indicator the number of players, up to 10 keys.

[GitLab repository](https://gitlab.legitcorp.com/daskeyboard/minecraft-server-status)

## Example

Example where the Minecraft server is online, but there are no players.

![Minecraft server is online.](assets/online-noplayers.png "Minecraft server is online.")

Example where the Minecraft server is online, and there is 1 player.

![Minecraft server is online with 1 player.](assets/online-oneplayer.png "Minecraft server is online with 1 player.")

Example where the Minecraft server is offline.

![Minecraft server is offline.](assets/offline.png "Minecraft server is offline.")

## Changelog

[CHANGELOG.MD](CHANGELOG.md)

## Installation

Requires a Das Keyboard Q Series: www.daskeyboard.com

Installation, configuration and uninstallation of applets is done within
the Q Desktop application (<https://www.daskeyboard.com/q>)

1. Clone the repository with Git or download it as a ZIP and unzip it.

`git clone https://gitlab.legitcorp.com/daskeyboard/minecraft-server-status.git`

2. Open a terminal or cmd or PowerShell inside the folder and run `yarn`.
If you're on Windows see [this guide](https://phoenixnap.com/kb/yarn-windows) on installing Yarn first.

3. Open the Q Das Keyboard applet, click the Gear ⚙ menu and click `toggle dev menu`.

4. A new icon near the top-right will appear looking like `</>` click this and click `load applet`.

5. Navigate to the folder holding the Applet and click OK.

6. Position the row over your desired keys.

![Positioning the keys.](assets/setup-1.png "Positioning the keys.")

7. Enter the server's IP address, port and colour for online and offline.

![Choosing options.](assets/setup-2.png "Choosing options.")

## Compiling

1. Clone the repository with Git.

`git clone https://gitlab.legitcorp.com/daskeyboard/minecraft-server-status.git`

2. Open a terminal or cmd or PowerShell inside the folder and run `yarn`.

3. You're done 

A VSCode task inside tasks.json will run the index.js file for you for testing, it is called `Run test` this includes the Das Keyboard dev command-line arguments you need to test from the command-line.

## Running tests

1. Run `yarn test`.

## Contributions

 - [`mc-server-status` library by janispritzkau](https://github.com/janispritzkau/mc-server-status) which does all the hard work.

 - Major JavaScript consultancy provided by [JF908](https://github.com/jf908/)

 - [This useful blog](https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e) on writing Mocha tests

## Contributing

Issues and Pull Requests Welcome \o/
Please make them on my GitLab [here](https://gitlab.legitcorp.com/daskeyboard/minecraft-server-status) (You can sign in with GitHub.)
(Changes will be mirrored to GitHub.)

## Corporate jargon

Copyleft 2022 [Legitcorp](legitcorp.com/).
If you like anime join [my cult](https://axisorder.com/).
