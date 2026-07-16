/*
  습관 씨앗 정원 — species 데이터 조각: 튤립 (tulip)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "tulip",
  name: "튤립",
  habit: "독서 20분",
  badge: "--sp-tulip-fill1",
  stages: [
    ( // stage 0: tulip
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.90s;--sway-delay:-1.55s;--sway-amt:1.30deg;\">" +
        "<path d=\"M 95 90 C 93.8 88.8, 90 85, 95 78 C 100 85, 96.3 88.8, 95 90 Z\" fill=\"var(--sp-tulip-fill1)\" />" +
        "</g>"
    ),
    ( // stage 1: tulip
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.08s;--sway-delay:-2.15s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 91, 95 78\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 85 88 C 84.1 86.6, 81.3 81.6, 85 74 C 88.8 81.6, 85.9 86.6, 85 88 Z\" fill=\"var(--sp-tulip-fill2)\" transform=\"rotate(-32 85 88)\" />" +
        "<line x1=\"85\" y1=\"86.3\" x2=\"85\" y2=\"75.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 85 88)\" />" +
        "<path d=\"M 105 88 C 104.1 86.6, 101.3 81.6, 105 74 C 108.8 81.6, 105.9 86.6, 105 88 Z\" fill=\"var(--sp-tulip-fill2)\" transform=\"rotate(32 105 88)\" />" +
        "<line x1=\"105\" y1=\"86.3\" x2=\"105\" y2=\"75.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 105 88)\" />" +
        "<path d=\"M 95 79 C 83.3 67, 85.6 56.2, 90.1 55 C 93 59.8, 97 59.8, 100 55 C 104.5 56.2, 106.7 67, 95 79 Z\" fill=\"var(--sp-tulip-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 92.8 71.8 C 87.9 64.6, 88.9 58.1, 90.8 57.4 C 92 60.3, 93.7 60.3, 94.9 57.4 C 96.8 58.1, 97.8 64.6, 92.8 71.8 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.40s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"95\" y1=\"58.6\" x2=\"95\" y2=\"76.6\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(2.40s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 2: tulip
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.26s;--sway-delay:-2.75s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 85, 95 66\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 82 86 C 81 84.4, 78 78.6, 82 70 C 86 78.6, 83 84.4, 82 86 Z\" fill=\"var(--sp-tulip-fill2)\" transform=\"rotate(-34 82 86)\" />" +
        "<line x1=\"82\" y1=\"84.1\" x2=\"82\" y2=\"71.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 82 86)\" />" +
        "<path d=\"M 108 86 C 107 84.4, 104 78.6, 108 70 C 112 78.6, 109 84.4, 108 86 Z\" fill=\"var(--sp-tulip-fill2)\" transform=\"rotate(34 108 86)\" />" +
        "<line x1=\"108\" y1=\"84.1\" x2=\"108\" y2=\"71.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 108 86)\" />" +
        "<path d=\"M 95 68 C 82 53, 84.5 39.5, 89.5 38 C 92.8 44, 97.2 44, 100.5 38 C 105.5 39.5, 108 53, 95 68 Z\" fill=\"var(--sp-tulip-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 92.6 59 C 87.1 50, 88.2 41.9, 90.3 41 C 91.7 44.6, 93.5 44.6, 94.9 41 C 97 41.9, 98.1 50, 92.6 59 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.57s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"95\" y1=\"42.5\" x2=\"95\" y2=\"65\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(1.57s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 3: tulip
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.44s;--sway-delay:-3.35s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 87 104 Q 92 81, 87 58\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 103 104 Q 108 77, 103 50\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 75 88 C 74 86.4, 71 80.6, 75 72 C 79 80.6, 76 86.4, 75 88 Z\" fill=\"var(--sp-tulip-fill3)\" transform=\"rotate(-32 75 88)\" />" +
        "<line x1=\"75\" y1=\"86.1\" x2=\"75\" y2=\"73.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 75 88)\" />" +
        "<path d=\"M 99 88 C 98 86.4, 95 80.6, 99 72 C 103 80.6, 100 86.4, 99 88 Z\" fill=\"var(--sp-tulip-fill3)\" transform=\"rotate(32 99 88)\" />" +
        "<line x1=\"99\" y1=\"86.1\" x2=\"99\" y2=\"73.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 99 88)\" />" +
        "<path d=\"M 87 59 C 76 46, 78.1 34.3, 82.3 33 C 85.1 38.2, 88.9 38.2, 91.7 33 C 95.9 34.3, 98.1 46, 87 59 Z\" fill=\"var(--sp-tulip-fill3)\" />" +
        "<path class=\"sv-shine\" d=\"M 85 51.2 C 80.3 43.4, 81.2 36.4, 83 35.6 C 84.2 38.7, 85.7 38.7, 86.9 35.6 C 88.7 36.4, 89.6 43.4, 85 51.2 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.06s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"87\" y1=\"36.9\" x2=\"87\" y2=\"56.4\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(0.06s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 103 54 C 90.7 39, 93 25.5, 97.8 24 C 100.9 30, 105.1 30, 108.2 24 C 113 25.5, 115.4 39, 103 54 Z\" fill=\"var(--sp-tulip-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 100.7 45 C 95.5 36, 96.5 27.9, 98.5 27 C 99.8 30.6, 101.6 30.6, 102.9 27 C 104.9 27.9, 105.9 36, 100.7 45 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.87s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"103\" y1=\"28.5\" x2=\"103\" y2=\"51\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(1.87s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: tulip
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.62s;--sway-delay:-3.95s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 28px\">" +
        "<path d=\"M 82 54 C 71.6 41, 73.6 29.3, 77.6 28 C 80.2 33.2, 83.8 33.2, 86.4 28 C 90.4 29.3, 92.4 41, 82 54 Z\" fill=\"var(--sp-tulip-fill4)\" />" +
        "<path d=\"M 95 48 C 82 32, 84.5 17.6, 89.5 16 C 92.8 22.4, 97.2 22.4, 100.5 16 C 105.5 17.6, 108 32, 95 48 Z\" fill=\"var(--sp-tulip-fill1)\" />" +
        "<path d=\"M 108 54 C 97.6 41, 99.6 29.3, 103.6 28 C 106.2 33.2, 109.8 33.2, 112.4 28 C 116.4 29.3, 118.4 41, 108 54 Z\" fill=\"var(--sp-tulip-fill3)\" />" +
        "</g>" +
        "<path d=\"M 82 104 Q 87 79.5, 82 55\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 95 104 Q 100 74, 95 44\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"-3\" stroke-linecap=\"round\" />" +
        "<path d=\"M 108 104 Q 113 79.5, 108 55\" fill=\"none\" stroke=\"var(--sp-tulip-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 80 88 C 78.9 86.2, 75.5 79.7, 80 70 C 84.5 79.7, 81.1 86.2, 80 88 Z\" fill=\"var(--sp-tulip-fill2)\" transform=\"rotate(-34 80 88)\" />" +
        "<line x1=\"80\" y1=\"85.8\" x2=\"80\" y2=\"72.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 80 88)\" />" +
        "<path d=\"M 110 88 C 108.9 86.2, 105.5 79.7, 110 70 C 114.5 79.7, 111.1 86.2, 110 88 Z\" fill=\"var(--sp-tulip-fill2)\" transform=\"rotate(34 110 88)\" />" +
        "<line x1=\"110\" y1=\"85.8\" x2=\"110\" y2=\"72.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 110 88)\" />" +
        "<path d=\"M 82 54 C 71.6 41, 73.6 29.3, 77.6 28 C 80.2 33.2, 83.8 33.2, 86.4 28 C 90.4 29.3, 92.4 41, 82 54 Z\" fill=\"var(--sp-tulip-fill4)\" />" +
        "<path class=\"sv-shine\" d=\"M 80.1 46.2 C 75.7 38.4, 76.6 31.4, 78.2 30.6 C 79.3 33.7, 80.8 33.7, 81.9 30.6 C 83.6 31.4, 84.4 38.4, 80.1 46.2 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.06s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"82\" y1=\"31.9\" x2=\"82\" y2=\"51.4\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(2.06s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 82 32, 84.5 17.6, 89.5 16 C 92.8 22.4, 97.2 22.4, 100.5 16 C 105.5 17.6, 108 32, 95 48 Z\" fill=\"var(--sp-tulip-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 92.6 38.4 C 87.1 28.8, 88.2 20.2, 90.3 19.2 C 91.7 23, 93.5 23, 94.9 19.2 C 97 20.2, 98.1 28.8, 92.6 38.4 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.19s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"95\" y1=\"20.8\" x2=\"95\" y2=\"44.8\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(2.19s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 108 54 C 97.6 41, 99.6 29.3, 103.6 28 C 106.2 33.2, 109.8 33.2, 112.4 28 C 116.4 29.3, 118.4 41, 108 54 Z\" fill=\"var(--sp-tulip-fill3)\" />" +
        "<path class=\"sv-shine\" d=\"M 106.1 46.2 C 101.7 38.4, 102.6 31.4, 104.2 30.6 C 105.3 33.7, 106.8 33.7, 107.9 30.6 C 109.6 31.4, 110.4 38.4, 106.1 46.2 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.08s + var(--instance-dly, 0s))\" />" +
        "<line class=\"sv-shade\" x1=\"108\" y1=\"31.9\" x2=\"108\" y2=\"51.4\" stroke=\"rgba(12,6,20,.20)\" stroke-width=\"1\" style=\"animation-delay:calc(2.08s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
