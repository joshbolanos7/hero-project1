// cashed elements
const $appearance = $('#appearance');
const $name = $('#name')
const $biography = $('#biography');
const $powerstats = $('#powerstats');
const $input = $('input[type=text]');
const $mainContent = $('main');
const $image = $('#image');
const $intelligence = $('#intelligence');

function handleGetData(event) {
    event.preventDefault();



    // user input 
    userInput = $input.val();

    // set up initial link to api w/ access-token: 4429508337097469
    $.ajax({
        url: 'https://www.superheroapi.com/api.php/4429508337097469/search/' + userInput
    }).then(
        (data) => {
            console.log(data);
            render(data);

        },
        (error) => {
            console.log("That's not suppose to happen: ", error)
        }
    );
    function render(data)  { 
        for(let stat in data.results[0].powerstats) {
            console.log(stat)
            console.log(data.results[0].powerstats[stat])
        }
        $name.text(data.results[0].name);
        $appearance.text(data.results[0].appearance.race)
        $biography.text(data.results[0].biography["full-name"]);
        $powerstats.text(data.results[0].powerstats.power);
        $intelligence.text(data.results[0].powerstats.intelligence);
        $image.attr('src', data.results[0].image["url"]);

        // $mainContent.append($img); 

    }
}



$('form').on('submit', handleGetData); 