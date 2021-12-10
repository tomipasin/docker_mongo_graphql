FROM node:12.18.3
LABEL version="1.0"
LABEL description="Docker image to Descomplica tech test."
LABEL maintainer = ["tomipasin@gmail.com"]
WORKDIR /usr/app/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]