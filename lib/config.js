/*  ___________________
 * |"|"|"|"|"|"|"|"|"|"|
 * | f o n t - s i z e |
 * '-------------------'
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

/**
 * Default viewing distance (23’’ — typical viewing distance for a laptop on a desk).
 */
const DEFAULT_DISTANCE = 23;

/**
 * Default x-height ratio for the font on the screen (0.42 for “Courier New”).
 */
const DEFAULT_X_HEIGHT_RATIO = 0.42;

/**
 * Default display resolution (96dpi — generic monitor).
 */
const DEFAULT_RESOLUTION = 96;

/**
 * @module
 *
 * See <http://jov.arvojournals.org/article.aspx?articleid=2191906>
 * to learn more about how I came up with these numbers.
 *
 *
 *       | Too small
 * 0.18° | .
 * 0.19° + Legible
 * 0.20° | .
 * 0.21° | .
 * 0.22° + Nicely readable
 * 0.23° | .
 * 0.24° | .
 * 0.25° | .
 * 0.26° + .
 *       | Too large
 *
 * distance is the user’s eye’s distance from the screen.
 * xHeight is the font’s x-height ratio.
 *
 * Most opererating systems will consider 1inch to be 96 pixels regardless of
 * the pixel density.Calculating the font size in pixels will help us avoid
 * physical-point-to-screen-point conversions.
 *
 * For retina screens take the resolution as half of the ppi, since four pixels
 * equals one pixel in retina-land. (i.e., a 15’’ Macbook Pro has 220ppi resolution; and
 * for the sake of this program you should take it 110 — in other words, assume you don’t have
 * retina resolution at all; or pick up the specs of a similar device with a non-retina screen)
 *
 * Sample x-height ratios:
 *     Courier New     : 0.4228515625
 *     PragmataPro Mono: 0.552734375
 *
 * You can play with ./support/xheight.html to get your preferred font’s x-height ratio too.
 */

/**
 * 0.19°
 */
const MIN_LEGIBLE_ARC = Math.tan( 0.003316126 );

/**
 * 0.22°
 */
const NICELY_READABLE_BEGIN = Math.tan( 0.003839724 );

/**
 * 0.27°
 */
const MAX_LEGIBLE_ARC = Math.tan( 0.004712389 );

module.exports = {
    MIN_LEGIBLE_ARC,
    MAX_LEGIBLE_ARC,
    NICELY_READABLE_BEGIN,
    DEFAULT_DISTANCE,
    DEFAULT_X_HEIGHT_RATIO,
    DEFAULT_RESOLUTION
};
