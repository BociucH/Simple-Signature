/*
|--------------------------------------------------------------------------
| Generate Canvas styling etc.
|--------------------------------------------------------------------------
*/

export class Canvas {

	/**
	 * Width of canvas field
	 * @type {number}
	 */
	private width: number;
	
	/**
	 * Height of canvas field
	 * @type {number}
	 */
	private height: number;

	/**
	 * Canvas element in HTML file
	 * @type {HTMLCanvasElement}
	 */
	private canvasElement: HTMLCanvasElement;

	/**
	 * Canvas context
	 * @type {CanvasRenderingContext2D}
	 */
	private canvasContext: CanvasRenderingContext2D;

	/**
	 * Instance (Singleton pattern)
	 * @type {Canvas}
	 */
	private static instance: Canvas;
	
	/**
	 * Constructor
	 */
	private constructor() {}

	/**
	 * Instance (Singleton pattern)
	 * @return {Canvas} Canvas object
	 */
	public static getInstance(): Canvas {
		if (this.instance === undefined) {
			this.instance = new Canvas();
		}

		return this.instance;
	}

	/**
	 * Setup method to initialize basic stuff (fillings and border) - make it visible
	 * @param {string = 'white'} backgroundColor Background color
	 * @param {string = 'grey'}  borderColor     Border color
	 */
	public setup(backgroundColor: string = 'white', borderColor: string = 'grey'): void {
		this.canvasElement.width = this.width;
		this.canvasElement.height = this.height;

		// Background and Border
		this.canvasContext.fillStyle = backgroundColor;
		this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
		this.canvasContext.strokeStyle = borderColor;
		this.canvasContext.strokeRect(0, 0, this.canvasElement.width, this.canvasElement.height);
	}

	/**
	 * Redner an image of current canvas content
	 * @return {string} Base64 image code
	 */
	public renderImage(): string {
		let imgBase64 = this.canvasElement.toDataURL('image/png');
		return imgBase64.split(",")[1];
	}

	/**
	 * Clear up the canvas
	 */
	public clearup(): void {
		this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

		// restore background and border
		this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
		this.canvasContext.strokeRect(0, 0, this.canvasElement.width, this.canvasElement.height);
	}

	/**
	 * Getter: width
	 * @return {number} [description]
	 */
	public getWidth(): number {
		return this.width;
	}

	/**
	 * Getter: height
	 * @return {number} [description]
	 */
	public getHeight(): number {
		return this.height;
	}

	/**
	 * Getter: Canvas element
	 * @return {HTMLCanvasElement} Canvas element
	 */
	public getCanvas(): HTMLCanvasElement {
		return this.canvasElement;
	}

	/**
	 * Getter: Canvas context
	 * @return {CanvasRenderingContext2D} Canvas context
	 */
	public getCanvasContext(): CanvasRenderingContext2D {
		return this.canvasContext;
	}
	

	/**
	 * Setter: width
	 * @param {number} width [description]
	 */
	public setWidth(width: number): void {
		this.width = width;
	}

	/**
	 * Setter: height
	 * @param {number} height [description]
	 */
	public setHeight(height: number): void {
		this.height = height;
	}

	/**
	 * Setter: Canvas element & Canvas context
	 * @param {string} canvasElement [description]
	 */
	public setCanvasElement(canvasElement: string): void {
		this.canvasElement = <HTMLCanvasElement> document.querySelector(canvasElement);
		this.canvasContext = <CanvasRenderingContext2D> this.canvasElement.getContext('2d');
	}

}