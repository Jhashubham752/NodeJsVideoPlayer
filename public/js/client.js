let video = document.querySelectorAll('video');
console.log(video);
[...videos].forEach(video=>{
    console.log(video)
    video.addEventListener('mouseenter',e=>{
        e.target.play()
    },false);
    


})