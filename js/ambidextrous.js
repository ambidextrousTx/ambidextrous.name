/**
 * Created with JetBrains WebStorm.
 * User: ambidextrous
 * Date: 4/21/13
 * Time: 3:43 AM
 * To change this template use File | Settings | File Templates.
 */

var AppRouter = Backbone.Router.extend({
    routes: {
        'About': 'displayAbout',
        'Contact': 'displayContact',
        'Projects': 'showProjects',
        'Research': 'showPublications',
        'Blog': 'linkToBlog',
        'Playground': 'linkToPlayground',
        'Art': 'displayArt',
        'Media': 'showMedia',
        'Fitness': 'getFit',
        'Codelog': 'showCodez'

    },

    displayArt: function() {
        $('#app').html('I recently got started with drawing and sketching on an iPad as well as on the Wacom Bamboo');
    },

    showCodez: function () {
        $('#app').html('Blog entries more focused on coding, refactoring, and the like. <a href="./Codelog/" target="_blank">Link</a>');
    },

    getFit: function () {
        $('#app').html('I have researched and learned from the best resources on the Web. It is still a work in ' +
            'progress. I eat a high protein, high fiber, high-in-greens, low carb, low saturated fat diet. I practice ' +
            'and experiment with traditional weight training, sprints, incline sprints, kettlebells, exercise bands, ' +
            'and metabolic conditioning workouts. More COMING SOON')
    },

    showMedia: function () {
        $('#app').html('Pictures, Photoshop, Photography: COMING SOON')
    },

    displayAbout: function () {
        $('#app').html('Continuing the brief introduction in the byline above, I like to experiment with and learn from' +
            ' all kinds of software programming technologies and physical fitness activies. I am also learning' +
            ' touch typing. This is my new Website built using Backbone JS and HTML5 Boilerplate. This Website or my Tweets are' +
            ' not affiliated to any of my employers, present or past. The purpose of this Website is to showcase' +
            ' some cool stuff I have been learning, and to learn from the process of creating and sharing. The content,' +
            ' style and interactivity are all going to keep evolving as I learn and master new technologies. Stay tuned!'
        );
    },

    displayContact: function () {
        $('#app').html('<p>Shoot me an email at RaviSinha AT my DOT unt DOT edu</p>' +
            '<p>Follow me on Twitter <a href="http://twitter.com/ambidextrousTx" target="_blank">@ambidextrousTx</a></p>' +
            '<p><a href="http://www.vimgolf.com/ambidextrousTx" target="_blank">Me on VimGolf</a></p>' +
            '<p><a href="http://stackexchange.com/users/1142066/ambidextrous?tab=accounts" target="_blank">Me on StackExchange</a></p>' +
            '<p>My Stack Overflow Career <a href="http://careers.stackoverflow.com/cv/employer/141359" target="_blank">profile</a></p>' +
            '<p><a href="https://www.goodreads.com/user/show/9159065-ravi-sinha" target="_blank"><img src="img/GoodReads75.jpg" /></a>' +
            '<a href="https://twitter.com/ambidextrousTx" target="_blank"><img src="img/Twitter75.jpg" /> </a></p>'
        );
    },

    showProjects: function () {
        $('#app').html('See all my repositories on my <a href="http://github.com/ambidextrousTx" target="_blank">GitHub profile</a><br />' +
            'See all my repositories on my <a href="https://bitbucket.org/dashboard/overview" target="_blank">BitBucket profile</a> ');
    },

    showPublications: function () {
        $('#app').html('Here is a list of all my <a href="http://scholar.google.com/citations?user=7gfF6KkAAAAJ&hl=en" target="_blank">publications</a> on Google Scholar');
    },

    linkToBlog: function () {
        $('#app').html('<a href="http://darknightelf.wordpress.com" target="_blank">External link</a> to my blog on WordPress');
    },

    linkToPlayground: function () {
        $('#app').html('Here I will showcase some random experimental Web design concepts that I am currently playing with')
    }

});

var app = new AppRouter();

$(function () {
    Backbone.history.start();
});
