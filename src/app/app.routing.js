"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var laptop_component_1 = require("./components/laptop.component");
var background_component_1 = require("./components/background.component");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'laptop',
        component: laptop_component_1.LaptopComponent
    },
    {
        path: 'background',
        component: background_component_1.BackgroundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map