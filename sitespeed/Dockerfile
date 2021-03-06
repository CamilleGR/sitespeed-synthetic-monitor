from node:14

#ARG GRAPHITE_HOST
#ARG GRAPHITE_HTTP_PORT
#ARG GRAPHITE_API_PORT
#ARG SITE_TO_TEST

RUN mkdir /src && mkdir /src/app
RUN mkdir /.npm
WORKDIR /src/app

RUN chgrp -R 0 /.npm /src && chmod -R g=u /.npm /src
USER 1001

RUN npm install sitespeed.io




CMD node /src/app/node_modules/sitespeed.io/bin/sitespeed.js https://leanovia.com
