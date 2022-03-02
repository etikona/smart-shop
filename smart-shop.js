const yourPhone =() =>{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
//  console.log(searchFieldText);
searchField.value = '';

 const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`;
//  console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displayPhone(data.data.slice(0,20)))

   
}

const displayPhone = data => {
   const searchPhone = document.getElementById('search-phone');
  //  Clear search result
   searchPhone.textContent = '';
   data.forEach(phone => {
      //  console.log(phone);
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
       <div onclick="phoneDetails('${phone.slug}')" class="col">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.brand}</h5>
                  <p class="card-text">${phone.phone_name}</p>
                </div>
              </div>
       `;
      //  console.log(div);
       searchPhone.appendChild(div);
   });
}
const phoneDetails = phoneId =>{
// console.log(phoneId);
const url =`
https://openapi.programming-hero.com/api/phone/${phoneId}
`;
// console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displayPhoneDetails(data.data))
};

const displayPhoneDetails = phones =>{
  // console.log(phones);
  const phoneDetail = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${phones.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phones.name}</h5>
    <p class="card-text">${phones.mainFeatures.storage}</p>
    <a href="${phones.mainFeatures.sensors}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  phoneDetail.appendChild(div);

}