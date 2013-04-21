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
        'Playground': 'linkToPlayground'

    },

    displayAbout: function () {
        $('#app').html('This is my new Website built using Backbone and HTML5 Boilerplate');
    },

    displayContact: function () {
        $('#app').html('Shoot me an email at RaviSinha AT my DOT unt DOT edu or follow me on Twitter <a href="http://twitter.com/ambidextrousTx" target="_blank">@ambidextrousTx</a>');
    },

    showProjects: function () {
        $('#app').html('See all my repositories on my <a href="http://github.com/ambidextrousTx" target="_blank">GitHub profile</a>');
    },

    showPublications: function () {
        $('#app').html('Here is a list of all my publications');
    },

    linkToBlog: function () {
        $('#app').html('<a href="http://darknightelf.wordpress.com" target="_blank">External link</a> to my blog on WordPress');
    },

    linkToPlayground: function() {
        $('#app').html('Here I will showcase some random experimental Web design concepts that I am currently playing with')
    }

});

var app = new AppRouter();

$(function () {
    Backbone.history.start();
});
