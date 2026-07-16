/*
  습관 씨앗 정원 — species 로더 (v2.1, 파일 분할판)
  ------------------------------------------------------------
  예전에는 이 파일 하나(species.js, v2)가 10종 x 5단계 SVG를 전부 담고 있어서
  15만 자가 넘는 초대형 파일이었습니다(줄마다 한 단계 전체가 들어있어 한 줄이 매우 길었음).
  → 부분만 고치거나 살펴볼 때도 파일 전체를 불러와야 해서 다루기 무거웠습니다.

  지금은 이 파일이 "로더" 역할만 하고, 실제 데이터는 아래처럼 쪼개져 있습니다:
    species/<종키>.js   종 하나(예: crocus.js)의 5단계 SVG만 담음 — 종을 고칠 땐 이 파일만 보면 됨
    species-core.js     모든 종이 공유하는 헬퍼 함수(byKey, renderStageSvg 등) + window.GardenSpecies 조립

  브라우저에서 실제로 실행되는 코드/만들어지는 SVG 결과물은 예전과 완전히 동일합니다
  (species/*.js는 문자열을 "태그 경계"에서만 여러 줄로 쪼개 이어붙일 뿐, 내용은 한 글자도 바뀌지 않음).
  html에서는 예전처럼 <script src=".../species.js"></script> 한 줄만 넣으면 됩니다 —
  이 파일이 나머지 11개 파일을 자동으로 순서대로 불러옵니다.
*/
(function () {
  'use strict';

  // 지금 실행 중인 이 <script> 태그 자신의 경로를 찾아, 같은 폴더를 기준으로 나머지 조각을 불러온다.
  // (동기 실행 중인 <script src> 태그는 언제나 document의 "마지막 script 엘리먼트"이므로 이렇게 찾을 수 있다.)
  var scripts = document.getElementsByTagName('script');
  var selfSrc = scripts[scripts.length - 1].src;
  var baseUrl = selfSrc.slice(0, selfSrc.lastIndexOf('/') + 1);

  // 원래 species.js(v2)의 SPECIES 배열 순서와 동일해야 한다 — ensureSpeciesKey() 등이
  // "등록 순서(index)"로 종을 순환 배정하기 때문에, 순서가 바뀌면 기존에 저장된 습관의
  // 꽃 종류가 새로고침 후 달라져 보일 수 있다.
  var SPECIES_FILES = [
    'crocus', 'clover', 'checker', 'berry', 'lantern',
    'bell', 'tulip', 'daisy', 'mushroom', 'cloud'
  ];

  window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || [];

  SPECIES_FILES.forEach(function (key) {
    document.write('<script src="' + baseUrl + 'species/' + key + '.js"><' + '/script>');
  });
  document.write('<script src="' + baseUrl + 'species-core.js"><' + '/script>');
})();
