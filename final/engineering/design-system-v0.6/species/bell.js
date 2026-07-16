/*
  습관 씨앗 정원 — species 데이터 조각: 라이트 벨 (bell)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "bell",
  name: "라이트 벨",
  habit: "스트레칭 10분",
  badge: "--sp-bell-fill1",
  stages: [
    ( // stage 0: bell
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.80s;--sway-delay:-1.24s;--sway-amt:1.30deg;\">" +
        "<circle cx=\"95\" cy=\"83\" r=\"6.5\" fill=\"var(--sp-bell-fill1)\" />" +
        "</g>"
    ),
    ( // stage 1: bell
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.98s;--sway-delay:-1.84s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 92, 95 80\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 87 90 C 86.1 88.8, 83.5 84.5, 87 78 C 90.5 84.5, 87.9 88.8, 87 90 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(-30 87 90)\" />" +
        "<line x1=\"87\" y1=\"88.6\" x2=\"87\" y2=\"79.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 87 90)\" />" +
        "<path d=\"M 103 90 C 102.1 88.8, 99.5 84.5, 103 78 C 106.5 84.5, 103.9 88.8, 103 90 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(30 103 90)\" />" +
        "<line x1=\"103\" y1=\"88.6\" x2=\"103\" y2=\"79.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 103 90)\" />" +
        "<path d=\"M 87 62 C 85.4 66.8, 82.5 70.7, 82.5 74.3 C 82.5 77, 84.8 77.9, 87 77 C 89.3 77.9, 91.5 77, 91.5 74.3 C 91.5 70.7, 88.6 66.8, 87 62 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 85.9 63.2 C 85.3 66.2, 84.1 68.6, 84.1 70.8 C 84.1 72.5, 85 73.1, 85.9 72.5 C 86.8 73.1, 87.7 72.5, 87.7 70.8 C 87.7 68.6, 86.6 66.2, 85.9 63.2 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.77s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"87\" cy=\"75.2\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.77s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 103 62 C 101.4 66.8, 98.5 70.7, 98.5 74.3 C 98.5 77, 100.8 77.9, 103 77 C 105.3 77.9, 107.5 77, 107.5 74.3 C 107.5 70.7, 104.6 66.8, 103 62 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 101.9 63.2 C 101.3 66.2, 100.1 68.6, 100.1 70.8 C 100.1 72.5, 101 73.1, 101.9 72.5 C 102.8 73.1, 103.7 72.5, 103.7 70.8 C 103.7 68.6, 102.6 66.2, 101.9 63.2 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.89s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"103\" cy=\"75.2\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.89s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 2: bell
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.16s;--sway-delay:-2.44s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 86, 95 68\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 84 88 C 83.1 86.6, 80.3 81.6, 84 74 C 87.8 81.6, 84.9 86.6, 84 88 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(-32 84 88)\" />" +
        "<line x1=\"84\" y1=\"86.3\" x2=\"84\" y2=\"75.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 84 88)\" />" +
        "<path d=\"M 106 88 C 105.1 86.6, 102.3 81.6, 106 74 C 109.8 81.6, 106.9 86.6, 106 88 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(32 106 88)\" />" +
        "<line x1=\"106\" y1=\"86.3\" x2=\"106\" y2=\"75.7\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 106 88)\" />" +
        "<path d=\"M 83 46 C 81.3 51.1, 78 55.3, 78 59.1 C 78 62, 80.5 63, 83 62 C 85.5 63, 88 62, 88 59.1 C 88 55.3, 84.8 51.1, 83 46 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 81.8 47.3 C 81.1 50.5, 79.8 53, 79.8 55.4 C 79.8 57.2, 80.8 57.8, 81.8 57.2 C 82.8 57.8, 83.8 57.2, 83.8 55.4 C 83.8 53, 82.5 50.5, 81.8 47.3 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.05s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"83\" cy=\"60.1\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.05s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 100 42 C 98.3 47.1, 95 51.3, 95 55.1 C 95 58, 97.5 59, 100 58 C 102.5 59, 105 58, 105 55.1 C 105 51.3, 101.8 47.1, 100 42 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 98.8 43.3 C 98.1 46.5, 96.8 49, 96.8 51.4 C 96.8 53.2, 97.8 53.8, 98.8 53.2 C 99.8 53.8, 100.8 53.2, 100.8 51.4 C 100.8 49, 99.5 46.5, 98.8 43.3 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.78s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"100\" cy=\"56.1\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.78s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 113 50 C 111.3 55.1, 108 59.3, 108 63.1 C 108 66, 110.5 67, 113 66 C 115.5 67, 118 66, 118 63.1 C 118 59.3, 114.8 55.1, 113 50 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 111.8 51.3 C 111.1 54.5, 109.8 57, 109.8 59.4 C 109.8 61.2, 110.8 61.8, 111.8 61.2 C 112.8 61.8, 113.8 61.2, 113.8 59.4 C 113.8 57, 112.5 54.5, 111.8 51.3 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.91s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"113\" cy=\"64.1\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.91s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 3: bell
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.34s;--sway-delay:-3.04s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 83 104 Q 88 83, 83 62\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 97 104 Q 102 78, 97 52\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 111 104 Q 116 83, 111 62\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 85 90 C 84 88.5, 81 83.1, 85 75 C 89 83.1, 86 88.5, 85 90 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(-33 85 90)\" />" +
        "<line x1=\"85\" y1=\"88.2\" x2=\"85\" y2=\"76.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-33 85 90)\" />" +
        "<path d=\"M 109 90 C 108 88.5, 105 83.1, 109 75 C 113 83.1, 110 88.5, 109 90 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(33 109 90)\" />" +
        "<line x1=\"109\" y1=\"88.2\" x2=\"109\" y2=\"76.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(33 109 90)\" />" +
        "<path d=\"M 78 40 C 76.1 45.8, 72.5 50.4, 72.5 54.8 C 72.5 58, 75.3 59.1, 78 58 C 80.8 59.1, 83.5 58, 83.5 54.8 C 83.5 50.4, 79.9 45.8, 78 40 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 76.7 41.4 C 75.9 45, 74.5 47.9, 74.5 50.6 C 74.5 52.6, 75.6 53.3, 76.7 52.6 C 77.8 53.3, 78.9 52.6, 78.9 50.6 C 78.9 47.9, 77.5 45, 76.7 41.4 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.46s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"78\" cy=\"55.8\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.46s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 92 32 C 90.1 37.8, 86.5 42.4, 86.5 46.8 C 86.5 50, 89.3 51.1, 92 50 C 94.8 51.1, 97.5 50, 97.5 46.8 C 97.5 42.4, 93.9 37.8, 92 32 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 90.7 33.4 C 89.9 37, 88.5 39.9, 88.5 42.6 C 88.5 44.6, 89.6 45.3, 90.7 44.6 C 91.8 45.3, 92.9 44.6, 92.9 42.6 C 92.9 39.9, 91.5 37, 90.7 33.4 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.72s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"92\" cy=\"47.8\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.72s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 106 40 C 104.1 45.8, 100.5 50.4, 100.5 54.8 C 100.5 58, 103.3 59.1, 106 58 C 108.8 59.1, 111.5 58, 111.5 54.8 C 111.5 50.4, 107.9 45.8, 106 40 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 104.7 41.4 C 103.9 45, 102.5 47.9, 102.5 50.6 C 102.5 52.6, 103.6 53.3, 104.7 52.6 C 105.8 53.3, 106.9 52.6, 106.9 50.6 C 106.9 47.9, 105.5 45, 104.7 41.4 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.22s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"106\" cy=\"55.8\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.22s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 120 48 C 118.2 53.4, 114.8 57.9, 114.8 61.9 C 114.8 65, 117.4 66, 120 65 C 122.6 66, 125.3 65, 125.3 61.9 C 125.3 57.9, 121.8 53.4, 120 48 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 118.7 49.4 C 118 52.7, 116.6 55.5, 116.6 58 C 116.6 59.9, 117.7 60.5, 118.7 59.9 C 119.8 60.5, 120.8 59.9, 120.8 58 C 120.8 55.5, 119.5 52.7, 118.7 49.4 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.72s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"120\" cy=\"63\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.72s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: bell
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:6.52s;--sway-delay:-3.64s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:99px 43px\">" +
        "<path d=\"M 72 34 C 70 40.1, 66.3 45, 66.3 49.6 C 66.3 53, 69.1 54.1, 72 53 C 74.9 54.1, 77.8 53, 77.8 49.6 C 77.8 45, 74 40.1, 72 34 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path d=\"M 86 24 C 83.9 30.4, 80 35.6, 80 40.4 C 80 44, 83 45.2, 86 44 C 89 45.2, 92 44, 92 40.4 C 92 35.6, 88.1 30.4, 86 24 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path d=\"M 100 32 C 98 38.1, 94.3 43, 94.3 47.6 C 94.3 51, 97.1 52.1, 100 51 C 102.9 52.1, 105.8 51, 105.8 47.6 C 105.8 43, 102 38.1, 100 32 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path d=\"M 114 42 C 112.1 47.8, 108.5 52.4, 108.5 56.8 C 108.5 60, 111.3 61.1, 114 60 C 116.8 61.1, 119.5 60, 119.5 56.8 C 119.5 52.4, 115.9 47.8, 114 42 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path d=\"M 126 55 C 124.3 60.1, 121 64.3, 121 68.1 C 121 71, 123.5 72, 126 71 C 128.5 72, 131 71, 131 68.1 C 131 64.3, 127.8 60.1, 126 55 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "</g>" +
        "<path d=\"M 76 104 Q 81 80, 76 56\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 90 104 Q 95 73, 90 42\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 104 104 Q 109 78, 104 52\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 118 104 Q 123 83.5, 118 63\" fill=\"none\" stroke=\"var(--sp-bell-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 84 90 C 82.9 88.4, 79.8 82.6, 84 74 C 88.3 82.6, 85.1 88.4, 84 90 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(-34 84 90)\" />" +
        "<line x1=\"84\" y1=\"88.1\" x2=\"84\" y2=\"75.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 84 90)\" />" +
        "<path d=\"M 110 90 C 108.9 88.4, 105.8 82.6, 110 74 C 114.3 82.6, 111.1 88.4, 110 90 Z\" fill=\"var(--sp-bell-fill2)\" transform=\"rotate(34 110 90)\" />" +
        "<line x1=\"110\" y1=\"88.1\" x2=\"110\" y2=\"75.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 110 90)\" />" +
        "<path d=\"M 72 34 C 70 40.1, 66.3 45, 66.3 49.6 C 66.3 53, 69.1 54.1, 72 53 C 74.9 54.1, 77.8 53, 77.8 49.6 C 77.8 45, 74 40.1, 72 34 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 70.6 35.5 C 69.8 39.3, 68.3 42.4, 68.3 45.2 C 68.3 47.3, 69.5 48, 70.6 47.3 C 71.8 48, 72.9 47.3, 72.9 45.2 C 72.9 42.4, 71.4 39.3, 70.6 35.5 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.90s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"72\" cy=\"50.7\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.90s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 86 24 C 83.9 30.4, 80 35.6, 80 40.4 C 80 44, 83 45.2, 86 44 C 89 45.2, 92 44, 92 40.4 C 92 35.6, 88.1 30.4, 86 24 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 84.6 25.6 C 83.7 29.6, 82.2 32.8, 82.2 35.8 C 82.2 38, 83.4 38.7, 84.6 38 C 85.8 38.7, 87 38, 87 35.8 C 87 32.8, 85.4 29.6, 84.6 25.6 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(0.38s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"86\" cy=\"41.6\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.38s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 100 32 C 98 38.1, 94.3 43, 94.3 47.6 C 94.3 51, 97.1 52.1, 100 51 C 102.9 52.1, 105.8 51, 105.8 47.6 C 105.8 43, 102 38.1, 100 32 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 98.6 33.5 C 97.8 37.3, 96.3 40.4, 96.3 43.2 C 96.3 45.3, 97.5 46, 98.6 45.3 C 99.8 46, 100.9 45.3, 100.9 43.2 C 100.9 40.4, 99.4 37.3, 98.6 33.5 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.28s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"100\" cy=\"48.7\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.28s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 114 42 C 112.1 47.8, 108.5 52.4, 108.5 56.8 C 108.5 60, 111.3 61.1, 114 60 C 116.8 61.1, 119.5 60, 119.5 56.8 C 119.5 52.4, 115.9 47.8, 114 42 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 112.7 43.4 C 111.9 47, 110.5 49.9, 110.5 52.6 C 110.5 54.6, 111.6 55.3, 112.7 54.6 C 113.8 55.3, 114.9 54.6, 114.9 52.6 C 114.9 49.9, 113.5 47, 112.7 43.4 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(2.16s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"114\" cy=\"57.8\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.16s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 126 55 C 124.3 60.1, 121 64.3, 121 68.1 C 121 71, 123.5 72, 126 71 C 128.5 72, 131 71, 131 68.1 C 131 64.3, 127.8 60.1, 126 55 Z\" fill=\"var(--sp-bell-fill1)\" />" +
        "<path class=\"sv-shine\" d=\"M 124.8 56.3 C 124.1 59.5, 122.8 62, 122.8 64.4 C 122.8 66.2, 123.8 66.8, 124.8 66.2 C 125.8 66.8, 126.8 66.2, 126.8 64.4 C 126.8 62, 125.5 59.5, 124.8 56.3 Z\" fill=\"rgba(255,255,255,.20)\" style=\"animation-delay:calc(1.87s + var(--instance-dly, 0s))\" />" +
        "<circle class=\"sv-shade\" cx=\"126\" cy=\"69.1\" r=\"1.6\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.87s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
