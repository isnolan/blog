FROM node:lts-alpine

RUN apk update && apk upgrade
RUN apk add -U tzdata
ENV TZ="Asia/Shanghai"
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
 
WORKDIR /app
COPY . .
# 安装pnpm
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build


# 暴露端口
EXPOSE 3000

# 启动服务
CMD ["pnpm", "start"]