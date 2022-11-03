# 2022-database

## 10주차 실습 실행 방법
1. 레포지토리 복사 
    > 1. git clone <원격저장소 주소>
    > 2. 해당 폴더 이동 (Ex) cd week10
    > 3. npm install
    > 4. npm run start
    
2. database/sql.js 파일 내부에서 본인의 데이터베이스 정보 입력
<pre> 
<code>
    const pool = mysql.createPool(
      process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'password',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      }
    );
</code> 
</pre>

<br>

## <span style="color:red">**테이블 작성법**</span>

이름|과|전공|학번
---|---|---|---|
홍길동|정보통신공학과|정보통신|12000001
도깨비|컴퓨터공학과|컴퓨터공학|12000002
구미호|전기공학과|전기공학|12000003

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

아무내용