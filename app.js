/**
 * Created by William Diaz on 9/14/15.
 */


app.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");


    /**
     *  Login
     */
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/components/login/views/login.html",
            controller: 'loginController'

        })

    /**
     *  Home
     */
    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "app/components/dashboard/views/dashboard.html",
            controller: 'mainController'
        })

    /**
     *  Customers
     */

        .state('add_customer', {
            url: "/add_customer",
            templateUrl: "app/components/customers/views/add_customer.html",
            controller: 'addCustomerController'

        })

        .state('view_customers', {
            url: "/view_customers",
            templateUrl: "app/components/customers/views/view_customers.html",
            controller: 'customersController'

        })

    /**
     *  Organizations
     */

        .state('add_organization', {
            url: "/add_organization",
            templateUrl: "app/components/organizations/views/add_organization.html",
            controller: 'addCustomerController'

        })

        .state('view_organizations', {
            url: "/view_organizations",
            templateUrl: "app/components/organizations/views/view_organizations.html"
           // controller: 'customersController'

        })


    /**
     *  Profile
     */

        .state('view_profile', {
            url: "/view_profile",
            templateUrl: "app/components/profile/views/view_profile.html",
            controller: 'profileController'

        })

        .state('edit_profile', {
            url: "/edit_profile",
            templateUrl: "app/components/profile/views/profile/edit_profile.html",
            controller: 'profileController'

        })


});