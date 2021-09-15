// cashed elements
const $appearance = $('#appearance');
const $name = $('#name')
const $biography = $('#biography');
const $powerstats = $('#powerstats');
const $input = $('input[type=text]');
const $mainContent = $('main');
const $image = $('#image');
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
        $name.text(data.results[0].name);
        $biography.text(data.results[0].biography["full-name"]);
        $image.attr('src', data.results[0].image["url"]);

        // $powerstats.text(data.results[0].powerstats);
        // $mainContent.append($img); 

    }
}



$('form').on('submit', handleGetData); 