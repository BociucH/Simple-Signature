/*
|--------------------------------------------------------------------------
| Handle mouse
|--------------------------------------------------------------------------
|
| Set the mouse positions, both axes.
|
*/

import { Canvas } from './canvas';

export class Mouse {

	/**
	 * X position of the mouse
	 * @type {number}
	 */
	private positionX: number;

	/**
	 * Y position of the mouse
	 * @type {number}
	 */
	private positionY: number;

	/**
	 * Instance
	 * @type {Mouse}
	 */
	private static instance: Mouse;

	/**
	 * Constructor
	 */
	private constructor() {}

	/**
	 * Instance (Singleton pattern)
	 * @return {Mouse} Mouse object
	 */
	public static getInstance(): Mouse {
		if (this.instance === undefined) {
			this.instance = new Mouse();
		}

		return this.instance;
	}

	/**
	 * Setter: X & Y positions
	 * @param {HTMLCanvasElement} canvas Canvas element
	 * @param {MouseEvent}        event  Mouse event
	 */
	public setMousePosition(canvas: HTMLCanvasElement, event: MouseEvent): void {
		let canvasPos = canvas.getBoundingClientRect();
		this.positionX = event.clientX - canvasPos.left,
		this.positionY = event.clientY - canvasPos.top
	}

	/**
	 * Getter: X & Y positions
	 * @return {number} Position X
	 */
	public getMousePosition(): {x: number, y: number} {
		return {
			x: this.positionX,
			y: this.positionY
		};
	}

	/**
	 * Movement listener - change mouse position while moving
	 * @param {Canvas} canvas Canvas object
	 */
	public movementListener(canvas: Canvas) {
		canvas.getCanvas().addEventListener('mousemove', (event) => {
			this.setMousePosition(canvas.getCanvas(), event);
		});
	}

}