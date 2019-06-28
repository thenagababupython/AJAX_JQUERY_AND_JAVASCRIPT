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
    let personCard = `<div class="col-md-3 mt-5">
                        <div class="card t_card animated zoomIn">
                            <div class="card-body">
                                <img src="${imageAddress}" class="img-fluid img-thumbnail w-50 rounded-circle t_image animated rotateIn">
                                <h5 class="mt-2">${fullName}</h5>
                                <p class="lead">${age} Yrs</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="p-2">
                                        <i class="fab fa-facebook-f fa-2x"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fab fa-github fa-2x"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fab fa-twitter fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#person-row').append(personCard);
};