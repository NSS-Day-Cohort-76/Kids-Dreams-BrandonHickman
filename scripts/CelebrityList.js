import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let celebrityHTML = "<ol>"

    for (const celebrity of celebrities) {
        celebrityHTML += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}"
                    >${celebrity.name}
                    
                </li>`
    }

    celebrityHTML += "</ol>"
    return celebrityHTML
}

document.addEventListener(
    "click",
    (celebrityClicked) => {
        const celebrityClickedOn = celebrityClicked.target

        if (celebrityClickedOn.dataset.type === "celebrity") {
            const star = celebrityClickedOn.dataset.sport
            const celebName = celebrityClickedOn.dataset.name

            window.alert(`${celebName} is a ${star} star`)
        }
    }
)