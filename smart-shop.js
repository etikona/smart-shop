const yourPhone =() =>{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
 console.log(searchFieldText);
 const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`;
//  console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displayPhone(data.data))

    searchField.value = '';
}

const displayPhone = data => {
   const searchPhone = document.getElementById('search-phone');
   data.forEach(phone => {
       console.log(phone);
       const div = document.createElement('div');
       div.classList('col');
   });
}