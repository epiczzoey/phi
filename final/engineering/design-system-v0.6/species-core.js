/*
  습관 씨앗 정원 — species 코어(공통 헬퍼) v2.1
  ------------------------------------------------------------
  이 파일은 species.js 로더가 10개의 species/*.js 데이터 조각을 모두 불러온 "다음"에
  실행됩니다. window.__gsSpeciesRegistry(각 species/*.js가 push해 둔 배열)를 그대로
  GardenSpecies.LIST로 사용하므로, API와 동작은 예전 단일 파일 species.js(v2)와 100% 동일합니다.
  → 이 파일을 직접 고칠 일은 거의 없습니다. 종을 추가/수정하려면 species/*.js를 고치세요.
*/
(function (global) {
  'use strict';

  var STAGES = ["seed", "sprout", "small", "big", "bloom"];
  var STAGE_LABEL = { "seed": "씨앗", "sprout": "새싹", "small": "묘목(소)", "big": "묘목(대)", "bloom": "만개" };
  var STAGE_RANGE = { "seed": "0~2회", "sprout": "3~6회", "small": "7~13회", "big": "14~29회", "bloom": "30회+" };

  var SPECIES = global.__gsSpeciesRegistry || [];

  var byKey = {};
  SPECIES.forEach(function (s) { byKey[s.key] = s; });

  // stageIndex(totalCare) — 기존 growthStage() 로직과 동일한 임계값(3/7/14/30)
  var GROWTH_THRESHOLDS = [3, 7, 14, 30];
  function stageIndexFromCare(totalCare) {
    var t = GROWTH_THRESHOLDS;
    if (totalCare >= t[3]) return 4;
    if (totalCare >= t[2]) return 3;
    if (totalCare >= t[1]) return 2;
    if (totalCare >= t[0]) return 1;
    return 0;
  }

  // 190x116 캔버스 기준 좌표를 그대로 사용해 <svg>로 감싼다. class는 prototype의 .plant-svg 스타일을 그대로 재사용.
  function renderStageSvg(speciesKey, stageIndex, opts) {
    var sp = byKey[speciesKey] || SPECIES[0];
    var idx = Math.max(0, Math.min(4, stageIndex));
    var cls = (opts && opts.className) || 'plant-svg';
    return '<svg class="' + cls + '" viewBox="0 0 190 116" aria-hidden="true">' + sp.stages[idx] + '</svg>';
  }

  function speciesByKey(key) { return byKey[key] || null; }
  function randomSpeciesKey() { return SPECIES[Math.floor(Math.random() * SPECIES.length)].key; }

  global.GardenSpecies = {
    STAGES: STAGES,
    STAGE_LABEL: STAGE_LABEL,
    STAGE_RANGE: STAGE_RANGE,
    LIST: SPECIES,
    byKey: speciesByKey,
    stageIndexFromCare: stageIndexFromCare,
    renderStageSvg: renderStageSvg,
    randomKey: randomSpeciesKey
  };
})(window);
