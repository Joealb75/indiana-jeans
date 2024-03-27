
    // Get the submissions from your API

    export const GetCurrentData = async () =>{
       const response = await fetch("http://localhost:8088/submissions")
       const convertCurentData = await response.json()

       let html = `
       <h2>Past Submissions</h2>
       <p><b>Area Type Keys:</b><br>
       <b>1:</b> Urban, <b>2:</b> Suburban, <b>3:</b> Semi-Rural, <b>4:</b> Rural </p>
       `
       // Iterate the submissions and create some <section> representations
       for (const newData of convertCurentData) {
            html += `
            <section class = "newData"> 
                <div>Owns Jeans: ${newData.ownsBlueJeans} Area Type: ${newData.socioLocationId}</div>
            </section>
            `
       }
       // Return the HTML string
       return html
   }



