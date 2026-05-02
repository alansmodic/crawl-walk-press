(function () {
  const STORAGE_KEY = 'cw5k_progress';
  const data = window.cw5kData;
  if (!data || !data.days || !data.days.length) return;

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function getCompletedCount(progress) {
    return data.days.filter(d => progress[d.id]).length;
  }

  // --- Homepage: Progress bar + day checklist ---
  if (data.isHome) {
    buildHomeProgress();
  }

  // --- Day pages: Completion checkbox ---
  const currentDay = data.days.find(d => String(d.id) === String(data.currentId));
  if (currentDay) {
    buildDayCheckbox(currentDay);
  }

  function buildHomeProgress() {
    const progress = getProgress();
    const completed = getCompletedCount(progress);
    const total = data.days.length;
    const pct = Math.round((completed / total) * 100);

    const widget = document.createElement('div');
    widget.className = 'cw5k-progress-widget';
    widget.innerHTML = `
      <div class="cw5k-progress-header">
        <h3>Your Progress</h3>
        <span class="cw5k-progress-count">${completed} / ${total} days</span>
      </div>
      <div class="cw5k-progress-bar-track">
        <div class="cw5k-progress-bar-fill" style="width: ${pct}%"></div>
      </div>
      <p class="cw5k-progress-pct">${pct}% complete${completed === 0 ? ' — start with Day 0!' : ''}</p>
      <div class="cw5k-progress-grid" id="cw5k-grid"></div>
      ${completed > 0 ? '<button class="cw5k-reset-btn" id="cw5k-reset">Reset Progress</button>' : ''}
    `;

    // Insert after the first group (hero section)
    const hero = document.querySelector('.entry-content > .wp-block-group, .wp-block-post-content > .wp-block-group');
    if (hero && hero.nextSibling) {
      hero.parentNode.insertBefore(widget, hero.nextSibling);
    } else {
      const content = document.querySelector('.entry-content, .wp-block-post-content');
      if (content) content.prepend(widget);
    }

    // Build the day grid
    const grid = document.getElementById('cw5k-grid');
    if (!grid) return;

    let currentWeek = '';
    data.days.forEach(day => {
      if (day.week !== currentWeek) {
        currentWeek = day.week;
        const weekLabel = document.createElement('div');
        weekLabel.className = 'cw5k-week-label';
        weekLabel.textContent = day.week;
        grid.appendChild(weekLabel);
      }

      const item = document.createElement('a');
      item.href = day.url;
      item.className = 'cw5k-day-chip' + (progress[day.id] ? ' completed' : '');
      // Extract short label like "Day 0", "Day 1", "Days 28–30"
      const shortLabel = day.title.replace(/:.*/, '').trim();
      item.textContent = shortLabel;
      item.title = day.title;
      grid.appendChild(item);
    });

    // Reset button
    const resetBtn = document.getElementById('cw5k-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (confirm('Reset all progress? This cannot be undone.')) {
          localStorage.removeItem(STORAGE_KEY);
          location.reload();
        }
      });
    }
  }

  function buildDayCheckbox(day) {
    const progress = getProgress();
    const isComplete = !!progress[day.id];
    const completed = getCompletedCount(progress);
    const total = data.days.length;
    const pct = Math.round((completed / total) * 100);

    const box = document.createElement('div');
    box.className = 'cw5k-day-complete-box';
    box.innerHTML = `
      <div class="cw5k-day-progress-mini">
        <div class="cw5k-mini-bar-track">
          <div class="cw5k-mini-bar-fill" style="width: ${pct}%"></div>
        </div>
        <span class="cw5k-mini-count">${completed}/${total}</span>
      </div>
      <label class="cw5k-checkbox-label">
        <input type="checkbox" id="cw5k-done" ${isComplete ? 'checked' : ''}>
        <span class="cw5k-checkmark"></span>
        <span class="cw5k-label-text">${isComplete ? 'Completed!' : 'Mark as complete'}</span>
      </label>
    `;

    // Insert after the day header bar (green bar) or at the top
    const dayHeader = document.querySelector('.entry-content .wp-block-group[style*="background-color:#eef6ee"], .wp-block-post-content .wp-block-group[style*="background-color:#eef6ee"]');
    if (dayHeader && dayHeader.nextSibling) {
      dayHeader.parentNode.insertBefore(box, dayHeader.nextSibling);
    } else {
      const content = document.querySelector('.entry-content, .wp-block-post-content');
      if (content) content.prepend(box);
    }

    const checkbox = document.getElementById('cw5k-done');
    if (!checkbox) return;

    checkbox.addEventListener('change', function () {
      const p = getProgress();
      const label = box.querySelector('.cw5k-label-text');
      if (this.checked) {
        p[day.id] = Date.now();
        label.textContent = 'Completed!';
        box.classList.add('just-completed');
        // Advance to next day after a short delay
        const idx = data.days.findIndex(d => d.id === day.id);
        if (idx < data.days.length - 1) {
          const nextDay = data.days[idx + 1];
          const toast = document.createElement('div');
          toast.className = 'cw5k-next-toast';
          toast.innerHTML = `Nice work! <a href="${nextDay.url}">Continue to ${nextDay.title.replace(/:.*/, '')} →</a>`;
          box.appendChild(toast);
          setTimeout(() => toast.classList.add('visible'), 50);
        }
      } else {
        delete p[day.id];
        label.textContent = 'Mark as complete';
        box.classList.remove('just-completed');
        const toast = box.querySelector('.cw5k-next-toast');
        if (toast) toast.remove();
      }
      saveProgress(p);

      // Update mini progress bar
      const newCompleted = getCompletedCount(p);
      const newPct = Math.round((newCompleted / data.days.length) * 100);
      const fill = box.querySelector('.cw5k-mini-bar-fill');
      const count = box.querySelector('.cw5k-mini-count');
      if (fill) fill.style.width = newPct + '%';
      if (count) count.textContent = newCompleted + '/' + data.days.length;
    });
  }
})();
