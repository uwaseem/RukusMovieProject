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
RukusApp.version = '1.0.0';
RukusApp.movies = require('./controllers/movies');
RukusApp.ui = require('./controllers/ui');

// Mount everything !
riot.mount('*');
require('./routes')();
require("file?name=index.html!./index.html");

// enjoy.
