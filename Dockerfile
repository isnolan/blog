#
# 打包容器
#
FROM node:lts-alpine as builder
 
# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装依赖
RUN npm i pnpm -g
RUN pnpm install
RUN pnpm run build

#
# 运行容器
#
FROM node:lts-alpine

RUN apk update && apk upgrade
RUN apk add -U tzdata
ENV TZ="Asia/Shanghai"
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
 
WORKDIR /app

# 安装pnpm
RUN npm install -g pnpm

# 仅复制构建产物和生产依赖
COPY --from=builder /app/package.json .
COPY --from=builder /app/next.config.mjs . 
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env.production ./.env

# 暴露端口
EXPOSE 3000

# 启动服务
CMD ["pnpm", "start"]