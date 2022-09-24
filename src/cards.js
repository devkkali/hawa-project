var titlearray = ['Programs', 'Classes', 'Subjects', 'Admin', 'Students', 'Result'];

var dynamic = document.querySelector('.cards');
for (var i = 0; i < titlearray.length; i++) {
    var fetch = document.querySelector('.cards').innerHTML;
    dynamic.innerHTML = `<div class="boxes">
                            <div class="heading-cards">
                                <p>${titlearray[i]}</p>
                            </div>
                            <div class="body-cards">
                                <p>
                                    The body of the card will contain the information
                                </p>
                            </div>
                        </div>` + fetch;
}