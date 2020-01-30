# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

COPY . .

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm i axios --save

# start app
CMD ["npm", "start"]