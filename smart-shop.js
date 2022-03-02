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
      //  console.log(phone);
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
       <div onclick=" phoneDetails('${phone.slug}')" class="col">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.brand}</h5>
                  <p class="card-text">${phone.phone_name}</p>
                </div>
              </div>
       `;
       searchPhone.appendChild(div);
   });
}
const phoneDetails = phoneId =>{
// console.log(phoneId);
const url =`
https://openapi.programming-hero.com/api/phone/${phoneId}
`;
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
};