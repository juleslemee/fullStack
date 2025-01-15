(function(){
    let idConteneurs = new Array();

    window.addEventListener("load"  , prepareContainers);
    window.addEventListener("resize", writeWidth);

    function prepareContainers() {
        let conteneurs = document.querySelectorAll("div[class*='container']");

        for(cont of conteneurs) {
            idConteneurs.push(cont.id);
        }

        let conteneur;
        let spanCategorie;
        let h1Segment;

        for(id of idConteneurs) {
            conteneur = document.getElementById(id);
            spanCategorie   = document.createElement("span");
            spanCategorie.textContent = conteneur.className;
            h1Segment       = document.createElement("h1");
            h1Segment.textContent = conteneur.offsetWidth + " px";
            conteneur.appendChild(spanCategorie);
            conteneur.appendChild(h1Segment);
       }

        window.addEventListener("load"  , writeWidth);
    }

    function writeWidth(){
        let conteneur;
        for(id of idConteneurs) {
            conteneur = document.getElementById(id);
            conteneur.firstChild.nextSibling.textContent = conteneur.offsetWidth + " px";
       }
    }
})();


