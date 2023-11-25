


const testDate = (req,res,next)=>{
    let date = new Date();
    let jour = date.getDay()
    let heure = date.getHours()
    if (jour <= 5 && heure<17 && heure > 9){
       
    next()
    }
    res.send('<h1>err</h1>')



    console.log(jour)
    console.log(heure)



  
}

module.expors = testDate 