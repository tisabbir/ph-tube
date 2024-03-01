const btnContainer = document.getElementById('btn-container');

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
    console.log(categoryID)
}

fetchCategories();