import { saveSurveySubmission } from "./TransientState.js"

const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}


export const SaveSubmission = async () => {

    document.addEventListener("click", handleSurveySubmissionClick)

    return `
    <h3>Submit Your Survey</h3>
    <button id='saveSubmission'>SaveSubmission</button>`
}