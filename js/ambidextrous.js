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
        $('#app').html('I recently got started with drawing and sketching on an iPad as well as on the Wacom Bamboo. ' +
            'Especially on the iPad I am experimenting with Autodesk Sketchbook Pro and FiftyThree Paper (and Pencil);. I ' +
            'have also been attending painting classes in the city with real physical media - acrylic, easels and brushes.');
    },

    showCodez: function () {
        $('#app').html('Blog entries more focused on coding, refactoring, and the like. <a href="./Codelog/" target="_blank">Link</a>');
    },

    getFit: function () {
        $('#app').html('I have researched and learned from the best resources on the Web and literature, although it is a work in ' +
            'progress, since it is harder to implement in practice with a full time job and other obligations. I eat a high protein, ' +
            'high fiber, high-in-greens, low carb, low saturated fat diet as consistently as my schedule allows. I practice ' +
            'and experiment with traditional weight training, sprints, incline sprints, kettlebells, exercise bands, ' +
            'and metabolic conditioning workouts. I have gotten into the practice of having my workouts preplanned so that I have' +
            'fewer excuses to skimp on them.')
    },

    showMedia: function () {
        $('#app').html('Pictures, Photoshop, Photography: COMING SOON')
    },

    displayAbout: function () {
        $('#app').html('I like experimenting with and learning about all kinds of new computer software technology, and tidbits about physical ' +
            'fitness, nutrition, ' +
            'and a multitude of other things. I can touch type, and I am a big believer in learning productivity tools. My ' +
            'current favorites are Vim, Tmux, Zsh, iTerm2, Eclipse, IntelliJ, and Webstorm. My current favorite languages are ' +
            'Python, Scala, Java, Clojure, SML, and Ruby. Recently I\'ve been reviving an old hobby of drawing and sketching, ' +
            'mainly digitally, but occasionally with real physical media. This Website is intended to be both a showcase and a playground of ' +
            'my various interests. You can follow me along on Twitter, on my blog, and this Website. Occasionally you can ' +
            'expect updates on the above and whatever else I am excited about at a given moment. This site will keep changing as I learn and grow.');
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
        $('#app').html('Here I will showcase some random experimental Web design concepts that I am currently playing with' +
            '<br /><br />' +
                'Trying out some phrase elements <br />' +
                '<dfn>Definition</dfn> <br />' +
                '<code>Code</code> <br />' +
                '<kbd>Keyboard</kbd>'
        )
    }

});

var app = new AppRouter();

$(function () {
    Backbone.history.start();
});
