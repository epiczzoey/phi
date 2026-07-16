/*
  습관 씨앗 정원 — species 데이터 조각: 체커볼 (checker)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "checker",
  name: "체커볼",
  habit: "할 일 1가지 완료하기",
  badge: "--sp-checker-fill8",
  stages: [
    ( // stage 0: checker
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.20s;--sway-delay:-2.17s;--sway-amt:1.30deg;\">" +
        "<circle cx=\"95\" cy=\"83\" r=\"8\" fill=\"var(--sp-checker-fill1)\" />" +
        "<circle cx=\"95\" cy=\"83\" r=\"5\" fill=\"var(--sp-checker-fill2)\" />" +
        "</g>"
    ),
    ( // stage 1: checker
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.38s;--sway-delay:-2.77s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 90, 95 76\" fill=\"none\" stroke=\"var(--sp-checker-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 86 84 C 85.1 82.6, 82.3 77.6, 86 70 C 89.8 77.6, 86.9 82.6, 86 84 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(-30 86 84)\" />" +
        "<line x1=\"86\" y1=\"82.3\" x2=\"86\" y2=\"71.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 86 84)\" />" +
        "<path d=\"M 104 84 C 103.1 82.6, 100.3 77.6, 104 70 C 107.8 77.6, 104.9 82.6, 104 84 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(30 104 84)\" />" +
        "<line x1=\"104\" y1=\"82.3\" x2=\"104\" y2=\"71.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 104 84)\" />" +
        "<rect x=\"88.9\" y=\"55.9\" width=\"5\" height=\"5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"94.3\" y=\"55.9\" width=\"5\" height=\"5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"88.9\" y=\"61.3\" width=\"5\" height=\"5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"94.3\" y=\"61.3\" width=\"5\" height=\"5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"99.7\" y=\"61.3\" width=\"5\" height=\"5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"94.3\" y=\"66.7\" width=\"5\" height=\"5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<ellipse class=\"sv-shine\" cx=\"92.1\" cy=\"58.6\" rx=\"3.8\" ry=\"2.7\" fill=\"rgba(255,255,255,.20)\" opacity=\"0.5\" style=\"animation-delay:calc(1.33s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"97.7\" cy=\"65.8\" rx=\"4.5\" ry=\"2.9\" fill=\"rgba(12,6,20,.20)\" opacity=\"0.7\" style=\"animation-delay:calc(1.33s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 2: checker
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.56s;--sway-delay:-3.37s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 83, 95 62\" fill=\"none\" stroke=\"var(--sp-checker-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 83 80 C 82 78.4, 79 72.6, 83 64 C 87 72.6, 84 78.4, 83 80 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(-32 83 80)\" />" +
        "<line x1=\"83\" y1=\"78.1\" x2=\"83\" y2=\"65.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 83 80)\" />" +
        "<path d=\"M 107 80 C 106 78.4, 103 72.6, 107 64 C 111 72.6, 108 78.4, 107 80 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(32 107 80)\" />" +
        "<line x1=\"107\" y1=\"78.1\" x2=\"107\" y2=\"65.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 107 80)\" />" +
        "<rect x=\"83.2\" y=\"34.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"89.2\" y=\"34.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"95.2\" y=\"34.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"101.2\" y=\"34.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"83.2\" y=\"40.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"89.2\" y=\"40.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"95.2\" y=\"40.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"101.2\" y=\"40.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"83.2\" y=\"46.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"89.2\" y=\"46.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"95.2\" y=\"46.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"101.2\" y=\"46.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"83.2\" y=\"52.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"89.2\" y=\"52.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"95.2\" y=\"52.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"101.2\" y=\"52.2\" width=\"5.5\" height=\"5.5\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<ellipse class=\"sv-shine\" cx=\"90.2\" cy=\"40.3\" rx=\"6.3\" ry=\"4.5\" fill=\"rgba(255,255,255,.20)\" opacity=\"0.5\" style=\"animation-delay:calc(0.69s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"99.5\" cy=\"52.3\" rx=\"7.5\" ry=\"4.8\" fill=\"rgba(12,6,20,.20)\" opacity=\"0.7\" style=\"animation-delay:calc(0.69s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 3: checker
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.74s;--sway-delay:-3.97s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 95 104 Q 100 78, 95 52\" fill=\"none\" stroke=\"var(--sp-checker-stroke1)\" stroke-width=\"5.5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 81 78 C 79.9 76.3, 76.8 70.2, 81 61 C 85.3 70.2, 82.1 76.3, 81 78 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(-33 81 78)\" />" +
        "<line x1=\"81\" y1=\"76\" x2=\"81\" y2=\"63\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-33 81 78)\" />" +
        "<path d=\"M 109 78 C 107.9 76.3, 104.8 70.2, 109 61 C 113.3 70.2, 110.1 76.3, 109 78 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(33 109 78)\" />" +
        "<line x1=\"109\" y1=\"76\" x2=\"109\" y2=\"63\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(33 109 78)\" />" +
        "<rect x=\"85.9\" y=\"18.5\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"92.3\" y=\"18.5\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"98.7\" y=\"18.5\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"79.5\" y=\"24.9\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"85.9\" y=\"24.9\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"92.3\" y=\"24.9\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"98.7\" y=\"24.9\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"105.1\" y=\"24.9\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"79.5\" y=\"31.3\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"85.9\" y=\"31.3\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"92.3\" y=\"31.3\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"98.7\" y=\"31.3\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"105.1\" y=\"31.3\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"79.5\" y=\"37.7\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"85.9\" y=\"37.7\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"92.3\" y=\"37.7\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"98.7\" y=\"37.7\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"105.1\" y=\"37.7\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"85.9\" y=\"44.1\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"92.3\" y=\"44.1\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"98.7\" y=\"44.1\" width=\"5.9\" height=\"5.9\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88.9\" cy=\"26.8\" rx=\"8\" ry=\"5.7\" fill=\"rgba(255,255,255,.20)\" opacity=\"0.5\" style=\"animation-delay:calc(0.81s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"100.7\" cy=\"42\" rx=\"9.5\" ry=\"6.1\" fill=\"rgba(12,6,20,.20)\" opacity=\"0.7\" style=\"animation-delay:calc(0.81s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: checker
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.92s;--sway-delay:-4.57s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 28px\">" +
        "<circle cx=\"95\" cy=\"28\" r=\"21\" fill=\"var(--sp-checker-fill9)\" />" +
        "</g>" +
        "<path d=\"M 95 104 Q 100 75, 95 46\" fill=\"none\" stroke=\"var(--sp-checker-stroke1)\" stroke-width=\"6\" stroke-linecap=\"round\" />" +
        "<path d=\"M 79 78 C 77.9 76.2, 74.5 69.7, 79 60 C 83.5 69.7, 80.1 76.2, 79 78 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(-34 79 78)\" />" +
        "<line x1=\"79\" y1=\"75.8\" x2=\"79\" y2=\"62.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 79 78)\" />" +
        "<path d=\"M 111 78 C 109.9 76.2, 106.5 69.7, 111 60 C 115.5 69.7, 112.1 76.2, 111 78 Z\" fill=\"var(--sp-checker-fill3)\" transform=\"rotate(34 111 78)\" />" +
        "<line x1=\"111\" y1=\"75.8\" x2=\"111\" y2=\"62.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 111 78)\" />" +
        "<rect x=\"82.2\" y=\"8.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"88.8\" y=\"8.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"95.4\" y=\"8.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"102\" y=\"8.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"75.6\" y=\"15.2\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"82.2\" y=\"15.2\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"88.8\" y=\"15.2\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"95.4\" y=\"15.2\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"102\" y=\"15.2\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"108.6\" y=\"15.2\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"75.6\" y=\"21.8\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"82.2\" y=\"21.8\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"88.8\" y=\"21.8\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"95.4\" y=\"21.8\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"102\" y=\"21.8\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"108.6\" y=\"21.8\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"75.6\" y=\"28.4\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"82.2\" y=\"28.4\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"88.8\" y=\"28.4\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"95.4\" y=\"28.4\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"102\" y=\"28.4\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"108.6\" y=\"28.4\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"75.6\" y=\"35\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<rect x=\"82.2\" y=\"35\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"88.8\" y=\"35\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"95.4\" y=\"35\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"102\" y=\"35\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"108.6\" y=\"35\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"82.2\" y=\"41.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"88.8\" y=\"41.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill8)\" opacity=\"0.97\" />" +
        "<rect x=\"95.4\" y=\"41.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill7)\" opacity=\"0.97\" />" +
        "<rect x=\"102\" y=\"41.6\" width=\"6.1\" height=\"6.1\" rx=\"1.4\" fill=\"var(--sp-checker-fill9)\" opacity=\"0.97\" />" +
        "<ellipse class=\"sv-shine\" cx=\"87.6\" cy=\"19.3\" rx=\"9.7\" ry=\"6.9\" fill=\"rgba(255,255,255,.20)\" opacity=\"0.5\" style=\"animation-delay:calc(2.07s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"101.9\" cy=\"37.7\" rx=\"11.5\" ry=\"7.4\" fill=\"rgba(12,6,20,.20)\" opacity=\"0.7\" style=\"animation-delay:calc(2.07s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
