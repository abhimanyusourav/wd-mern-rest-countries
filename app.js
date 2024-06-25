const myButton = document.querySelector("button")
const myInput = document.querySelector("input")
const myContainer = document.querySelector(".container")

myButton.addEventListener("click", function()
{
    let countryName = myInput.value

    const request = new XMLHttpRequest()
    request.open("GET", `https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    request.send()

    request.onload = function()
    {
        let capitalName = JSON.parse(request.responseText)[0].capital[0]

        const myH2 = document.createElement("h2")
        myH2.textContent = capitalName

        myContainer.append(myH2)
    }
})