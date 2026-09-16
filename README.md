# RokSoft Website

RokSoft 공식 웹사이트. GitHub Pages로 `https://jcroksoft.github.io` 에 게시된다.

## 구조

```
.
├── index.html          회사 소개와 앱 목록
├── app-ads.txt         IAB app-ads.txt (루트 경로 고정)
├── assets/
│   ├── site.css        공통 스타일
│   ├── lang.js         한국어/영어 전환
│   ├── favicon.png
│   └── smp-icon.png
└── smp/
    ├── index.html      Smart Music Player 소개
    └── privacy.html    Smart Music Player 개인정보처리방침
```

## 고정 URL

스토어 등록 정보와 광고 플랫폼에 제출한 주소이므로 경로를 바꾸지 않는다.

| 용도 | URL |
| --- | --- |
| 개발사 웹사이트 | `https://jcroksoft.github.io` |
| app-ads.txt | `https://jcroksoft.github.io/app-ads.txt` |
| SMP 개인정보처리방침 | `https://jcroksoft.github.io/smp/privacy.html` |

## 로컬 미리보기

```bash
python3 -m http.server 4173
```

## 유지 관리

- `app-ads.txt` 는 AppLovin MAX 대시보드가 제공하는 줄을 그대로 복사해 넣는다. 미디에이션 네트워크를 켜거나 끌 때마다 갱신이 필요하다.
- 개인정보처리방침을 수정하면 본문의 "최종 수정일" 도 함께 갱신한다.
- 페이지 문구는 `class="ko"` 와 `class="en"` 쌍으로 작성한다. 한쪽만 추가하면 해당 언어에서 문구가 비어 보인다.
