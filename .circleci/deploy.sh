#!/bin/bash
    tar -zcvf ./dist_$CIRCLE_SHA1.tar.gz ./dist
    aws s3 cp ./dist_$CIRCLE_SHA1.tar.gz s3://oberlo-artifacts/dummy/dist_$CIRCLE_SHA1.tar.gz
    git push heroku master