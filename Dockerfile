FROM node:lts-alpine

# Essentials
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.cloud.tencent.com/g' /etc/apk/repositories
RUN apk update && apk upgrade

RUN apk add -U tzdata
ENV TZ="Asia/Shanghai"
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
 
# workdir
WORKDIR /app
ADD dist/ ./ 
COPY .next ./


# production
ENV NODE_ENV=production 

RUN npm install -g pnpm 
RUN pnpm install --ignore-scripts
# RUN pnpm run build

EXPOSE 3000
ENTRYPOINT ["pnpm", "start"]
