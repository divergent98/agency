import React, { useState } from 'react';


const items = [
  {
    src: 'https://images.unsplash.com/photo-1505881402582-c5bc11054f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60',
    altText: 'Slide 1',
    caption: 'Maldives',
    price: '999€',
    key: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWd5cHR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60',
    altText: 'Slide 2',
    caption: 'Egypt',
    price: '235€',
    key: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1610052994939-f4fd8813caad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdW5hdGluc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60',
    altText: 'Slide 3',
    caption: 'Switzerland',
    price: '789€',
    key: 3,
  },
];

export const MyCarousel = () => {
  return (
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active img"  style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1505881402582-c5bc11054f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60")` 
    }}>
      <h1>NASLOV</h1>
      <h3>podnaslov</h3>
      <button>See more...</button>
    </div>
    <div class="carousel-item img"  style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWd5cHR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60")` 
    }}>
    </div>
    <div class="carousel-item img"  style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1610052994939-f4fd8813caad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdW5hdGluc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1600&q=60")` 
    }}>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
)
}
