# 매일 트윗 | Maeil Tweet

Next.js 포스트 기반 웹 SNS - A Next.js post-based social media web application

## About the Project | 프로젝트 소개

- CRUD 기능이 적용된 포스트 기반의 웹 SNS 프로젝트입니다.
- 회원가입 및 로그인이 가능하며, 로그인 후 포스트를 작성하고 타인의 포스트에 좋아요 누르기와 댓글 남길 수 있습니다.

## 🚀 Getting Started | 프로젝트 실행 방법

### 이 프로젝트는 node 18 버전 이상을 지원합니다.

First, please create a `.env` file and create a variable with the name of `COOKIE_PW` and assign the variable a 40-character long password. You could run the following command in the terminal to do this.

먼저 이 레포를 다운 받으시고 나서 `.env` 파일을 만든 후, `.env` 파일 안에 `COOKIE_PW`라는 변수에 최소 40자인 비밀번호를 넣어주세요. 아래 명령어를 실행하면 `COOKIE_PW`가 `.env` 파일 안에 실행됩니다.

```bash
$ echo "COOKIE_PW=$(LC_ALL=C tr -dc 'a-zA-Z0-9' < /dev/urandom | head -c 40)" > .env
```

`.env` 파일을 생성하신 후, 개발 서버를 실행하세요. 아래 해당 명령어를 실행한 후 브라우저로 [http://localhost:3000](http://localhost:3000)에 가서 홈페이지에 접속해보세요.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

보안 관련 팝업이 뜨는 경우에, 설정 - 개인정보 보호 및 보안 - 보안 - '그래도 허용'을 클릭해주세요.

## Tech Stack | 기술 스택

- Next.js (App Router)
- Prisma
- TypeScript
- Tailwind CSS
- DaisyUI
- SWR
- iron-session

## 프로젝트를 통해 얻은 것 | Lessons Learned

- Next.js 프로젝트를 만들어보면서 리액트는 왜 라이브러리이고 Next.js는 프레임워크인지 확실히 체감할 수 있었습니다.

- iron-session의 공식 버전이 Next.js App Router에는 잘 작동이 되지 않아서 초기에는 iron-session의 `sealData`, `unsealData` 함수만 사용해 세션/유저 정보를 쿠키에 직접 저장하도록 코드를 짰습니다. 그런 다음에, renchris의 [App Router에 사용 가능한 iron-session 버전](https://github.com/renchris/iron-session/tree/v8-as-dependency)을 알게 되어서 `getServerActionIronSession` 함수를 사용해 코드를 리팩토링하고 session-storage를 구현했습니다.

- 정말 귀중하다고 느꼈던 경험을 하나 꼽자면, 이번 프로젝트를 만들면서 다양한 파일이 많아진 만큼, 정리가 잘 된 폴더 구조를 만들어보는 걸 실천해봤다는 사실입니다. 아직 많이 부족하면 어떻게 하면 더 클린한 코드와 프로젝트 구조를 만들 수 있을지 고민하고 있습니다.
# NextJs-Twitter-2023
