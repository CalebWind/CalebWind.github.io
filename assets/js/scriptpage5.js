const loadtext = () => {
  fetch('assets/js/lorem.txt')
  .then(r => r.text() )
  .then (t => document.getElementById('text-output').innerHTML = `<p>${t}</p>`)
};

document.getElementById("show-text").addEventListener("click", loadtext);

