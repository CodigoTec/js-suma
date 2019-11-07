

function suma() {

    let cantidad = document.querySelector("#cantidad")
    cantidad.addEventListener("change",function (e) {
                   let papa=  parseInt( e.target.value)  ; 


                  let total=0;
                  for (let index = 0; index < papa ; index++) {
       
                        let texto = document.createElement(`input`)
                            texto.setAttribute("type", "number");
                            texto.setAttribute("id", `input${index+1}`);
                        let br = document.createElement(`br`)
                             texto.setAttribute("style", "margin-bottom:20px");
                        
                        let form = document.querySelector("form");
                        form.appendChild(texto); 
                        form.appendChild(br); 
                        
                        let valor = document.querySelector(`#input${index+1}`);
                        
                        valor.addEventListener("change",function (e) {
                    
                            let cabeza = parseInt( e.target.value)   
                            total = total + cabeza
                            console.log(total);
                            let resultado = document.createElement("p")
                            resultado.innerHTML = total ;
                            document.body.appendChild(resultado);
                                return resultado;
                       
                        })

                       
                        
                    
                       
                }




                



               
               

    })

    


}

suma();



