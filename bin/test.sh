#!/usr/bin/env bash

#  ___________________
# |"|"|"|"|"|"|"|"|"|"|
# | f o n t - s i z e |
# '-------------------'
#
# This project is a part of the “Byte-Sized JavaScript” videocast.
#
# You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#
# MIT Licensed — See LICENSE.md
#
# Send your comments, suggestions, and feedback to me@volkan.io
#

echo "Ain’t nobody has time fo testz."

if [ $? != 0 ]; then
    echo "Tests failed. — Exiting."

    exit 1
fi

npm run lint

if [ $? != 0 ]; then
    echo "Lint failed. — Exiting."

    exit 1
fi

echo "Everything is awesome!"