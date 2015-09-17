ClearVue Directory Structure

 App ->
    assets - >  Here you will place all the css or customs Javascripts, any angular library should be added using bower install
    components -> Here you will place all the controllers and views related to every single module.
                  the naming conversion is the following:
                     module name
                        controllers -  place here all the controllers for the module in fact
                        views  - place here all the views for the module in fact

    shared - >  Shared folder would contains all the AngularJs shared files in the project such directives, factories, services, etc
    templates - > Templates folder would contains all the html for the projects