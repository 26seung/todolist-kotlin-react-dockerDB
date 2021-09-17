# 노드 버전에 맞게 설정함
FROM node:15.1.0-alpine AS build

# 작업 폴더를 만들고 npm 설치
RUN mkdir -p /usr/src/app

# 이미지 내에서 명령어를 실행할(현 위치로 잡을) 디렉토리 설정
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

# 이미지 생성 과정에서 실행할 명령어
RUN npm install  --legacy-peer-deps
RUN npm install react-scripts@4.0.3 -g  --legacy-peer-deps

# 소스를 작업폴더로 복사하고 앱 실행
COPY . /usr/src/app
# 컨테이너 실행시 실행할 명령어
# CMD ["npm", "start"]
RUN npm run build

##   이미지 생성 명령어 (docker build -t {이미지명} {상대경로})
##  docker build -t frontend-img .

##  컨테이너 생성 및 실행 명령어
##  docker run -it -p 3000:3000
##  docker run --name frontend-con -v ${pwd}:/usr/src/app -p 3000:3000 -d frontend-img


## 엔진엑스 추가

FROM nginx:1.21.3-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]