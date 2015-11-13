$(document).ready(function() {
        //API call
        var feed = new Instafeed({
            get: 'tagged',
            tagName: 'consumeraffairs',
            clientId: '4400571e47ce4c69812827874dca620a'
        });
        feed.run();
});
