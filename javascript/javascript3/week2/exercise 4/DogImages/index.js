setInterval(() => {
    let img = document.createElement("img");
    document.body.appendChild(img)
    async function DogsPics() {
     const dogName = await fetch("https://dog.ceo/api/breeds/image/random");
     const dogNameJson = await dogName.json()
     img.src = await dogNameJson.message
    }
    DogsPics()
    }, 3000);
    