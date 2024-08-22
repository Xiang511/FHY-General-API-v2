let name = document.querySelector('.name');
let citys = document.querySelector('.city');

        fetch("https://fhy.wra.gov.tw/Api/v2/Basic/Basin?$top=15")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            data.Data.forEach(item => {       
                name.innerHTML += item.Name.zh_TW + '<br>';
                // console.log(item.Name.zh_TW);
            });
        });


        let city = []

        async function GetCity(){
            data  = await fetch("https://fhy.wra.gov.tw/Api/v2/Basic/City?$top=22").then(response => response.json());  
           console.log(data);
           data.Data.forEach(item => {
                city.push({
                     id: item.Code,
                     name: item.Name.zh_TW
           })
            citys.innerHTML += item.Name.zh_TW + '<br>';
        }
        )
        }
        
        GetCity()
        console.log(city);