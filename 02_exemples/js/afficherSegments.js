(function(){
    let segments = {
        xs : "Écrans 'Extra small' (téléphones en mode portrait,           resolution <  576px)",
        sm : "Écrans 'Small'       (téléphones en mode paysage ,  576px <= resolution <  768px)",
        md : "Écrans 'Medium'      (tablettes                  ,  768px <= resolution <  992px)",
        lg : "Écrans 'Large'       (desktop                    ,  992px <= resolution < 1200px)",
        xl : "Écrans 'Extra Large' (Grands desktop             , 1200px <= resolution         )"
    };

    window.addEventListener("resize", writeScreenSegment);

    function writeScreenSegment(){
        let screenSegment;
        const segment     = document.getElementById("segmentEcran");
        const segmentDesc = document.getElementById("segmentEcranLong");

        if      (window.innerWidth <  576)   screenSegment = "xs";
        else if (window.innerWidth <  768)   screenSegment = "sm";
        else if (window.innerWidth <  992)   screenSegment = "md";
        else if (window.innerWidth < 1200)   screenSegment = "lg";
        else                                 screenSegment = "xl";

        if(segment)     segment.textContent     = screenSegment;
        if(segmentDesc) segmentDesc.textContent = segments[screenSegment];
    }

    window.addEventListener("load", function(){
       //Ajout dynamique du bandeau en haut de l'écran
       let divElement      = document.createElement("div"),
           spanCategorie   = document.createElement("span"),
           h1Segment       = document.createElement("h1"),
           spanSegmentLong = document.createElement("span");

       divElement.id = "affichageSegmentEcran";
       divElement.className = "alert-info";
       spanCategorie.textContent = "Catégorie d'écran :";
       h1Segment.id = "segmentEcran";
       spanSegmentLong.id = "segmentEcranLong";

       divElement.appendChild(spanCategorie);
       divElement.appendChild(h1Segment);
       divElement.appendChild(spanSegmentLong);

       with (divElement.style) {
           zIndex   = "1200";
           position = "fixed";
           minHeight= "100px";
           top      = "-10px";
           left     = "0px";
           right    = "0px";
       }

       document.body.insertBefore(divElement, document.body.firstChild);

       //Laisser de l'espace avant le frère adjacent du div, car en fixed
       document.querySelector("div#affichageSegmentEcran + *").style.marginTop = "130px";

        writeScreenSegment();
    });

})();