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

    displayArt: function () {
        $('#app').html('I recently got started with drawing and sketching on an iPad as well as on the Wacom Bamboo. ' +
            'Especially on the iPad I am experimenting with Autodesk Sketchbook Pro and FiftyThree\'s Paper app (and the Pencil stylus). I ' +
            'have also been working with real physical media - acrylic, watercolor, oil colors, pastels, easels and brushes.');
    },

    showCodez: function () {
        $('#app').html('Blog entries more focused on coding, refactoring, and the like. <a href="./Codelog/" target="_blank">Link</a>');
    },

    getFit: function () {
        $('#app').html('A lifetime fitness enthusiast, I have read a lot on fitness and nutrition, and try to maintain a low-carb ' +
            'high protein high fiber diet filled with nuts and greens. At the moment I have a mixed routine, working out at the gym ' +
            'with weights and sprints/ incline treadmills, and complementing that with recovery-oriented work and active recovery ' +
            'routines at home. ')
    },

    showMedia: function () {
        $('#app').html('Pictures, Photoshop, Photography: COMING SOON')
    },

    displayAbout: function () {
        $('#app').html('I like experimenting with and learning about all kinds of new computer software technology, ' +
            'and tidbits about physical fitness, nutrition, hardware/ Internet of Things (especially Arduino), ' +
            'and a multitude of other things. I can touch type, and I am a big believer in learning productivity tools. My ' +
            'current favorites are Vim, Tmux, Zsh, iTerm2, Eclipse, IntelliJ, and Webstorm. I also like tracking things, and some of ' +
            'my favorites are Omnifocus and Toggl. My current favorite programming languages are ' +
            'Python, Scala, Java, Clojure, Go, and Ruby. Recently I\'ve been reviving an old hobby of drawing and sketching, ' +
            'mainly digitally, but occasionally with real physical media, and have also been learning to play the keyboard. ' +
            'This Website is intended to be both a showcase and a playground of ' +
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
