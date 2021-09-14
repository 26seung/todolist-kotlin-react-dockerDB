## Todo-List 
    - Kotlin & React & Mysql(docker) 

### Docker db-mysql setting
    docker run -p 3306:3306 --name todolist -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=todoDB -e MYSQL_USER=seung -e MYSQL_PASSWORD=1234 -d mysql

    docker stop [CONTAINER ID]      - 시작
    docker start [CONTAINER ID]     - 종료
    
####    포트 중첩으로 실행이 안되는 경우
    netstat -ano | findstr 3306     - 으로 포트 검색
    taskkill /f /pid [PID값]        - 으로 포트 종료 (관리자 권한으로 실행해야 함)


## 도커 사용
    이미지 빌드시 문제점 
        - docker build -t frontend-img .
        - 용량이 1.64GB 로 상당한 부분 차지
  - FROM node:15.1.0 AS build 사용시
    - ![image](https://user-images.githubusercontent.com/79305451/133142138-d5e9a8d2-85c7-4aea-8604-de45667f97fd.png)
  - FROM node:15.1.0-alpine AS build 사용시    (alpine 추가 시 SIZE 감소)
    - ![image](https://user-images.githubusercontent.com/79305451/133225775-cd81ecd8-c973-4080-a6fe-9de27476dfe4.png)

서버 운영체제 ( centos, ubuntu )를 기반으로 만들게 되면 도커 환경에서는 불필요한 패키지나 파일들이 포함되어 있어 용량이 클 수 밖에 없다.
그래서 이러한 문제점을 해결하기 위해 도커를 위한 OS가 만들어졌고 그 중에 대표적인건 Alpine 이다.


    docker rmi frontend-img  명령어로 삭제



## 도커 명령어
    -v : 컨테이너 와 특정 폴더를 공유
    pwd : 현 위치를 출력
    -d : 도커 뒤에서 실행
    -p : 포트

### Dockfile
>* FROM : 이미지를 생성할 때 사용할 기반 이미지를 지정한다. 
>* RUN : 이미지를 생성할 때 실행할 코드를 지정한다. (빌드가 되는 시점)
>* WORKDIR : 작업 디렉토리를 지정한다. 해당 디렉토리가 없으면 새로 생성한다. 작업 디렉토리를 지정하면 그 이후 명령어는 해당 디렉토리를 기준으로 동작한다.
>* COPY : 파일이나 폴더를 이미지에 복사한다. 상대 경로를 사용할 경우 WORKDIR로 지정한 디렉토리를 기준으로 복사한다.
>* ENV : 이미지에서 사용할 환경 변수 값을 지정한다.
>* ENTRYPOINT : 컨테이너를 구동할 때 실행할 명령어를 지정한다.
>* CMD : 컨테이너가 실행될 때 반영