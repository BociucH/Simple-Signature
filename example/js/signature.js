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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
|--------------------------------------------------------------------------
| Main boot file
|--------------------------------------------------------------------------
*/
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = __webpack_require__(1);
var mouse_1 = __webpack_require__(2);
var manager_1 = __webpack_require__(3);
/**
 * App configuration
 */
window.Signature = {
    init: function (config) {
        initialize(config.width, config.height, config.canvasElement);
    }
};
/**
 * Start the app by passing appropriate arguments to Canvas Object (config) and set it up
 */
function initialize(width, height, canvasElement) {
    // Canvas initialization
    var canvas = canvas_1.Canvas.getInstance();
    canvas.setWidth(width);
    canvas.setHeight(height);
    canvas.setCanvasElement(canvasElement);
    canvas.setup();
    // Mouse initialization
    var mouse = mouse_1.Mouse.getInstance();
    mouse.movementListener(canvas);
    // Painting
    manager_1.Manager.initPainting(canvas, mouse);
    // Saving and uploading
    var saveBtn = document.querySelector('#save-signature');
    saveBtn.addEventListener('click', function () { return manager_1.Manager.saveSignature(canvas.renderImage()); });
    // Clearing the canvas
    var clearBtn = document.querySelector('#clear-signature');
    clearBtn.addEventListener('click', function () { return canvas.clearup(); });
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
|--------------------------------------------------------------------------
| Generate Canvas styling etc.
|--------------------------------------------------------------------------
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = (function () {
    /**
     * Constructor
     */
    function Canvas() {
    }
    /**
     * Instance (Singleton pattern)
     * @return {Canvas} Canvas object
     */
    Canvas.getInstance = function () {
        if (this.instance === undefined) {
            this.instance = new Canvas();
        }
        return this.instance;
    };
    /**
     * Setup method to initialize basic stuff (fillings and border) - make it visible
     * @param {string = 'white'} backgroundColor Background color
     * @param {string = 'grey'}  borderColor     Border color
     */
    Canvas.prototype.setup = function (backgroundColor, borderColor) {
        if (backgroundColor === void 0) { backgroundColor = 'white'; }
        if (borderColor === void 0) { borderColor = 'grey'; }
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        // Background and Border
        this.canvasContext.fillStyle = backgroundColor;
        this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.canvasContext.strokeStyle = borderColor;
        this.canvasContext.strokeRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    /**
     * Redner an image of current canvas content
     * @return {string} Base64 image code
     */
    Canvas.prototype.renderImage = function () {
        var imgBase64 = this.canvasElement.toDataURL('image/png');
        return imgBase64.split(",")[1];
    };
    /**
     * Clear up the canvas
     */
    Canvas.prototype.clearup = function () {
        this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        // restore background and border
        this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.canvasContext.strokeRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    /**
     * Getter: width
     * @return {number} [description]
     */
    Canvas.prototype.getWidth = function () {
        return this.width;
    };
    /**
     * Getter: height
     * @return {number} [description]
     */
    Canvas.prototype.getHeight = function () {
        return this.height;
    };
    /**
     * Getter: Canvas element
     * @return {HTMLCanvasElement} Canvas element
     */
    Canvas.prototype.getCanvas = function () {
        return this.canvasElement;
    };
    /**
     * Getter: Canvas context
     * @return {CanvasRenderingContext2D} Canvas context
     */
    Canvas.prototype.getCanvasContext = function () {
        return this.canvasContext;
    };
    /**
     * Setter: width
     * @param {number} width [description]
     */
    Canvas.prototype.setWidth = function (width) {
        this.width = width;
    };
    /**
     * Setter: height
     * @param {number} height [description]
     */
    Canvas.prototype.setHeight = function (height) {
        this.height = height;
    };
    /**
     * Setter: Canvas element & Canvas context
     * @param {string} canvasElement [description]
     */
    Canvas.prototype.setCanvasElement = function (canvasElement) {
        this.canvasElement = document.querySelector(canvasElement);
        this.canvasContext = this.canvasElement.getContext('2d');
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
|--------------------------------------------------------------------------
| Handle mouse
|--------------------------------------------------------------------------
|
| Set the mouse positions, both axes.
|
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Mouse = (function () {
    /**
     * Constructor
     */
    function Mouse() {
    }
    /**
     * Instance (Singleton pattern)
     * @return {Mouse} Mouse object
     */
    Mouse.getInstance = function () {
        if (this.instance === undefined) {
            this.instance = new Mouse();
        }
        return this.instance;
    };
    /**
     * Setter: X & Y positions
     * @param {HTMLCanvasElement} canvas Canvas element
     * @param {MouseEvent}        event  Mouse event
     */
    Mouse.prototype.setMousePosition = function (canvas, event) {
        var canvasPos = canvas.getBoundingClientRect();
        this.positionX = event.clientX - canvasPos.left,
            this.positionY = event.clientY - canvasPos.top;
    };
    /**
     * Getter: X & Y positions
     * @return {number} Position X
     */
    Mouse.prototype.getMousePosition = function () {
        return {
            x: this.positionX,
            y: this.positionY
        };
    };
    /**
     * Movement listener - change mouse position while moving
     * @param {Canvas} canvas Canvas object
     */
    Mouse.prototype.movementListener = function (canvas) {
        var _this = this;
        canvas.getCanvas().addEventListener('mousemove', function (event) {
            _this.setMousePosition(canvas.getCanvas(), event);
        });
    };
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
|--------------------------------------------------------------------------
| Manager for handling user's operations
|--------------------------------------------------------------------------
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = (function () {
    function Manager() {
    }
    /**
     * Initialize paiting on mousedown
     * @param {Canvas} canvas Canvas object
     * @param {Mouse}  mouse  Mouse object
     */
    Manager.initPainting = function (canvas, mouse) {
        canvas.getCanvas().addEventListener('mousedown', function (event) {
            canvas.getCanvasContext().beginPath();
            canvas.getCanvasContext().moveTo(mouse.getMousePosition().x, mouse.getMousePosition().y);
            canvas.getCanvas().addEventListener('mousemove', paint);
            canvas.getCanvas().addEventListener('mouseup', function () {
                canvas.getCanvas().removeEventListener('mousemove', paint);
            });
        });
        document.addEventListener('mouseup', function () {
            canvas.getCanvas().removeEventListener('mousemove', paint);
        });
        var paint = function () {
            canvas.getCanvasContext().lineTo(mouse.getMousePosition().x, mouse.getMousePosition().y);
            canvas.getCanvasContext().stroke();
        };
    };
    /**
     * Save a signature
     * @param {string} imageBase64 Encoded image string
     */
    Manager.saveSignature = function (imageBase64) {
        var request = new XMLHttpRequest();
        request.open('POST', 'upload.php', true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        var image = JSON.stringify({ image: encodeURIComponent(imageBase64) });
        request.send("image=" + image);
    };
    return Manager;
}());
exports.Manager = Manager;


/***/ })
/******/ ]);