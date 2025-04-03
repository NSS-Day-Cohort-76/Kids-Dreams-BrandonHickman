import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kid, celebrities) => {
    return celebrities.find(celebrity => celebrity.id === kid.celebrityId)
}

export const Pairings = () => {

    let pairingsHTML = "<ul>"
    
    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)

        if (kidsStar) {
            pairingsHTML += `<li
                        data-id="${kid.id}"
                        data-type="kid"
                        data-celebrityId="${kid.celebrityId}
                        data-sport="${kidsStar.sport}"
                        data-wish="${kid.wish}"
                        >${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>`
        }
    }

    pairingsHTML += "</ul>"
    
    return pairingsHTML
}

