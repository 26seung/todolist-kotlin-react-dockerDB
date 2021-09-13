## Todo-List 
    - Kotlin & React & Mysql(docker) 

### Docker db-mysql setting
    docker run -p 3306:3306 --name todolist -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=todoDB -e MYSQL_USER=seung -e MYSQL_PASSWORD=1234 -d mysql

    docker stop [CONTAINER ID]      - 시작
    docker start [CONTAINER ID]     - 종료

####    포트 중첩으로 실행이 안되는 경우
    netstat -ano | findstr 3306     - 으로 포트 검색
    taskkill /f /pid [PID값]        - 으로 포트 종료 (관리자 권한으로 실행해야 함)