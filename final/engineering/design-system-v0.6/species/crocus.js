/*
  습관 씨앗 정원 — species 데이터 조각: 크로커스 (crocus)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "crocus",
  name: "크로커스",
  habit: "매일 아침 물 한 잔",
  badge: "--sp-crocus-fill5",
  stages: [
    ( // stage 0: crocus
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.60s;--sway-delay:-1.86s;--sway-amt:1.30deg;\">" +
        "<path d=\"M 95 88 C 93.9 86.7, 90.5 82.5, 95 75 C 99.5 82.5, 96.1 86.7, 95 88 Z\" fill=\"var(--sp-crocus-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 86.7 C 94.6 86.1, 93.5 84.1, 95 80.2 C 96.5 84.1, 95.4 86.1, 95 86.7 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.47s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 1: crocus
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.78s;--sway-delay:-2.46s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 92, 95 80\" fill=\"none\" stroke=\"var(--sp-crocus-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 87 80 C 86.1 78.5, 83.5 73.1, 87 65 C 90.5 73.1, 87.9 78.5, 87 80 Z\" fill=\"var(--sp-crocus-fill2)\" transform=\"rotate(-22 87 80)\" />" +
        "<line x1=\"87\" y1=\"78.2\" x2=\"87\" y2=\"66.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-22 87 80)\" />" +
        "<path d=\"M 103 80 C 102.1 78.5, 99.5 73.1, 103 65 C 106.5 73.1, 103.9 78.5, 103 80 Z\" fill=\"var(--sp-crocus-fill2)\" transform=\"rotate(22 103 80)\" />" +
        "<line x1=\"103\" y1=\"78.2\" x2=\"103\" y2=\"66.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(22 103 80)\" />" +
        "</g>"
    ),
    ( // stage 2: crocus
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.96s;--sway-delay:-3.06s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 85, 95 66\" fill=\"none\" stroke=\"var(--sp-crocus-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 83 74 C 82.1 72.2, 79.3 65.7, 83 56 C 86.8 65.7, 83.9 72.2, 83 74 Z\" fill=\"var(--sp-crocus-fill3)\" transform=\"rotate(-26 83 74)\" />" +
        "<line x1=\"83\" y1=\"71.8\" x2=\"83\" y2=\"58.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-26 83 74)\" />" +
        "<path d=\"M 107 74 C 106.1 72.2, 103.3 65.7, 107 56 C 110.8 65.7, 107.9 72.2, 107 74 Z\" fill=\"var(--sp-crocus-fill3)\" transform=\"rotate(26 107 74)\" />" +
        "<line x1=\"107\" y1=\"71.8\" x2=\"107\" y2=\"58.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(26 107 74)\" />" +
        "<path d=\"M 95 62 C 93.9 60, 90.5 53.6, 95 42 C 99.5 53.6, 96.1 60, 95 62 Z\" fill=\"var(--sp-crocus-fill4)\" transform=\"rotate(-23 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60 C 94.6 59, 93.5 56, 95 50 C 96.5 56, 95.4 59, 95 60 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-23 95 62)\" style=\"animation-delay:calc(1.33s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 93.9 60, 90.5 53.6, 95 42 C 99.5 53.6, 96.1 60, 95 62 Z\" fill=\"var(--sp-crocus-fill4)\" transform=\"rotate(0 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60 C 94.6 59, 93.5 56, 95 50 C 96.5 56, 95.4 59, 95 60 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 62)\" style=\"animation-delay:calc(1.70s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 93.9 60, 90.5 53.6, 95 42 C 99.5 53.6, 96.1 60, 95 62 Z\" fill=\"var(--sp-crocus-fill4)\" transform=\"rotate(23 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60 C 94.6 59, 93.5 56, 95 50 C 96.5 56, 95.4 59, 95 60 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(23 95 62)\" style=\"animation-delay:calc(2.07s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 3: crocus
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.14s;--sway-delay:-3.66s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 95 104 Q 100 79, 95 54\" fill=\"none\" stroke=\"var(--sp-crocus-stroke1)\" stroke-width=\"5.5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 80 68 C 79 65.9, 76 58.3, 80 47 C 84 58.3, 81 65.9, 80 68 Z\" fill=\"var(--sp-crocus-fill3)\" transform=\"rotate(-28 80 68)\" />" +
        "<line x1=\"80\" y1=\"65.5\" x2=\"80\" y2=\"49.5\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-28 80 68)\" />" +
        "<path d=\"M 110 68 C 109 65.9, 106 58.3, 110 47 C 114 58.3, 111 65.9, 110 68 Z\" fill=\"var(--sp-crocus-fill3)\" transform=\"rotate(28 110 68)\" />" +
        "<line x1=\"110\" y1=\"65.5\" x2=\"110\" y2=\"49.5\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(28 110 68)\" />" +
        "<path d=\"M 95 50 C 93.7 47.4, 89.8 39.1, 95 24 C 100.3 39.1, 96.3 47.4, 95 50 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(-32 95 50)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 47.4 C 94.6 46.1, 93.2 42.2, 95 34.4 C 96.8 42.2, 95.4 46.1, 95 47.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-32 95 50)\" style=\"animation-delay:calc(1.45s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 50 C 93.7 47.4, 89.8 39.1, 95 24 C 100.3 39.1, 96.3 47.4, 95 50 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(-16 95 50)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 47.4 C 94.6 46.1, 93.2 42.2, 95 34.4 C 96.8 42.2, 95.4 46.1, 95 47.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-16 95 50)\" style=\"animation-delay:calc(1.82s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 50 C 93.7 47.4, 89.8 39.1, 95 24 C 100.3 39.1, 96.3 47.4, 95 50 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(0 95 50)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 47.4 C 94.6 46.1, 93.2 42.2, 95 34.4 C 96.8 42.2, 95.4 46.1, 95 47.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 50)\" style=\"animation-delay:calc(2.19s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 50 C 93.7 47.4, 89.8 39.1, 95 24 C 100.3 39.1, 96.3 47.4, 95 50 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(16 95 50)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 47.4 C 94.6 46.1, 93.2 42.2, 95 34.4 C 96.8 42.2, 95.4 46.1, 95 47.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(16 95 50)\" style=\"animation-delay:calc(0.16s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 50 C 93.7 47.4, 89.8 39.1, 95 24 C 100.3 39.1, 96.3 47.4, 95 50 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(32 95 50)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 47.4 C 94.6 46.1, 93.2 42.2, 95 34.4 C 96.8 42.2, 95.4 46.1, 95 47.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(32 95 50)\" style=\"animation-delay:calc(0.53s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"72,27.3 72.8,29.2 74.7,30 72.8,30.8 72,32.7 71.2,30.8 69.3,30 71.2,29.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(1.14s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: crocus
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.32s;--sway-delay:-4.26s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 40px\">" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(-23 95 44)\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(-7.7 95 44)\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(7.7 95 44)\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(23 95 44)\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(-39 95 40)\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(-19.5 95 40)\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(0 95 40)\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(19.5 95 40)\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(39 95 40)\" />" +
        "</g>" +
        "<path d=\"M 95 104 Q 100 75, 95 46\" fill=\"none\" stroke=\"var(--sp-crocus-stroke1)\" stroke-width=\"6\" stroke-linecap=\"round\" />" +
        "<path d=\"M 78 70 C 76.9 67.7, 73.5 59.4, 78 47 C 82.5 59.4, 79.1 67.7, 78 70 Z\" fill=\"var(--sp-crocus-fill6)\" transform=\"rotate(-30 78 70)\" />" +
        "<line x1=\"78\" y1=\"67.2\" x2=\"78\" y2=\"49.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 78 70)\" />" +
        "<path d=\"M 112 70 C 110.9 67.7, 107.5 59.4, 112 47 C 116.5 59.4, 113.1 67.7, 112 70 Z\" fill=\"var(--sp-crocus-fill6)\" transform=\"rotate(30 112 70)\" />" +
        "<line x1=\"112\" y1=\"67.2\" x2=\"112\" y2=\"49.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 112 70)\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(-23 95 44)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.8 C 94.5 39.2, 93 34.4, 95 24.8 C 97 34.4, 95.5 39.2, 95 40.8 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-23 95 44)\" style=\"animation-delay:calc(0.31s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(-7.7 95 44)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.8 C 94.5 39.2, 93 34.4, 95 24.8 C 97 34.4, 95.5 39.2, 95 40.8 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-7.7 95 44)\" style=\"animation-delay:calc(0.68s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(7.7 95 44)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.8 C 94.5 39.2, 93 34.4, 95 24.8 C 97 34.4, 95.5 39.2, 95 40.8 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(7.7 95 44)\" style=\"animation-delay:calc(1.05s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 44 C 93.5 40.8, 89 30.6, 95 12 C 101 30.6, 96.5 40.8, 95 44 Z\" fill=\"var(--sp-crocus-fill7)\" transform=\"rotate(23 95 44)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.8 C 94.5 39.2, 93 34.4, 95 24.8 C 97 34.4, 95.5 39.2, 95 40.8 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(23 95 44)\" style=\"animation-delay:calc(1.42s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(-39 95 40)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 36 C 94.4 34, 92.8 28, 95 16 C 97.2 28, 95.6 34, 95 36 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-39 95 40)\" style=\"animation-delay:calc(1.95s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(-19.5 95 40)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 36 C 94.4 34, 92.8 28, 95 16 C 97.2 28, 95.6 34, 95 36 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(-19.5 95 40)\" style=\"animation-delay:calc(2.32s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(0 95 40)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 36 C 94.4 34, 92.8 28, 95 16 C 97.2 28, 95.6 34, 95 36 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 40)\" style=\"animation-delay:calc(0.29s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(19.5 95 40)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 36 C 94.4 34, 92.8 28, 95 16 C 97.2 28, 95.6 34, 95 36 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(19.5 95 40)\" style=\"animation-delay:calc(0.66s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 40 C 93.4 36, 88.5 23.2, 95 0 C 101.5 23.2, 96.6 36, 95 40 Z\" fill=\"var(--sp-crocus-fill5)\" transform=\"rotate(39 95 40)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 36 C 94.4 34, 92.8 28, 95 16 C 97.2 28, 95.6 34, 95 36 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(39 95 40)\" style=\"animation-delay:calc(1.03s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"40\" r=\"4.5\" fill=\"var(--sp-crocus-fill4)\" opacity=\"0.9\" />" +
        "</g>"
    )
  ]
});
