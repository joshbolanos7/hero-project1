function handleGetData (event) { 
    event.preventDefault();

}

$.ajax({
    url:'https://www.superheroapi.com/api.php/4429508337097469/70'
}).then( 
    (data) => { 
        console.log(data);

    },
    (error) => { 
        console.log("That's not suppose to happen: ", error)
    }
)