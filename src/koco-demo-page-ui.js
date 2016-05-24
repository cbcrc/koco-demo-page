// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import template from "text!./koco-demo-page.html";
import ko from "knockout";


var ViewModel = function() {
    var self = this;

    return self;
};

export default {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new ViewModel(params, componentInfo);
        }
    },
    template: template
};
