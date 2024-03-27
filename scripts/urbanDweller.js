import { setSocioLocationId } from "./TransientState.js"
 /*
     Since the value of the radio buttons is the string of
     INTs, you must convert the
     string to an actual INT with .parseInt() as seen below
 */

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value) 
        setSocioLocationId(convertedToInt)
    }
}

export const LocationTypeChoices = async () => {

    document.addEventListener("change", handleLocationChange)

    const response = await fetch("http://localhost:8088/socioLocations")
    const Locations = await response.json()

    let choicesHTML = "<h2>What type Of Area Do You Live In</h2>"
    for (const location of Locations) {
        choicesHTML += `<input type='radio' name='location' value = '${location.id}' /> ${location.label}`
    }
    return choicesHTML
}
