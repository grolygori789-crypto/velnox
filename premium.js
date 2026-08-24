(() => {
  'use strict';

  const VERSION = '1.7.1';
  const TEXT = {
    en: {
      testing: 'Testing in progress',
      usually: 'Usually about 1 minute',
      finalizing: 'Finalizing analysis…',
      estimated: 'ESTIMATED',
      step: n => `Step ${n} of 4`
    },
    th: {
      testing: 'กำลังทดสอบการเชื่อมต่อ',
      usually: 'โดยทั่วไปใช้เวลาประมาณ 1 นาที',
      finalizing: 'กำลังสรุปผลการวิเคราะห์…',
      estimated: 'โดยประมาณ',
      step: n => `ขั้นตอน ${n} จาก 4`
    }
  };

  const lang = () => document.documentElement.lang.toLowerCase().startsWith('th') ? 'th' : 'en';
  const t = key => TEXT[lang()][key];

  function detectContainer() {
    const ua = navigator.userAgent || '';
    const inApp = /FBAN|FBAV|Instagram|Line\/|MicroMessenger|wv\)|; wv\b|HelloTalk/i.test(ua);
    const installed = matchMedia?.('(display-mode: standalone)')?.matches || matchMedia?.('(display-mode: fullscreen)')?.matches || navigator.standalone === true;
    document.documentElement.dataset.velnoxContainer = installed ? 'installed' : inApp ? 'in-app' : 'browser';
  }

  function ensureTestProgress() {
    const testView = document.getElementById('testView');
    const stages = testView?.querySelector('.stage-progress');
    if (!testView || !stages) return null;
    let panel = document.getElementById('premiumTestProgress');
    if (panel) return panel;
    panel = document.createElement('section');
    panel.id = 'premiumTestProgress';
    panel.className = 'premium-test-progress';
    panel.setAttribute('aria-live', 'polite');
    panel.innerHTML = `
      <div class="premium-progress-copy">
        <div><strong id="premiumProgressStatus"></strong><small id="premiumProgressStep"></small></div>
        <span id="premiumProgressEta"></span>
      </div>
      <div class="premium-progress-track" role="progressbar" aria-label="Test progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="8">
        <i id="premiumProgressBar"></i>
      </div>`;
    stages.insertAdjacentElement('afterend', panel);
    return panel;
  }

  function updateTestProgress() {
    const panel = ensureTestProgress();
    if (!panel) return;
    const items = [...document.querySelectorAll('#testView .stage-item')];
    let idx = items.findIndex(el => el.classList.contains('active'));
    if (idx < 0) idx = Math.max(0, items.filter(el => el.classList.contains('done')).length);
    idx = Math.min(3, idx);
    const progress = [10, 38, 68, 94][idx];
    const status = document.getElementById('premiumProgressStatus');
    const step = document.getElementById('premiumProgressStep');
    const eta = document.getElementById('premiumProgressEta');
    const track = panel.querySelector('.premium-progress-track');
    const bar = document.getElementById('premiumProgressBar');
    if (status) status.textContent = idx === 3 ? t('finalizing') : t('testing');
    if (step) step.textContent = t('step')(idx + 1);
    if (eta) eta.textContent = idx === 3 ? '' : t('usually');
    if (track) track.setAttribute('aria-valuenow', String(progress));
    if (bar) bar.style.setProperty('--premium-progress', `${progress}%`);
    panel.dataset.stage = String(idx);
  }

  function transformBenchmarkHero() {
    const host = document.getElementById('compareContent');
    const hero = host?.querySelector('.benchmark-rank-hero');
    if (!hero || hero.dataset.premium === '1') return;
    const top = hero.querySelector('.benchmark-top');
    const copy = hero.querySelector('.benchmark-copy');
    const indexLabel = top?.querySelector(':scope > span');
    const rank = top?.querySelector(':scope > strong');
    const score = top?.querySelector(':scope > small');
    const freshness = copy?.querySelector('.benchmark-freshness');
    if (!top || !copy || !indexLabel || !rank || !score) return;

    const rankText = rank.textContent.trim();
    const match = rankText.match(/(<\s*1|\d+)\s*%/i);
    if (!match) return;
    const value = match[1].replace(/\s+/g, '');

    hero.dataset.premium = '1';
    const head = document.createElement('div');
    head.className = 'premium-benchmark-head';
    const title = document.createElement('span');
    title.className = 'premium-benchmark-title';
    title.textContent = indexLabel.textContent.trim();
    head.append(title);
    if (freshness) head.append(freshness);

    const body = document.createElement('div');
    body.className = 'premium-benchmark-body';
    const rankWrap = document.createElement('div');
    rankWrap.className = 'premium-rank-wrap';
    hero.insertBefore(head, hero.firstChild);
    hero.append(body);
    body.append(rankWrap, copy);
    rankWrap.append(top);
    indexLabel.remove();

    rank.textContent = '';
    const estimate = document.createElement('em');
    estimate.className = 'premium-rank-estimate';
    estimate.textContent = t('estimated');
    const word = document.createElement('span');
    word.className = 'premium-rank-word';
    word.textContent = 'TOP';
    const number = document.createElement('span');
    number.className = 'premium-rank-value';
    number.textContent = `${value}%`;
    rank.append(word, number);
    top.insertBefore(estimate, rank);
    score.textContent = score.textContent.replace(/\s*\/\s*/, ' / ');
    score.classList.add('premium-rank-score');
    rankWrap.append(score);

    const summary = [...copy.children].find(el => el.tagName === 'B');
    if (summary && summary.textContent.includes('•')) {
      const [lead, ...rest] = summary.textContent.split('•').map(s => s.trim()).filter(Boolean);
      const detail = rest.join(' • ');
      summary.textContent = '';
      const leadNode = document.createElement('span');
      leadNode.className = 'premium-summary-kicker';
      leadNode.textContent = lead;
      const detailNode = document.createElement('strong');
      detailNode.className = 'premium-summary-main';
      const pct = detail.match(/(?:<\s*1|\d+)\s*%/);
      if (pct) {
        const before = detail.slice(0, pct.index);
        const after = detail.slice(pct.index + pct[0].length);
        detailNode.append(document.createTextNode(before));
        const emphasis = document.createElement('span');
        emphasis.className = 'premium-summary-emphasis';
        emphasis.textContent = pct[0].replace(/\s+/g, '');
        detailNode.append(emphasis, document.createTextNode(after));
      } else detailNode.textContent = detail;
      summary.append(leadNode, detailNode);
    }
  }

  function polishMetricCards() {
    const icons = ['↓', '↑', '◷', '≈'];
    document.querySelectorAll('.benchmark-metric').forEach((card, idx) => {
      if (card.dataset.premium === '1') return;
      card.dataset.premium = '1';
      card.style.setProperty('--metric-icon', `"${icons[idx] || '•'}"`);
    });
  }

  function enhanceCompare() {
    transformBenchmarkHero();
    polishMetricCards();
  }

  function bindObservers() {
    const stages = document.querySelector('#testView .stage-progress');
    if (stages) {
      const stageObserver = new MutationObserver(updateTestProgress);
      stageObserver.observe(stages, {subtree: true, attributes: true, attributeFilter: ['class', 'style']});
    }
    const compare = document.getElementById('compareContent');
    if (compare) {
      let queued = false;
      const compareObserver = new MutationObserver(() => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => { queued = false; enhanceCompare(); });
      });
      compareObserver.observe(compare, {childList: true, subtree: true});
    }
    const languageObserver = new MutationObserver(() => {
      document.querySelectorAll('.premium-rank-estimate').forEach(node => { node.textContent = t('estimated'); });
      updateTestProgress();
      enhanceCompare();
    });
    languageObserver.observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
  }

  function init() {
    document.documentElement.dataset.velnoxPremium = VERSION;
    detectContainer();
    ensureTestProgress();
    updateTestProgress();
    enhanceCompare();
    bindObservers();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();

  window.VelnoxPremium = Object.freeze({version: VERSION, enhanceCompare, updateTestProgress});
})();
