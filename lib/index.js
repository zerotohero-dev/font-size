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

const program = require( 'commander' );
const chalk = require( 'chalk' );

const {
    MIN_LEGIBLE_ARC,
    MAX_LEGIBLE_ARC,
    NICELY_READABLE_BEGIN,
    DEFAULT_DISTANCE,
    DEFAULT_X_HEIGHT_RATIO,
    DEFAULT_RESOLUTION
} = require( './config' );

program
    .version( '0.0.1' )
    .option( '-d, --distance [dist]',
        `your distance from the screen (in inches) [default: ${DEFAULT_DISTANCE}]`,
        DEFAULT_DISTANCE
    )
    .option( '-x, --x-height [xHeight]',
        `your font’s x-height ratio (i.e. x-height-size/font-size) [default: ${DEFAULT_X_HEIGHT_RATIO}]`,
        DEFAULT_X_HEIGHT_RATIO
    )
    .option( '-r, --resolution [ppi]',
        `your screen resolution in pixels-per-inch (ppi) [default: ${DEFAULT_RESOLUTION}]`,
        DEFAULT_RESOLUTION
    )
    .parse( process.argv );

const getFontSize = ( arc ) => Math.round(
    ( parseFloat( program.distance ) * arc * parseInt( program.resolution, 10 ) ) /
    parseFloat( program.xHeight )
);

const minFontSize = getFontSize( MIN_LEGIBLE_ARC );
const niceFontSizeStart = getFontSize( NICELY_READABLE_BEGIN );
const niceFontSizeEnd = getFontSize( MAX_LEGIBLE_ARC );

console.log( `
    For your typeface, the minimum legible font size is ${chalk.bold.blue( minFontSize + 'px' )}
        (you don’t want to hurt your eyes, do you?).

    Your text is nicely readable starting from… ${chalk.bold.green( niceFontSizeStart + 'px' )};

    however, anything beyond ${chalk.bold.red( niceFontSizeEnd + 'px' )} will damage readability.
` );
