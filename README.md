# 상견례 안내 웹사이트 (KO/JA)

- 기본 언어: 한국어 (`ko`)
- 지원 언어: 한국어 / 일본어

## 현재 페이지 구성

`src/App.tsx` 기준 활성 섹션:

1. Hero: 상견례 일정, 인사말, 카운트다운
2. Profile: 두 사람 소개 카드 + 상세 모달
3. Family: 양가 가족 소개 탭 + 상세 모달
4. Meeting Location: 장소, Google Map, 교통/메뉴 안내
5. Future: 결혼 일정 및 감사 메시지

## 기술 스택

- React 19
- TypeScript
- Vite 7
- Sass
- dayjs (timezone / locale)

## 로컬 실행

### 1) 설치

```bash
npm install
```

### 2) 개발 서버

```bash
npm run dev
```

### 3) 프로덕션 빌드

```bash
npm run build
```

### 4) 로컬 프리뷰

```bash
npm run preview
```

## 커스터마이징 가이드

### 1) 핵심 데이터 수정 (`src/const.ts`)

현재 외부에서 사용하는 export는 아래 항목만 유지합니다.

- `MEETING_DATE`
- `LOCATION`
- `LOCATION_ADDRESS`
- `GOOGLE_MAP_URL`
- `GOOGLE_MAP_EMBED_URL`
- `OG_GROOM_FULLNAME`
- `OG_BRIDE_FULLNAME`
- `getCurrentMeetingProfile(language)`
- `getCurrentMeetingFamily(language)`
- `TRANSLATIONS`

보통은 아래만 수정하면 충분합니다.

- 날짜/장소 정보: `MEETING_DATE`, `LOCATION`, `LOCATION_ADDRESS`
- 인물 정보: `NAMES`(내부 상수), `MEETING_PROFILE`, `MEETING_FAMILY`
- 문구: `TRANSLATIONS.ko`, `TRANSLATIONS.ja`

### 2) 이미지 교체

- `src/images/*`: 표지/프로필/기타 이미지
- `public/preview_image.png`: 공유 썸네일

### 3) 스타일 수정

- 전역: `src/App.scss`
- 섹션별: `src/component/**/index.scss`
- 폰트 선언: `public/font.css`

## 환경변수

현재 구성은 필수 환경변수 없이 동작합니다.

- `VITE_*` 환경변수 없이도 `npm run dev`, `npm run build` 가능
- 필요 시 Vite 표준 방식(`.env`, `.env.production`)으로 추가 가능

## 배포 (GitHub Pages)

`main` 브랜치 push 시 `.github/workflows/deploy.yml`로 자동 배포됩니다.

필수 확인:

1. `package.json`의 `homepage`를 실제 Pages 경로와 일치
2. 저장소 설정
   - `Settings > Pages > Build and deployment`: `GitHub Actions`
   - `Settings > Actions > General > Workflow permissions`: `Read and write permissions`

## 프로젝트 구조 (핵심)

```text
src/
  App.tsx
  App.scss
  const.ts
  images/
  component/
    hero/
    profile/
    family/
    meetingLocation/
    future/
    languageSelector/
    lazyDiv/
    modal/
    store/
      languageContext.ts
      languageProvider.tsx
      useLanguage.ts
public/
  font.css
  HannariMincho-Regular.otf
  preview_image.png
.github/workflows/
  deploy.yml
```
