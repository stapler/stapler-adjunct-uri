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

