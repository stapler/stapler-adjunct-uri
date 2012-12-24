Stapler Adjunct for [URI.js](http://medialize.github.com/URI.js/)
=========================

To include URI.js, add the module as a Maven dependency:

    <dependency>
        <groupId>org.kohsuke.stapler</groupId>
        <artifactId>stapler-adjunct-uri</artifactId>
        <version>...</version>
    </dependency>

And then include the following adjunct in your page:

    <!-- for Jelly view -->
    <st:adjunct includes="org.kohsuke.stapler.uri"/>

    <!-- for Groovy view -->
    <% adjunct 'org.kohsuke.stapler.uri' %>

Note that `URI.js` tries to act as an AMD module if possible (such as when `require.js` is present),
and in such a situation, trying to load it via an adjunct will cause anonymous module mismatch error.
To load `URI.js` as a module,

    require(['adjuncts/org/kohsuke/stapler/uri/URI'],function (URI) {
        ...
    });
