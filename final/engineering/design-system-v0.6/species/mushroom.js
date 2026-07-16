/*
  습관 씨앗 정원 — species 데이터 조각: 버섯 패밀리 (mushroom)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "mushroom",
  name: "버섯 패밀리",
  habit: "일찍 잠들기",
  badge: "--sp-mushroom-fill2",
  stages: [
    ( // stage 0: mushroom
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.60s;--sway-delay:-2.48s;--sway-amt:1.30deg;\">" +
        "<circle cx=\"95\" cy=\"82\" r=\"6.5\" fill=\"var(--sp-mushroom-fill1)\" />" +
        "</g>"
    ),
    ( // stage 1: mushroom
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.78s;--sway-delay:-3.08s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 89 104 Q 94 92, 89 80\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 101 104 Q 106 93, 101 82\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 79 78 C 79 68.6, 84 66.5, 89 66.5 C 94 66.5, 99 68.6, 99 78 C 97.6 80, 80.4 80, 79 78 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"86\" cy=\"70\" rx=\"3.5\" ry=\"2.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.15s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"93.6\" cy=\"74.1\" r=\"1.4\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"85\" cy=\"74.6\" r=\"1.4\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"88.4\" cy=\"70.6\" r=\"1.4\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 91 80 C 91 69.9, 96 67.6, 101 67.6 C 106 67.6, 111 69.9, 111 80 C 109.6 82.1, 92.4 82.1, 91 80 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"98\" cy=\"71.4\" rx=\"3.5\" ry=\"3\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.17s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"105.6\" cy=\"75.7\" r=\"1.4\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"97\" cy=\"76.3\" r=\"1.4\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"100.4\" cy=\"72.3\" r=\"1.4\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "</g>"
    ),
    ( // stage 2: mushroom
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.96s;--sway-delay:-3.68s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 80 104 Q 85 85, 80 66\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 95 104 Q 100 81, 95 58\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 110 104 Q 115 86, 110 68\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 69 62 C 69 51.2, 74.5 48.8, 80 48.8 C 85.5 48.8, 91 51.2, 91 62 C 89.5 64.2, 70.5 64.2, 69 62 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"76.7\" cy=\"52.8\" rx=\"3.9\" ry=\"3.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.58s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"85.1\" cy=\"57.5\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"75.6\" cy=\"58.1\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"79.3\" cy=\"53.7\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 82 54 C 82 41.2, 88.5 38.3, 95 38.3 C 101.5 38.3, 108 41.2, 108 54 C 106.2 56.7, 83.8 56.7, 82 54 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"91.1\" cy=\"43.1\" rx=\"4.6\" ry=\"3.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.21s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"101\" cy=\"48.6\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"92.5\" cy=\"50.3\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"89\" cy=\"46.1\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"97.5\" cy=\"44.4\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 99 64 C 99 53.2, 104.5 50.8, 110 50.8 C 115.5 50.8, 121 53.2, 121 64 C 119.5 66.2, 100.5 66.2, 99 64 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"106.7\" cy=\"54.8\" rx=\"3.9\" ry=\"3.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.06s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"115.1\" cy=\"59.5\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"105.6\" cy=\"60.1\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"109.3\" cy=\"55.7\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 126 92 C 125 91.1, 122 87.9, 126 83 C 130 87.9, 127 91.1, 126 92 Z\" fill=\"var(--sp-mushroom-fill4)\" transform=\"rotate(34 126 92)\" />" +
        "<line x1=\"126\" y1=\"90.9\" x2=\"126\" y2=\"84.1\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 126 92)\" />" +
        "</g>"
    ),
    ( // stage 3: mushroom
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:7.14s;--sway-delay:-4.28s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 74 104 Q 79 83, 74 62\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 88 104 Q 93 78, 88 52\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 102 104 Q 107 82, 102 60\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 116 104 Q 121 87, 116 70\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 63 57 C 63 46.2, 68.5 43.8, 74 43.8 C 79.5 43.8, 85 46.2, 85 57 C 83.5 59.2, 64.5 59.2, 63 57 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"70.7\" cy=\"47.8\" rx=\"3.9\" ry=\"3.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.21s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"79.1\" cy=\"52.5\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"69.6\" cy=\"53.1\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"73.3\" cy=\"48.7\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 75 46 C 75 32.5, 81.5 29.5, 88 29.5 C 94.5 29.5, 101 32.5, 101 46 C 99.2 48.8, 76.8 48.8, 75 46 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"84.1\" cy=\"34.5\" rx=\"4.6\" ry=\"4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.50s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"94\" cy=\"40.3\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"85.5\" cy=\"42\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"82\" cy=\"37.7\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"90.5\" cy=\"36\" r=\"1.8\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 88 55 C 88 40.8, 95 37.7, 102 37.7 C 109 37.7, 116 40.8, 116 55 C 114 57.9, 90 57.9, 88 55 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"97.8\" cy=\"42.9\" rx=\"4.9\" ry=\"4.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.19s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"108.4\" cy=\"49\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"99.3\" cy=\"50.9\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"95.6\" cy=\"46.3\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"104.7\" cy=\"44.4\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 105 65 C 105 54.2, 110.5 51.8, 116 51.8 C 121.5 51.8, 127 54.2, 127 65 C 125.5 67.2, 106.5 67.2, 105 65 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"112.7\" cy=\"55.8\" rx=\"3.9\" ry=\"3.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"121.1\" cy=\"60.5\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"111.6\" cy=\"61.1\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"115.3\" cy=\"56.7\" r=\"1.5\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 64 88 C 63.1 87.2, 60.5 84.3, 64 80 C 67.5 84.3, 64.9 87.2, 64 88 Z\" fill=\"var(--sp-mushroom-fill4)\" transform=\"rotate(-32 64 88)\" />" +
        "<line x1=\"64\" y1=\"87\" x2=\"64\" y2=\"81\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 64 88)\" />" +
        "<path d=\"M 128 90 C 127.1 89.2, 124.5 86.3, 128 82 C 131.5 86.3, 128.9 89.2, 128 90 Z\" fill=\"var(--sp-mushroom-fill4)\" transform=\"rotate(34 128 90)\" />" +
        "<line x1=\"128\" y1=\"89\" x2=\"128\" y2=\"83\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 128 90)\" />" +
        "</g>"
    ),
    ( // stage 4: mushroom
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:7.32s;--sway-delay:-4.88s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:98px 44px\">" +
        "<path d=\"M 58 55 C 58 43.5, 64 41, 70 41 C 76 41, 82 43.5, 82 55 C 80.3 57.4, 59.7 57.4, 58 55 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<path d=\"M 70 42 C 70 27.8, 77 24.7, 84 24.7 C 91 24.7, 98 27.8, 98 42 C 96 44.9, 72 44.9, 70 42 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<path d=\"M 82 32 C 82 15.8, 90 12.2, 98 12.2 C 106 12.2, 114 15.8, 114 32 C 111.8 35.4, 84.2 35.4, 82 32 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<path d=\"M 98 42 C 98 27.8, 105 24.7, 112 24.7 C 119 24.7, 126 27.8, 126 42 C 124 44.9, 100 44.9, 98 42 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<path d=\"M 114 55 C 114 43.5, 120 41, 126 41 C 132 41, 138 43.5, 138 55 C 136.3 57.4, 115.7 57.4, 114 55 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "</g>" +
        "<path d=\"M 70 104 Q 75 82, 70 60\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 84 104 Q 89 76, 84 48\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 98 104 Q 103 71, 98 38\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 112 104 Q 117 76, 112 48\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 126 104 Q 131 82, 126 60\" fill=\"none\" stroke=\"var(--sp-mushroom-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 58 55 C 58 43.5, 64 41, 70 41 C 76 41, 82 43.5, 82 55 C 80.3 57.4, 59.7 57.4, 58 55 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"66.4\" cy=\"45.2\" rx=\"4.2\" ry=\"3.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.35s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"75.5\" cy=\"50.2\" r=\"1.7\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"65.2\" cy=\"50.9\" r=\"1.7\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"69.3\" cy=\"46.1\" r=\"1.7\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 70 42 C 70 27.8, 77 24.7, 84 24.7 C 91 24.7, 98 27.8, 98 42 C 96 44.9, 72 44.9, 70 42 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"79.8\" cy=\"29.9\" rx=\"4.9\" ry=\"4.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.66s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"90.4\" cy=\"36\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"81.3\" cy=\"37.9\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"77.6\" cy=\"33.3\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"86.7\" cy=\"31.4\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 82 32 C 82 15.8, 90 12.2, 98 12.2 C 106 12.2, 114 15.8, 114 32 C 111.8 35.4, 84.2 35.4, 82 32 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.2\" cy=\"18.2\" rx=\"5.6\" ry=\"4.8\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.54s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"105.4\" cy=\"25.2\" r=\"2.2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"97.3\" cy=\"27.6\" r=\"2.2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"90.2\" cy=\"24.5\" r=\"2.2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"93.9\" cy=\"20.2\" r=\"2.2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"103.2\" cy=\"20.6\" r=\"2.2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 98 42 C 98 27.8, 105 24.7, 112 24.7 C 119 24.7, 126 27.8, 126 42 C 124 44.9, 100 44.9, 98 42 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"107.8\" cy=\"29.9\" rx=\"4.9\" ry=\"4.2\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.42s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"118.4\" cy=\"36\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"109.3\" cy=\"37.9\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"105.6\" cy=\"33.3\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"114.7\" cy=\"31.4\" r=\"2\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 114 55 C 114 43.5, 120 41, 126 41 C 132 41, 138 43.5, 138 55 C 136.3 57.4, 115.7 57.4, 114 55 Z\" fill=\"var(--sp-mushroom-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"122.4\" cy=\"45.2\" rx=\"4.2\" ry=\"3.4\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.87s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"131.5\" cy=\"50.2\" r=\"1.7\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"121.2\" cy=\"50.9\" r=\"1.7\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<circle cx=\"125.3\" cy=\"46.1\" r=\"1.7\" fill=\"var(--sp-mushroom-fill3)\" />" +
        "<path d=\"M 58 86 C 57.1 85.2, 54.5 82.3, 58 78 C 61.5 82.3, 58.9 85.2, 58 86 Z\" fill=\"var(--sp-mushroom-fill4)\" transform=\"rotate(-34 58 86)\" />" +
        "<line x1=\"58\" y1=\"85\" x2=\"58\" y2=\"79\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 58 86)\" />" +
        "<path d=\"M 140 86 C 139.1 85.2, 136.5 82.3, 140 78 C 143.5 82.3, 140.9 85.2, 140 86 Z\" fill=\"var(--sp-mushroom-fill4)\" transform=\"rotate(34 140 86)\" />" +
        "<line x1=\"140\" y1=\"85\" x2=\"140\" y2=\"79\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 140 86)\" />" +
        "</g>"
    )
  ]
});
