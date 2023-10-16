const geralBtn = document.getElementById("geral");
const negociosBtn = document.getElementById("negocios");
const esportesBtn = document.getElementById("esportes");
const entretenimentoBtn = document.getElementById("entretenimento");
const tecnologiaBtn = document.getElementById("tecnologia");
const botaoBusca = document.getElementById("botaoBusca");
const consultaNoticias = document.getElementById("consultaNoticias");
const tipoNoticias = document.getElementById("tipoNoticias");
const detalhesNoticias = document.getElementById("detalhesNoticias");

var dadosNoticias = [];

const API_KEY = "399824b232a1497d86b892ff5eb91ef7";
const NOTICIAS_DESTAQUE = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const NOTICIAS_GERAIS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const NOTICIAS_NEGOCIOS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const NOTICIAS_ESPORTES = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const NOTICIAS_ENTRETENIMENTO = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
const NOTICIAS_TECNOLOGIA = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=";
const NOTICIAS_BUSCA = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    tipoNoticias.innerHTML="<h4>Notícias principais</h4>";
    buscarDestaques();
};

geralBtn.addEventListener("click",function(){
    tipoNoticias.innerHTML="<h4>Notícias Gerais</h4>";
    buscarNoticiasGerais();
});

negociosBtn.addEventListener("click",function(){
    tipoNoticias.innerHTML="<h4>Negócios</h4>";
    buscarNoticiasNegocios();
});

esportesBtn.addEventListener("click",function(){
    tipoNoticias.innerHTML="<h4>Esportes</h4>";
    buscarNoticiasEsportes();
});

entretenimentoBtn.addEventListener("click",function(){
    tipoNoticias.innerHTML="<h4>Entretenimento</h4>";
    buscarNoticiasEntretenimento();
});

tecnologiaBtn.addEventListener("click",function(){
    tipoNoticias.innerHTML="<h4>Tecnologia</h4>";
    buscarNoticiasTecnologia();
});

botaoBusca.addEventListener("click",function(){
    tipoNoticias.innerHTML="<h4>Busca: "+consultaNoticias.value+"</h4>";
    buscarNoticiasBusca();
});

const buscarDestaques = async () => {
    const resposta = await fetch(NOTICIAS_DESTAQUE+API_KEY);
    dadosNoticias = [];
    if(resposta.status >=200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {
        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

const buscarNoticiasGerais = async () => {
    const resposta = await fetch(NOTICIAS_GERAIS+API_KEY);
    dadosNoticias = [];
    if(resposta.status >=200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {
   
        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

const buscarNoticiasNegocios = async () => {
    const resposta = await fetch(NOTICIAS_NEGOCIOS+API_KEY);
    dadosNoticias = [];
    if(resposta.status >=200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {

        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

const buscarNoticiasEntretenimento = async () => {
    const resposta = await fetch(NOTICIAS_ENTRETENIMENTO+API_KEY);
    dadosNoticias = [];
    if(resposta.status >=200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {
      
        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

const buscarNoticiasEsportes = async () => {
    const resposta = await fetch(NOTICIAS_ESPORTES+API_KEY);
    dadosNoticias = [];
    if(resposta.status >=200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {
   
        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

const buscarNoticiasTecnologia = async () => {
    const resposta = await fetch(NOTICIAS_TECNOLOGIA+API_KEY);
    dadosNoticias = [];
    if(resposta.status >=200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {
       
        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

const buscarNoticiasBusca = async () => {
    if(consultaNoticias.value == null)
        return;

    const resposta = await fetch(NOTICIAS_BUSCA+encodeURIComponent(consultaNoticias.value)+"&apiKey="+API_KEY);
    dadosNoticias = [];
    if(resposta.status >= 200 && resposta.status < 300) {
        const jsonResposta = await resposta.json();
        dadosNoticias = jsonResposta.articles;
    } else {
      
        console.log(resposta.status, resposta.statusText);
        detalhesNoticias.innerHTML = "<h5>Nenhum dado encontrado.</h5>"
        return;
    }
    mostrarNoticias();
}

function mostrarNoticias() {

    detalhesNoticias.innerHTML = "";

    dadosNoticias.forEach(noticia => {

        var data = noticia.publishedAt.split("T");
        
        var coluna = document.createElement('div');
        coluna.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2 ";

        var imagem = document.createElement('img');
        imagem.setAttribute("height","matchparent");
        imagem.setAttribute("width","100%");
        imagem.src=noticia.urlToImage;

        var corpoCard = document.createElement('div');
        
        var tituloNoticia = document.createElement('h5');
        tituloNoticia.className = "card-title";
        tituloNoticia.innerHTML = noticia.title;

        var dataNoticia = document.createElement('h6');
        dataNoticia.className = "text-primary";
        dataNoticia.innerHTML = data[0];

        var descricao = document.createElement('p');
        descricao.className="text-muted";
        descricao.innerHTML = noticia.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = noticia.url;
        link.innerHTML="Leia mais";
        link.style.position = "absolute";
        link.style.bottom = "0";
        link.style.left = "0";
       
        corpoCard.appendChild(tituloNoticia);
        corpoCard.appendChild(dataNoticia);
        corpoCard.appendChild(descricao);
        corpoCard.appendChild(link);

        card.appendChild(imagem);
        card.appendChild(corpoCard);
        coluna.appendChild(card);

        detalhesNoticias.appendChild(coluna);
    });

}
