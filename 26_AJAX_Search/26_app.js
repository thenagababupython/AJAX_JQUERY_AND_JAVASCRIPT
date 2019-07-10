let persons = [];

$(document).ready(function() {
    $.ajax({
        method : 'get',
        url : 'https://api.myjson.com/bins/hchkr',
        success : function(data) {
            persons = data;
        }
    });
});

$('#search').keyup(function() {
    let searchKey = $(this).val();
    let selectedPersons = [];
    if(searchKey !== ''){
        selectedPersons = persons.filter((person) => {
            return person.first_name.toUpperCase().startsWith(searchKey.toUpperCase());
        });
    }
    displayPersons(selectedPersons);
});

// Display Persons
let displayPersons = (persons) => {
    let tableRow = '';
    let personCard = '';

    for(let person of persons){
        let id = Math.floor(Math.random() * 90);
        personCard += `<div class="col-md-8 m-auto">
                        <div class="card m-3 animated zoomIn">
                            <div class="card-body bg-success p_card ">
                                <div class="row no-gutters align-items-center">
                                    <div class="col-md-4 animated jello">
                                        <img src="https://randomuser.me/api/portraits/men/${id}.jpg" class="img-fluid img-thumbnail">
                                    </div>
                                    <div class="col-md-8 animated rubberBand">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                Name : ${person.first_name.toUpperCase()} ${person.last_name.toUpperCase()}
                                            </li>
                                            <li class="list-group-item">
                                                Email : ${person.email}
                                            </li>
                                            <li class="list-group-item">
                                                IP ADDRESS : ${person.ip_address}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> \n`;
    }
    $('#person-row').empty().append(personCard)
};