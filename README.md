# Exterminator
> Twitch bot to ban or unban a user on all the channels you are a mod.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Use commands in the twitch chat to ban or uban users

## Installation

```sh
npm install
```

## Usage example
Copy and rename .env.example to .env

Fill in your Twitch username and your Twitch ouath password on the .env file

```sh
TWITCH_USERNAME=YourUsernameHere
TWITCH_OAUTH=oauth:PasswordHere
```

Start application
```sh
npm run start
```

_If you are a mod of many channels, it may take a while for the bot to enter all the IRC channels_


Now just go to any channel that you are mod and use

```sh
!massban username
```

or

```sh
!massunban username
```

## Meta

ZeroRulez – http://zerorulez.github.io/

## Contributing

1. Fork it (<https://github.com/zerorulez/exterminator-twitch/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
