// get Person
let getPerson = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            displayToCard(person);
        }
    });
};

setInterval(getPerson,1000);


// display data to card
let displayToCard = (person) => {
    let fullName = `${person.name.first.toUpperCase()} ${person.name.last.toUpperCase()}`;
    let imageAddress = `${person.picture.large}`;
    let age = `${person.dob.age}`;
    $('#person-name').text(fullName);
    $('#person-image').attr('src',imageAddress);
    $('#person-age').text(`${age} Yrs`);
};