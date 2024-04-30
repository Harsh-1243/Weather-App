let btn = document.querySelector("button");

let baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=new york&appid=16414a134279fddd6a2d4d8b4bd4afb0`;


btn.addEventListener("click",async()=>{

    await fetch(baseUrl).then(async(res)=>{
         
        console.log("this is response", res);

        await res.json().then((values)=>{

            console.log("this is value",values);

        }).catch((valuesError)=>{

            console.log("this is valueError", valuesError);

        })
        
    }).catch((err)=>{

        console.log("this is err",err);
        
    })
})

