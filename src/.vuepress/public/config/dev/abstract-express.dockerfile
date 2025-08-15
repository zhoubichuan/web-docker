FROM node:12-alpine3.12 AS builder

# 安装git
RUN apt-get update && apt-get install -y git

# 克隆GitHub上的仓库
RUN git clone https://github.com/zhoubichuan/abstract-express.git /usr/src

WORKDIR /usr/src

RUN npm i -g nodemon typescript ts-node

COPY package.json ./package.json
RUN npm install

COPY . .

CMD ["nodemon"]
