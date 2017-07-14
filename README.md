# Simple Signature
Simple Signature is a simple JavaScript library for online agreements signing. It can be easily attached to your website and allow you to sign an online agreement. It's indepenedant - you can use it without any additional scripts.

![Example](https://raw.githubusercontent.com/BociucH/Simple-Signature/master/example/img/bde5338ddd2dbe33d2b1ef3346df4799.jpg)

## Installation
To install all dependencies:
```bash
npm install
```
You can download the minified version of the script [here](https://raw.githubusercontent.com/BociucH/Simple-Signature/master/example/js/signature.min.js).
## Usage

```html
<canvas id="signature"></canvas>

<script src="js/signature.min.js"></script>
<script>
  Signature.init({
    width: 200,
    height: 200,
    canvasElement: '#signature'
  });
</script>
```
### Options
<dl>
<dt>width</dt>
<dd>Width of the specified canvas element.</dd>
<dt>height</dt>
<dd>Height of the specified canvas element.</dd>
<dt>canvasElement</dt>
<dd>Specifies the canvas element which you want the Signature Script to be attached to.</dd>
</dl>

##

You can also add two buttons under the canvas element:
```html
<button id="save-signature">Save your signature</button>
<button id="clear-signature">Clear</button>
```
<dl>
<dt>button id="save-signature"</dt>
<dd>Uploads the signature to the server</dd>
<dt>button id="clear-signature"</dt>
<dd>Clears the canvas</dd>
</dl>
