#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program
  .version( '0.0.1' )
  .option( '-d, --distance [dist]', 'your distance from the screen (in inches) [default: 16]', 16 )
  .option( '-x, --x-height [xHeight]', 'your font’s x-height ratio (i.e. x-height-size/font-size) [default: 0.42]', 0.42 )
  .option( '-r, --resolution [ppi]', 'your screen resolution in pixels-per-inch (ppi) [default: 96]', 96 )
  .parse( process.argv );

/**
 * @module
 *
 * See <http://jov.arvojournals.org/article.aspx?articleid=2191906> to learn more about how I found these numbers.
 *
 *                          +-- Too small
 * 0.14deg ==== 0.002443461 +-- A bit small but still legit
 * 0.15deg ==== 0.002617994 +-- A bit small, but still legit
 * 0.16deg ==== 0.002792527 +-- Nicely readable
 * 0.17deg ==== 0.00296706  +-- Nicely readable
 * 0.18deg ==== 0.003141593 +-- Nicely readable
 * 0.19deg ==== 0.003316126 +-- Very, very readable
 *                          +-- Too big!
 *
 * distance is the user’s eye’s distance from the screen.
 * xHeight is the font’s x-height ratio.
 *
 * Most opererating systems will consider 1inch to be 96 pixels regardless of the pixel density.
 * Calculating the font size in pixels will help us avoid physical-point-to-screen-point conversions.
 *
 * For retina screens take the resolution as half of the ppi, since four pixels equals one pixel in retina-land.
 * (i.e., a 15’’ Macbook Pro has 220ppi resolution; and for the sake of this program you should take it 110 —
 *  in other words, assume you don’t have retina resolution at all; or pick up the specs of a similar device with
 *  a non-retina screen)
 *
 * Sample x-height ratios:
 *     Courier New     : 0.4228515625
 *     PragmataPro Mono: 0.552734375
 *
 * You can play with ./support/xheight.html to get your preferred font’s x-height ratio too.
 */
const MIN_LEGIBLE_ARC = Math.tan(0.002443461);
const MAX_LEGIBLE_ARC = Math.tan(0.003316126);
const NICELY_READABLE_BEGIN = Math.tan(0.002792527);
const NICELY_READABLE_END = Math.tan(0.003141593);

const getFontSize = ( arc ) => Math.round(
  ( parseFloat( program.distance ) * arc * parseInt( program.resolution, 10 ) ) /
  parseFloat( program.xHeight )
);

const minFontSize = getFontSize( MIN_LEGIBLE_ARC );
const niceFontSizeStart = getFontSize( NICELY_READABLE_BEGIN );
const niceFontSizeEnd = getFontSize( MAX_LEGIBLE_ARC );

console.log( `
    For your typeface, the minimum legible font size is ${chalk.bold.blue(minFontSize + 'px')}
        (you don’t want to hurt your eyes, do you?).

    Your text is nicely readable starting from… ${chalk.bold.green(niceFontSizeStart + 'px')};

    however, anything beyond ${chalk.bold.red(niceFontSizeEnd + 'px')} will damage readability.
`);
