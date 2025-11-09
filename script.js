let url = 'http://universities.hipolabs.com/search?country='
let country = ''
const tableEl = document.getElementById('table-body')


const saEl = document.getElementById('sa');

saEl.addEventListener('click', async () => {
    if (tableEl != '') {
        tableEl.innerHTML = ''
    }
    url += 'Saudi Arabia'
    const response = await fetch(url)
    const data = await response.json()
    url = 'http://universities.hipolabs.com/search?country='
    loopElement(tableEl, data)
})

const baEl = document.getElementById('ba');
baEl.addEventListener('click', async () => {
    if (tableEl != '') {
        tableEl.innerHTML = ''
    }
    url += 'Bahrain'
    const response = await fetch(url)
    const data = await response.json()
    url = 'http://universities.hipolabs.com/search?country='
    loopElement(tableEl, data)
})

const maEl = document.getElementById('ma');
maEl.addEventListener('click', async () => {
    if (tableEl != '') {
        tableEl.innerHTML = ''
    }
    url += 'Malaysia'
    const response = await fetch(url)
    const data = await response.json()
    url = 'http://universities.hipolabs.com/search?country='
    loopElement(tableEl, data)
})


const submitEl = document.getElementById('ctr')
submitEl.addEventListener('click', () => {
    if (tableEl != '') {
        tableEl.innerHTML = ''
    }
    const inputEl = document.getElementById('srch').value
    url += inputEl
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                window.alert(('Not Available. Try another country!'))
            }
            else {
                loopElement(tableEl, data)
            }
        })

        .catch((err) => {
            console.error("Fetch Error:", err);
        })

    url = 'http://universities.hipolabs.com/search?country='
})



function loopElement(el, data) {
    data.forEach((item) => {
        el.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.country}</td>
                <td>${item.domains[0]}</td>
            </tr>
        `
    })
}