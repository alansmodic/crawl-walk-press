(function () {
  document.querySelectorAll('.wp-block-code').forEach(function (block) {
    var btn = document.createElement('button');
    btn.className = 'cw5k-copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy to clipboard');

    btn.addEventListener('click', function () {
      var code = block.querySelector('code');
      if (!code) return;

      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });

    block.style.position = 'relative';
    block.appendChild(btn);
  });
})();
