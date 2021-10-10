FROM node:16-alpine3.11
WORKDIR /home/node/app/
COPY package*.json /home/node/app/
RUN npm install
COPY . /home/node/app/
CMD ["npm", "start"]