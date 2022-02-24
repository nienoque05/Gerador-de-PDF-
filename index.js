var pdf = require("html-pdf");


var nomeAutor = "Nicolas Enoque";
var nomeProjeto = "Gerador de PDF com Node Js";
var conteudo = `

<h1 style='color:red'> PDF ESTILIZADO </h1>
<hr>
<p> Autor: ${nomeAutor} </p>
<p> Descrição: ${nomeProjeto}</p>


`

        pdf.create(conteudo,{}).toFile("./pdf.pdf",(err, res)=>{
            if(err){
                console.log("erro")
            }else{
                console.log(res);
            }
        })
 