function Button(text) {
    this.text = text || "Hello"
}
Button.prototype = {
    create: function () {
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        var self = this;
        this.element.addEventListener('click', function () {
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
}
var btn1 = new Button('Hello!');
btn1.create()