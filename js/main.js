let name = document.querySelector('.name');

        fetch("https://fhy.wra.gov.tw/Api/v2/Basic/Basin?$top=15")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.Data.forEach(item => {       
                name.innerHTML += item.Name.zh_TW + '<br>';
                console.log(item.Name.zh_TW);
            });
        });
