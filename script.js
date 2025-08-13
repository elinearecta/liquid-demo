(async () => {
  const engine = new liquidjs.Liquid();

  // API ophalen
  const res = await fetch('https://api.genderize.io?name=peter');
  const posts = await res.json();

  const tpl = await fetch('template.liquid').then(r => r.text());

  const html = await engine.parseAndRender(tpl, {
    user: { name: 'eline' },
    posts
  });

  document.getElementById('app').innerHTML = html;
})();
