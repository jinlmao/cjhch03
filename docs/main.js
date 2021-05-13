(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Display Product-->\r\n<app-products-list [productList]=\"products\"></app-products-list>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/app/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.products =
            [
                new _product__WEBPACK_IMPORTED_MODULE_1__["Product"]('MYSHOES', 'Black Running Shoes', 'assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Shoes'], 109.99),
                new _product__WEBPACK_IMPORTED_MODULE_1__["Product"]('NEATOJACKET', 'Blue Jacket', 'assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
                new _product__WEBPACK_IMPORTED_MODULE_1__["Product"]('NICEHAT', 'A Nice Black Hat', 'assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
            ];
        this.shoppingList = [];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/products-list/products-list.component.ts");
/* harmony import */ var _product_row_product_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-row/product-row.component */ "./src/app/product-row/product-row.component.ts");
/* harmony import */ var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-image/product-image.component */ "./src/app/product-image/product-image.component.ts");
/* harmony import */ var _product_department_product_department_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-department/product-department.component */ "./src/app/product-department/product-department.component.ts");
/* harmony import */ var _price_display_price_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./price-display/price-display.component */ "./src/app/price-display/price-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"],
                _product_row_product_row_component__WEBPACK_IMPORTED_MODULE_4__["ProductRowComponent"],
                _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_5__["ProductImageComponent"],
                _product_department_product_department_component__WEBPACK_IMPORTED_MODULE_6__["ProductDepartmentComponent"],
                _price_display_price_display_component__WEBPACK_IMPORTED_MODULE_7__["PriceDisplayComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/price-display/price-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/price-display/price-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/price-display/price-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/price-display/price-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    ${{ price }}\n</p>"

/***/ }),

/***/ "./src/app/price-display/price-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/price-display/price-display.component.ts ***!
  \**********************************************************/
/*! exports provided: PriceDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceDisplayComponent", function() { return PriceDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceDisplayComponent = /** @class */ (function () {
    function PriceDisplayComponent() {
    }
    PriceDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PriceDisplayComponent.prototype, "price", void 0);
    PriceDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price-display',
            template: __webpack_require__(/*! ./price-display.component.html */ "./src/app/price-display/price-display.component.html"),
            styles: [__webpack_require__(/*! ./price-display.component.css */ "./src/app/price-display/price-display.component.css")]
        })
        /**
         * @PriceDisplay: A component to show the price of a
         * Product
         */
        ,
        __metadata("design:paramtypes", [])
    ], PriceDisplayComponent);
    return PriceDisplayComponent;
}());



/***/ }),

/***/ "./src/app/product-department/product-department.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product-department/product-department.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-department/product-department.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product-department/product-department.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item active\" aria-current=\"page\"\n        *ngFor=\"let name of product.department; let i=index\">\n        <a href=\"#\">{{name}}</a>\n    </li>\n  </ol>\n</nav>"

/***/ }),

/***/ "./src/app/product-department/product-department.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-department/product-department.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDepartmentComponent", function() { return ProductDepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDepartmentComponent = /** @class */ (function () {
    function ProductDepartmentComponent() {
    }
    ProductDepartmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductDepartmentComponent.prototype, "product", void 0);
    ProductDepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-department',
            template: __webpack_require__(/*! ./product-department.component.html */ "./src/app/product-department/product-department.component.html"),
            styles: [__webpack_require__(/*! ./product-department.component.css */ "./src/app/product-department/product-department.component.css")]
        })
        /**
         * @ProductDepartment: A component to show the breadcrumbs to a
         * Product's department
         */
        ,
        __metadata("design:paramtypes", [])
    ], ProductDepartmentComponent);
    return ProductDepartmentComponent;
}());



/***/ }),

/***/ "./src/app/product-image/product-image.component.css":
/*!***********************************************************!*\
  !*** ./src/app/product-image/product-image.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-image/product-image.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-image/product-image.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImageComponent", function() { return ProductImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductImageComponent = /** @class */ (function () {
    function ProductImageComponent() {
    }
    ProductImageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductImageComponent.prototype, "product", void 0);
    ProductImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-image',
            template: "\n  <img [src]=\"product.imageUrl\" class=\"rounded img-fluid\" [alt]=\"product.imageUrl\">\n  ",
            styles: [__webpack_require__(/*! ./product-image.component.css */ "./src/app/product-image/product-image.component.css")]
        })
        /**
         * @ProductImage: A component to show a single Product's image
         */
        ,
        __metadata("design:paramtypes", [])
    ], ProductImageComponent);
    return ProductImageComponent;
}());



/***/ }),

/***/ "./src/app/product-row/product-row.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-row/product-row.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Highlight {\n    border-color: #007bff!important;\n  }\n\n.mystyle{\n    margin-top:10px;\n}"

/***/ }),

/***/ "./src/app/product-row/product-row.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-row/product-row.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card Highlight\" style=\"margin:2em\">\n  <div class=\"card-body\">\n    <div class=\"row align-items-start\">\n      <!--Image column-->\n      <div class=\"col-sm-3\">\n        <app-product-image [product]=\"product\"></app-product-image>\n      </div>\n\n      <!-- Product Detail Column-->\n      <div class=\"col-sm-6\">\n        <!-- Product Name Row-->\n        <div class=\"row header\">\n          <h3 class=\"card-title\">{{ product.name }}</h3>\n        </div>\n        <!-- Product SKU Row-->\n        <div class=\"row mystyle\">\n          <p class=\"card-text container\">\n            SKU #{{ product.sku }}\n          </p>\n        </div>\n        <!-- Product Department Row-->\n        <div class=\"row mystyle\">\n          <app-product-department [product]=\"product\"></app-product-department>\n        </div>\n\n      </div>\n\n      <!--Product Price Column-->\n      <div class=\"col-sm-3\">\n       \n        <div class=\"row container\">\n          <button type=\"button\" class=\"btn btn-primary btn-lg \" (click)=\"addToCart()\"> <app-price-display [price]=\"product.price\"></app-price-display></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/product-row/product-row.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-row/product-row.component.ts ***!
  \******************************************************/
/*! exports provided: ProductRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRowComponent", function() { return ProductRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductRowComponent = /** @class */ (function () {
    function ProductRowComponent() {
        this.selectedProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductRowComponent.prototype.ngOnInit = function () {
    };
    ProductRowComponent.prototype.addToCart = function () {
        this.selectedProduct.emit(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductRowComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductRowComponent.prototype, "selectedProduct", void 0);
    ProductRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-row',
            template: __webpack_require__(/*! ./product-row.component.html */ "./src/app/product-row/product-row.component.html"),
            styles: [__webpack_require__(/*! ./product-row.component.css */ "./src/app/product-row/product-row.component.css")]
        })
        /**
         * @ProductRow: A Component For View of Single product
         */
        ,
        __metadata("design:paramtypes", [])
    ], ProductRowComponent);
    return ProductRowComponent;
}());



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(sku, name, imageUrl, department, price) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.department = department;
        this.price = price;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/products-list/products-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/products-list/products-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products-list/products-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/products-list/products-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of productList; let i=index\">\n  <app-product-row [product]=\"product\" (selectedProduct)=\"clicked($event)\" >\n  </app-product-row>\n</div>"

/***/ }),

/***/ "./src/app/products-list/products-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-list/products-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent() {
        this.onProductSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductsListComponent.prototype.ngOnInit = function () {
    };
    ProductsListComponent.prototype.clicked = function (product) {
        this.onProductSelected.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductsListComponent.prototype, "productList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductsListComponent.prototype, "onProductSelected", void 0);
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.css */ "./src/app/products-list/products-list.component.css")]
        })
        /**
        * @ProductsList: A component for rendering all ProductRows and
        * storing the currently selected Product
        */
        ,
        __metadata("design:paramtypes", [])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ang1\Angular-Inventory-Management-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map