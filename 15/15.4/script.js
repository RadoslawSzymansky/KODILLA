function Phone(brand, model, price, color, cameraResolutionMP) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.cameraResolutionMP = cameraResolutionMP;
    this.model = model;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", model: " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.canBuy = function (walletValue) {
    var phones = Math.floor(walletValue / this.price);
    var rest = walletValue % this.price;
    console.log(phones ? `You can buy ${phones} ${phones>1?"phones":"phone"}` : "Sorry, you dont have enough money to buy this phone");
    phones ? console.log(`In your wallet will stay ${rest}$`) : null;
}
Phone.prototype.showCameraInfo = function () {
    console.log(this.brand + " " + this.model + ` camera resolution is ${this.cameraResolutionMP} megapixels.`);
}
var iPhone6S = new Phone("Apple", "S6", 2250, "silver", 12);
var samsungGalaxyS6 = new Phone("Samsung", "S6", 2100, "black", 8);
var onePlusOne = new Phone("OnePlus", "One", 1850, "white", 16);
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
onePlusOne.canBuy(3701);
onePlusOne.showCameraInfo();