let menuBtn = document.querySelectorAll(".icon");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.main-header');
    const bg_div = document.querySelector('.bg');
    const isScrolled = window.scrollY > 50;
    nav.classList.toggle('nav-scrolled', isScrolled);
    nav.classList.toggle('nav-default', !isScrolled);

});



let name = document.querySelector('.name');
let citys = document.querySelector('.city');
let container = document.querySelector('.container');
let Updatetime = document.querySelector('.Updatetime');





async function GetCity() {
    data = await fetch("https://fhy.wra.gov.tw/Api/v2/Basic/City?$top=23").then(response => response.json());
    console.log(data);
    Updatetime.textContent += data.UpdataTime;
    data.Data.forEach(item => {
        let cityDiv = document.createElement('div');
        cityDiv.textContent = item.Name.zh_TW;
        container.appendChild(cityDiv);

        cityDiv.classList.add('grid-item');
    })

}


GetCity()
