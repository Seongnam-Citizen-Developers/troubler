# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# Troubler

## how to use
특성판 페이지 사용
https://troubler.juho.kim/mastery/book/share/{SKILL_CODE}

## todo
- ~~MasteryBook 코드를 통한 특성판 페이지 구현~~ + 다국어 지원
- 특성 종류(방어 공격 등), 특성 이름, 특성 포인트 3가지만 표시
- iframe 페이지 구현 (웹사이트 용)
- opengraph meta image 구현 (디스코드 미리보기 용)
- 실제 게임 특성판 룩앤필 구현
- Mastery hover시 나타나는 dialog 추가
- flavor text, 실제 효과 텍스트 등
- PWA
- 코드별 좋아요 댓글 기능
