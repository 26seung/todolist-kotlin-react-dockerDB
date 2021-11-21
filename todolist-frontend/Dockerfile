# Node JS
FROM node:15.1.0-alpine as build

# 앱 디렉터리 생성
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json /app/package.json
RUN npm install --legacy-peer-deps
RUN npm install react-scripts@4.0.3 -g --legacy-peer-deps
COPY . /app
RUN npm run build

# Nginx 
FROM nginx:1.21.3-alpine

# nginx 의 default.conf 를 삭제
RUN rm -rf /etc/nginx/conf.d

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY conf /etc/nginx

COPY --from=build /app/build /usr/share/nginx/html

# 80 포트 오픈
EXPOSE 80

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]



# docker rm -f $(docker ps -a -q)

# docker build -t frontend-img .
# docker run --name frontend-con -p 80:80 -d frontend-img
# docker run --name frontend-con -v ${pwd}:/usr/src/app -p 3000:80 -d frontend-img


# 이미지 생성 명령어 (docker build -t {이미지명} {상대경로})