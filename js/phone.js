const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = phones => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = '';

  // display show all button if there are more than 12 phones

  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove('hidden');
  } else {
    showAllContainer.classList.add('hidden');
  }


  // display only first 12 phone 
  phones = phones.slice(0,12)

  phones.forEach(phones => {
    // 2 create a div 
    const phoneCard = document.createElement('div');
    phoneCard.classList = "card bg-gray-100  shadow-xl";
    // set inner html
    phoneCard.innerHTML = `
    <figure>
    <img
      src="${phones.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phones.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
    // append child
    phoneContainer.appendChild(phoneCard);
  })
  toggleLoadSpinner(false);
}


// handel search button

const handelSearch = () => {
  toggleLoadSpinner(true);
   const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
   console.log(searchText);
   loadPhone(searchText);

}
const toggleLoadSpinner = (isLoading) => {
  const loadinSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadinSpinner.classList.remove('hidden');
  } else {
    loadinSpinner.classList.add('hidden');
  }
}   


loadPhone();