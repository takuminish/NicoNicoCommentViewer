const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
//	transparent: true,
//	frame: false
    });
    mainWindow.loadFile('index.html');

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
