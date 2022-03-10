function selectUsers(genero='female') {
    var url = "https://randomuser.me/api?gender="+genero+"&&results=10";
    display.innerHTML=""   //borra el lienzo
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
          var personas=data.results
          console.log(personas);  
            for (var persona of personas){
              var registro=`<tr>
              <td>${persona.name.first} ${persona.name.last}</td>
              <td> <img src='${persona.picture.thumbnail}'></td>
              <td>${persona.email}</td>
              <td>${persona.location.coordinates.latitude}</td>
              <td>${persona.location.coordinates.longitude}</td>
              </tr>`;
              display.innerHTML+=registro
            }
            
        return data;
      })
      .catch(function (err) {
        console.log("Lo siento, hay un error", err);
      });    
}
selectUsers('female')