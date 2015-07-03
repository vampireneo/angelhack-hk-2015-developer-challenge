# AngelHack Hong Kong 2015 Developer Challenge

[![Build Status](https://drone.io/github.com/vampireneo/angelhack-hk-2015-developer-challenge/status.png)](https://drone.io/github.com/vampireneo/angelhack-hk-2015-developer-challenge/latest)
[![Build Status](https://travis-ci.org/vampireneo/angelhack-hk-2015-developer-challenge.svg?branch=master)](https://travis-ci.org/vampireneo/angelhack-hk-2015-developer-challenge)
[![Code Climate](https://codeclimate.com/github/vampireneo/angelhack-hk-2015-developer-challenge/badges/gpa.svg)](https://codeclimate.com/github/vampireneo/angelhack-hk-2015-developer-challenge)
[![Test Coverage](https://codeclimate.com/github/vampireneo/angelhack-hk-2015-developer-challenge/badges/coverage.svg)](https://codeclimate.com/github/vampireneo/angelhack-hk-2015-developer-challenge/coverage)
[![Coverage Status](https://coveralls.io/repos/vampireneo/angelhack-hk-2015-developer-challenge/badge.svg)](https://coveralls.io/r/vampireneo/angelhack-hk-2015-developer-challenge)

## [AngelHack Hong Kong 2015](http://angelhack.com/hackathon/hongkong-2015/)

### Developer Challenge

Figure out this challenge to get a promo code for a free ticket! Your challenge is to read in a string of Braille characters (using standard English Braille defined here) and print off the word in standard English letters.

The input will consistent of an array of 2x6 space-delimited Braille characters. This array is always on the same line, so regardless of how long the text is, it will always be on 3-rows of text. A lowered bump is a dot character '.', while a raised bump is an upper-case 'O' character.

Ex: This Input translates to helloworld

```
O. O. O. O. O. .O O. O. O. OO
OO .O O. O. .O OO .O OO O. .O
.. .. O. O. O. .O O. O. O. ..
```

Print the transcribed braille below to get the promo code!

```
.O O. .O OO O. O. .O OO O. OO O. .O O. .O
O. .O O. .. .. OO OO .. .. .. OO OO .O OO
O. O. O. O. .. O. O. O. OO .. .. .O O. .O
```
