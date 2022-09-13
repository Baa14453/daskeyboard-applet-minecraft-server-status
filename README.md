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

1. Position the row over your desired keys.
![Positioning the keys.](assets/setup-1.png "Positioning the keys.")

2. Enter the server's IP address, port colour for online and offline.
![Choosing options.](assets/setup-2.png "Choosing options.")

## Notes on Building
This applet uses the `minecraft-protocol` dependency by PrismarineJS, however this library is huge (over 100MB).
`minecraft-protocol` has been cut-down, compressed and bundled into the final index.js file which is why it looks crazy like that.

The actual editable JavaScript is called index.mjs

After modifying index.mjs you need to generate a new index.js file, to do this follow these steps:

1. Clone the bundled `minecraft-protocol-template` into your folder of `Minecraft Server Status`:

`git clone https://gitlab.legitcorp.com/josh/minecraft-protocol-template.git`

2. Inside the new `minecraft-protocol-template` folder is `esbuild.config.js` edit this file, next to `entryPoints` replace `src/index.mjs` with `../index.mjs`, and next to `outfile` change `out.js` to `../index.js`. Save and close this file.

3. Open a terminal inside `minecraft-protocol-template` and run these commands:
`npm install` then `npm build`. `npm build` will have taken any changes from your `index.mjs` and bundled them into `index.js` which can now be installed within the Das Keyboard Q program.

In order to help with this, a VSCode `tasks.json` file is included in the Minecraft Server Status repository. The task `Build-minecraft-protocol` will run the `npm build` command inside the `minecraft-protocol-template` directory.

A second task inside tasks.json will run your generated index.js file for you for testing, it is called `Run test` this includes the Das Keyboard dev command-line arguments you need to test from the command-line.

## Running tests

- I didn't write any tests because I don't know how.

## Contributions

 - Original Minecraft protocol library by [PrismarineJS](https://github.com/PrismarineJS/node-minecraft-protocol)

 - [Bundled and minified Minecraft protocol](https://gitlab.legitcorp.com/josh/minecraft-protocol-template) by [JF908](https://github.com/jf908/)


## Corporate jargon

Copyleft 2022 [Legitcorp](legitcorp.com/).
If you like anime join [my cult](https://axisorder.com/).
