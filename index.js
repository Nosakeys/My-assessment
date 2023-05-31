let url = "https://randomuser.me/api/"

const main = document.querySelector('#main')
const picture = document.querySelector("#img")
const title = document.querySelector("#title")
const fullName = document.querySelector("#fullname")
const phoneNumber = document.querySelector("#PN")
const emailAddress = document.querySelector("#email")
const gender = document.querySelector("#gender")
const streetAddress = document.querySelector("#street")


const getUser =()=>{
    fetch(url).then((response) =>{
        return response.json()
    }).then(data => {
        console.log(data);
        picture.src = `${data.results[0].picture.medium}`
        title.textContent += ` ${data.results[0].name.title}`
        fullName.textContent += `${data.results[0].name.first}` + " "
        fullName.textContent += `${data.results[0].name.last}`
        phoneNumber.textContent += `${data.results[0].phone}`
        emailAddress.textContent +=`${data.results[0].email}`
        gender.textContent += `${data.results[0].gender}`
        streetAddress.textContent +=`${data.results[0].location.city}`
        
    })
}

getUser()

console.log(data);