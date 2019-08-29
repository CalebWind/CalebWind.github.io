const ajaxtxtbtn = document.getElementById('ajax-txt-btn')
const ajaxjsonbtn = document.getElementById('ajax-json-btn')
const ajaxphpbtn = document.getElementById('ajax-php-btn')

const xhr = new XMLHttpRequest()

const loadTxt = () => 
{

    xhr.open('GET', 'lorem.txt', true)
    xhr.onload = () => 
    {

        if(xhr.status === 200)
        {
            console.log(xhr.responseText)
        }
        else if (xhr.status === 404)
        {
            console.log('Error... File Not Found')
        }

    }
    xhr.send()
}

const loadJson = () =>
{
    console.log('Current state:', xhr.readyState)
    xhr.open('GET', 'person.json', true)
    console.log('Current state:', xhr.readyState)

    xhr.onprogress = () =>
    {
        console.log('Current state:', xhr.readyState)
        console.log(xhr.responseText)
    }

    xhr.onload = () =>
    {    
        if (xhr.status === 200) 
         {   
             console.log('Current State:', xhr.readyState)
             console.log(xhr.responseText)
             const person = JSON.parse(xhr.responseText)
             console.log(person)
             person.forEach(p => {
                 const {firstName, lastName} = p
             })
         }
         else if (xhr.status === 404)
         {
             console.log('Error. File not found.')
         }
    

    }
    xhr.send()
}

const sendPHP = () =>
{
    const firstName = 'Caleb'
    const lastName = 'Wind'
    const params = `firstName=${firstName}&lastName=${lastName}`
    xhr.open('POST', 'http://kate.ict.op.ac.nz/~orrgl1/server.php', true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.onload = () =>
    {
    if (xhr.status === 200)
        {
           console.log(xhr.responseText)
        }
    else if (xhr.status === 500)
        {
            console.log('Error, internal server error')
        }
    }
    xhr.send(params)
}

ajaxtxtbtn.addEventListener('click', loadTxt)
ajaxjsonbtn.addEventListener('click', loadJson)
ajaxphpbtn.addEventListener('click', sendPHP)
