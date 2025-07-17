FROM node:iron-bullseye
COPY package.json /app/
COPY src /app/src
WORKDIR /app/
RUN npm install
CMD ["node","src/app.js"]


