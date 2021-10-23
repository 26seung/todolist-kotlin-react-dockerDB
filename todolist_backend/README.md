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

<BR/>

- VOLUME :
    - Docker 에서 컨테이너를 삭제할 때 컨테이너 내부의 데이터가 삭제되는데, VOLUME 을 사용하여 컨테이너 외부와 내부를 연결시켜 저장된 데이터의 수명과 데이터를 생성한 컨테이너의 수명을 분리할 수 있다.
- ARG : 
    - ARG 명령어는 build 시에 사용되는 변수
    - ARG 명령어는 ARG <변수명> 또는 ARG <변수 명=값> 형태로 설정해줄 수 있고, docker build 명령어로 사용할 경우 --build-arg 옵션으로 오버라이딩 할 수 있다.
- COPY :
    - COPY 명령어를 사용하면 파일이나 디렉토리를 복사하여 컨테이너 디렉토리에 추가해준다.
    - COPY <복사할 경로> <이미지에 추가할 경로> 형식으로 사용
- ENTRYPOINT : 
    - ENTRYPOINT 는 해당 컨테이너가 시작되었을 때 수행할 실행 명령을 정의하는 명령어입니다. Dockerfile 파일 내에서 1번만 정의가 가능하다.
    - ENTRYPOINT <실행할 명령어> 혹은 ENTRYPOINT ["실행 파일", "매개 변수 1", "매개 변수 2", ...] 형식으로 사용
    

### Docker 네트워크

Docker 컨테이너(container)는 격리된 환경에서 돌아가기 때문에 기본적으로 다른 컨테이너와의 통신이 불가능하다. 
하지만 여러 개의 컨테이너를 하나의 Docker 네트워크(network)에 연결시키면 서로 통신이 가능해진다.

`docker network ls` : 명령어를 통하여 네트워크 목록 조회가 가능하다
>`bridge`  네트워크는 하나의 호스트 컴퓨터 내에서 여러 컨테이너들이 서로 소통할 수 있도록 해준다.  
>`host`  네트워크는 컨터이너를 호스트 컴퓨터와 동일한 네트워크에서 컨테이너를 돌리기 위해서 사용된다.  
>`overlay`  네트워크는 여러 호스트에 분산되어 돌아가는 컨테이너들 간에 네트워킹을 위해서 사용된다.

`docker network create [name]` 명령어를 통하여 새로운 Docker 네트워크를 생성 가능  
`docker network inspect [name]` 명령어를 통하여 네트워크 상세정보 확인  

- ex. `docker run --name backend-con -p 9020:9020 --network todo-net -d backend-img`   
  이런 명령 형식 으로 한번에 실행과 네트워크 연결이 가능
  


## 오류해결
Dockerfile 로 스프링부트 실행시 다음과 같은 데이터베이스 연결 에러 가 발생하였는데   
![image](https://user-images.githubusercontent.com/79305451/138560381-a4172d7f-4ac0-41f6-a819-096af9308b45.png)  

Dockerfile 내부 이미지 문제였던것 같다..  
![image](https://user-images.githubusercontent.com/79305451/138560411-8d43b175-56d3-46ad-a0aa-354931781c7c.png)

`FROM openjdk:11.0.13-jre-slim` 으로 변경하였더니 정상 작동한다.  



## 배포과정



