import { setOwnsBlueJeans } from "./TransientState.js"
/*

    Responsibility: Provide UI controls for survey taker to choose 
        'yes' or 'no' for ownership of blue jeans 

    Strategy: 
        1. A component functuon that produces HTML for two radio (o)
            buttons for 'yes' and 'no' 
*/

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "ownsJeans") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
        }
    }


export const OwnJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    // This creates 2 input fields // if the names arent the same the you will be able to select both options 
    let html = "<h2>Do You Own A Pair Of Blue Jeans?</h2>"
        html += "<input type='radio' name='ownsJeans' value = 'true'/> Yes, I own Blue Jeans "
        html += "<input type='radio' name='ownsJeans' value = 'false'/> No, I Don't own Blue Jeans "
     return html
}