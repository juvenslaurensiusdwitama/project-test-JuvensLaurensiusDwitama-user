const api = 'https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at'
fetch(api)
 .then(data => data.json())
 .then(result => console.log(result.file))


