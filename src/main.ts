/*
|--------------------------------------------------------------------------
| Main boot file
|--------------------------------------------------------------------------
*/

import { Canvas } from './canvas';
import { Mouse } from './mouse';
import { Manager } from './manager';

/**
 * App configuration
 */
(<any> window).Signature = {
	init: function(config: {width: number, height: number, canvasElement: string}) {
		initialize(config.width, config.height, config.canvasElement);
	}
};


/**
 * Start the app by passing appropriate arguments to Canvas Object (config) and set it up
 */
function initialize(width: number, height: number, canvasElement: string)
{
	// Canvas initialization
	const canvas = Canvas.getInstance();
	canvas.setWidth(width);
	canvas.setHeight(height);
	canvas.setCanvasElement(canvasElement);	
	canvas.setup();

	// Mouse initialization
	const mouse = Mouse.getInstance();
	mouse.movementListener(canvas);

	// Painting
	Manager.initPainting(canvas, mouse);

	// Saving and uploading
	const saveBtn = <HTMLButtonElement> document.querySelector('#save-signature');
	saveBtn.addEventListener('click', () => Manager.saveSignature(canvas.renderImage()));

	// Clearing the canvas
	const clearBtn = <HTMLButtonElement> document.querySelector('#clear-signature');
	clearBtn.addEventListener('click', () => canvas.clearup());
}