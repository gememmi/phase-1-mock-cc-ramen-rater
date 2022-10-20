// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.


fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramenArray => renderRamenImages(ramenArray))

const ramenImageContainer = document.querySelector("#ramen-menu")

function renderRamenImages(ramenArray){
  ramenArray.forEach(ramen => {
        const image = document.createElement('img')
        image.src = ramen.image
        ramenImageContainer.appendChild(image)
        
        const ramenDetailDiv = document.querySelector('#ramen-detail')
        const ramenName = document.querySelector(".name")
        const detailImage = document.querySelector(".detail-image")
        const restaurantName = document.querySelector(".restaurant")
        const rating = document.querySelector("#rating-display")
        const comment = document.querySelector("#comment-display")

       // Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
        image.addEventListener('click', (event) =>{
            event.preventDefault()
            ramenName.textContent = ramen.name
            detailImage.src = ramen.image
            restaurantName.textContent = ramen.restaurant
            rating.textContent = ramen.rating
            comment.textContent = ramen.comment

            
        })
    })
    const form = document.querySelector('#new-ramen')
    const newName = document.querySelector('#new-name')
    const newRestaurant = document.querySelector("#new-restaurant")
    const newImage = document.querySelector('#new-image')
    const newRating = document.querySelector('#new-rating')
    const newComment = document.querySelector('#new-comment')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const newRamen = {
            name: newName.value,
            image: newImage.value,
            restaurant: newRestaurant.value,
            rating: newRating.value,
            comment: newComment.value
        }
        form.appendChild(newRamen)

    })
}





// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.









