const image = document.getElementById('image');
const icon = document.getElementById('iconImage');

let percent = 0; 
image.onload = function () {
    const interval = setInterval(function () {
        percent += 1;
        icon.textContent = percent + "%";
        image.style.filter = `blur(${10 - percent / 10}px)`;
        if (percent === 100) {
            clearInterval(interval);
            iconImage.classList.add('hidden');
        }
    }, 40);
};

image.src = image.src;





