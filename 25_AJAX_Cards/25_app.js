let getPerson = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            preparePersonCard(person);
        }
    });
};

setInterval(getPerson,1000);

// Prepare the Card
let preparePersonCard = (person) => {
    let personCard = `<div class="col-md-8 m-auto">
                        <div class="card m-3 animated zoomIn">
                            <div class="card-body bg-success p_card ">
                                <div class="row no-gutters align-items-center">
                                    <div class="col-md-4 animated jello">
                                        <img src="${person.picture.large}" class="img-fluid img-thumbnail">
                                    </div>
                                    <div class="col-md-8 animated rubberBand">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                Name : ${person.name.first.toUpperCase()} ${person.name.last.toUpperCase()}
                                            </li>
                                            <li class="list-group-item">
                                                Age : ${person.dob.age} yrs
                                            </li>
                                            <li class="list-group-item">
                                                Email : ${person.email}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#person-row').append(personCard)
};