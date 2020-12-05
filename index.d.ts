/** @noSelfInFile */

/**
 * Call this at the top of your `love.update()` function.
 *
 * By default, when your game is running you'll now be able to access `http://127.0.0.1:8000` in a web browser.
 */
export function update(): void;

/**
 * The port which lovebird listens for connections on. By default this is `8000`
 *
 * This can be changed as needed.
 *
 * ```ts
 * import lovebird = require("lovebird");
 * lovebird.port = 8888;
 * ```
 */
export let port: number;

/**
 * A table of hosts which lovebird will accept connections from.
 *
 * Any connection made from a host which is not on the whitelist is logged and closed immediately.
 *
 * If `lovebird.whitelist` is set to nil then all connections are accepted.
 *
 * The default is `[ "127.0.0.1" ]`.
 *
 * To allow all computers on the local network access to lovebird, `"192.168.*.*"` can be added to this table.
 */
export let whitelist: string[] | undefined;

/**
 * Whether lovebird should wrap the print() function or not.
 *
 * If this is `true` then all the calls to print will also be output to lovebird's console. This is `true` by default.
 */
export let wrapprint: boolean;

/**
 * Whether lovebird should display inputted commands in the console's output buffer; `true` by default.
 */
export let echoinput: boolean;

/**
 * The maximum number of lines lovebird should store in its console's output buffer. By default this is `200`.
 */
export let maxlines: number;

/**
 * The interval in seconds that the page's information is updated; this is 0.5 by default.
 */
export let updateinterval: number;

/**
 * Whether prints should allow HTML.
 *
 * If this is `true` then any HTML which is printed will be rendered as HTML; if it `false` then all HTML is rendered as text.
 *
 * This is `false` by default.
 */
export let allowhtml: boolean;

/**
 * Prints its arguments to lovebird's console.
 *
 * If `lovebird.wrapprint` is set to `true` this function is automatically called when `print()` is called.
 */
export function print(...args: any[]): void;

/**
 * Clears the contents of the console, returning it to an empty state.
 */
export function clear(): void;
