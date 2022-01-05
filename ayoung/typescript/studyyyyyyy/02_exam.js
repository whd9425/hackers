var OfficeSupplies = /** @class */ (function () {
    function OfficeSupplies(name, needs, price) {
        this.name = name;
        this.needs = needs;
        this.price = price;
    }
    return OfficeSupplies;
}());
var keyboard = new OfficeSupplies('키보드', 4, 20000);
var mouse = new OfficeSupplies('마우스', 8, 10000);
var ruler = new OfficeSupplies('자', 20, 1000);
function generateObj(obj) {
    return obj;
}
function totalPrice(name, needs, price) {
    console.log("".concat(name, "\uC758 \uCD1D \uAC00\uACA9\uC740 ").concat(needs * price, "\uC6D0 \uC785\uB2C8\uB2E4."));
}
var objName = generateObj(keyboard.name);
var objNeeds = generateObj(keyboard.needs);
var objPrice = generateObj(keyboard.price);
totalPrice(objName, objNeeds, objPrice);
