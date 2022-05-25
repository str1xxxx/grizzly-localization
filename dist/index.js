function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
export var Localization = /*#__PURE__*/ function() {
    "use strict";
    function Localization(defaultLanguage) {
        _classCallCheck(this, Localization);
        this.defaultLanguage = defaultLanguage;
        this.localizations = {};
    }
    var _proto = Localization.prototype;
    _proto.addLocalization = function addLocalization(langObj) {
        this.localizations = _objectSpread({}, this.localizations, langObj);
    };
    _proto.getLocalization = function getLocalization(key) {
        if (!this.localizations[key]) {
            return "Localization does not exist";
        }
        if (!this.localizations[key][this.defaultLanguage]) {
            return "Default language does not exist";
        }
        return _objectSpread({}, this.localizations[key][this.defaultLanguage], {
            update: this.update
        });
    };
    _proto.getAllLocalizations = function getAllLocalizations() {
        return this.localizations;
    };
    _proto.setDefaultLanguage = function setDefaultLanguage(lang) {
        this.defaultLanguage = lang;
    };
    _proto.getDefaultLanguage = function getDefaultLanguage() {
        return this.defaultLanguage;
    };
    _proto.update = function update(key) {
        return console.log(this.localizations[key][this.defaultLanguage]);
    };
    return Localization;
}();
