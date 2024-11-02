FROM node:lts

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3030

CMD ["npm", "run", "dev"]
