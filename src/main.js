import { studies } from './data.js';

function renderBtn(item) {
  if (item.status !== 'ready') {
    return '<span class="btn-disabled">empty</span>';
  }
  const isExt = item.type === 'external';
  const extAttrs = isExt ? ' target="_blank" rel="noopener noreferrer"' : '';
  const extClass = isExt ? ' is-external' : '';
  return `<a class="btn-open${extClass}" href="${item.href}"${extAttrs}>open</a>`;
}

function renderTrack(track, isLast) {
  const branchChar = '└─';

  // Collapsed track (week-level empty)
  if (track.status === 'empty') {
    return `
      <div class="track">
        <div class="track-header">
          <span class="branch">${branchChar}</span>
          <span class="track-name">${track.title}</span>
          <span class="btn-disabled">empty</span>
        </div>
      </div>`;
  }

  // Expanded track with items
  const items = track.items.map((item, i) => {
    const connector = i === track.items.length - 1 ? '└─' : '├─';
    return `
        <li class="item-row">
          <span class="branch">${connector}</span>
          <span class="item-name">${item.title}</span>
          ${renderBtn(item)}
        </li>`;
  }).join('');

  return `
      <div class="track">
        <div class="track-header">
          <span class="branch">${branchChar}</span>
          <span class="track-name">${track.title}</span>
        </div>
        <ul class="item-list">${items}
        </ul>
      </div>`;
}

function renderWeek(week) {
  const tracks = week.tracks
    .map((track, i) => renderTrack(track, i === week.tracks.length - 1))
    .join('');
  return `
    <section class="week">
      <h2 class="week-title">${week.title}</h2>
      ${tracks}
    </section>`;
}

document.getElementById('tree').innerHTML = studies.map(renderWeek).join('');
