# ViewMyStartup - 3팀 백엔드


![제목을-입력해주세요_-001](https://github.com/user-attachments/assets/b806f69a-a0bd-41e4-9643-b290844431db)

이 프로젝트는 **ViewMyStartup**의 백엔드 부분을 담당합니다. 이 홈페이지는 **스타트업 정보를 제공하고 여러 스타트업을 비교하여 투자 결정하는데 도움을 줍니다. 또한 가상 투자 기능으로 투자에 대한 연습할 수 있는 기능**을 제공하며, [기술 스택](#기술-스택)을 사용하여 개발되었습니다.

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [사용 방법](#사용-방법)
3. [기술 스택](#기술-스택)
4. [팀원 소개](#팀원-소개)
5. [기여 방법](#기여-방법)
6. [파일 구조](#파일-구조)
7. [구현 홈페이지 링크](https://viewmystartup-3.netlify.app/)
8. [프로젝트 회고록](https://www.canva.com/design/DAGjdYdbk0o/DalB-Je3dGH17HBWO1K0WA/edit)

## 프로젝트 소개

이 프로젝트는 **실무 연습을 키우기 위한 프로젝트**입니다. 

이 프로젝트의 백엔드는 **백엔드 API 설계 및 데이터 처리 최적화를 경험할 수 있는 프로젝트**를 목표로 합니다. 
RESTful API 설계와 데이터를 효율적으로 불러오기 위한 쿼리 최적화 및 캐싱 기법을 적용해보며, 데이터베이스 모델링 및 연산 최적화에 대한 이해도를 높일 수 있습니다.

이 프로젝트는 클라이언트-서버 간 데이터 흐름을 이해하고, 실제 API 호출을 최적화하는 방법을 실무적으로 경험할 수 있는 기회를 제공합니다.

## 사용 방법

- local 5000포트로 로컬 서버가 실행됩니다.
- DB는 render로 배포되었습니다.
- 서버는 CloudType으로 배포되었습니다.

### 예시

```bash
# 설치 명령어
npm install
npx prisma generate

# 실행 명령어
npm run dev  
```
## 기술 스택 
### 이 프로젝트는 다음 기술 스택을 사용하여 개발되었습니다:

<p align="center">
  <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" alt="npm" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/CloudType-4285F4?style=flat&logo=google-cloud&logoColor=white" alt="CloudType" />
<img src="https://img.shields.io/badge/REST%20API-25D366?style=flat&logo=api&logoColor=white" alt="REST API" />
 <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
</p>

## 팀원 소개
<table align="center">
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/y10b"><img src= "https://github.com/y10b.png?size=100"width="100px;" alt=""/><br /><sub><b> 팀장 : 김승준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/danikim8"><img src="https://github.com/danikim8.png?size=100" width="100px;" alt=""/><br /><sub><b> 팀원 : 김단이</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/wooju01"><img src="https://github.com/wooju01.png?size=100" width="100px;" alt=""/><br /><sub><b> 팀원 : 김우주</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/YSJ0228"><img src="https://github.com/YSJ0228.png?size=100" width="100px;" alt=""/><br /><sub><b> 팀원 : 윤세준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kr-programmer-sky"><img src="https://github.com/writing-sky.png?size=100" width="100px;" alt=""/><br /><sub><b> 팀원 : 양성경</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

## 기여 방법

# 👑 김승준
- error 핸들러 작성
- 기업 추가 엔드포인트 작성
- 시딩 데이터 제작

# ✨ 양성경
- 전체 기업 목록 조회 엔드포인트 : ids로 검색하는 조건 추가
- 기업 id 조회 엔드포인트

# ✨ 김단이
- `나의 기업 비교` 기능 관련 전체 API 구현 (CRUD 포함)
- 비교 기능 로직 구현
  - `나의 기업`, `비교 대상 기업` 각각 선택 시 **선택 카운트 증가 API (POST)** 구현
- 정렬 기능 백엔드 처리
- 응답 최적화 및 프론트 요구에 맞춘 데이터 구조 조정

# ✨ 김우주
- 스키마 작성
- 시딩 데이터(승준님) 받고 몫 데이터 작성
- 투자(investment) 모듈
  - 투자 리스트 조회
  - 투자 내역 삭제
  - 투자 비밀번호 확인

 # ✨ 윤세준
 - 투자 모달
   - 투자 내역 수정
   - 비밀번호 암호화

 ## 파일 구조
```
src
├── api                          # Axios 인스턴스 및 API 통신 함수 정의
│   ├── axiosInstance.api.js
│   ├── company.api.js
│   └── investment.api.js
│
├── assets                       # 이미지, 폰트 등 정적 파일
│
├── components                   # 공통 UI 컴포넌트
│   ├── buttons                  # 버튼 관련 컴포넌트
│   ├── modals                   # 모달 컴포넌트
│   │   ├── investModal         # 투자 관련 모달
│   │   └── select              # 회사 선택 및 검색 관련 모달
│   ├── topBar                   # 모달 상단바 컴포넌트
│   └── UI modules              # Header, Pagination, Search 등 일반 UI 요소
│       ├── header
│       ├── pagination
│       ├── search
│       └── selectBox
│
├── constants                    # 상수 정의 (ex. 정렬 옵션 등)
│   └── sortOptions.js
│
├── pages                        # 실제 페이지(화면) 단위 컴포넌트
│   ├── companyDetailPage        # 기업 상세 페이지
│   ├── investmentDetailTable    # 투자 상세 테이블 페이지
│   │   └── tableModule         # 에러/비밀번호 모달, 테이블 모듈
│   ├── myPage                   # 마이페이지
│   │   └── myPageTable         # 마이페이지 내 테이블 관련 컴포넌트
│   ├── notfound                 # 404 Not Found 페이지
│   └── tablepage               # 비교, 홈, 투자 페이지
│       ├── comparisonPage
│       ├── homepage
│       └── investmentPage
│
├── styles                       # 전역 스타일 파일
│
├── App.jsx                      # 전체 앱 구성 루트 컴포넌트
└── main.jsx                     # React 앱 진입점
```

