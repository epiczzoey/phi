/*
  습관 씨앗 정원 — species 데이터 조각: 클라우드 트리 (cloud)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "cloud",
  name: "클라우드 트리",
  habit: "심호흡 5회",
  badge: "--sp-cloud-fill5",
  stages: [
    ( // stage 0: cloud
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.60s;--sway-delay:-1.55s;--sway-amt:1.30deg;\">" +
        "<path d=\"M 95 104 Q 100 97, 95 90\" fill=\"none\" stroke=\"var(--sp-cloud-stroke1)\" stroke-width=\"2\" stroke-linecap=\"round\" />" +
        "<ellipse cx=\"95\" cy=\"84\" rx=\"3.4\" ry=\"7\" fill=\"var(--sp-cloud-fill1)\" />" +
        "</g>"
    ),
    ( // stage 1: cloud
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.78s;--sway-delay:-2.15s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 94, 95 84\" fill=\"none\" stroke=\"var(--sp-cloud-stroke1)\" stroke-width=\"3\" stroke-linecap=\"round\" />" +
        "<circle cx=\"95\" cy=\"66\" r=\"10\" fill=\"var(--sp-cloud-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"91.8\" cy=\"62.4\" rx=\"4\" ry=\"3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.09s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"88.8\" cy=\"68.8\" r=\"7.2\" fill=\"var(--sp-cloud-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"86.5\" cy=\"66.2\" rx=\"2.9\" ry=\"2.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.33s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"101.2\" cy=\"68.8\" r=\"7.2\" fill=\"var(--sp-cloud-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"98.9\" cy=\"66.2\" rx=\"2.9\" ry=\"2.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.12s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"93\" cy=\"71\" r=\"6.6\" fill=\"var(--sp-cloud-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"90.9\" cy=\"68.6\" rx=\"2.6\" ry=\"2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.30s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"97\" cy=\"71\" r=\"6.6\" fill=\"var(--sp-cloud-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"94.9\" cy=\"68.6\" rx=\"2.6\" ry=\"2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.38s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"95,53.6 95.7,55.3 97.4,56 95.7,56.7 95,58.4 94.3,56.7 92.6,56 94.3,55.3\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.19s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 2: cloud
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.96s;--sway-delay:-2.75s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 90, 95 76\" fill=\"none\" stroke=\"var(--sp-cloud-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<circle cx=\"95\" cy=\"58\" r=\"15\" fill=\"var(--sp-cloud-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"90.2\" cy=\"52.6\" rx=\"6\" ry=\"4.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.57s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"85.7\" cy=\"62.2\" r=\"10.8\" fill=\"var(--sp-cloud-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"82.2\" cy=\"58.3\" rx=\"4.3\" ry=\"3.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.33s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"104.3\" cy=\"62.2\" r=\"10.8\" fill=\"var(--sp-cloud-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"100.8\" cy=\"58.3\" rx=\"4.3\" ry=\"3.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.01s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"92\" cy=\"65.5\" r=\"9.9\" fill=\"var(--sp-cloud-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88.8\" cy=\"61.9\" rx=\"4\" ry=\"3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.89s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"98\" cy=\"65.5\" r=\"9.9\" fill=\"var(--sp-cloud-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"94.8\" cy=\"61.9\" rx=\"4\" ry=\"3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.71s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"95,42.3 95.8,44.2 97.7,45 95.8,45.8 95,47.7 94.2,45.8 92.3,45 94.2,44.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.50s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"112,49.6 112.7,51.3 114.4,52 112.7,52.7 112,54.4 111.3,52.7 109.6,52 111.3,51.3\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.92s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 3: cloud
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.14s;--sway-delay:-3.35s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 95 104 Q 100 86, 95 68\" fill=\"none\" stroke=\"var(--sp-cloud-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<circle cx=\"95\" cy=\"48\" r=\"19\" fill=\"var(--sp-cloud-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88.9\" cy=\"41.2\" rx=\"7.6\" ry=\"5.7\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.07s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"83.2\" cy=\"53.3\" r=\"13.7\" fill=\"var(--sp-cloud-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"78.8\" cy=\"48.4\" rx=\"5.5\" ry=\"4.1\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.12s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"106.8\" cy=\"53.3\" r=\"13.7\" fill=\"var(--sp-cloud-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"102.4\" cy=\"48.4\" rx=\"5.5\" ry=\"4.1\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.64s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"91.2\" cy=\"57.5\" r=\"12.5\" fill=\"var(--sp-cloud-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"87.2\" cy=\"53\" rx=\"5\" ry=\"3.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.47s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"98.8\" cy=\"57.5\" r=\"12.5\" fill=\"var(--sp-cloud-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"94.8\" cy=\"53\" rx=\"5\" ry=\"3.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.88s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"95,26.6 96,29 98.4,30 96,31 95,33.4 94,31 91.6,30 94,29\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.05s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"114,37.1 114.8,39.2 116.9,40 114.8,40.8 114,42.9 113.2,40.8 111.1,40 113.2,39.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(1.78s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"76,39.1 76.8,41.2 78.9,42 76.8,42.8 76,44.9 75.2,42.8 73.1,42 75.2,41.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.10s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: cloud
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.32s;--sway-delay:-3.95s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 42px\">" +
        "<circle cx=\"95\" cy=\"42\" r=\"22\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<circle cx=\"81.4\" cy=\"48.2\" r=\"15.8\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<circle cx=\"108.6\" cy=\"48.2\" r=\"15.8\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<circle cx=\"90.6\" cy=\"53\" r=\"14.5\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<circle cx=\"99.4\" cy=\"53\" r=\"14.5\" fill=\"var(--sp-cloud-fill5)\" />" +
        "</g>" +
        "<path d=\"M 95 104 Q 100 82, 95 60\" fill=\"none\" stroke=\"var(--sp-cloud-stroke1)\" stroke-width=\"6\" stroke-linecap=\"round\" />" +
        "<circle cx=\"95\" cy=\"42\" r=\"22\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88\" cy=\"34.1\" rx=\"8.8\" ry=\"6.6\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.33s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"81.4\" cy=\"48.2\" r=\"15.8\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"76.3\" cy=\"42.5\" rx=\"6.3\" ry=\"4.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.85s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"108.6\" cy=\"48.2\" r=\"15.8\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"103.6\" cy=\"42.5\" rx=\"6.3\" ry=\"4.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.35s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"90.6\" cy=\"53\" r=\"14.5\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"86\" cy=\"47.8\" rx=\"5.8\" ry=\"4.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.39s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"99.4\" cy=\"53\" r=\"14.5\" fill=\"var(--sp-cloud-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"94.8\" cy=\"47.8\" rx=\"5.8\" ry=\"4.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.25s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"95,18.6 96,21 98.4,22 96,23 95,25.4 94,23 91.6,22 94,21\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.93s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"120,30.9 120.9,33.1 123.1,34 120.9,34.9 120,37.1 119.1,34.9 116.9,34 119.1,33.1\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.46s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"70,30.9 70.9,33.1 73.1,34 70.9,34.9 70,37.1 69.1,34.9 66.9,34 69.1,33.1\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(1.16s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"102,53.3 102.8,55.2 104.7,56 102.8,56.8 102,58.7 101.2,56.8 99.3,56 101.2,55.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(0.38s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
