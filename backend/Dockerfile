FROM node:12.18.3
LABEL version="1.0"
LABEL description="Backend API for Descomplica tech test."
LABEL maintainer = ["tomipasin@gmail.com"]
WORKDIR /usr/app/backend
COPY package*.json ./
RUN ls
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]