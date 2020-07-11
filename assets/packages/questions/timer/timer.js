/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _timeclass = __webpack_require__(/*! ./timeclass */ "./src/timeclass.js");

var _timeclass2 = _interopRequireDefault(_timeclass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.countdown = function countdown(questionid, timer, action, warning, warning2, warninghide, warning2hide, disable) {
    window.timerObjectSpace = window.timerObjectSpace || {};
    if (!window.timerObjectSpace[questionid]) {
        window.timerObjectSpace[questionid] = new _timeclass2.default({
            questionid: questionid,
            timer: timer,
            action: action,
            warning: warning,
            warning2: warning2,
            warninghide: warninghide,
            warning2hide: warning2hide,
            disabledElement: disable
        });
        window.timerObjectSpace[questionid].startTimer();
    }
}; /**
    * @file Script for timer
    * @copyright LimeSurvey <http://www.limesurvey.org>
    * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
    */

/***/ }),

/***/ "./src/timeclass.js":
/*!**************************!*\
  !*** ./src/timeclass.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file Script for timer
 * @copyright LimeSurvey <http://www.limesurvey.org>
 * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
 */

var TimerConstructor = function () {
    _createClass(TimerConstructor, [{
        key: '_parseOptions',


        /* ##### private methods ##### */
        /**
         * Parses the options to default values if not set
         * @param Object options 
         * @return Object 
         */
        value: function _parseOptions(option) {
            return {
                questionid: option.questionid || null,
                timer: option.timer || 0,
                action: option.action || 1,
                warning: option.warning || 0,
                warning2: option.warning2 || 0,
                warninghide: option.warninghide || 0,
                warning2hide: option.warning2hide || 0,
                disabledElement: option.disabledElement || null
            };
        }

        /**
         * Takes a duration in seconds and creates an object containing the duration in hours, minutes and seconds
         * @param int seconds The duration in seconds
         * @return Object Contains hours, minutes and seconds
         */

    }, {
        key: '_parseTimeToObject',
        value: function _parseTimeToObject(secLeft, asStrings) {
            asStrings = asStrings || false;

            var oDuration = moment.duration(secLeft, 'seconds');
            var sHours = String(oDuration.hours()),
                sMinutes = String(oDuration.minutes()),
                sSeconds = String(oDuration.seconds());

            return {
                hours: asStrings ? sHours.length == 1 ? '0' + sHours : sHours : parseInt(sHours),
                minutes: asStrings ? sMinutes.length == 1 ? '0' + sMinutes : sMinutes : parseInt(sMinutes),
                seconds: asStrings ? sSeconds.length == 1 ? '0' + sSeconds : sSeconds : parseInt(sSecond)
            };
        }

        /**
         * The actions done on each step and the trigger to the finishing action
         */

    }, {
        key: '_intervalStep',
        value: function _intervalStep() {
            var currentTimeLeft = this._getTimerFromLocalStorage();
            currentTimeLeft = parseInt(currentTimeLeft) - 1;
            this.timerLogger.log('Interval emitted | seconds left:', currentTimeLeft);
            if (currentTimeLeft <= 0) {
                this.finishTimer();
            }
            this._checkForWarning(currentTimeLeft);
            this._setTimerToLocalStorage(currentTimeLeft);
            this._setTimer(currentTimeLeft);
        }

        /**
         * Set the interval to update the timer visuals
         */

    }, {
        key: '_setInterval',
        value: function _setInterval() {
            var _this = this;

            if (this._existsDisplayElement()) {
                this._setTimer(this.option.timer);
                this.intervalObject = setInterval(function () {
                    return _this._intervalStep.apply(_this);
                }, 1000);
            }
        }

        /**
         * Unset the timer;
         */

    }, {
        key: '_unsetInterval',
        value: function _unsetInterval() {
            clearInterval(this.intervalObject);
            this.intervalObject = null;
        }
    }, {
        key: '_existsDisplayElement',
        value: function _existsDisplayElement() {
            if (!this.$timerDisplayElement().length > 0) {
                this._unsetInterval();
                return false;
            }
            return true;
        }

        /**
         * Sets the timer to the display element
         */

    }, {
        key: '_setTimer',
        value: function _setTimer(currentTimeLeft) {
            var timeObject = this._parseTimeToObject(currentTimeLeft, true);
            if (this._existsDisplayElement()) {
                this.$timerDisplayElement().css({
                    display: 'flex'
                }).html(this.$countDownMessageElement.html() + "&nbsp;&nbsp;<div class='ls-timer-time'>" + timeObject.hours + ':' + timeObject.minutes + ':' + timeObject.seconds + "</div>");
            }
        }

        /**
         * Checks if a warning should be shown relative to the interval
         * @param int currentTime The current amount of seconds gone
         */

    }, {
        key: '_checkForWarning',
        value: function _checkForWarning(currentTime) {
            if (currentTime == this.option.warning) {
                this._showWarning();
            }
            if (currentTime == this.option.warning2) {
                this._showWarning2();
            }
        }
        /**
         * Shows the warning and fades it out after the set amount of time
         */

    }, {
        key: '_showWarning',
        value: function _showWarning() {
            var _this2 = this;

            if (this.option.warning !== 0) {
                this.timerLogger.log('Warning called!');
                this.$warningDisplayElement.removeClass('hidden').css({
                    opacity: 0
                }).animate({
                    'opacity': 1
                }, 200);
                setTimeout(function () {
                    _this2.timerLogger.log('Warning ended!');
                    _this2.$warningDisplayElement.animate({
                        opacity: 0
                    }, 200, function () {
                        _this2.$warningDisplayElement.addClass('hidden');
                    });
                }, 1000 * this.option.warninghide);
            }
        }

        /**
         * Shows the warning2 and fades it out after the set amount of time
         */

    }, {
        key: '_showWarning2',
        value: function _showWarning2() {
            var _this3 = this;

            if (this.option.warning2 !== 0) {
                this.timerLogger.log('Warning2 called!');
                this.$warning2DisplayElement.removeClass('hidden').css({
                    opacity: 0
                }).animate({
                    'opacity': 1
                }, 200);
                setTimeout(function () {
                    _this3.timerLogger.log('Warning2 ended!');
                    _this3.$warning2DisplayElement.animate({
                        opacity: 0
                    }, 200, function () {
                        _this3.$warning2DisplayElement.addClass('hidden');
                    });
                }, 1000 * this.option.warning2hide);
            }
        }

        /**
         * Disables the navigation buttons if necessary
         */

    }, {
        key: '_disableNavigation',
        value: function _disableNavigation() {
            var _this4 = this;

            this.timerLogger.log('Disabling navigation');
            $('.ls-move-previous-btn').each(function (i, item) {
                $(item).prop('disabled', _this4.disable_prev == 1);
            });
            $('.ls-move-next-btn,.ls-move-submit-btn').each(function (i, item) {
                $(item).prop('disabled', _this4.disable_next == 1);
            });
        }

        /**
         * Enables the navigation buttons
         */

    }, {
        key: '_enableNavigation',
        value: function _enableNavigation() {
            $('.ls-move-previous-btn').each(function () {
                $(this).prop('disabled', false);
            });
            $('.ls-move-next-btn,.ls-move-submit-btn').each(function () {
                $(this).prop('disabled', false);
            });
        }

        /**
         * Gets the current timer from the localStorage
         */

    }, {
        key: '_getTimerFromLocalStorage',
        value: function _getTimerFromLocalStorage() {
            var timeLeft = window.localStorage.getItem('limesurvey_timers_' + this.timersessionname);
            return !isNaN(parseInt(timeLeft)) ? timeLeft : 0;
        }

        /**
         * Sets the current timer to localStorage
         */

    }, {
        key: '_setTimerToLocalStorage',
        value: function _setTimerToLocalStorage(timerValue) {
            window.localStorage.setItem('limesurvey_timers_' + this.timersessionname, timerValue);
        }

        /**
         * Unsets the timer in localStorage
         */

    }, {
        key: '_unsetTimerInLocalStorage',
        value: function _unsetTimerInLocalStorage() {
            window.localStorage.removeItem('limesurvey_timers_' + this.timersessionname);
        }

        /**
         * Finalize Method to show a warning and then redirect
         */

    }, {
        key: '_warnBeforeRedirection',
        value: function _warnBeforeRedirection() {
            this._disableInput();
            setTimeout(this._redirectOut, this.redirectWarnTime);
        }

        /**
         * Finalize method to just diable the input
         */

    }, {
        key: '_disableInput',
        value: function _disableInput() {
            this.$toBeDisabledElement.prop('readonly', true);
            $('#question' + this.option.questionid).find('.answer-container').children('div').not('.timer_header').fadeOut();
        }

        /**
         * Show the notice that the time is up and the input is expired
         */

    }, {
        key: '_showExpiredNotice',
        value: function _showExpiredNotice() {
            this.$timerExpiredElement.removeClass('hidden');
        }

        /**
         * redirect to the next page
         */

    }, {
        key: '_redirectOut',
        value: function _redirectOut() {
            $('#ls-button-submit').trigger('click');
        }
        /**
         * Binds the reset of the localStorage as soon as the participant has submitted the form
         */

    }, {
        key: '_bindUnsetToSubmit',
        value: function _bindUnsetToSubmit() {
            var _this5 = this;

            $('#limesurvey').on('submit', function () {
                _this5._unsetTimerInLocalStorage();
            });
        }

        /* ##### public methods ##### */

        /**
         * Finishing action
         * Unsets all timers and intervals and then triggers the defined action.
         * Either redirect, invalidate or warn before redirect
         */

    }, {
        key: 'finishTimer',
        value: function finishTimer() {

            this.timerLogger.log('Timer has ended or was ended');
            this._unsetInterval();
            this._enableNavigation();
            this._bindUnsetToSubmit();
            this._disableInput();

            switch (this.option.action) {
                case 3:
                    //Just warn, don't move on
                    this._showExpiredNotice();
                    break;
                case 2:
                    //Just move on, no warning
                    this._redirectOut();
                    break;
                case 1: //fallthrough
                default:
                    //Warn and move on
                    this._showExpiredNotice();
                    this._warnBeforeRedirection();
                    break;

            }
        }

        /** 
         * Starts the timer
         * Sts the interval to visualize the timer and the timeouts for the warnings.
         */

    }, {
        key: 'startTimer',
        value: function startTimer() {
            if (this.timeLeft == 0) {
                this.finishTimer();
                return;
            }
            this._setTimerToLocalStorage(this.timeLeft);
            this._disableNavigation();
            this._setInterval();
        }
    }]);

    function TimerConstructor(options) {
        var _this6 = this;

        _classCallCheck(this, TimerConstructor);

        /* ##### define state and closure vars ##### */
        this.option = this._parseOptions(options);

        this.timerWarning = null;
        this.timerWarning2 = null;
        this.timerLogger = new ConsoleShim('TIMER#' + options.questionid, !window.debugState.frontend);
        this.intervalObject = null;
        this.warning = 0;
        this.timersessionname = 'timer_question_' + this.option.questionid;

        // Unset timer in local storage if the reset timers flag is set
        if (LSvar.bResetQuestionTimers) this._unsetTimerInLocalStorage();

        this.timeLeft = this._getTimerFromLocalStorage() || this.option.timer;
        this.disable_next = $("#disablenext-" + this.timersessionname).val();
        this.disable_prev = $("#disableprev-" + this.timersessionname).val();

        //jQuery Elements
        this.$timerDisplayElement = function () {
            return $('#LS_question' + _this6.option.questionid + '_Timer');
        };
        this.$timerExpiredElement = $('#question' + this.option.questionid + '_timer');
        this.$warningTimeDisplayElement = $('#LS_question' + this.option.questionid + '_Warning');
        this.$warningDisplayElement = $('#LS_question' + this.option.questionid + '_warning');
        this.$warning2TimeDisplayElement = $('#LS_question' + this.option.questionid + '_Warning_2');
        this.$warning2DisplayElement = $('#LS_question' + this.option.questionid + '_warning_2');
        this.$countDownMessageElement = $("#countdown-message-" + this.timersessionname);
        this.redirectWarnTime = $('#message-delay-' + this.timersessionname).val();
        this.$toBeDisabledElement = $('#' + this.option.disabledElement);

        this.timerLogger.log('Options set:', this.option);

        return {
            startTimer: function startTimer() {
                return _this6.startTimer.apply(_this6);
            },
            finishTimer: function finishTimer() {
                return _this6.finishTimer.apply(_this6);
            }
        };
    }

    return TimerConstructor;
}();

exports.default = TimerConstructor;
;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVjbGFzcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjb3VudGRvd24iLCJxdWVzdGlvbmlkIiwidGltZXIiLCJhY3Rpb24iLCJ3YXJuaW5nIiwid2FybmluZzIiLCJ3YXJuaW5naGlkZSIsIndhcm5pbmcyaGlkZSIsImRpc2FibGUiLCJ0aW1lck9iamVjdFNwYWNlIiwiVGltZXJDb25zdHJ1Y3RvciIsImRpc2FibGVkRWxlbWVudCIsInN0YXJ0VGltZXIiLCJvcHRpb24iLCJzZWNMZWZ0IiwiYXNTdHJpbmdzIiwib0R1cmF0aW9uIiwibW9tZW50IiwiZHVyYXRpb24iLCJzSG91cnMiLCJTdHJpbmciLCJob3VycyIsInNNaW51dGVzIiwibWludXRlcyIsInNTZWNvbmRzIiwic2Vjb25kcyIsImxlbmd0aCIsInBhcnNlSW50Iiwic1NlY29uZCIsImN1cnJlbnRUaW1lTGVmdCIsIl9nZXRUaW1lckZyb21Mb2NhbFN0b3JhZ2UiLCJ0aW1lckxvZ2dlciIsImxvZyIsImZpbmlzaFRpbWVyIiwiX2NoZWNrRm9yV2FybmluZyIsIl9zZXRUaW1lclRvTG9jYWxTdG9yYWdlIiwiX3NldFRpbWVyIiwiX2V4aXN0c0Rpc3BsYXlFbGVtZW50IiwiaW50ZXJ2YWxPYmplY3QiLCJzZXRJbnRlcnZhbCIsIl9pbnRlcnZhbFN0ZXAiLCJhcHBseSIsImNsZWFySW50ZXJ2YWwiLCIkdGltZXJEaXNwbGF5RWxlbWVudCIsIl91bnNldEludGVydmFsIiwidGltZU9iamVjdCIsIl9wYXJzZVRpbWVUb09iamVjdCIsImNzcyIsImRpc3BsYXkiLCJodG1sIiwiJGNvdW50RG93bk1lc3NhZ2VFbGVtZW50IiwiY3VycmVudFRpbWUiLCJfc2hvd1dhcm5pbmciLCJfc2hvd1dhcm5pbmcyIiwiJHdhcm5pbmdEaXNwbGF5RWxlbWVudCIsInJlbW92ZUNsYXNzIiwib3BhY2l0eSIsImFuaW1hdGUiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCIkd2FybmluZzJEaXNwbGF5RWxlbWVudCIsIiQiLCJlYWNoIiwiaSIsIml0ZW0iLCJwcm9wIiwiZGlzYWJsZV9wcmV2IiwiZGlzYWJsZV9uZXh0IiwidGltZUxlZnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGltZXJzZXNzaW9ubmFtZSIsImlzTmFOIiwidGltZXJWYWx1ZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2Rpc2FibGVJbnB1dCIsIl9yZWRpcmVjdE91dCIsInJlZGlyZWN0V2FyblRpbWUiLCIkdG9CZURpc2FibGVkRWxlbWVudCIsImZpbmQiLCJjaGlsZHJlbiIsIm5vdCIsImZhZGVPdXQiLCIkdGltZXJFeHBpcmVkRWxlbWVudCIsInRyaWdnZXIiLCJvbiIsIl91bnNldFRpbWVySW5Mb2NhbFN0b3JhZ2UiLCJfZW5hYmxlTmF2aWdhdGlvbiIsIl9iaW5kVW5zZXRUb1N1Ym1pdCIsIl9zaG93RXhwaXJlZE5vdGljZSIsIl93YXJuQmVmb3JlUmVkaXJlY3Rpb24iLCJfZGlzYWJsZU5hdmlnYXRpb24iLCJfc2V0SW50ZXJ2YWwiLCJvcHRpb25zIiwiX3BhcnNlT3B0aW9ucyIsInRpbWVyV2FybmluZyIsInRpbWVyV2FybmluZzIiLCJDb25zb2xlU2hpbSIsImRlYnVnU3RhdGUiLCJmcm9udGVuZCIsIkxTdmFyIiwiYlJlc2V0UXVlc3Rpb25UaW1lcnMiLCJ2YWwiLCIkd2FybmluZ1RpbWVEaXNwbGF5RWxlbWVudCIsIiR3YXJuaW5nMlRpbWVEaXNwbGF5RWxlbWVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFn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LENBQVlaLFVBQTdCLEdBQTBDLFlBQTVDLENBQS9CO0FBQ0EsYUFBS2lELHdCQUFMLEdBQWdDVyxFQUFFLHdCQUF3QixLQUFLVSxnQkFBL0IsQ0FBaEM7QUFDQSxhQUFLTyxnQkFBTCxHQUF3QmpCLEVBQUUsb0JBQW9CLEtBQUtVLGdCQUEzQixFQUE2Q2dDLEdBQTdDLEVBQXhCO0FBQ0EsYUFBS3hCLG9CQUFMLEdBQTRCbEIsRUFBRSxNQUFNLEtBQUtoRCxNQUFMLENBQVlGLGVBQXBCLENBQTVCOztBQUVBLGFBQUtvQixXQUFMLENBQWlCQyxHQUFqQixDQUFxQixjQUFyQixFQUFxQyxLQUFLbkIsTUFBMUM7O0FBRUEsZUFBTztBQUNIRCx3QkFBWTtBQUFBLHVCQUFNLE9BQUtBLFVBQUwsQ0FBZ0I2QixLQUFoQixDQUFzQixNQUF0QixDQUFOO0FBQUEsYUFEVDtBQUVIUix5QkFBYTtBQUFBLHVCQUFNLE9BQUtBLFdBQUwsQ0FBaUJRLEtBQWpCLENBQXVCLE1BQXZCLENBQU47QUFBQTtBQUZWLFNBQVA7QUFJSDs7Ozs7a0JBN1RnQi9CLGdCO0FBOFRwQixDIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIi8qKlxuICogQGZpbGUgU2NyaXB0IGZvciB0aW1lclxuICogQGNvcHlyaWdodCBMaW1lU3VydmV5IDxodHRwOi8vd3d3LmxpbWVzdXJ2ZXkub3JnPlxuICogQGxpY2Vuc2UgbWFnbmV0Oj94dD11cm46YnRpaDoxZjczOWQ5MzU2NzYxMTFjZmZmNGI0NjkzZTM4MTZlNjY0Nzk3MDUwJmRuPWdwbC0zLjAudHh0IEdQTC12My1vci1MYXRlclxuICovXG5cbmltcG9ydCBUaW1lckNvbnN0cnVjdG9yIGZyb20gJy4vdGltZWNsYXNzJztcblxud2luZG93LmNvdW50ZG93biA9IGZ1bmN0aW9uIGNvdW50ZG93bihxdWVzdGlvbmlkLCB0aW1lciwgYWN0aW9uLCB3YXJuaW5nLCB3YXJuaW5nMiwgd2FybmluZ2hpZGUsIHdhcm5pbmcyaGlkZSwgZGlzYWJsZSkge1xuICAgIHdpbmRvdy50aW1lck9iamVjdFNwYWNlID0gd2luZG93LnRpbWVyT2JqZWN0U3BhY2UgfHwge307XG4gICAgaWYgKCF3aW5kb3cudGltZXJPYmplY3RTcGFjZVtxdWVzdGlvbmlkXSkge1xuICAgICAgICB3aW5kb3cudGltZXJPYmplY3RTcGFjZVtxdWVzdGlvbmlkXSA9IG5ldyBUaW1lckNvbnN0cnVjdG9yKHtcbiAgICAgICAgICAgIHF1ZXN0aW9uaWQ6IHF1ZXN0aW9uaWQsXG4gICAgICAgICAgICB0aW1lcjogdGltZXIsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIHdhcm5pbmc6IHdhcm5pbmcsXG4gICAgICAgICAgICB3YXJuaW5nMjogd2FybmluZzIsXG4gICAgICAgICAgICB3YXJuaW5naGlkZTogd2FybmluZ2hpZGUsXG4gICAgICAgICAgICB3YXJuaW5nMmhpZGU6IHdhcm5pbmcyaGlkZSxcbiAgICAgICAgICAgIGRpc2FibGVkRWxlbWVudDogZGlzYWJsZVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnRpbWVyT2JqZWN0U3BhY2VbcXVlc3Rpb25pZF0uc3RhcnRUaW1lcigpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGZpbGUgU2NyaXB0IGZvciB0aW1lclxuICogQGNvcHlyaWdodCBMaW1lU3VydmV5IDxodHRwOi8vd3d3LmxpbWVzdXJ2ZXkub3JnPlxuICogQGxpY2Vuc2UgbWFnbmV0Oj94dD11cm46YnRpaDoxZjczOWQ5MzU2NzYxMTFjZmZmNGI0NjkzZTM4MTZlNjY0Nzk3MDUwJmRuPWdwbC0zLjAudHh0IEdQTC12My1vci1MYXRlclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyQ29uc3RydWN0b3Ige1xuXG4gICAgLyogIyMjIyMgcHJpdmF0ZSBtZXRob2RzICMjIyMjICovXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBvcHRpb25zIHRvIGRlZmF1bHQgdmFsdWVzIGlmIG5vdCBzZXRcbiAgICAgKiBAcGFyYW0gT2JqZWN0IG9wdGlvbnMgXG4gICAgICogQHJldHVybiBPYmplY3QgXG4gICAgICovXG4gICAgX3BhcnNlT3B0aW9ucyhvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uaWQ6IG9wdGlvbi5xdWVzdGlvbmlkIHx8IG51bGwsXG4gICAgICAgICAgICB0aW1lcjogb3B0aW9uLnRpbWVyIHx8IDAsXG4gICAgICAgICAgICBhY3Rpb246IG9wdGlvbi5hY3Rpb24gfHwgMSxcbiAgICAgICAgICAgIHdhcm5pbmc6IG9wdGlvbi53YXJuaW5nIHx8IDAsXG4gICAgICAgICAgICB3YXJuaW5nMjogb3B0aW9uLndhcm5pbmcyIHx8IDAsXG4gICAgICAgICAgICB3YXJuaW5naGlkZTogb3B0aW9uLndhcm5pbmdoaWRlIHx8IDAsXG4gICAgICAgICAgICB3YXJuaW5nMmhpZGU6IG9wdGlvbi53YXJuaW5nMmhpZGUgfHwgMCxcbiAgICAgICAgICAgIGRpc2FibGVkRWxlbWVudDogb3B0aW9uLmRpc2FibGVkRWxlbWVudCB8fCBudWxsLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBkdXJhdGlvbiBpbiBzZWNvbmRzIGFuZCBjcmVhdGVzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBkdXJhdGlvbiBpbiBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuICAgICAqIEBwYXJhbSBpbnQgc2Vjb25kcyBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgICAqIEByZXR1cm4gT2JqZWN0IENvbnRhaW5zIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG4gICAgICovXG4gICAgX3BhcnNlVGltZVRvT2JqZWN0KHNlY0xlZnQsIGFzU3RyaW5ncykge1xuICAgICAgICBhc1N0cmluZ3MgPSBhc1N0cmluZ3MgfHwgZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgb0R1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKHNlY0xlZnQsICdzZWNvbmRzJyk7XG4gICAgICAgIGxldCBzSG91cnMgPSBTdHJpbmcob0R1cmF0aW9uLmhvdXJzKCkpLFxuICAgICAgICAgICAgc01pbnV0ZXMgPSBTdHJpbmcob0R1cmF0aW9uLm1pbnV0ZXMoKSksXG4gICAgICAgICAgICBzU2Vjb25kcyA9IFN0cmluZyhvRHVyYXRpb24uc2Vjb25kcygpKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaG91cnM6IGFzU3RyaW5ncyA/IChzSG91cnMubGVuZ3RoID09IDEgPyAnMCcgKyBzSG91cnMgOiBzSG91cnMpIDogcGFyc2VJbnQoc0hvdXJzKSxcbiAgICAgICAgICAgIG1pbnV0ZXM6IGFzU3RyaW5ncyA/IChzTWludXRlcy5sZW5ndGggPT0gMSA/ICcwJyArIHNNaW51dGVzIDogc01pbnV0ZXMpIDogcGFyc2VJbnQoc01pbnV0ZXMpLFxuICAgICAgICAgICAgc2Vjb25kczogYXNTdHJpbmdzID8gKHNTZWNvbmRzLmxlbmd0aCA9PSAxID8gJzAnICsgc1NlY29uZHMgOiBzU2Vjb25kcykgOiBwYXJzZUludChzU2Vjb25kKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3Rpb25zIGRvbmUgb24gZWFjaCBzdGVwIGFuZCB0aGUgdHJpZ2dlciB0byB0aGUgZmluaXNoaW5nIGFjdGlvblxuICAgICAqL1xuICAgIF9pbnRlcnZhbFN0ZXAoKSB7XG4gICAgICAgIGxldCBjdXJyZW50VGltZUxlZnQgPSB0aGlzLl9nZXRUaW1lckZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgY3VycmVudFRpbWVMZWZ0ID0gcGFyc2VJbnQoY3VycmVudFRpbWVMZWZ0KSAtIDE7XG4gICAgICAgIHRoaXMudGltZXJMb2dnZXIubG9nKCdJbnRlcnZhbCBlbWl0dGVkIHwgc2Vjb25kcyBsZWZ0OicsIGN1cnJlbnRUaW1lTGVmdCk7XG4gICAgICAgIGlmIChjdXJyZW50VGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hUaW1lcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoZWNrRm9yV2FybmluZyhjdXJyZW50VGltZUxlZnQpO1xuICAgICAgICB0aGlzLl9zZXRUaW1lclRvTG9jYWxTdG9yYWdlKGN1cnJlbnRUaW1lTGVmdCk7XG4gICAgICAgIHRoaXMuX3NldFRpbWVyKGN1cnJlbnRUaW1lTGVmdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBpbnRlcnZhbCB0byB1cGRhdGUgdGhlIHRpbWVyIHZpc3VhbHNcbiAgICAgKi9cbiAgICBfc2V0SW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl9leGlzdHNEaXNwbGF5RWxlbWVudCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRUaW1lcih0aGlzLm9wdGlvbi50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsT2JqZWN0ID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5faW50ZXJ2YWxTdGVwLmFwcGx5KHRoaXMpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuc2V0IHRoZSB0aW1lcjtcbiAgICAgKi9cbiAgICBfdW5zZXRJbnRlcnZhbCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsT2JqZWN0KTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbE9iamVjdCA9IG51bGw7XG4gICAgfVxuXG4gICAgX2V4aXN0c0Rpc3BsYXlFbGVtZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuJHRpbWVyRGlzcGxheUVsZW1lbnQoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl91bnNldEludGVydmFsKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGltZXIgdG8gdGhlIGRpc3BsYXkgZWxlbWVudFxuICAgICAqL1xuICAgIF9zZXRUaW1lcihjdXJyZW50VGltZUxlZnQpIHtcbiAgICAgICAgY29uc3QgdGltZU9iamVjdCA9IHRoaXMuX3BhcnNlVGltZVRvT2JqZWN0KGN1cnJlbnRUaW1lTGVmdCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9leGlzdHNEaXNwbGF5RWxlbWVudCgpKSB7XG4gICAgICAgICAgICB0aGlzLiR0aW1lckRpc3BsYXlFbGVtZW50KClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuaHRtbCh0aGlzLiRjb3VudERvd25NZXNzYWdlRWxlbWVudC5odG1sKCkgKyBcIiZuYnNwOyZuYnNwOzxkaXYgY2xhc3M9J2xzLXRpbWVyLXRpbWUnPlwiICsgdGltZU9iamVjdC5ob3VycyArICc6JyArIHRpbWVPYmplY3QubWludXRlcyArICc6JyArIHRpbWVPYmplY3Quc2Vjb25kcyArIFwiPC9kaXY+XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGEgd2FybmluZyBzaG91bGQgYmUgc2hvd24gcmVsYXRpdmUgdG8gdGhlIGludGVydmFsXG4gICAgICogQHBhcmFtIGludCBjdXJyZW50VGltZSBUaGUgY3VycmVudCBhbW91bnQgb2Ygc2Vjb25kcyBnb25lXG4gICAgICovXG4gICAgX2NoZWNrRm9yV2FybmluZyhjdXJyZW50VGltZSkge1xuICAgICAgICBpZiAoY3VycmVudFRpbWUgPT0gdGhpcy5vcHRpb24ud2FybmluZykge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1dhcm5pbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFRpbWUgPT0gdGhpcy5vcHRpb24ud2FybmluZzIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dXYXJuaW5nMigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSB3YXJuaW5nIGFuZCBmYWRlcyBpdCBvdXQgYWZ0ZXIgdGhlIHNldCBhbW91bnQgb2YgdGltZVxuICAgICAqL1xuICAgIF9zaG93V2FybmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLndhcm5pbmcgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJMb2dnZXIubG9nKCdXYXJuaW5nIGNhbGxlZCEnKTtcbiAgICAgICAgICAgIHRoaXMuJHdhcm5pbmdEaXNwbGF5RWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZGVuJykuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyTG9nZ2VyLmxvZygnV2FybmluZyBlbmRlZCEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiR3YXJuaW5nRGlzcGxheUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9LCAyMDAsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kd2FybmluZ0Rpc3BsYXlFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMTAwMCAqIHRoaXMub3B0aW9uLndhcm5pbmdoaWRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSB3YXJuaW5nMiBhbmQgZmFkZXMgaXQgb3V0IGFmdGVyIHRoZSBzZXQgYW1vdW50IG9mIHRpbWVcbiAgICAgKi9cbiAgICBfc2hvd1dhcm5pbmcyKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24ud2FybmluZzIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJMb2dnZXIubG9nKCdXYXJuaW5nMiBjYWxsZWQhJyk7XG4gICAgICAgICAgICB0aGlzLiR3YXJuaW5nMkRpc3BsYXlFbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXJMb2dnZXIubG9nKCdXYXJuaW5nMiBlbmRlZCEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiR3YXJuaW5nMkRpc3BsYXlFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSwgMjAwLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHdhcm5pbmcyRGlzcGxheUVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAxMDAwICogdGhpcy5vcHRpb24ud2FybmluZzJoaWRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgaWYgbmVjZXNzYXJ5XG4gICAgICovXG4gICAgX2Rpc2FibGVOYXZpZ2F0aW9uKCkge1xuICAgICAgICB0aGlzLnRpbWVyTG9nZ2VyLmxvZygnRGlzYWJsaW5nIG5hdmlnYXRpb24nKTtcbiAgICAgICAgJCgnLmxzLW1vdmUtcHJldmlvdXMtYnRuJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgJChpdGVtKS5wcm9wKCdkaXNhYmxlZCcsICh0aGlzLmRpc2FibGVfcHJldiA9PSAxKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcubHMtbW92ZS1uZXh0LWJ0biwubHMtbW92ZS1zdWJtaXQtYnRuJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgJChpdGVtKS5wcm9wKCdkaXNhYmxlZCcsICh0aGlzLmRpc2FibGVfbmV4dCA9PSAxKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhlIG5hdmlnYXRpb24gYnV0dG9uc1xuICAgICAqL1xuICAgIF9lbmFibGVOYXZpZ2F0aW9uKCkge1xuICAgICAgICAkKCcubHMtbW92ZS1wcmV2aW91cy1idG4nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcubHMtbW92ZS1uZXh0LWJ0biwubHMtbW92ZS1zdWJtaXQtYnRuJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHRpbWVyIGZyb20gdGhlIGxvY2FsU3RvcmFnZVxuICAgICAqL1xuICAgIF9nZXRUaW1lckZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaW1lc3VydmV5X3RpbWVyc18nICsgdGhpcy50aW1lcnNlc3Npb25uYW1lKTtcbiAgICAgICAgcmV0dXJuICghaXNOYU4ocGFyc2VJbnQodGltZUxlZnQpKSA/IHRpbWVMZWZ0IDogMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0aW1lciB0byBsb2NhbFN0b3JhZ2VcbiAgICAgKi9cbiAgICBfc2V0VGltZXJUb0xvY2FsU3RvcmFnZSh0aW1lclZhbHVlKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGltZXN1cnZleV90aW1lcnNfJyArIHRoaXMudGltZXJzZXNzaW9ubmFtZSwgdGltZXJWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zZXRzIHRoZSB0aW1lciBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgKi9cbiAgICBfdW5zZXRUaW1lckluTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xpbWVzdXJ2ZXlfdGltZXJzXycgKyB0aGlzLnRpbWVyc2Vzc2lvbm5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmFsaXplIE1ldGhvZCB0byBzaG93IGEgd2FybmluZyBhbmQgdGhlbiByZWRpcmVjdFxuICAgICAqL1xuICAgIF93YXJuQmVmb3JlUmVkaXJlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVJbnB1dCgpO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX3JlZGlyZWN0T3V0LCB0aGlzLnJlZGlyZWN0V2FyblRpbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmFsaXplIG1ldGhvZCB0byBqdXN0IGRpYWJsZSB0aGUgaW5wdXRcbiAgICAgKi9cbiAgICBfZGlzYWJsZUlucHV0KCkge1xuICAgICAgICB0aGlzLiR0b0JlRGlzYWJsZWRFbGVtZW50LnByb3AoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgICQoJyNxdWVzdGlvbicgKyB0aGlzLm9wdGlvbi5xdWVzdGlvbmlkKS5maW5kKCcuYW5zd2VyLWNvbnRhaW5lcicpLmNoaWxkcmVuKCdkaXYnKS5ub3QoJy50aW1lcl9oZWFkZXInKS5mYWRlT3V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgbm90aWNlIHRoYXQgdGhlIHRpbWUgaXMgdXAgYW5kIHRoZSBpbnB1dCBpcyBleHBpcmVkXG4gICAgICovXG4gICAgX3Nob3dFeHBpcmVkTm90aWNlKCkge1xuICAgICAgICB0aGlzLiR0aW1lckV4cGlyZWRFbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWRpcmVjdCB0byB0aGUgbmV4dCBwYWdlXG4gICAgICovXG4gICAgX3JlZGlyZWN0T3V0KCkge1xuICAgICAgICAkKCcjbHMtYnV0dG9uLXN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJpbmRzIHRoZSByZXNldCBvZiB0aGUgbG9jYWxTdG9yYWdlIGFzIHNvb24gYXMgdGhlIHBhcnRpY2lwYW50IGhhcyBzdWJtaXR0ZWQgdGhlIGZvcm1cbiAgICAgKi9cbiAgICBfYmluZFVuc2V0VG9TdWJtaXQoKSB7XG4gICAgICAgICQoJyNsaW1lc3VydmV5Jykub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc2V0VGltZXJJbkxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiAjIyMjIyBwdWJsaWMgbWV0aG9kcyAjIyMjIyAqL1xuXG4gICAgLyoqXG4gICAgICogRmluaXNoaW5nIGFjdGlvblxuICAgICAqIFVuc2V0cyBhbGwgdGltZXJzIGFuZCBpbnRlcnZhbHMgYW5kIHRoZW4gdHJpZ2dlcnMgdGhlIGRlZmluZWQgYWN0aW9uLlxuICAgICAqIEVpdGhlciByZWRpcmVjdCwgaW52YWxpZGF0ZSBvciB3YXJuIGJlZm9yZSByZWRpcmVjdFxuICAgICAqL1xuICAgIGZpbmlzaFRpbWVyKCkge1xuXG4gICAgICAgIHRoaXMudGltZXJMb2dnZXIubG9nKCdUaW1lciBoYXMgZW5kZWQgb3Igd2FzIGVuZGVkJyk7XG4gICAgICAgIHRoaXMuX3Vuc2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlTmF2aWdhdGlvbigpO1xuICAgICAgICB0aGlzLl9iaW5kVW5zZXRUb1N1Ym1pdCgpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlSW5wdXQoKTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uLmFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAzOiAvL0p1c3Qgd2FybiwgZG9uJ3QgbW92ZSBvblxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dFeHBpcmVkTm90aWNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IC8vSnVzdCBtb3ZlIG9uLCBubyB3YXJuaW5nXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVkaXJlY3RPdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogLy9mYWxsdGhyb3VnaFxuICAgICAgICAgICAgZGVmYXVsdDogLy9XYXJuIGFuZCBtb3ZlIG9uXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0V4cGlyZWROb3RpY2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93YXJuQmVmb3JlUmVkaXJlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXJcbiAgICAgKiBTdHMgdGhlIGludGVydmFsIHRvIHZpc3VhbGl6ZSB0aGUgdGltZXIgYW5kIHRoZSB0aW1lb3V0cyBmb3IgdGhlIHdhcm5pbmdzLlxuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVGltZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRUaW1lclRvTG9jYWxTdG9yYWdlKHRoaXMudGltZUxlZnQpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlTmF2aWdhdGlvbigpO1xuICAgICAgICB0aGlzLl9zZXRJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgLyogIyMjIyMgZGVmaW5lIHN0YXRlIGFuZCBjbG9zdXJlIHZhcnMgIyMjIyMgKi9cbiAgICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLl9wYXJzZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy50aW1lcldhcm5pbmcgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbWVyV2FybmluZzIgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbWVyTG9nZ2VyID0gbmV3IENvbnNvbGVTaGltKCdUSU1FUiMnICsgb3B0aW9ucy5xdWVzdGlvbmlkLCAhd2luZG93LmRlYnVnU3RhdGUuZnJvbnRlbmQpO1xuICAgICAgICB0aGlzLmludGVydmFsT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy53YXJuaW5nID0gMDtcbiAgICAgICAgdGhpcy50aW1lcnNlc3Npb25uYW1lID0gJ3RpbWVyX3F1ZXN0aW9uXycgKyB0aGlzLm9wdGlvbi5xdWVzdGlvbmlkO1xuXG4gICAgICAgIC8vIFVuc2V0IHRpbWVyIGluIGxvY2FsIHN0b3JhZ2UgaWYgdGhlIHJlc2V0IHRpbWVycyBmbGFnIGlzIHNldFxuICAgICAgICBpZiAoTFN2YXIuYlJlc2V0UXVlc3Rpb25UaW1lcnMpIHRoaXMuX3Vuc2V0VGltZXJJbkxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IHRoaXMuX2dldFRpbWVyRnJvbUxvY2FsU3RvcmFnZSgpIHx8IHRoaXMub3B0aW9uLnRpbWVyO1xuICAgICAgICB0aGlzLmRpc2FibGVfbmV4dCA9ICQoXCIjZGlzYWJsZW5leHQtXCIgKyB0aGlzLnRpbWVyc2Vzc2lvbm5hbWUpLnZhbCgpO1xuICAgICAgICB0aGlzLmRpc2FibGVfcHJldiA9ICQoXCIjZGlzYWJsZXByZXYtXCIgKyB0aGlzLnRpbWVyc2Vzc2lvbm5hbWUpLnZhbCgpO1xuXG4gICAgICAgIC8valF1ZXJ5IEVsZW1lbnRzXG4gICAgICAgIHRoaXMuJHRpbWVyRGlzcGxheUVsZW1lbnQgPSAoKSA9PiAkKCcjTFNfcXVlc3Rpb24nICsgdGhpcy5vcHRpb24ucXVlc3Rpb25pZCArICdfVGltZXInKTtcbiAgICAgICAgdGhpcy4kdGltZXJFeHBpcmVkRWxlbWVudCA9ICQoJyNxdWVzdGlvbicgKyB0aGlzLm9wdGlvbi5xdWVzdGlvbmlkICsgJ190aW1lcicpO1xuICAgICAgICB0aGlzLiR3YXJuaW5nVGltZURpc3BsYXlFbGVtZW50ID0gJCgnI0xTX3F1ZXN0aW9uJyArIHRoaXMub3B0aW9uLnF1ZXN0aW9uaWQgKyAnX1dhcm5pbmcnKTtcbiAgICAgICAgdGhpcy4kd2FybmluZ0Rpc3BsYXlFbGVtZW50ID0gJCgnI0xTX3F1ZXN0aW9uJyArIHRoaXMub3B0aW9uLnF1ZXN0aW9uaWQgKyAnX3dhcm5pbmcnKTtcbiAgICAgICAgdGhpcy4kd2FybmluZzJUaW1lRGlzcGxheUVsZW1lbnQgPSAkKCcjTFNfcXVlc3Rpb24nICsgdGhpcy5vcHRpb24ucXVlc3Rpb25pZCArICdfV2FybmluZ18yJyk7XG4gICAgICAgIHRoaXMuJHdhcm5pbmcyRGlzcGxheUVsZW1lbnQgPSAkKCcjTFNfcXVlc3Rpb24nICsgdGhpcy5vcHRpb24ucXVlc3Rpb25pZCArICdfd2FybmluZ18yJyk7XG4gICAgICAgIHRoaXMuJGNvdW50RG93bk1lc3NhZ2VFbGVtZW50ID0gJChcIiNjb3VudGRvd24tbWVzc2FnZS1cIiArIHRoaXMudGltZXJzZXNzaW9ubmFtZSk7XG4gICAgICAgIHRoaXMucmVkaXJlY3RXYXJuVGltZSA9ICQoJyNtZXNzYWdlLWRlbGF5LScgKyB0aGlzLnRpbWVyc2Vzc2lvbm5hbWUpLnZhbCgpO1xuICAgICAgICB0aGlzLiR0b0JlRGlzYWJsZWRFbGVtZW50ID0gJCgnIycgKyB0aGlzLm9wdGlvbi5kaXNhYmxlZEVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMudGltZXJMb2dnZXIubG9nKCdPcHRpb25zIHNldDonLCB0aGlzLm9wdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZXI6ICgpID0+IHRoaXMuc3RhcnRUaW1lci5hcHBseSh0aGlzKSxcbiAgICAgICAgICAgIGZpbmlzaFRpbWVyOiAoKSA9PiB0aGlzLmZpbmlzaFRpbWVyLmFwcGx5KHRoaXMpXG4gICAgICAgIH07XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=