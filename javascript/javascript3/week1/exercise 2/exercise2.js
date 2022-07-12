

const api_url = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number`

async function getInformation(){
 const response = await fetch(api_url);
 const data = await response.json();
console.log(data);
}
getInformation()