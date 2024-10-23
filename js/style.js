function gID(id) {
    const element = document.getElementById(id)
    return element
}

async function populateMarks() {
    const requestURL =
        "./json/marks.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const marks = await response.json()

    displayMarks(marks)
}

function displayMarks(marks) {
    const common = gID('markCommon')
    const uncommon = gID('markUncommon')
    const rare = gID('markRare')

    marks.forEach(entry => {
        const card = document.createElement('div')
        card.classList = 'col-lg-2 col-md-4 col-6 mb-3'
        let codeName = entry.name
        card.innerHTML = `<div class="card"><img src="./img/marks/${entry.url}.png" class="card-img-top" alt="${entry.name} Marking Example"><div class="card-body pt-0"><p class="card-text">${entry.name}</p></div></div>`

        if (entry.category == "common") {
            common.appendChild(card)
        } else if (entry.category == "uncommon") {
            uncommon.appendChild(card)
        } else {
            rare.appendChild(card)
        }
    })
}