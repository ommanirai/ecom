import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const product_images = useSelector(item => item.item)
  return (
    <div>
      {/* <!-- image slider start --> */}
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {
            product_images.map((imgsrc, index) => {
              return <div class="carousel-item active" height="800px" key={index} >
                <img src={imgsrc.product_image} class="d-block w-50 m-auto" alt={imgsrc.product_image} height="800px" />
              </div>
            })
          }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- image slider end --> */}
    </div>
  )
}

export default Home