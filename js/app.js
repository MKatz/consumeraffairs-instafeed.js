$(document).ready(function() {
    //API called when search button clicked
    $('#search').on('click', function(e) {
        //clears ig-div
        var imgDiv = $('.ig-div');
        imgDiv.remove();
        //clears HTML for each new load
        $('#instafeed').html("");
        //search value entered
        var searchValue = $('#search-input').val();
        //API call
        var feed = new Instafeed({
            get: 'tagged',
            tagName: 'consumeraffairs',
            clientId: '4400571e47ce4c69812827874dca620a'
        });
        feed.run();
    });
});
