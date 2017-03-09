```
  ___________________
 |"|"|"|"|"|"|"|"|"|"|
 | f o n t - s i z e |
 '-------------------'
```

`font-size` is a command-line utility that tells gives you the best font size to use based on your font preference, your viewing distance, and your screen’s resolution.

## About This Repository

This repository is a part of the [Byte-Sized JavaScript VideoCasts][vidcast].

```
  _               __
 |_)   _|_  _ __ (_  o _   _   _|
 |_) \/ |_ (/_   __) | /_ (/__(_|
     /        |  _.     _. (_   _ ._ o ._ _|_
            \_| (_| \/ (_| __) (_ |  | |_) |_
                                       |
            »»  bytesized.tv  ««
```

## Byte-Sized What?!

[Byte-Sized JavaScript][vidcast].

It is a compilation of short (*around ten minutes*) monthly screencasts about **JavaScript** and related technologies.

[vidcast]: https://bytesized.tv/ "ByteSized.TV"

## About `font-size`

`font-size` is a command-line utility that tells gives you the best font size to use based on your font preference, your viewing distance, and your screen’s resolution.

> Note that having a 10-minute walk every couple of hours will also help you protect your eyes (and sanity); and as a side benefit you won’t have eye strains regardless of how tiny your font preference is.

But you know yourself, don’t you? — When you are “in the zone” time dilates, and one earthling day feels like ten minutes to you. — But, not (necessarily) to your body.

**`font-size` will convince you to bump up your font-size a notch**, so that you won’t have to consume Advils like jelly beans when you come back from “the zone” to the real world.

## How “Scientific” is This?

Well, so far (it works for me)™ **:)**.

I’ve read a bunch of papers and meta-studies about text readability(*one of them is cited, inside the source code — see [./lib/config.js](lib/config.js)*). — The problem is: None of the studies that I’ve found target digital screens. I’ve tried to adjust values based on a few facts:

* Programmers use monotype type faces, which are designed to be readable in smaller font-sizes than a typical serif font like “Times New Roman”.
* Modern displays have good enough resolution; so reading a text on a Retina display should be a fairly similar experience to reading the same text at the same distance and size on paper.

To me, it gave fairly accurate results. Though, [please file an issue](https://github.com/jsbites/font-size/issues/new) if you think the settings can be adjusted to give better results (*see [./lib/config.js](lib/config.js) for the configuration options*).

Also, [please shoot me an email](mailto:me@volkan.io) if you find an article or study that covers the effect of typeface and font x-height ratio regarding readability and eye fatigue.

## Can I configure it for my taste?

`font-size` assumes perfect vision, or perfectly adjusted vision (*i.e. corrective lenses*).

Your adjusted vision might be less-than-perfect due to many factors, age being one of them.

Currently the only way to configure `font-size` is through **forking it** and changing the visual arc degrees in [./lib/config.js](lib/config.js).

I know that’s not ideal. — Please **create a pull request** if you want to let those values to be configurable externally (*say, by reading an external config file*).

## Installation

Install using **NPM**:

```bash
npm install -g font-size
```

## Usage Examples

The `font-size` API is simple; you provide your distance to the screen (*in inches* — sorry rest of the world), the x-height ratio of your preferred font, and your screen resolution (*in PPI*); and `font-size` gives you some recommendations:

```bash
font-size --distance 28 --x-height .53 --resolution 110

    For your typeface, the minimum legible font size is 19px
        (you don’t want to hurt your eyes, do you?).

    Your text is nicely readable starting from… 22px;

    however, anything beyond 27px will damage readability.
```

If you are a laptop user, on average, your eyes will be 23’’ from the monitor. Let’s change the distance to see what `font-size` recommends:

```bash
font-size --distance 23 --x-height .53 --resolution 110

    For your typeface, the minimum legible font size is 16px
        (you don’t want to hurt your eyes, do you?).

    Your text is nicely readable starting from… 18px;

    however, anything beyond 22px will damage readability.
```

Fair enough. And you generally hold your tablet around 14’’ from your eyes. Let’s recalculate with adjusted distance, using an Apple iPad Mini at 163 dpi:

```bash
font-size --distance 14 --x-height .53 --resolution 163

    For your typeface, the minimum legible font size is 14px
        (you don’t want to hurt your eyes, do you?).

    Your text is nicely readable starting from… 17px;

    however, anything beyond 20px will damage readability.
```

## I Need Help

You may use `--help` flag to get help:

```bash
font-size --help
```

## Dependencies

You will need a recent version of Node.JS.

For development, you’ll need a recent version of [Node.JS](https://nodejs.org) and [NPM](https://npmjs.org).

**[Node.JS](https://nodejs.org) version 7.7.1 or above** is recommended; though probably any **7.x** version would work too.

`font-size` is self-sufficient; you just need a good-enough JavaScript runtime; all of its dependencies will be fetched during install time. — You can look at `package.json` to glance over the dependencies.

## Package Scripts

Here are the helper npm scripts that you can run via `npm`:

* `npm test`: Executes the unit tests.
* `npm run lint`: Checks whether the source JavaScript is well-formed.

## Important Files and Folders

* `./index.js`: The main entry point.
* `bin`: Scripts that are mostly used by `npm`.
* `CHANGELOG.md`: A log of what has been done since the last version.
* `CODE_OF_CONDUCT.md`: Tells the collaborators to be nice to each other.
* `README.md`: This very file.
* `.eslintrc`: Used for development; configures `eslint`.
* `.travis.yml`: Used for CI; configures Travis.

## Wanna Help?

Any help is more than appreciated.

If you want to contribute to the source code, **fork this repository** and **create a pull request**.

> In lieu of a formal style guide, take care to maintain the existing coding style.

Also, don’t forget to add unit tests for any new or changed functionality.

If you want to report a bug; or share a comment or suggestion, [file an issue](https://github.com/jsbites/font-size/issues/new).

## I’ve Found a Bug; I Have an Idea

[For bug reports and suggestions, please file an issue](https://github.com/jsbites/font-size/issues/new).

## Contact Information

* **Project Maintainer**: [Volkan Özçelik](https://volkan.io/)
* **Project Website**: <https://bytesized.tv>

## License

MIT-licensed. — [See the license file](LICENSE.md) for details.

## Code of Conduct

We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

[See the code of conduct for details](CODE_OF_CONDUCT.md).
