// imports
const url = require('url');

/**
 * Log the REST request with timestamp.
 *
 *   http://expressjs.com/en/4x/api.html#req
 */
export const logRequest = function(req) {
    //const time = new Date().toLocaleTimeString();
    const time = new Date().toLocaleString();

    const reqUrl = url.format({
       protocol: req.protocol,
       host: req.get('host'),
       pathname: req.originalUrl + req.path
    });

    console.info(`[${time}]\n` +
                 `  ${req.method} ${reqUrl}\n` +
                 `  Parameters: ${JSON.stringify(req.query)}\n` +
                 `  Content-Type: ${req.get('Content-Type')}\n` +
                 `  Content-Length: ${req.get('Content-Length')}`);

    const bodyObj = req.body;   // parsed object
    if (typeof bodyObj === 'object' && Object.keys(bodyObj).length > 0) {
        console.info('  Body: ' + JSON.stringify(bodyObj));
    }
}

/**
 * Allow only requests with 'Content-Type: application/json'.
 */
export const appJson = function(req, res, next) {
    if (!req.is('application/json')) {
        return res.send(400);
    }
    next();
};
