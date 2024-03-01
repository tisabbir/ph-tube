const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');

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
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`
    fetch(url)
    .then(res => res.json())
    .then(({data}) => {
        console.log(data)

        data.forEach(video => {
            const newCard = document.createElement('div')
            
            newCard.innerHTML = `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
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