import { OwnJeansChoices } from "./OwnsJeans.js"
import { GetCurrentData } from "./Submissions.js"
import { SaveSubmission } from "./saveSubmission.js"
import { LocationTypeChoices } from "./urbanDweller.js"
const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const saveButtonHTML = await SaveSubmission()
    const currentDataHTML = await GetCurrentData()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${saveButtonHTML} 
    ${currentDataHTML}                  
     `
    

}

document.addEventListener('newSubmissionCreated', render)

render()