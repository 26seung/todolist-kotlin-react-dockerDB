### 초기 설치
    - npx create-react-app todolist-frontend
    - npm i axios
    - npm i react-router-dom

## 개발 중점
    1. 페이지 (부모,자식) 컴포넌트 분리 (props 활용)
    2. 데이터 값 변경시 마다 SELECT 문 실행을 최소화 
         - 클라이언트 내부에서 (map, filter)등 활용하여 처리하여 DB조회 리소스 낭비 최소화
         
         

### 준비
    - npm run build
    


### Docker Setting
---
#### dockerfile

이미지의 용량을 줄이기 위하여 `alpine` 을 사용하여 이미지를 경량화 하였다..
- [공식 Node.Js Docker 이미지](https://hub.docker.com/_/node?tab=tags)

`.dockerignore` 파일을 생성하여 Docker 이미지에 로컬 파일을 복사하는 것을 막아서 이미지 내에 설치한 파일을 덮어쓰지 않게 한다.
- Docerfile 내부 COPY 를 사용하여 복사하는 파일 중복 방지

nginx 사용시 404 에러가 발생하는 문제가 생겼기 때문에 nginx 설정파일을 만들어 줬다. 
- `conf/conf.d/default.conf` 폴더와 파일을 생성합니다.
- 내부 proxy_pass 를 통해 서버를 연결해 주었다.
- Dockerfile 내부 설정한 파일을 COPY 문을 통해 복사하여 에러를 해결

#### npm ci ?