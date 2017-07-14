/*
|--------------------------------------------------------------------------
| Manager for handling user's operations
|--------------------------------------------------------------------------
*/

// import * as jQuery from 'jquery';

import { Canvas } from './canvas';
import { Mouse } from './mouse';

export class Manager {

	/**
	 * Initialize paiting on mousedown
	 * @param {Canvas} canvas Canvas object
	 * @param {Mouse}  mouse  Mouse object
	 */
	public static initPainting(canvas: Canvas, mouse: Mouse): void {
		canvas.getCanvas().addEventListener('mousedown', (event) => {
			canvas.getCanvasContext().beginPath();
			canvas.getCanvasContext().moveTo(mouse.getMousePosition().x, mouse.getMousePosition().y);

			canvas.getCanvas().addEventListener('mousemove', paint);

			canvas.getCanvas().addEventListener('mouseup', () => {
				canvas.getCanvas().removeEventListener('mousemove', paint);
			});
		});

		document.addEventListener('mouseup', () => {
			canvas.getCanvas().removeEventListener('mousemove', paint);
		});

		const paint = function() {
			canvas.getCanvasContext().lineTo(mouse.getMousePosition().x, mouse.getMousePosition().y);
			canvas.getCanvasContext().stroke();
		}
	}

	/**
	 * Save a signature
	 * @param {string} imageBase64 [description]
	 */
	public static saveSignature(imageBase64: string): void {
		jQuery.post("upload.php", {image: imageBase64});
	}

}