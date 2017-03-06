`font-size` is a command-line utility to calculate the best font-size for you, so that your eyes don’t bleed during long programming sessions. 

Of course, having a 10-minute walk every couple of hours will also help you protect your eyes (and sanity). 

But you know yourself, don’t you?:

when you are “in the zone” time dilates: 

One earthling day feels like ten minutes to you. — But, not (necessarily) to your body :) 

This program will convince you to bump up your font-size a notch, so that you don’t have to consume advils like jelly beans when you come back to the real world.

## Installation

```bash
npm install -g font-size
```

## Usage

```bash
font-size --help #to get help

font-size --distance 28 --x-height .53 --resolution 110

    For your typeface, the minimum legible font size is 14px
        (you don’t want to hurt your eyes, do you?).

    Your text is nicely readable starting from… 16px;

    however, anything beyond 19px will damage readability.
```

Note: This is a quick-and-dirty hack that I put together; it is not %100 scientific, and the parameters will probably change from person to person. — I have tried to pick up sane defaults; feel free to fork the project and configure it to your needs.

TODO:// clean up and update this README.
