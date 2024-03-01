const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');
let selectedCategory = 1000;


const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    fetch(url)
        .then(res => res.json())
        .then(({data}) =>
        
        {
            console.log(data)
            data.forEach(card => {
                const newBtn = document.createElement('button')
                newBtn.className = 'btn btn-ghost bg-slate-700 text-white text-lg'
                newBtn.innerText  = card.category;

                newBtn.addEventListener('click', ()=>fetchDataByCategories(card.category_id))

                btnContainer.appendChild(newBtn)
                
            }
            )
        }
        
        )
}


const fetchDataByCategories = (categoryID) => {
    // console.log(categoryID)
    selectedCategory = categoryID;
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`
    fetch(url)
    .then(res => res.json())
    .then(({data}) => {
        console.log(data)
        cardContainer.innerHTML = '';

        data.forEach(video => {
            const newCard = document.createElement('div')
            
            newCard.innerHTML = `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img id="banner" 
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="flex p-8 gap-4">
            
            <div id="profile-contianer">
                <img id="profile-pic" class="w-12 h-12" src="images/Icon.png" alt="">
            </div>

            <div id="card-text-contianer">
                <h2 id="title" class="text-2xl font-bold">Laught At my Pain</h2>
            
                <div class="flex gap-4 items-center">
                    <p id="author" class="">Author Name</p>
                    <div id="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                          </svg>
                          
                    </div>
                </div>
                <p><span id="views">100</span>K views</p>
            </div>

          </div>
        </div>
            `

            cardContainer.appendChild(newCard);
        }
        )
    })
}

fetchCategories();
fetchDataByCategories(selectedCategory);