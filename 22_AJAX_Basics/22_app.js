$('#js-ajax-btn').click(function() {

    // AJAX with JS

    // Create a AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://api.myjson.com/bins/ikrpn',true);

    // send the the request
    http.send();

    // access the data
    http.onreadystatechange = function() {
        // reponse is ready and status is OK
        if(http.readyState === 4 && http.status === 200){
            let data = http.responseText;
           let persons = JSON.parse(data);
           displayPersons(persons);
        }
    };
});

// jQuery Way of AJAX
$('#jquery-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/9aeob',
        type : 'JSON',
        success : function(data) {
            let persons = data;
            displayPersons(persons);
        }
    });
});

// Display Persons
let displayPersons = (persons) => {
    let tableRow = '';
    for(let person of persons){
        tableRow += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                    </tr>`;
    }
    $('#table_body').empty().append(tableRow);
};