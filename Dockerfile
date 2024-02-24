FROM node:lts-alpine

# Essentials
RUN apk update && apk upgrade
RUN apk add -U tzdata
ENV TZ="Asia/Shanghai"
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
 
# workdir
WORKDIR /app
ADD dist ./ 

# production
ENV NODE_ENV=production 

EXPOSE 3000
CMD ["npm", "start"]