async function getGitHubData(){
    try {
        const username = document.getElementById("buscar");
        const usernameValue = username.value;
        if (usernameValue.length > 0){
            const response = await fetch(
                `https://api.github.com/users/${usernameValue}`
            );
            if (response.status !== 404){
                const data = await response.json();
                username.value = "";
                const nombreUsuario = document.getElementById("nombre-usuario");
                nombreUsuario.innerText = data.name === null ? `@${data.login}` : data.name;
        
                const fechaCreado = document.getElementById("fecha");
                const anio = data.created_at.substring(0,4);
                const mes = data.created_at.substring(5,7);
                let mesString = "";
                switch(mes){
                    case "01":
                        mesString = "Jan";
                        break;
                    case "02":
                        mesString = "Feb";
                        break;
                    case "03":
                        mesString = "Mar";
                        break;
                    case "04":
                        mesString = "Apr";
                        break;
                    case "05":
                        mesString = "May";
                        break;
                    case "06":
                        mesString = "Jun";
                        break;
                    case "07":
                        mesString = "Jul";
                        break;
                    case "08":
                        mesString = "Aug";
                        break;
                    case "09":
                        mesString = "Sep";
                        break;
                    case "10":
                        mesString = "Oct";
                        break;
                    case "11":
                        mesString = "Nov";
                        break;
                    case "12":
                        mesString = "Dec";
                        break;
                    default:
                        break;
                }
                const dia = data.created_at.substring(8,10);
                fechaCreado.innerText = `Joined ${dia} ${mesString} ${anio}`;
        
                const usuario = document.getElementById("usuario");
                usuario.innerText = `@${data.login}`;

                let biografia = document.getElementById("biografia");
                if (data.bio !== null && data.bio.length < 30){
                    biografia.innerText = data.bio;
                }else{
                    biografia.innerText = data.bio === null ? "This profile has not bio" : `${data.bio.substring(0, 46)}...`;
                }
        
                const repos = document.getElementById("numero-repositorios");
                repos.innerText = data.public_repos;
        
                const numeroSeguidores = document.getElementById("numero-seguidores");
                numeroSeguidores.innerText = data.followers;
        
                const numeroSiguiendo = document.getElementById("numero-siguiendo");
                numeroSiguiendo.innerText = data.following;
        
                const ubicacion = document.getElementById("ubicacion");
                ubicacion.innerText = data.location === null ? "Not found" : data.location;
        
                const twitter = document.getElementById("twitter");
                twitter.innerText = data.twitter_username === null ? "Not found" : data.twitter_username;
        
                const paginaWeb = document.getElementById("pagina-web");
                paginaWeb.innerText = data.blog === "" ? "Not found" : data.blog;
        
                const contratable = document.getElementById("trabajo");
                contratable.innerHTML = data.hireable === null ? "Not found" : data.hireable;

                const imagen = document.getElementById("imagen-usuario");
                imagen.setAttribute("src", `${data.avatar_url}`);
            }
        }
    } catch (error) {
        alert("error: ", error);
    }
}