/*
  습관 씨앗 정원 — species 데이터 조각: 데이지 (daisy)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "daisy",
  name: "데이지",
  habit: "명상 5분",
  badge: "--sp-daisy-fill4",
  stages: [
    ( // stage 0: daisy
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.20s;--sway-delay:-1.55s;--sway-amt:1.30deg;\">" +
        "<circle cx=\"95\" cy=\"83\" r=\"6.5\" fill=\"var(--sp-daisy-fill1)\" />" +
        "</g>"
    ),
    ( // stage 1: daisy
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.38s;--sway-delay:-2.15s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 91.5, 95 79\" fill=\"none\" stroke=\"var(--sp-daisy-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 86 89 C 85.1 87.7, 82.3 83, 86 76 C 89.8 83, 86.9 87.7, 86 89 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(-30 86 89)\" />" +
        "<line x1=\"86\" y1=\"87.4\" x2=\"86\" y2=\"77.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-30 86 89)\" />" +
        "<path d=\"M 104 89 C 103.1 87.7, 100.3 83, 104 76 C 107.8 83, 104.9 87.7, 104 89 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(30 104 89)\" />" +
        "<line x1=\"104\" y1=\"87.4\" x2=\"104\" y2=\"77.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(30 104 89)\" />" +
        "<path d=\"M 95 62 C 94.3 60.9, 92.3 57.4, 95 51 C 97.8 57.4, 95.7 60.9, 95 62 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(0 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60.9 C 94.8 60.4, 94.1 58.7, 95 55.4 C 95.9 58.7, 95.2 60.4, 95 60.9 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 62)\" style=\"animation-delay:calc(1.33s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 94.3 60.9, 92.3 57.4, 95 51 C 97.8 57.4, 95.7 60.9, 95 62 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(60 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60.9 C 94.8 60.4, 94.1 58.7, 95 55.4 C 95.9 58.7, 95.2 60.4, 95 60.9 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(60 95 62)\" style=\"animation-delay:calc(1.70s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 94.3 60.9, 92.3 57.4, 95 51 C 97.8 57.4, 95.7 60.9, 95 62 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(120 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60.9 C 94.8 60.4, 94.1 58.7, 95 55.4 C 95.9 58.7, 95.2 60.4, 95 60.9 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(120 95 62)\" style=\"animation-delay:calc(2.07s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 94.3 60.9, 92.3 57.4, 95 51 C 97.8 57.4, 95.7 60.9, 95 62 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(180 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60.9 C 94.8 60.4, 94.1 58.7, 95 55.4 C 95.9 58.7, 95.2 60.4, 95 60.9 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(180 95 62)\" style=\"animation-delay:calc(0.04s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 94.3 60.9, 92.3 57.4, 95 51 C 97.8 57.4, 95.7 60.9, 95 62 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(240 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60.9 C 94.8 60.4, 94.1 58.7, 95 55.4 C 95.9 58.7, 95.2 60.4, 95 60.9 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(240 95 62)\" style=\"animation-delay:calc(0.41s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 62 C 94.3 60.9, 92.3 57.4, 95 51 C 97.8 57.4, 95.7 60.9, 95 62 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(300 95 62)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 60.9 C 94.8 60.4, 94.1 58.7, 95 55.4 C 95.9 58.7, 95.2 60.4, 95 60.9 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(300 95 62)\" style=\"animation-delay:calc(0.78s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"62\" r=\"6.5\" fill=\"var(--sp-daisy-fill3)\" />" +
        "<circle cx=\"98.6\" cy=\"62\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"97.5\" cy=\"64.5\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"65.6\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"92.5\" cy=\"64.5\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"91.4\" cy=\"62\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"92.5\" cy=\"59.5\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"58.4\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"97.5\" cy=\"59.5\" r=\"0.9\" fill=\"rgba(255,255,255,.28)\" />" +
        "</g>"
    ),
    ( // stage 2: daisy
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.56s;--sway-delay:-2.75s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 95 104 Q 100 84, 95 64\" fill=\"none\" stroke=\"var(--sp-daisy-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 83 89 C 82 87.5, 79 82.1, 83 74 C 87 82.1, 84 87.5, 83 89 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(-32 83 89)\" />" +
        "<line x1=\"83\" y1=\"87.2\" x2=\"83\" y2=\"75.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-32 83 89)\" />" +
        "<path d=\"M 107 89 C 106 87.5, 103 82.1, 107 74 C 111 82.1, 108 87.5, 107 89 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(32 107 89)\" />" +
        "<line x1=\"107\" y1=\"87.2\" x2=\"107\" y2=\"75.8\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(32 107 89)\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(0 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 48)\" style=\"animation-delay:calc(1.07s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(40 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(40 95 48)\" style=\"animation-delay:calc(1.44s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(80 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(80 95 48)\" style=\"animation-delay:calc(1.81s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(120 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(120 95 48)\" style=\"animation-delay:calc(2.18s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(160 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(160 95 48)\" style=\"animation-delay:calc(0.15s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(200 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(200 95 48)\" style=\"animation-delay:calc(0.52s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(240 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(240 95 48)\" style=\"animation-delay:calc(0.89s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(280 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(280 95 48)\" style=\"animation-delay:calc(1.26s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 48 C 94.3 46.7, 92.2 42.5, 95 35 C 97.8 42.5, 95.7 46.7, 95 48 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(320 95 48)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 46.7 C 94.8 46.1, 94 44.1, 95 40.2 C 96 44.1, 95.2 46.1, 95 46.7 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(320 95 48)\" style=\"animation-delay:calc(1.63s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"48\" r=\"8\" fill=\"var(--sp-daisy-fill3)\" />" +
        "<circle cx=\"99.4\" cy=\"48\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"98.1\" cy=\"51.1\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"52.4\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"91.9\" cy=\"51.1\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"90.6\" cy=\"48\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"91.9\" cy=\"44.9\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"43.6\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"98.1\" cy=\"44.9\" r=\"1.1\" fill=\"rgba(255,255,255,.28)\" />" +
        "</g>"
    ),
    ( // stage 3: daisy
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.74s;--sway-delay:-3.35s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 95 104 Q 100 81, 95 58\" fill=\"none\" stroke=\"var(--sp-daisy-stroke1)\" stroke-width=\"5.5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 81 88 C 79.9 86.4, 76.8 80.6, 81 72 C 85.3 80.6, 82.1 86.4, 81 88 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(-33 81 88)\" />" +
        "<line x1=\"81\" y1=\"86.1\" x2=\"81\" y2=\"73.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-33 81 88)\" />" +
        "<path d=\"M 109 88 C 107.9 86.4, 104.8 80.6, 109 72 C 113.3 80.6, 110.1 86.4, 109 88 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(33 109 88)\" />" +
        "<line x1=\"109\" y1=\"86.1\" x2=\"109\" y2=\"73.9\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(33 109 88)\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(0 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 42)\" style=\"animation-delay:calc(2.33s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(36 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(36 95 42)\" style=\"animation-delay:calc(0.30s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(72 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(72 95 42)\" style=\"animation-delay:calc(0.67s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(108 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(108 95 42)\" style=\"animation-delay:calc(1.04s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(144 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(144 95 42)\" style=\"animation-delay:calc(1.41s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(180 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(180 95 42)\" style=\"animation-delay:calc(1.78s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(216 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(216 95 42)\" style=\"animation-delay:calc(2.15s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(252 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(252 95 42)\" style=\"animation-delay:calc(0.12s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(288 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(288 95 42)\" style=\"animation-delay:calc(0.49s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 42 C 94.3 40.6, 92 35.9, 95 27.5 C 98 35.9, 95.8 40.6, 95 42 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(324 95 42)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 40.6 C 94.7 39.8, 94 37.7, 95 33.3 C 96 37.7, 95.3 39.8, 95 40.6 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(324 95 42)\" style=\"animation-delay:calc(0.86s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"42\" r=\"9.5\" fill=\"var(--sp-daisy-fill3)\" />" +
        "<circle cx=\"100.2\" cy=\"42\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"98.7\" cy=\"45.7\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"47.2\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"91.3\" cy=\"45.7\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"89.8\" cy=\"42\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"91.3\" cy=\"38.3\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"36.8\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"98.7\" cy=\"38.3\" r=\"1.3\" fill=\"rgba(255,255,255,.28)\" />" +
        "</g>"
    ),
    ( // stage 4: daisy
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.92s;--sway-delay:-3.95s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:95px 36px\">" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(0 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(30 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(60 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(90 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(120 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(150 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(180 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(210 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(240 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(270 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(300 95 36)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(330 95 36)\" />" +
        "</g>" +
        "<path d=\"M 95 104 Q 100 78, 95 52\" fill=\"none\" stroke=\"var(--sp-daisy-stroke1)\" stroke-width=\"6\" stroke-linecap=\"round\" />" +
        "<path d=\"M 79 87 C 77.9 85.2, 74.5 78.7, 79 69 C 83.5 78.7, 80.1 85.2, 79 87 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(-34 79 87)\" />" +
        "<line x1=\"79\" y1=\"84.8\" x2=\"79\" y2=\"71.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 79 87)\" />" +
        "<path d=\"M 111 87 C 109.9 85.2, 106.5 78.7, 111 69 C 115.5 78.7, 112.1 85.2, 111 87 Z\" fill=\"var(--sp-daisy-fill2)\" transform=\"rotate(34 111 87)\" />" +
        "<line x1=\"111\" y1=\"84.8\" x2=\"111\" y2=\"71.2\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 111 87)\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(0 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(0 95 36)\" style=\"animation-delay:calc(1.19s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(30 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(30 95 36)\" style=\"animation-delay:calc(1.56s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(60 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(60 95 36)\" style=\"animation-delay:calc(1.93s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(90 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(90 95 36)\" style=\"animation-delay:calc(2.30s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(120 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(120 95 36)\" style=\"animation-delay:calc(0.27s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(150 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(150 95 36)\" style=\"animation-delay:calc(0.64s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(180 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(180 95 36)\" style=\"animation-delay:calc(1.01s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(210 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(210 95 36)\" style=\"animation-delay:calc(1.38s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(240 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(240 95 36)\" style=\"animation-delay:calc(1.75s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(270 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(270 95 36)\" style=\"animation-delay:calc(2.12s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(300 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(300 95 36)\" style=\"animation-delay:calc(0.09s + var(--instance-dly, 0s))\" />" +
        "<path d=\"M 95 36 C 94.2 34.4, 91.7 29.1, 95 19.5 C 98.3 29.1, 95.8 34.4, 95 36 Z\" fill=\"var(--sp-daisy-fill4)\" transform=\"rotate(330 95 36)\" />" +
        "<path class=\"sv-shine\" d=\"M 95 34.4 C 94.7 33.5, 93.9 31.1, 95 26.1 C 96.1 31.1, 95.3 33.5, 95 34.4 Z\" fill=\"rgba(255,255,255,.20)\" transform=\"rotate(330 95 36)\" style=\"animation-delay:calc(0.46s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"36\" r=\"11\" fill=\"var(--sp-daisy-fill3)\" />" +
        "<circle cx=\"101.1\" cy=\"36\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"99.3\" cy=\"40.3\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"42.1\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"90.7\" cy=\"40.3\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"89\" cy=\"36\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"90.7\" cy=\"31.7\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"95\" cy=\"30\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<circle cx=\"99.3\" cy=\"31.7\" r=\"1.5\" fill=\"rgba(255,255,255,.28)\" />" +
        "<polygon class=\"sv-sparkle\" points=\"70,19.3 70.8,21.2 72.7,22 70.8,22.8 70,24.7 69.2,22.8 67.3,22 69.2,21.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.9\" style=\"animation-delay:calc(1.28s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"122,47.3 122.8,49.2 124.7,50 122.8,50.8 122,52.7 121.2,50.8 119.3,50 121.2,49.2\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(1.84s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
