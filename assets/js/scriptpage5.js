const loadtext = () => {
  fetch('assets/js/lorem.txt')
  .then(r => r.text() )
  .then (t => document.getElementById('text-output').innerHTML = `<p>${t}</p>`)
};

document.getElementById("show-text").addEventListener("click", loadtext);


const loadJson2 = () =>
{

  fetch('./assets/person.json')
  .then(r => r.json() )
  .then (t => {
    let text = "";
    t.forEach(element => {
      text += '<ul>'
      text += `<li>${element.firstName}</li>`
      text += `<li>${element.lastName}</li>`
      text += `<li>${element.emailAddress}</li>`
      text += "</ul>";

    });

    document.getElementById('json-output').innerHTML = text;
  })
}

document.getElementById("do-json").addEventListener("click", loadJson2);

// const sendPHP = () =>
// {
//     const firstName = 'Caleb'
//     const lastName = 'Wind'
//     const params = `firstName=${firstName}&lastName=${lastName}`
//     xhr.open('POST', 'http://kate.ict.op.ac.nz/~orrgl1/server.php', true)
//     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
//     xhr.onload = () =>
//     {
//     if (xhr.status === 200)
//         {
//            console.log(xhr.responseText)
//         }
//     else if (xhr.status === 500)
//         {
//             console.log('Error, internal server error')
//         }
//     }
//     xhr.send(params)
// }

//const sendToServer = () =>