let sizechartbtn = document.querySelector('.sizeshow')
let cancelbtn = document.querySelector('.img2222')
sizechartbtn.addEventListener("click", () => {
    document.querySelector('.sizecharty').style.display = 'block';
})
cancelbtn.addEventListener("click", () => {
    document.querySelector('.sizecharty').style.display = 'none';
})

document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="image"]');
    const displayedImage = document.getElementById('imgg');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            displayedImage.src = this.value + '.jpg';
        });
    });
});
let sizes = document.querySelectorAll('.sizz');
let pinkbtn = document.querySelector('.pink');
let whitebtn = document.querySelector('.white');
sizes.forEach(size => {
    size.addEventListener("click", () => {
        sizes.forEach(s => s.style.backgroundColor = '');
        size.style.backgroundColor = '#ff3e6c';
        size.style.border = 'none';
        console.log("btn enabled");
        pinkbtn.disabled = false;
        whitebtn.disabled = false;
    });
});
pinkbtn.addEventListener("click", () => {
        pinkbtn.innerHTML = "Added to bag";
        pinkbtn.disabled = true;
});
whitebtn.addEventListener("click", ()=>{
    whitebtn.innerHTML="Added to wishlist";
    whitebtn.disabled = true;
})
