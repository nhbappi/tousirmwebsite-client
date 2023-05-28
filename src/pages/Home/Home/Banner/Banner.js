import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://c4.wallpaperflare.com/wallpaper/793/362/569/hallstatter-see-lake-sky-nature-wallpaper-preview.jpg" className="w-full"/>
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <div className='text-white'>
            <h1 className='text-5xl font-bold'>Adventure is worthwhile</h1>
            <p className='text-2xl'>discover new places with us, adventure awaits</p>
             <a href="#" className="btn btn-primary align-content: center">discover more</a>
            </div>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://cutewallpaper.org/21x/pwa7nhr6o/78-Stunning-Landscape-Desktop-Wallpapers-seltars-soup-.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <div className='text-white'>
            <h1 className='text-5xl font-bold'>Adventure is worthwhile</h1>
            <p className='text-2xl'>discover new places with us, adventure awaits</p>
             <a href="#" className="btn btn-primary">discover more</a>
            </div>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full ">
          <img src="https://cutewallpaper.org/21x/pwa7nhr6o/17-Incredible-and-Stunning-HD-Nature-Wallpapers.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <div className='text-white'>
            <h1 className='text-5xl font-bold'>Adventure is worthwhile</h1>
            <p className='text-2xl'>discover new places with us, adventure awaits</p>
             <a href="#" className="btn btn-primary">discover more</a>
            </div>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full ">
          <img src=" https://cutewallpaper.org/21x/pwa7nhr6o/Free-download-amazing-nature-desktop-backgrounds-of-dark-.jpg" className="w-full"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <div className='text-white'>
            <h1 className='text-5xl font-bold'>Adventure is worthwhile</h1>
            <p className='text-2xl'>discover new places with us, adventure awaits</p>
             <a href="#" className="btn btn-primary">discover more</a>
            </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;