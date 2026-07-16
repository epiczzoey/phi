/*
  습관 씨앗 정원 — species 데이터 조각: 베리 스프레이 (berry)
  이 파일은 v.0.6-design-system/species.js 로더가 자동으로 불러와서 등록합니다.
  형태(좌표)만 바꾸려면 이 파일을 고치세요 — 공통 헬퍼/색상 토큰은 species-core.js / tokens.css에 있습니다.
  각 줄은 SVG 태그 하나씩이며 문자열 결합(+)으로 이어붙일 뿐, 실제로 만들어지는 SVG 문자열은
  기존 species.js(v1)와 완전히 동일합니다(줄바꿈은 소스 코드 가독성을 위한 것일 뿐, 태그 사이의
  공백이 아니라 태그 경계에서만 쪼갰기 때문에 렌더링 결과에 영향이 없습니다).
*/
(window.__gsSpeciesRegistry = window.__gsSpeciesRegistry || []).push({
  key: "berry",
  name: "베리 스프레이",
  habit: "물 1L 마시기",
  badge: "--sp-berry-fill5",
  stages: [
    ( // stage 0: berry
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.00s;--sway-delay:-1.55s;--sway-amt:1.30deg;\">" +
        "<circle cx=\"95\" cy=\"82\" r=\"6.5\" fill=\"var(--sp-berry-fill1)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"92.9\" cy=\"79.8\" rx=\"2.2\" ry=\"1.6\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.33s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"96.8\" cy=\"84.1\" rx=\"2\" ry=\"1.3\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.33s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 1: berry
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.18s;--sway-delay:-2.15s;--sway-amt:1.65deg;\">" +
        "<path d=\"M 95 104 Q 100 88, 95 72\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<circle cx=\"95\" cy=\"64\" r=\"5.5\" fill=\"var(--sp-berry-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.2\" cy=\"62.1\" rx=\"1.9\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.71s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"96.5\" cy=\"65.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.71s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"85\" cy=\"74\" r=\"5.5\" fill=\"var(--sp-berry-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"83.2\" cy=\"72.1\" rx=\"1.9\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(2.31s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"86.5\" cy=\"75.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.31s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"105\" cy=\"74\" r=\"5.5\" fill=\"var(--sp-berry-fill2)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"103.2\" cy=\"72.1\" rx=\"1.9\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.11s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"106.5\" cy=\"75.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.11s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 2: berry
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.36s;--sway-delay:-2.75s;--sway-amt:2.00deg;\">" +
        "<path d=\"M 88 104 Q 93 80, 88 56\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 102 104 Q 107 83, 102 62\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"-4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 85 92 C 84.1 90.8, 81.5 86.5, 85 80 C 88.5 86.5, 85.9 90.8, 85 92 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(-34 85 92)\" />" +
        "<line x1=\"85\" y1=\"90.6\" x2=\"85\" y2=\"81.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 85 92)\" />" +
        "<path d=\"M 105 92 C 104.1 90.8, 101.5 86.5, 105 80 C 108.5 86.5, 105.9 90.8, 105 92 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(34 105 92)\" />" +
        "<line x1=\"105\" y1=\"90.6\" x2=\"105\" y2=\"81.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 105 92)\" />" +
        "<circle cx=\"88\" cy=\"48\" r=\"5.3\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"86.3\" cy=\"46.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.88s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"89.5\" cy=\"49.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.88s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"88\" cy=\"61\" r=\"5.3\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"86.3\" cy=\"59.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.95s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"89.5\" cy=\"62.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.95s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"88\" cy=\"74\" r=\"5.3\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"86.3\" cy=\"72.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.02s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"89.5\" cy=\"75.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.02s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"102\" cy=\"54\" r=\"5.3\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"100.3\" cy=\"52.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.00s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"103.5\" cy=\"55.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.00s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"102\" cy=\"69\" r=\"5.3\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"100.3\" cy=\"67.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.45s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"103.5\" cy=\"70.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.45s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"116\" cy=\"63\" r=\"5.3\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"114.3\" cy=\"61.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(2.09s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"117.5\" cy=\"64.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.09s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 3: berry
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.54s;--sway-delay:-3.35s;--sway-amt:2.35deg;\">" +
        "<path d=\"M 80 104 Q 85 78, 80 52\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 95 104 Q 100 75, 95 46\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"-3\" stroke-linecap=\"round\" />" +
        "<path d=\"M 110 104 Q 115 81, 110 58\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 66 85 C 65.1 83.8, 62.5 79.5, 66 73 C 69.5 79.5, 66.9 83.8, 66 85 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(34 66 85)\" />" +
        "<line x1=\"66\" y1=\"83.6\" x2=\"66\" y2=\"74.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 66 85)\" />" +
        "<path d=\"M 82 85 C 81.1 83.8, 78.5 79.5, 82 73 C 85.5 79.5, 82.9 83.8, 82 85 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(-34 82 85)\" />" +
        "<line x1=\"82\" y1=\"83.6\" x2=\"82\" y2=\"74.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 82 85)\" />" +
        "<path d=\"M 108 85 C 107.1 83.8, 104.5 79.5, 108 73 C 111.5 79.5, 108.9 83.8, 108 85 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(-34 108 85)\" />" +
        "<line x1=\"108\" y1=\"83.6\" x2=\"108\" y2=\"74.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 108 85)\" />" +
        "<path d=\"M 124 85 C 123.1 83.8, 120.5 79.5, 124 73 C 127.5 79.5, 124.9 83.8, 124 85 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(34 124 85)\" />" +
        "<line x1=\"124\" y1=\"83.6\" x2=\"124\" y2=\"74.4\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 124 85)\" />" +
        "<circle cx=\"80\" cy=\"43\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"78.3\" cy=\"41.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.77s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"81.5\" cy=\"44.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.77s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"80\" cy=\"57\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"78.3\" cy=\"55.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(2.03s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"81.5\" cy=\"58.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.03s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"80\" cy=\"71\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"78.3\" cy=\"69.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(2.29s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"81.5\" cy=\"72.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.29s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"38\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.3\" cy=\"36.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.57s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"96.5\" cy=\"39.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.57s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"95\" cy=\"53\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"93.3\" cy=\"51.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(2.02s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"96.5\" cy=\"54.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.02s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"110\" cy=\"46\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"108.3\" cy=\"44.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.44s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"111.5\" cy=\"47.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.44s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"110\" cy=\"61\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"108.3\" cy=\"59.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.89s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"111.5\" cy=\"62.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.89s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"124\" cy=\"55\" r=\"5.4\" fill=\"var(--sp-berry-fill3)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"122.3\" cy=\"53.2\" rx=\"1.8\" ry=\"1.3\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.13s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"125.5\" cy=\"56.7\" rx=\"1.6\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.13s + var(--instance-dly, 0s))\" />" +
        "</g>"
    ),
    ( // stage 4: berry
        "<ellipse cx=\"95\" cy=\"110\" rx=\"42\" ry=\"7.5\" fill=\"rgba(6,3,10,.30)\" />" +
        "<ellipse cx=\"95\" cy=\"107.5\" rx=\"31\" ry=\"5\" fill=\"var(--soil-shadow)\" />" +
        "<g class=\"sv-sway\" style=\"transform-origin:95px 104px;--sway-dur:5.72s;--sway-delay:-3.95s;--sway-amt:2.70deg;\">" +
        "<polygon class=\"sv-sparkle\" points=\"56.9,26.3 58.5,30.2 62.4,31.8 58.5,33.4 56.9,37.3 55.3,33.4 51.4,31.8 55.3,30.2\" fill=\"var(--sparkle-gold)\" opacity=\"0.95\" style=\"animation-delay:calc(1.61s + var(--instance-dly, 0s))\" />" +
        "<polygon class=\"sv-sparkle\" points=\"141,41 142.5,44.5 146,46 142.5,47.5 141,51 139.5,47.5 136,46 139.5,44.5\" fill=\"var(--sparkle-pink)\" opacity=\"0.9\" style=\"animation-delay:calc(0.07s + var(--instance-dly, 0s))\" />" +
        "<g class=\"sv-glow-shape\" style=\"transform-origin:100px 43px\">" +
        "<circle cx=\"76\" cy=\"39\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<circle cx=\"90\" cy=\"31\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<circle cx=\"78\" cy=\"41\" r=\"5\" fill=\"var(--sp-berry-fill5)\" />" +
        "<circle cx=\"102\" cy=\"41\" r=\"5\" fill=\"var(--sp-berry-fill5)\" />" +
        "<circle cx=\"104\" cy=\"39\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<circle cx=\"118\" cy=\"50\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<circle cx=\"132\" cy=\"62\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "</g>" +
        "<path d=\"M 76 104 Q 81 76, 76 48\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"4\" stroke-linecap=\"round\" />" +
        "<path d=\"M 90 104 Q 95 71, 90 38\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"-3\" stroke-linecap=\"round\" />" +
        "<path d=\"M 104 104 Q 109 76, 104 48\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 118 104 Q 123 80.5, 118 57\" fill=\"none\" stroke=\"var(--sp-berry-stroke1)\" stroke-width=\"-5\" stroke-linecap=\"round\" />" +
        "<path d=\"M 62 82 C 61.1 80.7, 58.5 76, 62 69 C 65.5 76, 62.9 80.7, 62 82 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(34 62 82)\" />" +
        "<line x1=\"62\" y1=\"80.4\" x2=\"62\" y2=\"70.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 62 82)\" />" +
        "<path d=\"M 78 82 C 77.1 80.7, 74.5 76, 78 69 C 81.5 76, 78.9 80.7, 78 82 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(-34 78 82)\" />" +
        "<line x1=\"78\" y1=\"80.4\" x2=\"78\" y2=\"70.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 78 82)\" />" +
        "<path d=\"M 114 82 C 113.1 80.7, 110.5 76, 114 69 C 117.5 76, 114.9 80.7, 114 82 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(-34 114 82)\" />" +
        "<line x1=\"114\" y1=\"80.4\" x2=\"114\" y2=\"70.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(-34 114 82)\" />" +
        "<path d=\"M 130 82 C 129.1 80.7, 126.5 76, 130 69 C 133.5 76, 130.9 80.7, 130 82 Z\" fill=\"var(--sp-berry-fill4)\" transform=\"rotate(34 130 82)\" />" +
        "<line x1=\"130\" y1=\"80.4\" x2=\"130\" y2=\"70.6\" stroke=\"rgba(8,14,10,.22)\" stroke-width=\"1\" transform=\"rotate(34 130 82)\" />" +
        "<circle cx=\"76\" cy=\"39\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"74.2\" cy=\"37.1\" rx=\"1.9\" ry=\"1.4\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(1.93s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"77.6\" cy=\"40.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(1.93s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"90\" cy=\"31\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"88.2\" cy=\"29.1\" rx=\"1.9\" ry=\"1.4\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.79s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"91.6\" cy=\"32.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.79s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"78\" cy=\"41\" r=\"5\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"76.4\" cy=\"39.3\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.65s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"79.4\" cy=\"42.6\" rx=\"1.5\" ry=\"1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.65s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"102\" cy=\"41\" r=\"5\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"100.4\" cy=\"39.3\" rx=\"1.7\" ry=\"1.2\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(2.33s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"103.4\" cy=\"42.6\" rx=\"1.5\" ry=\"1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(2.33s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"104\" cy=\"39\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"102.2\" cy=\"37.1\" rx=\"1.9\" ry=\"1.4\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.29s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"105.6\" cy=\"40.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.29s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"118\" cy=\"50\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"116.2\" cy=\"48.1\" rx=\"1.9\" ry=\"1.4\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.36s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"119.6\" cy=\"51.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.36s + var(--instance-dly, 0s))\" />" +
        "<circle cx=\"132\" cy=\"62\" r=\"5.7\" fill=\"var(--sp-berry-fill5)\" />" +
        "<ellipse class=\"sv-shine\" cx=\"130.2\" cy=\"60.1\" rx=\"1.9\" ry=\"1.4\" fill=\"rgba(255,255,255,.32)\" style=\"animation-delay:calc(0.62s + var(--instance-dly, 0s))\" />" +
        "<ellipse class=\"sv-shade\" cx=\"133.6\" cy=\"63.8\" rx=\"1.7\" ry=\"1.1\" fill=\"rgba(12,6,20,.20)\" style=\"animation-delay:calc(0.62s + var(--instance-dly, 0s))\" />" +
        "</g>"
    )
  ]
});
