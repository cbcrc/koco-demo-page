(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "text!./koco-demo-page.html", "knockout"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("text!./koco-demo-page.html"), require("knockout"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.kocoDemoPage, global.knockout);
        global.kocoDemoPageUi = mod.exports;
    }
})(this, function (exports, _kocoDemoPage, _knockout) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _kocoDemoPage2 = _interopRequireDefault(_kocoDemoPage);

    var _knockout2 = _interopRequireDefault(_knockout);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // Copyright (c) CBC/Radio-Canada. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.

    var ViewModel = function ViewModel() {
        var self = this;

        return self;
    };

    exports.default = {
        viewModel: {
            createViewModel: function createViewModel(params, componentInfo) {
                return new ViewModel(params, componentInfo);
            }
        },
        template: _kocoDemoPage2.default
    };
});