let name = document.querySelector('.name');

        fetch("https://fhy.wra.gov.tw/Api/v2/Basic/Basin?$top=15")
        .then(response => response.json())
        .then(data => {
            console.log(data.Data[0].Name.zh_TW);
            name.innerHTML = data.Data[0].Name.zh_TW;
        });
