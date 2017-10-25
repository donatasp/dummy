#!/bin/bash
    zip -r ./dist_$CIRCLE_SHA1.zip ./dist
    aws s3 cp ./dist_$CIRCLE_SHA1.zip s3://oberlo-artifacts/dummy/dist_$CIRCLE_SHA1.zip
    git push heroku master