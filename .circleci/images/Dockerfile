FROM circleci/node:6-browsers

RUN sudo apt-get -y -qq install awscli
RUN sudo wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
RUN sudo mkdir -p /usr/local/lib /usr/local/bin
RUN sudo tar -xvzf heroku-linux-amd64.tar.gz -C /usr/local/lib
RUN sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku