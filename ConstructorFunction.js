



//Constructor Function with item Example

function Item(id, name, price, type) {
    this.Id = id;
    this.Name = name;
    this.Price = price;
    this.Type = type;

    
}
//Constructor Function with Catalog Example
function Catalog() {
    this.items = [];
}

//addItem
Catalog.prototype.addItem = function (obj) {
    this.items.push(obj);
    console.log(this.items)

}

//removeItem

Catalog.prototype.removeItem = function (id) {
    //console.log(this.items)
    for (var i = 0; i < arrayitem.length - 1; i++) {
        if (arrayitem[i].Id === id) {
            arrayitem.splice(i, 1);
        }
  }
   
    console.log("remaing items"+ arrayitem)
}
//findItem
Catalog.prototype.findItem = function (id) {

    for (var i = 0; i <= arrayitem.length - 1; i++) {
        if (arrayitem[i].Id === id) {
            alert( arrayitem[i].Id + ", " + arrayitem[i].Name + "," + arrayitem[i].Price + "," + arrayitem[i].Type);
        }
    }
  
}


var arrayitem=[];

arrayitem[0] = new Item(123, 'chair', 500, 'plastic');
var cat_item = new Catalog();
arrayitem[1] = new Item(456, 'table', 1000, 'wood');
arrayitem[2] = new Item(789, 'bag', 800, 'cloth');
arrayitem[3] = new Item(901, 'bottle', 100, 'plastic');
cat_item.addItem(arrayitem);
cat_item.findItem(901);
cat_item.removeItem(456);
