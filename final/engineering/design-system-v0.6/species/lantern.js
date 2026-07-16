/*
  습관 씨앗 정원 — species 데이터 조각: 스타 랜턴 (lantern)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "lantern",
  name: "스타 랜턴",
  habit: "감사한 일 3가지 쓰기",
  badge: "--sp-lantern-fill6",
  stages: [
    ( // stage 0: lantern
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.20s;--sway-delay:-2.17s;--sway-amt:1.30deg;\">" +
        "<polygon points=\"95,70 97,75.2 102.6,75.5 98.2,79.1 99.7,84.5 95,81.4 90.3,84.5 91.8,79.1 87.4,75.5 93,75.2\" fill=\"var(--sp-lantern-fill1)\" opacity=\"1\" />" +
        "</g>"
    ),
    ( // stage 1: lantern
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.38s;--sway-delay:-2.77s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 91, 95 78\" fill=\"none\" stroke=\"var(--sp-lantern-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 86 87 C 85.1 85.6, 82.5 80.6, 86 73 C 89.5 80.6, 86.9 85.6, 86 87 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(-30 86 87)\" />" +
        "<line x1=\"86\" y1=\"85.3\" x2=\"86\" y2=\"74.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 86 87)\" />" +
        "<path d=\"M 104 87 C 103.1 85.6, 100.5 80.6, 104 73 C 107.5 80.6, 104.9 85.6, 104 87 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(30 104 87)\" />" +
        "<line x1=\"104\" y1=\"85.3\" x2=\"104\" y2=\"74.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 104 87)\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"57\" r=\"17\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.10\" style=\"animation-delay:calc(0.38s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"57\" r=\"12\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.16\" style=\"animation-delay:calc(0.23s + var(--instance-dly, 0s))\" />" +
        "<polygon points=\"95,46 97.7,53.3 105.5,53.6 99.4,58.4 101.5,65.9 95,61.6 88.5,65.9 90.6,58.4 84.5,53.6 92.3,53.3\" fill=\"var(--sp-lantern-fill3)\" opacity=\"1\" />" +
        "</g>"
    ),
    ( // stage 2: lantern
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.56s;--sway-delay:-3.37s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 83, 95 62\" fill=\"none\" stroke=\"var(--sp-lantern-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 83 86 C 82.1 84.4, 79.3 78.6, 83 70 C 86.8 78.6, 83.9 84.4, 83 86 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(-32 83 86)\" />" +
        "<line x1=\"83\" y1=\"84.1\" x2=\"83\" y2=\"71.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 83 86)\" />" +
        "<path d=\"M 107 86 C 106.1 84.4, 103.3 78.6, 107 70 C 110.8 78.6, 107.9 84.4, 107 86 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(32 107 86)\" />" +
        "<line x1=\"107\" y1=\"84.1\" x2=\"107\" y2=\"71.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 107 86)\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"47\" r=\"25.5\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.10\" style=\"animation-delay:calc(0.88s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"47\" r=\"18\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.16\" style=\"animation-delay:calc(0.53s + var(--instance-dly, 0s))\" />" +
        "<polygon points=\"95,31.5 98.8,41.7 109.7,42.2 101.2,49 104.1,59.5 95,53.5 85.9,59.5 88.8,49 80.3,42.2 91.2,41.7\" fill=\"var(--sp-lantern-fill5)\" opacity=\"1\" />" +
        "</g>"
    ),
    ( // stage 3: lantern
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.74s;--sway-delay:-3.97s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 95 104 Q 100 79.5, 95 55\" fill=\"none\" stroke=\"var(--sp-lantern-stroke1)\" stroke-width=\"5.5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 81 85 C 80 83.3, 77 77.2, 81 68 C 85 77.2, 82 83.3, 81 85 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(-33 81 85)\" />" +
        "<line x1=\"81\" y1=\"83\" x2=\"81\" y2=\"70\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-33 81 85)\" />" +
        "<path d=\"M 109 85 C 108 83.3, 105 77.2, 109 68 C 113 77.2, 110 83.3, 109 85 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(33 109 85)\" />" +
        "<line x1=\"109\" y1=\"83\" x2=\"109\" y2=\"70\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(33 109 85)\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"41\" r=\"34\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.10\" style=\"animation-delay:calc(2.14s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"41\" r=\"24\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.16\" style=\"animation-delay:calc(1.28s + var(--instance-dly, 0s))\" />" +
        "<polygon points=\"95,21 99.9,34.2 114,34.8 103,43.6 106.8,57.2 95,49.4 83.2,57.2 87,43.6 76,34.8 90.1,34.2\" fill=\"var(--sp-lantern-fill6)\" opacity=\"1\" />" +
        "<polygon class=\"sv-sparkle\" points=\"72,25.3 72.8,27.2 74.7,28 72.8,28.8 72,30.7 71.2,28.8 69.3,28 71.2,27.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.76s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: lantern
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:4.92s;--sway-delay:-4.57s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"37\" r=\"44.2\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.10\" style=\"animation-delay:calc(1.38s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-glow\" cx=\"95\" cy=\"37\" r=\"31.2\" fill=\"var(--sp-lantern-fill4)\" opacity=\"0.16\" style=\"animation-delay:calc(0.83s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 37px\">" +
        "<polygon points=\"95,12 101.1,28.6 118.8,29.3 104.9,40.2 109.7,57.2 95,47.4 80.3,57.2 85.1,40.2 71.2,29.3 88.9,28.6\" fill=\"var(--sp-lantern-fill4)\" opacity=\"1\" />" +
        "</g>" +
        "<path d=\"M 95 104 Q 100 77, 95 50\" fill=\"none\" stroke=\"var(--sp-lantern-stroke1)\" stroke-width=\"6\" stroke-linecap=\"round\" />" +
        "<path d=\"M 79 84 C 77.9 82.1, 74.8 75.3, 79 65 C 83.3 75.3, 80.1 82.1, 79 84 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(-34 79 84)\" />" +
        "<line x1=\"79\" y1=\"81.7\" x2=\"79\" y2=\"67.3\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 79 84)\" />" +
        "<path d=\"M 111 84 C 109.9 82.1, 106.8 75.3, 111 65 C 115.3 75.3, 112.1 82.1, 111 84 Z\" fill=\"var(--sp-lantern-fill2)\" transform=\"rotate(34 111 84)\" />" +
        "<line x1=\"111\" y1=\"81.7\" x2=\"111\" y2=\"67.3\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 111 84)\" />" +
        "<polygon points=\"95,12 101.1,28.6 118.8,29.3 104.9,40.2 109.7,57.2 95,47.4 80.3,57.2 85.1,40.2 71.2,29.3 88.9,28.6\" fill=\"var(--sp-lantern-fill6)\" opacity=\"1\" />" +
        "<polygon points=\"95,22 98.6,32 109.3,32.4 100.9,38.9 103.8,49.1 95,43.2 86.2,49.1 89.1,38.9 80.7,32.4 91.4,32\" fill=\"var(--sp-lantern-fill5)\" opacity=\"0.9\" />" +
        "<circle cx=\"95\" cy=\"37\" r=\"4\" fill=\"var(--sp-lantern-fill3)\" opacity=\"0.95\" />" +
        "<polygon class=\"sv-sparkle\" points=\"72,18.6 73,21 75.4,22 73,23 72,25.4 71,23 68.6,22 71,21\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(2.02s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"122,44.6 123,47 125.4,48 123,49 122,51.4 121,49 118.6,48 121,47\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(1.46s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"110,16.9 110.9,19.1 113.1,20 110.9,20.9 110,23.1 109.1,20.9 106.9,20 109.1,19.1\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(1.30s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
