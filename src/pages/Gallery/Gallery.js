import React from 'react'
import Hero from  '../../components/Hero'
import GallerySection from  '../../components/GallerySection'


const Gallery = () => {
  return (
    <div>
      <Hero img ="https://live.staticflickr.com/65535/47011153074_e82af0733d_b.jpg" 
            title="Galeria de imagenes"
            subTitle="Galeria de imagenes">
      </Hero>
      <GallerySection></GallerySection>
      
    </div>
  )
}

export default Gallery
