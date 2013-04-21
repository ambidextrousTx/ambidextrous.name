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
        'Media': 'showMedia',
        'Fitness': 'getFit',
        'Codelog': 'showCodez'

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
        $('#app').html('Shoot me an email at RaviSinha AT my DOT unt DOT edu or follow me on Twitter <a href="http://twitter.com/ambidextrousTx" target="_blank">@ambidextrousTx</a>');
    },

    showProjects: function () {
        $('#app').html('See all my repositories on my <a href="http://github.com/ambidextrousTx" target="_blank">GitHub profile</a>');
    },

    showPublications: function () {
        $('#app').html('Here is a list of all my publications: COMING SOON');
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
