

    document.getElementById("submit").addEventListener("click", function(){
        console.log("Button clicked");
        const genre = document.getElementById("genre").value;
        const type = document.getElementById("type").value;
        const day = document.getElementById("day").value;
        const drink = document.getElementById("drink").value;

        let recommendation = "";

        if(genre === "Fantasy"){
            if(day === "Forest" && type === "Series"){
                recommendation = "You should try Once Upon a Broken Heart by Stephanie Garber";
            }else if (drink === "Wine" || type === "Standalone"){
                recommendation = "You should try The Song of Achilles by Madeline Miller";
            }else{
                 recommendation = "You should try Fourth Wing by Rebecca Yarros"
            }

        }else if(genre === "Dystopian"){
            if(day === "Government" && type === "Series"){
                recommendation = "You should try the Divergent series by Veronica Roth"
            }else if(drink === "Juice" || type === "Standalone"){
                recommendation = "You should try The Ballad of Songbirds and Snakes by Suzanne Collins"
            }else{
                recommendation = "You should try The Cure by K.A. Riley"
            }
        }else if(genre === "Thriller"){
            if(day === "Detective" && type === "Standalone"){
                recommendation = "You should try The Perfect Marriage by Jeneva Rose"
            }else if(drink === "Coffee" || type === "Series"){
                recommendation = "You should try The Housemaid by Freida McFadden"
            }else{
                recommendation = "You should try The Last Mrs.Parrish by Liv Constantine"
            }
        }else if (genre ==="Romance"){
            if(day === "Beach" && type === "Standalone"){
                recommendation = "You should try Happy Place by Emily Henry";
            }else if(drink === "Latte" || type === "Series"){
                recommendation = "You should try The Selection by Kierra Cass";
            }else{
                recommendation = "You should try Love and Other Words by Christina Laura";
            }

        }

        if(!recommendation){
            recommendation = "Unfortunately we cannot find a recommendation based on your choices! Please try again :)"
        }

        document.getElementById("recommendation").textContent = recommendation;
    });
