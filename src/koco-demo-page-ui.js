// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(["text!./rc.page.test-page.html", "knockout"],
    function(template, ko) {
        'use strict';

        var ViewModel = function() {
            var self = this;

            return self;
        };

        return {
            viewModel: {
                createViewModel: function(params, componentInfo) {
                    return new ViewModel(params, componentInfo);
                }
            },
            template: template
        };
    });
