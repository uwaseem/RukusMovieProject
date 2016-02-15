/* -------------------------------------------------- *\
 *                  _                                 *
 *                 | |                     ,--.!,     *
 *      _ __ _    _| | ___   _ ___      __/   -*-     *
 *      | '__| | | | |/ / | | / __|   ,d08b.  '|`     *
 *      | |  | |_| |   <| |_| \__ \   0088MM          *
 *      |_|   \__,_|_|\_\\__,_|___/   `9MMP'          *
 *                    by iflix.com                    *
 *                                                    *
 * -------------------------------------------------- */
 // This is a rukus app.

// require in the things
var Signal = require('rukus-signal');
var UIController = require('./controllers/ui');

// instantiate those things
RukusApp.version = '1.0.0';
RukusApp.movies = require('./controllers/movies');
RukusApp.signals = new Signal(RukusApp, riot);
RukusApp.ui = new UIController();

// mount our components (make them magically available for use in html)
riot.mount('*');

// start our router
require('./routes')();

// copy our index.html to build directory (this sucks)
require("file?name=index.html!./index.html");

// enjoy.
