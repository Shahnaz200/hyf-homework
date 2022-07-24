function DogNameList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })}
   
   DogNameList()
   
   .then(() => {
       const URL = "https://ghibliapi.herokuapp.com/people";
       const list = document.getElementById("myList");
       list.innerHTML = "<p>Loading...";
       fetch(URL)
         .then((response) => response.json())
         .then((people) => list.innerHTML = getListOfNames(people));
       const getListOfNames = (people) => {
         const names = people
           .map((person) => `<li>${person.name}</li>`)
           .join("\n");
           console.log(people);
       return `<ul>${names}</ul>`;
       };    

    })
   
   
   
   