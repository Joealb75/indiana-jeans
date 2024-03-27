// Set up the transient state data structure and provide initial values
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) =>{
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) =>{
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}

// Function to convert transient state to permanent state --- POST

export const saveSurveySubmission = async () => {
    // These 3 things need to be on EVERY postoptions object for EVERY POST REQUEST YOU MAKE 
    const postOptions = {
        method: "POST", // POST means Create 
        headers:{"Content-Type": "application/json"}, // The key needs to be a str because it has a "-" in it 
        body: JSON.stringify(transientState) // The data sent needs to be inside the body of the postOptions and HAS TO BE A STR
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions) // This isn't a GET request so we need  // to put postOptions as the 2nd argument

    const customEvent = new CustomEvent('newSubmissionCreated')
    document.dispatchEvent(customEvent)
}                                                                                   
