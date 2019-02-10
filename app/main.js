const express = require("express");
const exp = express();

console.log(__dirname)
exp.set('views', __dirname + '/views');
exp.set('view engine', "ejs")
exp.use('/static', express.static(__dirname + '/public'));
exp.get('/', (req,res) => {
    res.render("index");
 //   res.send("index");
});

exp.listen(3000);

const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
//	transparent: true,
//	frame: false
    });
    mainWindow.loadURL('http://localhost:3000/');

    mainWindow.on('closed', () => {
	mainWindow = null;
    });

    mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
	app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
    }
});
