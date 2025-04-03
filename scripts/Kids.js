import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let kidsHTML = "<ol>"

    for (const child of children) {
        kidsHTML += `<li 
                    data-id="${child.id}" 
                    data-type="child"
                    data-wish="${child.wish}"
                    data-name="${child.name}"
                    >${child.name}</li>`
    }

    kidsHTML += "</ol>"
    return kidsHTML
}

document.addEventListener(
    "click",
    (childClicked) => {
        const childClickedOn = childClicked.target
        
        if (childClickedOn.dataset.type === "child") {
            const childWish = childClickedOn.dataset.wish
            const childName = childClickedOn.dataset.name

            window.alert(`${childName}'s wish is ${childWish}`)
        }
    }
)