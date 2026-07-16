/*
  습관 씨앗 정원 — species 데이터 조각: 클로버 (clover)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "clover",
  name: "클로버",
  habit: "5분 산책하기",
  badge: "--sp-clover-fill4",
  stages: [
    ( // stage 0: clover
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.40s;--sway-delay:-1.86s;--sway-amt:1.30deg;\">" +
        "<circle cx=\"95\" cy=\"85\" r=\"7\" fill=\"var(--sp-clover-fill1)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"92\" cy=\"82\" rx=\"2.6\" ry=\"3.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.62s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 1: clover
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.58s;--sway-delay:-2.46s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 93, 95 82\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 87 82 C 86 80.7, 83 76, 87 69 C 91 76, 88 80.7, 87 82 Z\" fill=\"var(--sp-clover-fill2)\" transform=\"rotate(-28 87 82)\" />" +
        "<line x1=\"87\" y1=\"80.4\" x2=\"87\" y2=\"70.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-28 87 82)\" />" +
        "<path d=\"M 103 82 C 102 80.7, 99 76, 103 69 C 107 76, 104 80.7, 103 82 Z\" fill=\"var(--sp-clover-fill2)\" transform=\"rotate(28 103 82)\" />" +
        "<line x1=\"103\" y1=\"80.4\" x2=\"103\" y2=\"70.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(28 103 82)\" />" +
        "</g>"
    ),
    ( // stage 2: clover
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.76s;--sway-delay:-3.06s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 85, 95 66\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 83 76 C 81.9 74.5, 78.8 69.1, 83 61 C 87.3 69.1, 84.1 74.5, 83 76 Z\" fill=\"var(--sp-clover-fill2)\" transform=\"rotate(-30 83 76)\" />" +
        "<line x1=\"83\" y1=\"74.2\" x2=\"83\" y2=\"62.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 83 76)\" />" +
        "<path d=\"M 107 76 C 105.9 74.5, 102.8 69.1, 107 61 C 111.3 69.1, 108.1 74.5, 107 76 Z\" fill=\"var(--sp-clover-fill2)\" transform=\"rotate(30 107 76)\" />" +
        "<line x1=\"107\" y1=\"74.2\" x2=\"107\" y2=\"62.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 107 76)\" />" +
        "<circle cx=\"103.7\" cy=\"58\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"102.3\" cy=\"56.3\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.38s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"101.1\" cy=\"62.4\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"99.7\" cy=\"60.7\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.28s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"64.2\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.6\" cy=\"62.6\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.76s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"88.9\" cy=\"62.4\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"87.5\" cy=\"60.7\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.54s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"86.3\" cy=\"58\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"84.9\" cy=\"56.3\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.16s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"88.9\" cy=\"53.6\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"87.5\" cy=\"51.9\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.26s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"51.8\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.6\" cy=\"50.1\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.78s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"101.1\" cy=\"53.6\" r=\"4.8\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"99.7\" cy=\"51.9\" rx=\"2\" ry=\"1.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.00s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"58\" r=\"5\" fill=\"var(--sp-clover-fill3)\" />" +
        "</g>"
    ),
    ( // stage 3: clover
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.94s;--sway-delay:-3.66s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 88 104 Q 93 80, 88 56\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 107 104 Q 112 83, 107 62\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 76 68 C 75 66.5, 72 61.1, 76 53 C 80 61.1, 77 66.5, 76 68 Z\" fill=\"var(--sp-clover-fill3)\" transform=\"rotate(-30 76 68)\" />" +
        "<line x1=\"76\" y1=\"66.2\" x2=\"76\" y2=\"54.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 76 68)\" />" +
        "<path d=\"M 100 68 C 99 66.5, 96 61.1, 100 53 C 104 61.1, 101 66.5, 100 68 Z\" fill=\"var(--sp-clover-fill3)\" transform=\"rotate(30 100 68)\" />" +
        "<line x1=\"100\" y1=\"66.2\" x2=\"100\" y2=\"54.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 100 68)\" />" +
        "<circle cx=\"97.3\" cy=\"46\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"95.8\" cy=\"44.2\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.54s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95.1\" cy=\"50.3\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.6\" cy=\"48.5\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.55s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"89.6\" cy=\"52.6\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88.1\" cy=\"50.8\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.35s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"83.4\" cy=\"51.8\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"81.9\" cy=\"50\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.28s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"79.3\" cy=\"48.3\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"77.8\" cy=\"46.5\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.10s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"79.3\" cy=\"43.7\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"77.8\" cy=\"41.9\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.63s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"83.4\" cy=\"40.2\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"81.9\" cy=\"38.4\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.08s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"89.6\" cy=\"39.4\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88.1\" cy=\"37.6\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.24s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95.1\" cy=\"41.7\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.6\" cy=\"39.9\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.32s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"88\" cy=\"46\" r=\"5.4\" fill=\"var(--sp-clover-fill4)\" />" +
        "<circle cx=\"114.4\" cy=\"52\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"113.2\" cy=\"50.6\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.82s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"111.6\" cy=\"56.2\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"110.4\" cy=\"54.7\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.58s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"105.3\" cy=\"57.2\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"104.1\" cy=\"55.8\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.85s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"100.3\" cy=\"54.3\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"99.1\" cy=\"52.9\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.83s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"100.3\" cy=\"49.7\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"99.1\" cy=\"48.2\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.95s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"105.3\" cy=\"46.8\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"104.1\" cy=\"45.3\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.27s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"111.6\" cy=\"47.8\" r=\"4.1\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"110.4\" cy=\"46.4\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.39s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"107\" cy=\"52\" r=\"4.3\" fill=\"var(--sp-clover-fill3)\" />" +
        "</g>"
    ),
    ( // stage 4: clover
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.12s;--sway-delay:-4.26s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 40px\">" +
        "<circle cx=\"89.3\" cy=\"42\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"87.1\" cy=\"46.3\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"81.6\" cy=\"48.6\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"75.4\" cy=\"47.8\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"71.3\" cy=\"44.3\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"71.3\" cy=\"39.7\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"75.4\" cy=\"36.2\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"81.6\" cy=\"35.4\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"87.1\" cy=\"37.7\" r=\"5.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"80\" cy=\"42\" r=\"5.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"106.2\" cy=\"32\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"104\" cy=\"36.7\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"98.4\" cy=\"39.6\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"91.6\" cy=\"39.6\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"86\" cy=\"36.7\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"83.8\" cy=\"32\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"86\" cy=\"27.3\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"91.6\" cy=\"24.4\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"98.4\" cy=\"24.4\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"104\" cy=\"27.3\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"95\" cy=\"32\" r=\"6.5\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"120.1\" cy=\"48\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"117.7\" cy=\"52.1\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"112\" cy=\"53.8\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"106.3\" cy=\"52.1\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"103.9\" cy=\"48\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"106.3\" cy=\"43.9\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"112\" cy=\"42.2\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"117.7\" cy=\"43.9\" r=\"4.4\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"112\" cy=\"48\" r=\"4.7\" fill=\"var(--sp-clover-fill5)\" />" +
        "</g>" +
        "<path d=\"M 80 104 Q 85 78, 80 52\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 95 104 Q 100 72, 95 40\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"-3\" stroke-linecap=\"round\" />" +
        "<path d=\"M 112 104 Q 117 81, 112 58\" fill=\"none\" stroke=\"var(--sp-clover-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 79 70 C 77.9 68.3, 74.5 62.2, 79 53 C 83.5 62.2, 80.1 68.3, 79 70 Z\" fill=\"var(--sp-clover-fill4)\" transform=\"rotate(-32 79 70)\" />" +
        "<line x1=\"79\" y1=\"68\" x2=\"79\" y2=\"55\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 79 70)\" />" +
        "<path d=\"M 111 70 C 109.9 68.3, 106.5 62.2, 111 53 C 115.5 62.2, 112.1 68.3, 111 70 Z\" fill=\"var(--sp-clover-fill4)\" transform=\"rotate(32 111 70)\" />" +
        "<line x1=\"111\" y1=\"68\" x2=\"111\" y2=\"55\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 111 70)\" />" +
        "<circle cx=\"89.3\" cy=\"42\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"87.8\" cy=\"40.2\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.22s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"87.1\" cy=\"46.3\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"85.6\" cy=\"44.5\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.23s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"81.6\" cy=\"48.6\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"80.1\" cy=\"46.8\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.03s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"75.4\" cy=\"47.8\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"73.9\" cy=\"46\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.96s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"71.3\" cy=\"44.3\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"69.8\" cy=\"42.5\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.18s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"71.3\" cy=\"39.7\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"69.8\" cy=\"37.9\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.31s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"75.4\" cy=\"36.2\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"73.9\" cy=\"34.4\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.16s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"81.6\" cy=\"35.4\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"80.1\" cy=\"33.6\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.92s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"87.1\" cy=\"37.7\" r=\"5.1\" fill=\"var(--sp-clover-fill4)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"85.6\" cy=\"35.9\" rx=\"2.1\" ry=\"1.5\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.00s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"80\" cy=\"42\" r=\"5.4\" fill=\"var(--sp-clover-fill4)\" />" +
        "<circle cx=\"106.2\" cy=\"32\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"104.4\" cy=\"29.8\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.16s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"104\" cy=\"36.7\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"102.2\" cy=\"34.6\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.27s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"98.4\" cy=\"39.6\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"96.6\" cy=\"37.5\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.76s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"91.6\" cy=\"39.6\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"89.8\" cy=\"37.5\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.61s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"86\" cy=\"36.7\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"84.2\" cy=\"34.6\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.39s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"83.8\" cy=\"32\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"82\" cy=\"29.8\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.10s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"86\" cy=\"27.3\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"84.2\" cy=\"25.1\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.99s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"91.6\" cy=\"24.4\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"89.8\" cy=\"22.2\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.10s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"98.4\" cy=\"24.4\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"96.6\" cy=\"22.2\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.25s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"104\" cy=\"27.3\" r=\"6.1\" fill=\"var(--sp-clover-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"102.2\" cy=\"25.1\" rx=\"2.5\" ry=\"1.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.47s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"32\" r=\"6.5\" fill=\"var(--sp-clover-fill5)\" />" +
        "<circle cx=\"120.1\" cy=\"48\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"118.8\" cy=\"46.4\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.74s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"117.7\" cy=\"52.1\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"116.4\" cy=\"50.5\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.65s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"112\" cy=\"53.8\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"110.7\" cy=\"52.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.26s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"106.3\" cy=\"52.1\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"105\" cy=\"50.5\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.23s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"103.9\" cy=\"48\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"102.6\" cy=\"46.4\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.98s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"106.3\" cy=\"43.9\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"105\" cy=\"42.3\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.07s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"112\" cy=\"42.2\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"110.7\" cy=\"40.6\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.46s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"117.7\" cy=\"43.9\" r=\"4.4\" fill=\"var(--sp-clover-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"116.4\" cy=\"42.3\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.49s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"112\" cy=\"48\" r=\"4.7\" fill=\"var(--sp-clover-fill3)\" />" +
        "</g>"
    )
  ]
});
