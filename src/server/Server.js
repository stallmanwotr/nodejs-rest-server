// imports
const argv = require('yargs').argv;
const express = require('express');
const bodyParser = require('body-parser');

import { logRequest } from '../utils/ServerUtils';
import router from './ServerRouter';

// command-line arguments
const serverPort = argv.port || process.env.npm_package_config_port || 4005;
const serverPath = argv.path || process.env.npm_package_config_path || '/rest-server';

// create the server for handling REST requests.
//   https://expressjs.com/en/4x/api.html
//   https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
const app = express();

// static content in the 'public' directory.
//   https://expressjs.com/en/starter/static-files.html
app.use(serverPath, express.static('public'));

// validate & parse 'application/json'
//   https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
app.use(bodyParser.json());

app.use(serverPath, router);

app.listen(serverPort, () => {
    console.info(`*** REST Service | Test ***`);
    console.info(`Listening on port ${serverPort}, path '${serverPath}'`);
});
