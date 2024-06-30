"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cms_Books_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/Books.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/Books.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/pagination-nav/pagination-nav.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['searchRoute', 'search'],
  components: {
    BPaginationNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__.BPaginationNav
  },
  data: function data() {
    return {
      message: '',
      categories: '',
      books: '',
      totalPages: 1
    };
  },
  mounted: function mounted() {
    this.getBooks();
    this.getCategories();
  },
  methods: {
    // Ask the user to confirm the deletion, if the user confirms, proceed with the deletion.
    confirmDelete: function confirmDelete(id) {
      if (window.confirm('Are you sure you want to delete this record?')) {
        this.deleteRecord(id);
      }
    },
    // Delete book.
    deleteRecord: function deleteRecord(id) {
      var _this = this;
      // Make an HTTP DELETE request to delete the record with the given ID
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/book/".concat(id, "/delete")).then(function (response) {
        // Remove the deleted record from the local array
        _this.message = response.data['message'];
        window.location.reload();
      })["catch"](function (error) {
        console.error('Error deleting record:', error);
      });
    },
    linkGen: function linkGen(pageNum) {
      return pageNum === 1 ? '?' : "?page=".concat(pageNum);
    },
    // Get all books.
    getBooks: function getBooks() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/books" + window.location.search).then(function (response) {
                _this2.books = response.data;
                _this2.totalPages = response.data.last_page;
              })["catch"](function (error) {
                console.error('Error fetching data:', error);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // Get all categories.
    getCategories: function getCategories() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/categories").then(function (response) {
                _this3.categories = response.data;
              })["catch"](function (error) {
                console.error('Error fetching data:', error);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/Books.vue?vue&type=template&id=2ed05689":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/Books.vue?vue&type=template&id=2ed05689 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.message ? _c("div", [_c("h5", {
    staticClass: "alert alert-success"
  }, [_vm._v("\n            " + _vm._s(_vm.message) + "\n        ")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row mt-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col text-end"
  }, [_c("form", {
    staticClass: "row g-2 mb-2 float-end",
    attrs: {
      action: "/search",
      method: "GET"
    }
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "search",
      placeholder: "Search books"
    },
    domProps: {
      value: _vm.search
    }
  })]), _vm._v(" "), _vm._m(1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("table", {
    staticClass: "w-100 mt-2",
    attrs: {
      id: "bookTable"
    }
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "border"
  }, [_vm._v("ID")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Image")]), _vm._v(" "), _c("th", {
    staticClass: "border",
    on: {
      click: function click($event) {
        return _vm.sortBy("name");
      }
    }
  }, [_vm._v("Name\n                    "), _c("svg", {
    staticClass: "bi bi-caret-up-fill",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    }
  }, [_c("path", {
    attrs: {
      d: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
    }
  })]), _vm._v(" "), _c("svg", {
    staticClass: "bi bi-caret-down-fill",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    }
  }, [_c("path", {
    attrs: {
      d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
    }
  })])]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("ISBN")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Author")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Category")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Ratings")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Price")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Publisher")]), _vm._v(" "), _c("th", {
    staticClass: "border publication_date"
  }, [_vm._v("Publication Date")]), _vm._v(" "), _c("th", {
    staticClass: "border"
  }, [_vm._v("Operations")])])]), _vm._v(" "), _vm._l(this.books.data, function (book, index) {
    return _c("tr", [_c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.id))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_c("a", {
      attrs: {
        href: "/book/".concat(book.id, "/edit")
      }
    }, [_c("img", {
      staticClass: "book_image",
      attrs: {
        src: "/images/".concat(book.image),
        alt: "book image"
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_c("a", {
      staticClass: "text-decoration-none",
      attrs: {
        href: "/book/".concat(book.id, "/edit")
      }
    }, [_vm._v("\n                        " + _vm._s(book.name) + "\n                    ")])]), _vm._v(" "), _c("td", {
      staticClass: "border isbn"
    }, [_vm._v(_vm._s(book.isbn))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.author))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, _vm._l(_vm.categories, function (category) {
      return _c("div", {
        key: category.id
      }, [category.id === book.category ? _c("span", [_vm._v(_vm._s(category.name))]) : _vm._e()]);
    }), 0), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.ratings))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.price))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.stock.quantity))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.publisher))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_vm._v(_vm._s(book.publication_date))]), _vm._v(" "), _c("td", {
      staticClass: "border"
    }, [_c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "p-1"
    }, [_c("a", {
      attrs: {
        href: "/book/".concat(book.id, "/edit")
      }
    }, [_c("button", {
      staticClass: "btn btn-primary"
    }, [_vm._v("Edit")])])]), _vm._v(" "), _c("div", {
      staticClass: "p-1"
    }, [_c("button", {
      staticClass: "btn btn-primary",
      on: {
        click: function click($event) {
          return _vm.confirmDelete(book.id);
        }
      }
    }, [_vm._v("Delete")])])])])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "overflow-auto d-flex justify-content-center mt-4"
  }, [_c("b-pagination-nav", {
    attrs: {
      "link-gen": _vm.linkGen,
      "number-of-pages": this.totalPages,
      "use-router": ""
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col text-start"
  }, [_c("a", {
    attrs: {
      href: "/book/add"
    }
  }, [_c("button", {
    staticClass: "btn btn-primary"
  }, [_vm._v("Add New Book")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-auto"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Search")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/link/link.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/link/link.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLink: () => (/* binding */ BLink),
/* harmony export */   nuxtLinkProps: () => (/* binding */ nuxtLinkProps),
/* harmony export */   props: () => (/* binding */ props),
/* harmony export */   routerLinkProps: () => (/* binding */ routerLinkProps)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _mixins_attrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/attrs */ "./node_modules/bootstrap-vue/esm/mixins/attrs.js");
/* harmony import */ var _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js");
/* harmony import */ var _mixins_listeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/listeners */ "./node_modules/bootstrap-vue/esm/mixins/listeners.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // --- Constants ---

var ROOT_EVENT_NAME_CLICKED = (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK, 'clicked'); // --- Props ---
// `<router-link>` specific props

var routerLinkProps = {
  activeClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  append: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  event: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_STRING),
  exact: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  exactActiveClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  exactPath: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  exactPathActiveClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  replace: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  routerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  to: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_OBJECT_STRING)
}; // `<nuxt-link>` specific props

var nuxtLinkProps = {
  noPrefetch: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // Must be `null` to fall back to the value defined in the
  // `nuxt.config.js` configuration file for `router.prefetchLinks`
  // We convert `null` to `undefined`, so that Nuxt.js will use the
  // compiled default
  // Vue treats `undefined` as default of `false` for Boolean props,
  // so we must set it as `null` here to be a true tri-state prop
  prefetch: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, null)
}; // All `<b-link>` props

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.sortKeys)(_objectSpread(_objectSpread(_objectSpread({}, nuxtLinkProps), routerLinkProps), {}, {
  active: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  href: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  // Must be `null` if no value provided
  rel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, null),
  // To support 3rd party router links based on `<router-link>` (i.e. `g-link` for Gridsome)
  // Default is to auto choose between `<router-link>` and `<nuxt-link>`
  // Gridsome doesn't provide a mechanism to auto detect and has caveats
  // such as not supporting FQDN URLs or hash only URLs
  routerComponentName: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  target: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, '_self')
})), _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK); // --- Main component ---
// @vue/component

var BLink = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK,
  // Mixin order is important!
  mixins: [_mixins_attrs__WEBPACK_IMPORTED_MODULE_6__.attrsMixin, _mixins_listeners__WEBPACK_IMPORTED_MODULE_7__.listenersMixin, _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_8__.listenOnRootMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  inheritAttrs: false,
  props: props,
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          disabled = this.disabled,
          routerComponentName = this.routerComponentName;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeTag)({
        to: to,
        disabled: disabled,
        routerComponentName: routerComponentName
      }, this);
    },
    isRouterLink: function isRouterLink() {
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.isRouterLink)(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var target = this.target,
          rel = this.rel;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeRel)({
        target: target,
        rel: rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          href = this.href;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeHref)({
        to: to,
        href: href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      var event = this.event,
          prefetch = this.prefetch,
          routerTag = this.routerTag;
      return this.isRouterLink ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.pluckProps)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.omit)(_objectSpread(_objectSpread({}, routerLinkProps), this.computedTag === 'nuxt-link' ? nuxtLinkProps : {}), ['event', 'prefetch', 'routerTag']), this)), event ? {
        event: event
      } : {}), (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isBoolean)(prefetch) ? {
        prefetch: prefetch
      } : {}), routerTag ? {
        tag: routerTag
      } : {}) : {};
    },
    computedAttrs: function computedAttrs() {
      var bvAttrs = this.bvAttrs,
          href = this.computedHref,
          rel = this.computedRel,
          disabled = this.disabled,
          target = this.target,
          routerTag = this.routerTag,
          isRouterLink = this.isRouterLink;
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bvAttrs), href ? {
        href: href
      } : {}), isRouterLink && routerTag && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.isTag)(routerTag, 'a') ? {} : {
        rel: rel,
        target: target
      }), {}, {
        tabindex: disabled ? '-1' : (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(bvAttrs.tabindex) ? null : bvAttrs.tabindex,
        'aria-disabled': disabled ? 'true' : null
      });
    },
    computedListeners: function computedListeners() {
      return _objectSpread(_objectSpread({}, this.bvListeners), {}, {
        // We want to overwrite any click handler since our callback
        // will invoke the user supplied handler(s) if `!this.disabled`
        click: this.onClick
      });
    }
  },
  methods: {
    onClick: function onClick(event) {
      var _arguments = arguments;
      var eventIsEvent = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isEvent)(event);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.bvListeners.click;

      if (eventIsEvent && this.disabled) {
        // Stop event from bubbling up
        // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.stopEvent)(event, {
          immediatePropagation: true
        });
      } else {
        // Router links do not emit instance `click` events, so we
        // add in an `$emit('click', event)` on its Vue instance
        //
        // seems not to be required for Vue3 compat build

        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink) {
          var _event$currentTarget$;

          (_event$currentTarget$ = event.currentTarget.__vue__) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_13__.EVENT_NAME_CLICK, event);
        } // Call the suppliedHandler(s), if any provided


        (0,_utils_array__WEBPACK_IMPORTED_MODULE_14__.concat)(suppliedHandler).filter(function (h) {
          return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isFunction)(h);
        }).forEach(function (handler) {
          handler.apply(void 0, _toConsumableArray(_arguments));
        }); // Emit the global `$root` click event

        this.emitOnRoot(ROOT_EVENT_NAME_CLICKED, event); // TODO: Remove deprecated 'clicked::link' event with next major release

        this.emitOnRoot('clicked::link', event);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (eventIsEvent && !isRouterLink && this.computedHref === '#') {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.stopEvent)(event, {
          propagation: false
        });
      }
    },
    focus: function focus() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptFocus)(this.$el);
    },
    blur: function blur() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptBlur)(this.$el);
    }
  },
  render: function render(h) {
    var active = this.active,
        disabled = this.disabled;
    return h(this.computedTag, _defineProperty({
      class: {
        active: active,
        disabled: disabled
      },
      attrs: this.computedAttrs,
      props: this.computedProps
    }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot());
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/pagination-nav/pagination-nav.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/pagination-nav/pagination-nav.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BPaginationNav: () => (/* binding */ BPaginationNav),
/* harmony export */   sanitizeNumberOfPages: () => (/* binding */ sanitizeNumberOfPages)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bv-event.class */ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/math */ "./node_modules/bootstrap-vue/esm/utils/math.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/esm/utils/warn.js");
/* harmony import */ var _mixins_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/pagination */ "./node_modules/bootstrap-vue/esm/mixins/pagination.js");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















 // --- Helper methods ---
// Sanitize the provided number of pages (converting to a number)

var sanitizeNumberOfPages = function sanitizeNumberOfPages(value) {
  return (0,_utils_math__WEBPACK_IMPORTED_MODULE_0__.mathMax)((0,_utils_number__WEBPACK_IMPORTED_MODULE_1__.toInteger)(value, 0), 1);
}; // --- Props ---

var _linkProps = (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.omit)(_link_link__WEBPACK_IMPORTED_MODULE_3__.props, ['event', 'routerTag']);

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.sortKeys)(_objectSpread(_objectSpread(_objectSpread({}, _mixins_pagination__WEBPACK_IMPORTED_MODULE_5__.props), _linkProps), {}, {
  baseUrl: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_STRING, '/'),
  linkGen: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_FUNCTION),
  // Disable auto page number detection if `true`
  noPageDetect: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_BOOLEAN, false),
  numberOfPages: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_NUMBER_STRING, 1,
  /* istanbul ignore next */
  function (value) {
    var number = (0,_utils_number__WEBPACK_IMPORTED_MODULE_1__.toInteger)(value, 0);

    if (number < 1) {
      (0,_utils_warn__WEBPACK_IMPORTED_MODULE_7__.warn)('Prop "number-of-pages" must be a number greater than "0"', _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_PAGINATION_NAV);
      return false;
    }

    return true;
  }),
  pageGen: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_FUNCTION),
  // Optional array of page links
  pages: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_ARRAY),
  useRouter: (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_6__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_PAGINATION_NAV); // --- Main component ---
// @vue/component

var BPaginationNav = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_9__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_PAGINATION_NAV,
  // The render function is brought in via the pagination mixin
  mixins: [_mixins_pagination__WEBPACK_IMPORTED_MODULE_5__.paginationMixin],
  props: props,
  computed: {
    // Used by render function to trigger wrapping in '<nav>' element
    isNav: function isNav() {
      return true;
    },
    computedValue: function computedValue() {
      // Returns the value prop as a number or `null` if undefined or < 1
      var value = (0,_utils_number__WEBPACK_IMPORTED_MODULE_1__.toInteger)(this.value, 0);
      return value < 1 ? null : value;
    }
  },
  watch: {
    numberOfPages: function numberOfPages() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNumberOfPages();
      });
    },
    pages: function pages() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setNumberOfPages();
      });
    }
  },
  created: function created() {
    this.setNumberOfPages();
  },
  mounted: function mounted() {
    var _this3 = this;

    if (this.$router) {
      // We only add the watcher if vue router is detected
      this.$watch('$route', function () {
        _this3.$nextTick(function () {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.requestAF)(function () {
            _this3.guessCurrentPage();
          });
        });
      });
    }
  },
  methods: {
    setNumberOfPages: function setNumberOfPages() {
      var _this4 = this;

      if ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isArray)(this.pages) && this.pages.length > 0) {
        this.localNumberOfPages = this.pages.length;
      } else {
        this.localNumberOfPages = sanitizeNumberOfPages(this.numberOfPages);
      }

      this.$nextTick(function () {
        _this4.guessCurrentPage();
      });
    },
    onClick: function onClick(event, pageNumber) {
      var _this5 = this;

      // Dont do anything if clicking the current active page
      if (pageNumber === this.currentPage) {
        return;
      }

      var target = event.currentTarget || event.target; // Emit a user-cancelable `page-click` event

      var clickEvent = new _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_12__.BvEvent(_constants_events__WEBPACK_IMPORTED_MODULE_13__.EVENT_NAME_PAGE_CLICK, {
        cancelable: true,
        vueTarget: this,
        target: target
      });
      this.$emit(clickEvent.type, clickEvent, pageNumber);

      if (clickEvent.defaultPrevented) {
        return;
      } // Update the `v-model`
      // Done in in requestAF() to allow browser to complete the
      // native browser click handling of a link


      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.requestAF)(function () {
        _this5.currentPage = pageNumber;

        _this5.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_13__.EVENT_NAME_CHANGE, pageNumber);
      }); // Emulate native link click page reloading behaviour by blurring the
      // paginator and returning focus to the document
      // Done in a `nextTick()` to ensure rendering complete

      this.$nextTick(function () {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.attemptBlur)(target);
      });
    },
    getPageInfo: function getPageInfo(pageNumber) {
      if (!(0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isArray)(this.pages) || this.pages.length === 0 || (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(this.pages[pageNumber - 1])) {
        var link = "".concat(this.baseUrl).concat(pageNumber);
        return {
          link: this.useRouter ? {
            path: link
          } : link,
          text: (0,_utils_string__WEBPACK_IMPORTED_MODULE_14__.toString)(pageNumber)
        };
      }

      var info = this.pages[pageNumber - 1];

      if ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isObject)(info)) {
        var _link = info.link;
        return {
          // Normalize link for router use
          link: (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isObject)(_link) ? _link : this.useRouter ? {
            path: _link
          } : _link,
          // Make sure text has a value
          text: (0,_utils_string__WEBPACK_IMPORTED_MODULE_14__.toString)(info.text || pageNumber)
        };
      } else {
        return {
          link: (0,_utils_string__WEBPACK_IMPORTED_MODULE_14__.toString)(info),
          text: (0,_utils_string__WEBPACK_IMPORTED_MODULE_14__.toString)(pageNumber)
        };
      }
    },
    makePage: function makePage(pageNumber) {
      var pageGen = this.pageGen;
      var info = this.getPageInfo(pageNumber);

      if ((0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.hasPropFunction)(pageGen)) {
        return pageGen(pageNumber, info);
      }

      return info.text;
    },
    makeLink: function makeLink(pageNumber) {
      var linkGen = this.linkGen;
      var info = this.getPageInfo(pageNumber);

      if ((0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.hasPropFunction)(linkGen)) {
        return linkGen(pageNumber, info);
      }

      return info.link;
    },
    linkProps: function linkProps(pageNumber) {
      var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_4__.pluckProps)(_linkProps, this);
      var link = this.makeLink(pageNumber);

      if (this.useRouter || (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isObject)(link)) {
        props.to = link;
      } else {
        props.href = link;
      }

      return props;
    },
    resolveLink: function resolveLink() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // Given a to (or href string), convert to normalized route-like structure
      // Works only client side!
      var link;

      try {
        // Convert the `to` to a HREF via a temporary `a` tag
        link = document.createElement('a');
        link.href = (0,_utils_router__WEBPACK_IMPORTED_MODULE_15__.computeHref)({
          to: to
        }, 'a', '/', '/'); // We need to add the anchor to the document to make sure the
        // `pathname` is correctly detected in any browser (i.e. IE)

        document.body.appendChild(link); // Once href is assigned, the link will be normalized to the full URL bits

        var _link2 = link,
            pathname = _link2.pathname,
            hash = _link2.hash,
            search = _link2.search; // Remove link from document

        document.body.removeChild(link); // Return the location in a route-like object

        return {
          path: pathname,
          hash: hash,
          query: (0,_utils_router__WEBPACK_IMPORTED_MODULE_15__.parseQuery)(search)
        };
      } catch (e) {
        /* istanbul ignore next */
        try {
          link && link.parentNode && link.parentNode.removeChild(link);
        } catch (_unused) {}
        /* istanbul ignore next */


        return {};
      }
    },
    resolveRoute: function resolveRoute() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // Given a to (or href string), convert to normalized route location structure
      // Works only when router available!
      try {
        var route = this.$router.resolve(to, this.$route).route;
        return {
          path: route.path,
          hash: route.hash,
          query: route.query
        };
      } catch (e) {
        /* istanbul ignore next */
        return {};
      }
    },
    guessCurrentPage: function guessCurrentPage() {
      var $router = this.$router,
          $route = this.$route;
      var guess = this.computedValue; // This section only occurs if we are client side, or server-side with `$router`

      if (!this.noPageDetect && !guess && (_constants_env__WEBPACK_IMPORTED_MODULE_16__.IS_BROWSER || !_constants_env__WEBPACK_IMPORTED_MODULE_16__.IS_BROWSER && $router)) {
        // Current route (if router available)
        var currentRoute = $router && $route ? {
          path: $route.path,
          hash: $route.hash,
          query: $route.query
        } : {}; // Current page full HREF (if client side)
        // Can't be done as a computed prop!

        var loc = _constants_env__WEBPACK_IMPORTED_MODULE_16__.IS_BROWSER ? window.location || document.location : null;
        var currentLink = loc ? {
          path: loc.pathname,
          hash: loc.hash,
          query: (0,_utils_router__WEBPACK_IMPORTED_MODULE_15__.parseQuery)(loc.search)
        } :
        /* istanbul ignore next */
        {}; // Loop through the possible pages looking for a match until found

        for (var pageNumber = 1; !guess && pageNumber <= this.localNumberOfPages; pageNumber++) {
          var to = this.makeLink(pageNumber);

          if ($router && ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isObject)(to) || this.useRouter)) {
            // Resolve the page via the `$router`
            guess = (0,_utils_loose_equal__WEBPACK_IMPORTED_MODULE_17__.looseEqual)(this.resolveRoute(to), currentRoute) ? pageNumber : null;
          } else if (_constants_env__WEBPACK_IMPORTED_MODULE_16__.IS_BROWSER) {
            // If no `$router` available (or `!this.useRouter` when `to` is a string)
            // we compare using parsed URIs
            guess = (0,_utils_loose_equal__WEBPACK_IMPORTED_MODULE_17__.looseEqual)(this.resolveLink(to), currentLink) ? pageNumber : null;
          } else {
            // Probably SSR, but no `$router` so we can't guess,
            // so lets break out of the loop early

            /* istanbul ignore next */
            guess = -1;
          }
        }
      } // We set `currentPage` to `0` to trigger an `$emit('input', null)`
      // As the default for `currentPage` is `-1` when no value is specified
      // Valid page numbers are greater than `0`


      this.currentPage = guess > 0 ? guess : 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/components.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/components.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAME_ALERT: () => (/* binding */ NAME_ALERT),
/* harmony export */   NAME_ASPECT: () => (/* binding */ NAME_ASPECT),
/* harmony export */   NAME_AVATAR: () => (/* binding */ NAME_AVATAR),
/* harmony export */   NAME_AVATAR_GROUP: () => (/* binding */ NAME_AVATAR_GROUP),
/* harmony export */   NAME_BADGE: () => (/* binding */ NAME_BADGE),
/* harmony export */   NAME_BREADCRUMB: () => (/* binding */ NAME_BREADCRUMB),
/* harmony export */   NAME_BREADCRUMB_ITEM: () => (/* binding */ NAME_BREADCRUMB_ITEM),
/* harmony export */   NAME_BREADCRUMB_LINK: () => (/* binding */ NAME_BREADCRUMB_LINK),
/* harmony export */   NAME_BUTTON: () => (/* binding */ NAME_BUTTON),
/* harmony export */   NAME_BUTTON_CLOSE: () => (/* binding */ NAME_BUTTON_CLOSE),
/* harmony export */   NAME_BUTTON_GROUP: () => (/* binding */ NAME_BUTTON_GROUP),
/* harmony export */   NAME_BUTTON_TOOLBAR: () => (/* binding */ NAME_BUTTON_TOOLBAR),
/* harmony export */   NAME_CALENDAR: () => (/* binding */ NAME_CALENDAR),
/* harmony export */   NAME_CARD: () => (/* binding */ NAME_CARD),
/* harmony export */   NAME_CARD_BODY: () => (/* binding */ NAME_CARD_BODY),
/* harmony export */   NAME_CARD_FOOTER: () => (/* binding */ NAME_CARD_FOOTER),
/* harmony export */   NAME_CARD_GROUP: () => (/* binding */ NAME_CARD_GROUP),
/* harmony export */   NAME_CARD_HEADER: () => (/* binding */ NAME_CARD_HEADER),
/* harmony export */   NAME_CARD_IMG: () => (/* binding */ NAME_CARD_IMG),
/* harmony export */   NAME_CARD_IMG_LAZY: () => (/* binding */ NAME_CARD_IMG_LAZY),
/* harmony export */   NAME_CARD_SUB_TITLE: () => (/* binding */ NAME_CARD_SUB_TITLE),
/* harmony export */   NAME_CARD_TEXT: () => (/* binding */ NAME_CARD_TEXT),
/* harmony export */   NAME_CARD_TITLE: () => (/* binding */ NAME_CARD_TITLE),
/* harmony export */   NAME_CAROUSEL: () => (/* binding */ NAME_CAROUSEL),
/* harmony export */   NAME_CAROUSEL_SLIDE: () => (/* binding */ NAME_CAROUSEL_SLIDE),
/* harmony export */   NAME_COL: () => (/* binding */ NAME_COL),
/* harmony export */   NAME_COLLAPSE: () => (/* binding */ NAME_COLLAPSE),
/* harmony export */   NAME_COLLAPSE_HELPER: () => (/* binding */ NAME_COLLAPSE_HELPER),
/* harmony export */   NAME_CONTAINER: () => (/* binding */ NAME_CONTAINER),
/* harmony export */   NAME_DROPDOWN: () => (/* binding */ NAME_DROPDOWN),
/* harmony export */   NAME_DROPDOWN_DIVIDER: () => (/* binding */ NAME_DROPDOWN_DIVIDER),
/* harmony export */   NAME_DROPDOWN_FORM: () => (/* binding */ NAME_DROPDOWN_FORM),
/* harmony export */   NAME_DROPDOWN_GROUP: () => (/* binding */ NAME_DROPDOWN_GROUP),
/* harmony export */   NAME_DROPDOWN_HEADER: () => (/* binding */ NAME_DROPDOWN_HEADER),
/* harmony export */   NAME_DROPDOWN_ITEM: () => (/* binding */ NAME_DROPDOWN_ITEM),
/* harmony export */   NAME_DROPDOWN_ITEM_BUTTON: () => (/* binding */ NAME_DROPDOWN_ITEM_BUTTON),
/* harmony export */   NAME_DROPDOWN_TEXT: () => (/* binding */ NAME_DROPDOWN_TEXT),
/* harmony export */   NAME_EMBED: () => (/* binding */ NAME_EMBED),
/* harmony export */   NAME_FORM: () => (/* binding */ NAME_FORM),
/* harmony export */   NAME_FORM_BUTTON_LABEL_CONTROL: () => (/* binding */ NAME_FORM_BUTTON_LABEL_CONTROL),
/* harmony export */   NAME_FORM_CHECKBOX: () => (/* binding */ NAME_FORM_CHECKBOX),
/* harmony export */   NAME_FORM_CHECKBOX_GROUP: () => (/* binding */ NAME_FORM_CHECKBOX_GROUP),
/* harmony export */   NAME_FORM_DATALIST: () => (/* binding */ NAME_FORM_DATALIST),
/* harmony export */   NAME_FORM_DATEPICKER: () => (/* binding */ NAME_FORM_DATEPICKER),
/* harmony export */   NAME_FORM_FILE: () => (/* binding */ NAME_FORM_FILE),
/* harmony export */   NAME_FORM_GROUP: () => (/* binding */ NAME_FORM_GROUP),
/* harmony export */   NAME_FORM_INPUT: () => (/* binding */ NAME_FORM_INPUT),
/* harmony export */   NAME_FORM_INVALID_FEEDBACK: () => (/* binding */ NAME_FORM_INVALID_FEEDBACK),
/* harmony export */   NAME_FORM_RADIO: () => (/* binding */ NAME_FORM_RADIO),
/* harmony export */   NAME_FORM_RADIO_GROUP: () => (/* binding */ NAME_FORM_RADIO_GROUP),
/* harmony export */   NAME_FORM_RATING: () => (/* binding */ NAME_FORM_RATING),
/* harmony export */   NAME_FORM_RATING_STAR: () => (/* binding */ NAME_FORM_RATING_STAR),
/* harmony export */   NAME_FORM_ROW: () => (/* binding */ NAME_FORM_ROW),
/* harmony export */   NAME_FORM_SELECT: () => (/* binding */ NAME_FORM_SELECT),
/* harmony export */   NAME_FORM_SELECT_OPTION: () => (/* binding */ NAME_FORM_SELECT_OPTION),
/* harmony export */   NAME_FORM_SELECT_OPTION_GROUP: () => (/* binding */ NAME_FORM_SELECT_OPTION_GROUP),
/* harmony export */   NAME_FORM_SPINBUTTON: () => (/* binding */ NAME_FORM_SPINBUTTON),
/* harmony export */   NAME_FORM_TAG: () => (/* binding */ NAME_FORM_TAG),
/* harmony export */   NAME_FORM_TAGS: () => (/* binding */ NAME_FORM_TAGS),
/* harmony export */   NAME_FORM_TEXT: () => (/* binding */ NAME_FORM_TEXT),
/* harmony export */   NAME_FORM_TEXTAREA: () => (/* binding */ NAME_FORM_TEXTAREA),
/* harmony export */   NAME_FORM_TIMEPICKER: () => (/* binding */ NAME_FORM_TIMEPICKER),
/* harmony export */   NAME_FORM_VALID_FEEDBACK: () => (/* binding */ NAME_FORM_VALID_FEEDBACK),
/* harmony export */   NAME_ICON: () => (/* binding */ NAME_ICON),
/* harmony export */   NAME_ICONSTACK: () => (/* binding */ NAME_ICONSTACK),
/* harmony export */   NAME_ICON_BASE: () => (/* binding */ NAME_ICON_BASE),
/* harmony export */   NAME_IMG: () => (/* binding */ NAME_IMG),
/* harmony export */   NAME_IMG_LAZY: () => (/* binding */ NAME_IMG_LAZY),
/* harmony export */   NAME_INPUT_GROUP: () => (/* binding */ NAME_INPUT_GROUP),
/* harmony export */   NAME_INPUT_GROUP_ADDON: () => (/* binding */ NAME_INPUT_GROUP_ADDON),
/* harmony export */   NAME_INPUT_GROUP_APPEND: () => (/* binding */ NAME_INPUT_GROUP_APPEND),
/* harmony export */   NAME_INPUT_GROUP_PREPEND: () => (/* binding */ NAME_INPUT_GROUP_PREPEND),
/* harmony export */   NAME_INPUT_GROUP_TEXT: () => (/* binding */ NAME_INPUT_GROUP_TEXT),
/* harmony export */   NAME_JUMBOTRON: () => (/* binding */ NAME_JUMBOTRON),
/* harmony export */   NAME_LINK: () => (/* binding */ NAME_LINK),
/* harmony export */   NAME_LIST_GROUP: () => (/* binding */ NAME_LIST_GROUP),
/* harmony export */   NAME_LIST_GROUP_ITEM: () => (/* binding */ NAME_LIST_GROUP_ITEM),
/* harmony export */   NAME_MEDIA: () => (/* binding */ NAME_MEDIA),
/* harmony export */   NAME_MEDIA_ASIDE: () => (/* binding */ NAME_MEDIA_ASIDE),
/* harmony export */   NAME_MEDIA_BODY: () => (/* binding */ NAME_MEDIA_BODY),
/* harmony export */   NAME_MODAL: () => (/* binding */ NAME_MODAL),
/* harmony export */   NAME_MSG_BOX: () => (/* binding */ NAME_MSG_BOX),
/* harmony export */   NAME_NAV: () => (/* binding */ NAME_NAV),
/* harmony export */   NAME_NAVBAR: () => (/* binding */ NAME_NAVBAR),
/* harmony export */   NAME_NAVBAR_BRAND: () => (/* binding */ NAME_NAVBAR_BRAND),
/* harmony export */   NAME_NAVBAR_NAV: () => (/* binding */ NAME_NAVBAR_NAV),
/* harmony export */   NAME_NAVBAR_TOGGLE: () => (/* binding */ NAME_NAVBAR_TOGGLE),
/* harmony export */   NAME_NAV_FORM: () => (/* binding */ NAME_NAV_FORM),
/* harmony export */   NAME_NAV_ITEM: () => (/* binding */ NAME_NAV_ITEM),
/* harmony export */   NAME_NAV_ITEM_DROPDOWN: () => (/* binding */ NAME_NAV_ITEM_DROPDOWN),
/* harmony export */   NAME_NAV_TEXT: () => (/* binding */ NAME_NAV_TEXT),
/* harmony export */   NAME_OVERLAY: () => (/* binding */ NAME_OVERLAY),
/* harmony export */   NAME_PAGINATION: () => (/* binding */ NAME_PAGINATION),
/* harmony export */   NAME_PAGINATION_NAV: () => (/* binding */ NAME_PAGINATION_NAV),
/* harmony export */   NAME_POPOVER: () => (/* binding */ NAME_POPOVER),
/* harmony export */   NAME_POPOVER_HELPER: () => (/* binding */ NAME_POPOVER_HELPER),
/* harmony export */   NAME_POPOVER_TEMPLATE: () => (/* binding */ NAME_POPOVER_TEMPLATE),
/* harmony export */   NAME_POPPER: () => (/* binding */ NAME_POPPER),
/* harmony export */   NAME_PROGRESS: () => (/* binding */ NAME_PROGRESS),
/* harmony export */   NAME_PROGRESS_BAR: () => (/* binding */ NAME_PROGRESS_BAR),
/* harmony export */   NAME_ROW: () => (/* binding */ NAME_ROW),
/* harmony export */   NAME_SIDEBAR: () => (/* binding */ NAME_SIDEBAR),
/* harmony export */   NAME_SKELETON: () => (/* binding */ NAME_SKELETON),
/* harmony export */   NAME_SKELETON_ICON: () => (/* binding */ NAME_SKELETON_ICON),
/* harmony export */   NAME_SKELETON_IMG: () => (/* binding */ NAME_SKELETON_IMG),
/* harmony export */   NAME_SKELETON_TABLE: () => (/* binding */ NAME_SKELETON_TABLE),
/* harmony export */   NAME_SKELETON_WRAPPER: () => (/* binding */ NAME_SKELETON_WRAPPER),
/* harmony export */   NAME_SPINNER: () => (/* binding */ NAME_SPINNER),
/* harmony export */   NAME_TAB: () => (/* binding */ NAME_TAB),
/* harmony export */   NAME_TABLE: () => (/* binding */ NAME_TABLE),
/* harmony export */   NAME_TABLE_CELL: () => (/* binding */ NAME_TABLE_CELL),
/* harmony export */   NAME_TABLE_LITE: () => (/* binding */ NAME_TABLE_LITE),
/* harmony export */   NAME_TABLE_SIMPLE: () => (/* binding */ NAME_TABLE_SIMPLE),
/* harmony export */   NAME_TABS: () => (/* binding */ NAME_TABS),
/* harmony export */   NAME_TAB_BUTTON_HELPER: () => (/* binding */ NAME_TAB_BUTTON_HELPER),
/* harmony export */   NAME_TBODY: () => (/* binding */ NAME_TBODY),
/* harmony export */   NAME_TFOOT: () => (/* binding */ NAME_TFOOT),
/* harmony export */   NAME_TH: () => (/* binding */ NAME_TH),
/* harmony export */   NAME_THEAD: () => (/* binding */ NAME_THEAD),
/* harmony export */   NAME_TIME: () => (/* binding */ NAME_TIME),
/* harmony export */   NAME_TOAST: () => (/* binding */ NAME_TOAST),
/* harmony export */   NAME_TOASTER: () => (/* binding */ NAME_TOASTER),
/* harmony export */   NAME_TOAST_POP: () => (/* binding */ NAME_TOAST_POP),
/* harmony export */   NAME_TOOLTIP: () => (/* binding */ NAME_TOOLTIP),
/* harmony export */   NAME_TOOLTIP_HELPER: () => (/* binding */ NAME_TOOLTIP_HELPER),
/* harmony export */   NAME_TOOLTIP_TEMPLATE: () => (/* binding */ NAME_TOOLTIP_TEMPLATE),
/* harmony export */   NAME_TR: () => (/* binding */ NAME_TR),
/* harmony export */   NAME_TRANSITION: () => (/* binding */ NAME_TRANSITION),
/* harmony export */   NAME_TRANSPORTER: () => (/* binding */ NAME_TRANSPORTER),
/* harmony export */   NAME_TRANSPORTER_TARGET: () => (/* binding */ NAME_TRANSPORTER_TARGET)
/* harmony export */ });
// Component names
var NAME_ALERT = 'BAlert';
var NAME_ASPECT = 'BAspect';
var NAME_AVATAR = 'BAvatar';
var NAME_AVATAR_GROUP = 'BAvatarGroup';
var NAME_BADGE = 'BBadge';
var NAME_BREADCRUMB = 'BBreadcrumb';
var NAME_BREADCRUMB_ITEM = 'BBreadcrumbItem';
var NAME_BREADCRUMB_LINK = 'BBreadcrumbLink';
var NAME_BUTTON = 'BButton';
var NAME_BUTTON_CLOSE = 'BButtonClose';
var NAME_BUTTON_GROUP = 'BButtonGroup';
var NAME_BUTTON_TOOLBAR = 'BButtonToolbar';
var NAME_CALENDAR = 'BCalendar';
var NAME_CARD = 'BCard';
var NAME_CARD_BODY = 'BCardBody';
var NAME_CARD_FOOTER = 'BCardFooter';
var NAME_CARD_GROUP = 'BCardGroup';
var NAME_CARD_HEADER = 'BCardHeader';
var NAME_CARD_IMG = 'BCardImg';
var NAME_CARD_IMG_LAZY = 'BCardImgLazy';
var NAME_CARD_SUB_TITLE = 'BCardSubTitle';
var NAME_CARD_TEXT = 'BCardText';
var NAME_CARD_TITLE = 'BCardTitle';
var NAME_CAROUSEL = 'BCarousel';
var NAME_CAROUSEL_SLIDE = 'BCarouselSlide';
var NAME_COL = 'BCol';
var NAME_COLLAPSE = 'BCollapse';
var NAME_CONTAINER = 'BContainer';
var NAME_DROPDOWN = 'BDropdown';
var NAME_DROPDOWN_DIVIDER = 'BDropdownDivider';
var NAME_DROPDOWN_FORM = 'BDropdownForm';
var NAME_DROPDOWN_GROUP = 'BDropdownGroup';
var NAME_DROPDOWN_HEADER = 'BDropdownHeader';
var NAME_DROPDOWN_ITEM = 'BDropdownItem';
var NAME_DROPDOWN_ITEM_BUTTON = 'BDropdownItemButton';
var NAME_DROPDOWN_TEXT = 'BDropdownText';
var NAME_EMBED = 'BEmbed';
var NAME_FORM = 'BForm';
var NAME_FORM_CHECKBOX = 'BFormCheckbox';
var NAME_FORM_CHECKBOX_GROUP = 'BFormCheckboxGroup';
var NAME_FORM_DATALIST = 'BFormDatalist';
var NAME_FORM_DATEPICKER = 'BFormDatepicker';
var NAME_FORM_FILE = 'BFormFile';
var NAME_FORM_GROUP = 'BFormGroup';
var NAME_FORM_INPUT = 'BFormInput';
var NAME_FORM_INVALID_FEEDBACK = 'BFormInvalidFeedback';
var NAME_FORM_RADIO = 'BFormRadio';
var NAME_FORM_RADIO_GROUP = 'BFormRadioGroup';
var NAME_FORM_RATING = 'BFormRating';
var NAME_FORM_ROW = 'BFormRow';
var NAME_FORM_SELECT = 'BFormSelect';
var NAME_FORM_SELECT_OPTION = 'BFormSelectOption';
var NAME_FORM_SELECT_OPTION_GROUP = 'BFormSelectOptionGroup';
var NAME_FORM_SPINBUTTON = 'BFormSpinbutton';
var NAME_FORM_TAG = 'BFormTag';
var NAME_FORM_TAGS = 'BFormTags';
var NAME_FORM_TEXT = 'BFormText';
var NAME_FORM_TEXTAREA = 'BFormTextarea';
var NAME_FORM_TIMEPICKER = 'BFormTimepicker';
var NAME_FORM_VALID_FEEDBACK = 'BFormValidFeedback';
var NAME_ICON = 'BIcon';
var NAME_ICONSTACK = 'BIconstack';
var NAME_ICON_BASE = 'BIconBase';
var NAME_IMG = 'BImg';
var NAME_IMG_LAZY = 'BImgLazy';
var NAME_INPUT_GROUP = 'BInputGroup';
var NAME_INPUT_GROUP_ADDON = 'BInputGroupAddon';
var NAME_INPUT_GROUP_APPEND = 'BInputGroupAppend';
var NAME_INPUT_GROUP_PREPEND = 'BInputGroupPrepend';
var NAME_INPUT_GROUP_TEXT = 'BInputGroupText';
var NAME_JUMBOTRON = 'BJumbotron';
var NAME_LINK = 'BLink';
var NAME_LIST_GROUP = 'BListGroup';
var NAME_LIST_GROUP_ITEM = 'BListGroupItem';
var NAME_MEDIA = 'BMedia';
var NAME_MEDIA_ASIDE = 'BMediaAside';
var NAME_MEDIA_BODY = 'BMediaBody';
var NAME_MODAL = 'BModal';
var NAME_MSG_BOX = 'BMsgBox';
var NAME_NAV = 'BNav';
var NAME_NAVBAR = 'BNavbar';
var NAME_NAVBAR_BRAND = 'BNavbarBrand';
var NAME_NAVBAR_NAV = 'BNavbarNav';
var NAME_NAVBAR_TOGGLE = 'BNavbarToggle';
var NAME_NAV_FORM = 'BNavForm';
var NAME_NAV_ITEM = 'BNavItem';
var NAME_NAV_ITEM_DROPDOWN = 'BNavItemDropdown';
var NAME_NAV_TEXT = 'BNavText';
var NAME_OVERLAY = 'BOverlay';
var NAME_PAGINATION = 'BPagination';
var NAME_PAGINATION_NAV = 'BPaginationNav';
var NAME_POPOVER = 'BPopover';
var NAME_PROGRESS = 'BProgress';
var NAME_PROGRESS_BAR = 'BProgressBar';
var NAME_ROW = 'BRow';
var NAME_SIDEBAR = 'BSidebar';
var NAME_SKELETON = 'BSkeleton';
var NAME_SKELETON_ICON = 'BSkeletonIcon';
var NAME_SKELETON_IMG = 'BSkeletonImg';
var NAME_SKELETON_TABLE = 'BSkeletonTable';
var NAME_SKELETON_WRAPPER = 'BSkeletonWrapper';
var NAME_SPINNER = 'BSpinner';
var NAME_TAB = 'BTab';
var NAME_TABLE = 'BTable';
var NAME_TABLE_CELL = 'BTableCell';
var NAME_TABLE_LITE = 'BTableLite';
var NAME_TABLE_SIMPLE = 'BTableSimple';
var NAME_TABS = 'BTabs';
var NAME_TBODY = 'BTbody';
var NAME_TFOOT = 'BTfoot';
var NAME_TH = 'BTh';
var NAME_THEAD = 'BThead';
var NAME_TIME = 'BTime';
var NAME_TOAST = 'BToast';
var NAME_TOASTER = 'BToaster';
var NAME_TOOLTIP = 'BTooltip';
var NAME_TR = 'BTr'; // Helper component names

var NAME_COLLAPSE_HELPER = 'BVCollapse';
var NAME_FORM_BUTTON_LABEL_CONTROL = 'BVFormBtnLabelControl';
var NAME_FORM_RATING_STAR = 'BVFormRatingStar';
var NAME_POPOVER_HELPER = 'BVPopover';
var NAME_POPOVER_TEMPLATE = 'BVPopoverTemplate';
var NAME_POPPER = 'BVPopper';
var NAME_TAB_BUTTON_HELPER = 'BVTabButton';
var NAME_TOAST_POP = 'BVToastPop';
var NAME_TOOLTIP_HELPER = 'BVTooltip';
var NAME_TOOLTIP_TEMPLATE = 'BVTooltipTemplate';
var NAME_TRANSITION = 'BVTransition';
var NAME_TRANSPORTER = 'BVTransporter';
var NAME_TRANSPORTER_TARGET = 'BVTransporterTarget';

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/config.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/config.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BREAKPOINT: () => (/* binding */ DEFAULT_BREAKPOINT),
/* harmony export */   NAME: () => (/* binding */ NAME),
/* harmony export */   PROP_NAME: () => (/* binding */ PROP_NAME)
/* harmony export */ });
var NAME = 'BvConfig';
var PROP_NAME = '$bvConfig';
var DEFAULT_BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/env.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/env.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   HAS_DOCUMENT_SUPPORT: () => (/* binding */ HAS_DOCUMENT_SUPPORT),
/* harmony export */   HAS_INTERACTION_OBSERVER_SUPPORT: () => (/* binding */ HAS_INTERACTION_OBSERVER_SUPPORT),
/* harmony export */   HAS_MUTATION_OBSERVER_SUPPORT: () => (/* binding */ HAS_MUTATION_OBSERVER_SUPPORT),
/* harmony export */   HAS_NAVIGATOR_SUPPORT: () => (/* binding */ HAS_NAVIGATOR_SUPPORT),
/* harmony export */   HAS_PASSIVE_EVENT_SUPPORT: () => (/* binding */ HAS_PASSIVE_EVENT_SUPPORT),
/* harmony export */   HAS_POINTER_EVENT_SUPPORT: () => (/* binding */ HAS_POINTER_EVENT_SUPPORT),
/* harmony export */   HAS_PROMISE_SUPPORT: () => (/* binding */ HAS_PROMISE_SUPPORT),
/* harmony export */   HAS_TOUCH_SUPPORT: () => (/* binding */ HAS_TOUCH_SUPPORT),
/* harmony export */   HAS_WINDOW_SUPPORT: () => (/* binding */ HAS_WINDOW_SUPPORT),
/* harmony export */   IS_BROWSER: () => (/* binding */ IS_BROWSER),
/* harmony export */   IS_IE: () => (/* binding */ IS_IE),
/* harmony export */   IS_JSDOM: () => (/* binding */ IS_JSDOM),
/* harmony export */   NAVIGATOR: () => (/* binding */ NAVIGATOR),
/* harmony export */   USER_AGENT: () => (/* binding */ USER_AGENT),
/* harmony export */   WINDOW: () => (/* binding */ WINDOW)
/* harmony export */ });
var HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
var HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
var HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
var HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */

var HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
var WINDOW = HAS_WINDOW_SUPPORT ? window : {};
var DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
var NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
var USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();
var IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0;
var IS_IE = /msie|trident/.test(USER_AGENT); // Determine if the browser supports the option passive for events

var HAS_PASSIVE_EVENT_SUPPORT = function () {
  var passiveEventSupported = false;

  if (IS_BROWSER) {
    try {
      var options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      WINDOW.addEventListener('test', options, options);
      WINDOW.removeEventListener('test', options, options);
    } catch (_unused) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);
var HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

var HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/events.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/events.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_NAME_ACTIVATE_TAB: () => (/* binding */ EVENT_NAME_ACTIVATE_TAB),
/* harmony export */   EVENT_NAME_BLUR: () => (/* binding */ EVENT_NAME_BLUR),
/* harmony export */   EVENT_NAME_CANCEL: () => (/* binding */ EVENT_NAME_CANCEL),
/* harmony export */   EVENT_NAME_CHANGE: () => (/* binding */ EVENT_NAME_CHANGE),
/* harmony export */   EVENT_NAME_CHANGED: () => (/* binding */ EVENT_NAME_CHANGED),
/* harmony export */   EVENT_NAME_CLICK: () => (/* binding */ EVENT_NAME_CLICK),
/* harmony export */   EVENT_NAME_CLOSE: () => (/* binding */ EVENT_NAME_CLOSE),
/* harmony export */   EVENT_NAME_CONTEXT: () => (/* binding */ EVENT_NAME_CONTEXT),
/* harmony export */   EVENT_NAME_CONTEXT_CHANGED: () => (/* binding */ EVENT_NAME_CONTEXT_CHANGED),
/* harmony export */   EVENT_NAME_DESTROYED: () => (/* binding */ EVENT_NAME_DESTROYED),
/* harmony export */   EVENT_NAME_DISABLE: () => (/* binding */ EVENT_NAME_DISABLE),
/* harmony export */   EVENT_NAME_DISABLED: () => (/* binding */ EVENT_NAME_DISABLED),
/* harmony export */   EVENT_NAME_DISMISSED: () => (/* binding */ EVENT_NAME_DISMISSED),
/* harmony export */   EVENT_NAME_DISMISS_COUNT_DOWN: () => (/* binding */ EVENT_NAME_DISMISS_COUNT_DOWN),
/* harmony export */   EVENT_NAME_ENABLE: () => (/* binding */ EVENT_NAME_ENABLE),
/* harmony export */   EVENT_NAME_ENABLED: () => (/* binding */ EVENT_NAME_ENABLED),
/* harmony export */   EVENT_NAME_FILTERED: () => (/* binding */ EVENT_NAME_FILTERED),
/* harmony export */   EVENT_NAME_FIRST: () => (/* binding */ EVENT_NAME_FIRST),
/* harmony export */   EVENT_NAME_FOCUS: () => (/* binding */ EVENT_NAME_FOCUS),
/* harmony export */   EVENT_NAME_FOCUSIN: () => (/* binding */ EVENT_NAME_FOCUSIN),
/* harmony export */   EVENT_NAME_FOCUSOUT: () => (/* binding */ EVENT_NAME_FOCUSOUT),
/* harmony export */   EVENT_NAME_HEAD_CLICKED: () => (/* binding */ EVENT_NAME_HEAD_CLICKED),
/* harmony export */   EVENT_NAME_HIDDEN: () => (/* binding */ EVENT_NAME_HIDDEN),
/* harmony export */   EVENT_NAME_HIDE: () => (/* binding */ EVENT_NAME_HIDE),
/* harmony export */   EVENT_NAME_IMG_ERROR: () => (/* binding */ EVENT_NAME_IMG_ERROR),
/* harmony export */   EVENT_NAME_INPUT: () => (/* binding */ EVENT_NAME_INPUT),
/* harmony export */   EVENT_NAME_LAST: () => (/* binding */ EVENT_NAME_LAST),
/* harmony export */   EVENT_NAME_MOUSEENTER: () => (/* binding */ EVENT_NAME_MOUSEENTER),
/* harmony export */   EVENT_NAME_MOUSELEAVE: () => (/* binding */ EVENT_NAME_MOUSELEAVE),
/* harmony export */   EVENT_NAME_NEXT: () => (/* binding */ EVENT_NAME_NEXT),
/* harmony export */   EVENT_NAME_OK: () => (/* binding */ EVENT_NAME_OK),
/* harmony export */   EVENT_NAME_OPEN: () => (/* binding */ EVENT_NAME_OPEN),
/* harmony export */   EVENT_NAME_PAGE_CLICK: () => (/* binding */ EVENT_NAME_PAGE_CLICK),
/* harmony export */   EVENT_NAME_PAUSED: () => (/* binding */ EVENT_NAME_PAUSED),
/* harmony export */   EVENT_NAME_PREV: () => (/* binding */ EVENT_NAME_PREV),
/* harmony export */   EVENT_NAME_REFRESH: () => (/* binding */ EVENT_NAME_REFRESH),
/* harmony export */   EVENT_NAME_REFRESHED: () => (/* binding */ EVENT_NAME_REFRESHED),
/* harmony export */   EVENT_NAME_REMOVE: () => (/* binding */ EVENT_NAME_REMOVE),
/* harmony export */   EVENT_NAME_ROW_CLICKED: () => (/* binding */ EVENT_NAME_ROW_CLICKED),
/* harmony export */   EVENT_NAME_ROW_CONTEXTMENU: () => (/* binding */ EVENT_NAME_ROW_CONTEXTMENU),
/* harmony export */   EVENT_NAME_ROW_DBLCLICKED: () => (/* binding */ EVENT_NAME_ROW_DBLCLICKED),
/* harmony export */   EVENT_NAME_ROW_HOVERED: () => (/* binding */ EVENT_NAME_ROW_HOVERED),
/* harmony export */   EVENT_NAME_ROW_MIDDLE_CLICKED: () => (/* binding */ EVENT_NAME_ROW_MIDDLE_CLICKED),
/* harmony export */   EVENT_NAME_ROW_SELECTED: () => (/* binding */ EVENT_NAME_ROW_SELECTED),
/* harmony export */   EVENT_NAME_ROW_UNHOVERED: () => (/* binding */ EVENT_NAME_ROW_UNHOVERED),
/* harmony export */   EVENT_NAME_SELECTED: () => (/* binding */ EVENT_NAME_SELECTED),
/* harmony export */   EVENT_NAME_SHOW: () => (/* binding */ EVENT_NAME_SHOW),
/* harmony export */   EVENT_NAME_SHOWN: () => (/* binding */ EVENT_NAME_SHOWN),
/* harmony export */   EVENT_NAME_SLIDING_END: () => (/* binding */ EVENT_NAME_SLIDING_END),
/* harmony export */   EVENT_NAME_SLIDING_START: () => (/* binding */ EVENT_NAME_SLIDING_START),
/* harmony export */   EVENT_NAME_SORT_CHANGED: () => (/* binding */ EVENT_NAME_SORT_CHANGED),
/* harmony export */   EVENT_NAME_TAG_STATE: () => (/* binding */ EVENT_NAME_TAG_STATE),
/* harmony export */   EVENT_NAME_TOGGLE: () => (/* binding */ EVENT_NAME_TOGGLE),
/* harmony export */   EVENT_NAME_UNPAUSED: () => (/* binding */ EVENT_NAME_UNPAUSED),
/* harmony export */   EVENT_NAME_UPDATE: () => (/* binding */ EVENT_NAME_UPDATE),
/* harmony export */   EVENT_OPTIONS_NO_CAPTURE: () => (/* binding */ EVENT_OPTIONS_NO_CAPTURE),
/* harmony export */   EVENT_OPTIONS_PASSIVE: () => (/* binding */ EVENT_OPTIONS_PASSIVE),
/* harmony export */   HOOK_EVENT_NAME_BEFORE_DESTROY: () => (/* binding */ HOOK_EVENT_NAME_BEFORE_DESTROY),
/* harmony export */   HOOK_EVENT_NAME_DESTROYED: () => (/* binding */ HOOK_EVENT_NAME_DESTROYED),
/* harmony export */   MODEL_EVENT_NAME_PREFIX: () => (/* binding */ MODEL_EVENT_NAME_PREFIX),
/* harmony export */   ROOT_EVENT_NAME_PREFIX: () => (/* binding */ ROOT_EVENT_NAME_PREFIX),
/* harmony export */   ROOT_EVENT_NAME_SEPARATOR: () => (/* binding */ ROOT_EVENT_NAME_SEPARATOR)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

var EVENT_NAME_ACTIVATE_TAB = 'activate-tab';
var EVENT_NAME_BLUR = 'blur';
var EVENT_NAME_CANCEL = 'cancel';
var EVENT_NAME_CHANGE = 'change';
var EVENT_NAME_CHANGED = 'changed';
var EVENT_NAME_CLICK = 'click';
var EVENT_NAME_CLOSE = 'close';
var EVENT_NAME_CONTEXT = 'context';
var EVENT_NAME_CONTEXT_CHANGED = 'context-changed';
var EVENT_NAME_DESTROYED = 'destroyed';
var EVENT_NAME_DISABLE = 'disable';
var EVENT_NAME_DISABLED = 'disabled';
var EVENT_NAME_DISMISSED = 'dismissed';
var EVENT_NAME_DISMISS_COUNT_DOWN = 'dismiss-count-down';
var EVENT_NAME_ENABLE = 'enable';
var EVENT_NAME_ENABLED = 'enabled';
var EVENT_NAME_FILTERED = 'filtered';
var EVENT_NAME_FIRST = 'first';
var EVENT_NAME_FOCUS = 'focus';
var EVENT_NAME_FOCUSIN = 'focusin';
var EVENT_NAME_FOCUSOUT = 'focusout';
var EVENT_NAME_HEAD_CLICKED = 'head-clicked';
var EVENT_NAME_HIDDEN = 'hidden';
var EVENT_NAME_HIDE = 'hide';
var EVENT_NAME_IMG_ERROR = 'img-error';
var EVENT_NAME_INPUT = 'input';
var EVENT_NAME_LAST = 'last';
var EVENT_NAME_MOUSEENTER = 'mouseenter';
var EVENT_NAME_MOUSELEAVE = 'mouseleave';
var EVENT_NAME_NEXT = 'next';
var EVENT_NAME_OK = 'ok';
var EVENT_NAME_OPEN = 'open';
var EVENT_NAME_PAGE_CLICK = 'page-click';
var EVENT_NAME_PAUSED = 'paused';
var EVENT_NAME_PREV = 'prev';
var EVENT_NAME_REFRESH = 'refresh';
var EVENT_NAME_REFRESHED = 'refreshed';
var EVENT_NAME_REMOVE = 'remove';
var EVENT_NAME_ROW_CLICKED = 'row-clicked';
var EVENT_NAME_ROW_CONTEXTMENU = 'row-contextmenu';
var EVENT_NAME_ROW_DBLCLICKED = 'row-dblclicked';
var EVENT_NAME_ROW_HOVERED = 'row-hovered';
var EVENT_NAME_ROW_MIDDLE_CLICKED = 'row-middle-clicked';
var EVENT_NAME_ROW_SELECTED = 'row-selected';
var EVENT_NAME_ROW_UNHOVERED = 'row-unhovered';
var EVENT_NAME_SELECTED = 'selected';
var EVENT_NAME_SHOW = 'show';
var EVENT_NAME_SHOWN = 'shown';
var EVENT_NAME_SLIDING_END = 'sliding-end';
var EVENT_NAME_SLIDING_START = 'sliding-start';
var EVENT_NAME_SORT_CHANGED = 'sort-changed';
var EVENT_NAME_TAG_STATE = 'tag-state';
var EVENT_NAME_TOGGLE = 'toggle';
var EVENT_NAME_UNPAUSED = 'unpaused';
var EVENT_NAME_UPDATE = 'update';
var HOOK_EVENT_NAME_BEFORE_DESTROY = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? 'vnodeBeforeUnmount' : 'hook:beforeDestroy';
var HOOK_EVENT_NAME_DESTROYED = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? 'vNodeUnmounted' : 'hook:destroyed';
var MODEL_EVENT_NAME_PREFIX = 'update:';
var ROOT_EVENT_NAME_PREFIX = 'bv';
var ROOT_EVENT_NAME_SEPARATOR = '::';
var EVENT_OPTIONS_PASSIVE = {
  passive: true
};
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/key-codes.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/key-codes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CODE_BACKSPACE: () => (/* binding */ CODE_BACKSPACE),
/* harmony export */   CODE_BREAK: () => (/* binding */ CODE_BREAK),
/* harmony export */   CODE_DELETE: () => (/* binding */ CODE_DELETE),
/* harmony export */   CODE_DOWN: () => (/* binding */ CODE_DOWN),
/* harmony export */   CODE_END: () => (/* binding */ CODE_END),
/* harmony export */   CODE_ENTER: () => (/* binding */ CODE_ENTER),
/* harmony export */   CODE_ESC: () => (/* binding */ CODE_ESC),
/* harmony export */   CODE_HOME: () => (/* binding */ CODE_HOME),
/* harmony export */   CODE_LEFT: () => (/* binding */ CODE_LEFT),
/* harmony export */   CODE_PAGEDOWN: () => (/* binding */ CODE_PAGEDOWN),
/* harmony export */   CODE_PAGEUP: () => (/* binding */ CODE_PAGEUP),
/* harmony export */   CODE_RIGHT: () => (/* binding */ CODE_RIGHT),
/* harmony export */   CODE_SPACE: () => (/* binding */ CODE_SPACE),
/* harmony export */   CODE_UP: () => (/* binding */ CODE_UP)
/* harmony export */ });
var CODE_BACKSPACE = 8;
var CODE_BREAK = 19;
var CODE_DELETE = 46;
var CODE_DOWN = 40;
var CODE_END = 35;
var CODE_ENTER = 13;
var CODE_ESC = 27;
var CODE_HOME = 36;
var CODE_LEFT = 37;
var CODE_PAGEDOWN = 34;
var CODE_PAGEUP = 33;
var CODE_RIGHT = 39;
var CODE_SPACE = 32;
var CODE_UP = 38;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/props.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/props.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROP_TYPE_ANY: () => (/* binding */ PROP_TYPE_ANY),
/* harmony export */   PROP_TYPE_ARRAY: () => (/* binding */ PROP_TYPE_ARRAY),
/* harmony export */   PROP_TYPE_ARRAY_FUNCTION: () => (/* binding */ PROP_TYPE_ARRAY_FUNCTION),
/* harmony export */   PROP_TYPE_ARRAY_OBJECT: () => (/* binding */ PROP_TYPE_ARRAY_OBJECT),
/* harmony export */   PROP_TYPE_ARRAY_OBJECT_STRING: () => (/* binding */ PROP_TYPE_ARRAY_OBJECT_STRING),
/* harmony export */   PROP_TYPE_ARRAY_STRING: () => (/* binding */ PROP_TYPE_ARRAY_STRING),
/* harmony export */   PROP_TYPE_BOOLEAN: () => (/* binding */ PROP_TYPE_BOOLEAN),
/* harmony export */   PROP_TYPE_BOOLEAN_NUMBER: () => (/* binding */ PROP_TYPE_BOOLEAN_NUMBER),
/* harmony export */   PROP_TYPE_BOOLEAN_NUMBER_STRING: () => (/* binding */ PROP_TYPE_BOOLEAN_NUMBER_STRING),
/* harmony export */   PROP_TYPE_BOOLEAN_STRING: () => (/* binding */ PROP_TYPE_BOOLEAN_STRING),
/* harmony export */   PROP_TYPE_DATE: () => (/* binding */ PROP_TYPE_DATE),
/* harmony export */   PROP_TYPE_DATE_STRING: () => (/* binding */ PROP_TYPE_DATE_STRING),
/* harmony export */   PROP_TYPE_FUNCTION: () => (/* binding */ PROP_TYPE_FUNCTION),
/* harmony export */   PROP_TYPE_FUNCTION_STRING: () => (/* binding */ PROP_TYPE_FUNCTION_STRING),
/* harmony export */   PROP_TYPE_NUMBER: () => (/* binding */ PROP_TYPE_NUMBER),
/* harmony export */   PROP_TYPE_NUMBER_OBJECT_STRING: () => (/* binding */ PROP_TYPE_NUMBER_OBJECT_STRING),
/* harmony export */   PROP_TYPE_NUMBER_STRING: () => (/* binding */ PROP_TYPE_NUMBER_STRING),
/* harmony export */   PROP_TYPE_OBJECT: () => (/* binding */ PROP_TYPE_OBJECT),
/* harmony export */   PROP_TYPE_OBJECT_FUNCTION: () => (/* binding */ PROP_TYPE_OBJECT_FUNCTION),
/* harmony export */   PROP_TYPE_OBJECT_STRING: () => (/* binding */ PROP_TYPE_OBJECT_STRING),
/* harmony export */   PROP_TYPE_REG_EXP: () => (/* binding */ PROP_TYPE_REG_EXP),
/* harmony export */   PROP_TYPE_STRING: () => (/* binding */ PROP_TYPE_STRING)
/* harmony export */ });
// General types
var PROP_TYPE_ANY = undefined;
var PROP_TYPE_ARRAY = Array;
var PROP_TYPE_BOOLEAN = Boolean;
var PROP_TYPE_DATE = Date;
var PROP_TYPE_FUNCTION = Function;
var PROP_TYPE_NUMBER = Number;
var PROP_TYPE_OBJECT = Object;
var PROP_TYPE_REG_EXP = RegExp;
var PROP_TYPE_STRING = String; // Multiple types

var PROP_TYPE_ARRAY_FUNCTION = [PROP_TYPE_ARRAY, PROP_TYPE_FUNCTION];
var PROP_TYPE_ARRAY_OBJECT = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT];
var PROP_TYPE_ARRAY_OBJECT_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_ARRAY_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_NUMBER = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER];
var PROP_TYPE_BOOLEAN_NUMBER_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_STRING];
var PROP_TYPE_DATE_STRING = [PROP_TYPE_DATE, PROP_TYPE_STRING];
var PROP_TYPE_FUNCTION_STRING = [PROP_TYPE_FUNCTION, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_OBJECT_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_OBJECT_FUNCTION = [PROP_TYPE_OBJECT, PROP_TYPE_FUNCTION];
var PROP_TYPE_OBJECT_STRING = [PROP_TYPE_OBJECT, PROP_TYPE_STRING];

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/regex.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/regex.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RX_ARRAY_NOTATION: () => (/* binding */ RX_ARRAY_NOTATION),
/* harmony export */   RX_ASPECT: () => (/* binding */ RX_ASPECT),
/* harmony export */   RX_ASPECT_SEPARATOR: () => (/* binding */ RX_ASPECT_SEPARATOR),
/* harmony export */   RX_BV_PREFIX: () => (/* binding */ RX_BV_PREFIX),
/* harmony export */   RX_COL_CLASS: () => (/* binding */ RX_COL_CLASS),
/* harmony export */   RX_DATE: () => (/* binding */ RX_DATE),
/* harmony export */   RX_DATE_SPLIT: () => (/* binding */ RX_DATE_SPLIT),
/* harmony export */   RX_DIGITS: () => (/* binding */ RX_DIGITS),
/* harmony export */   RX_ENCODED_COMMA: () => (/* binding */ RX_ENCODED_COMMA),
/* harmony export */   RX_ENCODE_REVERSE: () => (/* binding */ RX_ENCODE_REVERSE),
/* harmony export */   RX_EXTENSION: () => (/* binding */ RX_EXTENSION),
/* harmony export */   RX_HASH: () => (/* binding */ RX_HASH),
/* harmony export */   RX_HASH_ID: () => (/* binding */ RX_HASH_ID),
/* harmony export */   RX_HREF: () => (/* binding */ RX_HREF),
/* harmony export */   RX_HTML_TAGS: () => (/* binding */ RX_HTML_TAGS),
/* harmony export */   RX_HYPHENATE: () => (/* binding */ RX_HYPHENATE),
/* harmony export */   RX_ICON_PREFIX: () => (/* binding */ RX_ICON_PREFIX),
/* harmony export */   RX_LOWER_UPPER: () => (/* binding */ RX_LOWER_UPPER),
/* harmony export */   RX_NUMBER: () => (/* binding */ RX_NUMBER),
/* harmony export */   RX_PLUS: () => (/* binding */ RX_PLUS),
/* harmony export */   RX_QUERY_START: () => (/* binding */ RX_QUERY_START),
/* harmony export */   RX_REGEXP_REPLACE: () => (/* binding */ RX_REGEXP_REPLACE),
/* harmony export */   RX_SPACES: () => (/* binding */ RX_SPACES),
/* harmony export */   RX_SPACE_SPLIT: () => (/* binding */ RX_SPACE_SPLIT),
/* harmony export */   RX_STAR: () => (/* binding */ RX_STAR),
/* harmony export */   RX_START_SPACE_WORD: () => (/* binding */ RX_START_SPACE_WORD),
/* harmony export */   RX_STRIP_LOCALE_MODS: () => (/* binding */ RX_STRIP_LOCALE_MODS),
/* harmony export */   RX_TIME: () => (/* binding */ RX_TIME),
/* harmony export */   RX_TRIM_LEFT: () => (/* binding */ RX_TRIM_LEFT),
/* harmony export */   RX_TRIM_RIGHT: () => (/* binding */ RX_TRIM_RIGHT),
/* harmony export */   RX_UNDERSCORE: () => (/* binding */ RX_UNDERSCORE),
/* harmony export */   RX_UN_KEBAB: () => (/* binding */ RX_UN_KEBAB)
/* harmony export */ });
// --- General ---
var RX_ARRAY_NOTATION = /\[(\d+)]/g;
var RX_BV_PREFIX = /^(BV?)/;
var RX_DIGITS = /^\d+$/;
var RX_EXTENSION = /^\..+/;
var RX_HASH = /^#/;
var RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
var RX_HTML_TAGS = /(<([^>]+)>)/gi;
var RX_HYPHENATE = /\B([A-Z])/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var RX_PLUS = /\+/g;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_SPACES = /[\s\uFEFF\xA0]+/g;
var RX_SPACE_SPLIT = /\s+/;
var RX_STAR = /\/\*$/;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;
var RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = /\s+$/;
var RX_UNDERSCORE = /_/g;
var RX_UN_KEBAB = /-(\w)/g; // --- Date ---
// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'

var RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; // Used to split off the date parts of the YYYY-MM-DD string

var RX_DATE_SPLIT = /-|\s|T/; // Time string RegEx (optional seconds)

var RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- URL ---
// HREFs must end with a hash followed by at least one non-hash character

var RX_HREF = /^.*(#[^#]+)$/;
var RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = /[!'()*]/g;
var RX_QUERY_START = /^(\?|#|&)/; // --- Aspect ---

var RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
var RX_ASPECT_SEPARATOR = /[/:]/; // --- Grid ---

var RX_COL_CLASS = /^col-/; // --- Icon ---

var RX_ICON_PREFIX = /^BIcon/; // --- Locale ---

var RX_STRIP_LOCALE_MODS = /-u-.+/;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/safe-types.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/safe-types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   HTMLElement: () => (/* binding */ HTMLElement),
/* harmony export */   SVGElement: () => (/* binding */ SVGElement)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* istanbul ignore next */

var Element = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  var _super = _createSuper(Element);

  function Element() {
    _classCallCheck(this, Element);

    return _super.apply(this, arguments);
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
/* istanbul ignore next */

var HTMLElement = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super2 = _createSuper(HTMLElement);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _super2.apply(this, arguments);
  }

  return HTMLElement;
}(Element);
/* istanbul ignore next */

var SVGElement = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  var _super3 = _createSuper(SVGElement);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _super3.apply(this, arguments);
  }

  return SVGElement;
}(Element);
/* istanbul ignore next */

var File = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  var _super4 = _createSuper(File);

  function File() {
    _classCallCheck(this, File);

    return _super4.apply(this, arguments);
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/slots.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/slots.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SLOT_NAME_ADD_BUTTON_TEXT: () => (/* binding */ SLOT_NAME_ADD_BUTTON_TEXT),
/* harmony export */   SLOT_NAME_APPEND: () => (/* binding */ SLOT_NAME_APPEND),
/* harmony export */   SLOT_NAME_ASIDE: () => (/* binding */ SLOT_NAME_ASIDE),
/* harmony export */   SLOT_NAME_BADGE: () => (/* binding */ SLOT_NAME_BADGE),
/* harmony export */   SLOT_NAME_BOTTOM_ROW: () => (/* binding */ SLOT_NAME_BOTTOM_ROW),
/* harmony export */   SLOT_NAME_BUTTON_CONTENT: () => (/* binding */ SLOT_NAME_BUTTON_CONTENT),
/* harmony export */   SLOT_NAME_CUSTOM_FOOT: () => (/* binding */ SLOT_NAME_CUSTOM_FOOT),
/* harmony export */   SLOT_NAME_DECREMENT: () => (/* binding */ SLOT_NAME_DECREMENT),
/* harmony export */   SLOT_NAME_DEFAULT: () => (/* binding */ SLOT_NAME_DEFAULT),
/* harmony export */   SLOT_NAME_DESCRIPTION: () => (/* binding */ SLOT_NAME_DESCRIPTION),
/* harmony export */   SLOT_NAME_DISMISS: () => (/* binding */ SLOT_NAME_DISMISS),
/* harmony export */   SLOT_NAME_DROP_PLACEHOLDER: () => (/* binding */ SLOT_NAME_DROP_PLACEHOLDER),
/* harmony export */   SLOT_NAME_ELLIPSIS_TEXT: () => (/* binding */ SLOT_NAME_ELLIPSIS_TEXT),
/* harmony export */   SLOT_NAME_EMPTY: () => (/* binding */ SLOT_NAME_EMPTY),
/* harmony export */   SLOT_NAME_EMPTYFILTERED: () => (/* binding */ SLOT_NAME_EMPTYFILTERED),
/* harmony export */   SLOT_NAME_FILE_NAME: () => (/* binding */ SLOT_NAME_FILE_NAME),
/* harmony export */   SLOT_NAME_FIRST: () => (/* binding */ SLOT_NAME_FIRST),
/* harmony export */   SLOT_NAME_FIRST_TEXT: () => (/* binding */ SLOT_NAME_FIRST_TEXT),
/* harmony export */   SLOT_NAME_FOOTER: () => (/* binding */ SLOT_NAME_FOOTER),
/* harmony export */   SLOT_NAME_HEADER: () => (/* binding */ SLOT_NAME_HEADER),
/* harmony export */   SLOT_NAME_HEADER_CLOSE: () => (/* binding */ SLOT_NAME_HEADER_CLOSE),
/* harmony export */   SLOT_NAME_ICON_CLEAR: () => (/* binding */ SLOT_NAME_ICON_CLEAR),
/* harmony export */   SLOT_NAME_ICON_EMPTY: () => (/* binding */ SLOT_NAME_ICON_EMPTY),
/* harmony export */   SLOT_NAME_ICON_FULL: () => (/* binding */ SLOT_NAME_ICON_FULL),
/* harmony export */   SLOT_NAME_ICON_HALF: () => (/* binding */ SLOT_NAME_ICON_HALF),
/* harmony export */   SLOT_NAME_IMG: () => (/* binding */ SLOT_NAME_IMG),
/* harmony export */   SLOT_NAME_INCREMENT: () => (/* binding */ SLOT_NAME_INCREMENT),
/* harmony export */   SLOT_NAME_INVALID_FEEDBACK: () => (/* binding */ SLOT_NAME_INVALID_FEEDBACK),
/* harmony export */   SLOT_NAME_LABEL: () => (/* binding */ SLOT_NAME_LABEL),
/* harmony export */   SLOT_NAME_LAST_TEXT: () => (/* binding */ SLOT_NAME_LAST_TEXT),
/* harmony export */   SLOT_NAME_LEAD: () => (/* binding */ SLOT_NAME_LEAD),
/* harmony export */   SLOT_NAME_LOADING: () => (/* binding */ SLOT_NAME_LOADING),
/* harmony export */   SLOT_NAME_MODAL_BACKDROP: () => (/* binding */ SLOT_NAME_MODAL_BACKDROP),
/* harmony export */   SLOT_NAME_MODAL_CANCEL: () => (/* binding */ SLOT_NAME_MODAL_CANCEL),
/* harmony export */   SLOT_NAME_MODAL_FOOTER: () => (/* binding */ SLOT_NAME_MODAL_FOOTER),
/* harmony export */   SLOT_NAME_MODAL_HEADER: () => (/* binding */ SLOT_NAME_MODAL_HEADER),
/* harmony export */   SLOT_NAME_MODAL_HEADER_CLOSE: () => (/* binding */ SLOT_NAME_MODAL_HEADER_CLOSE),
/* harmony export */   SLOT_NAME_MODAL_OK: () => (/* binding */ SLOT_NAME_MODAL_OK),
/* harmony export */   SLOT_NAME_MODAL_TITLE: () => (/* binding */ SLOT_NAME_MODAL_TITLE),
/* harmony export */   SLOT_NAME_NAV_NEXT_DECADE: () => (/* binding */ SLOT_NAME_NAV_NEXT_DECADE),
/* harmony export */   SLOT_NAME_NAV_NEXT_MONTH: () => (/* binding */ SLOT_NAME_NAV_NEXT_MONTH),
/* harmony export */   SLOT_NAME_NAV_NEXT_YEAR: () => (/* binding */ SLOT_NAME_NAV_NEXT_YEAR),
/* harmony export */   SLOT_NAME_NAV_PEV_DECADE: () => (/* binding */ SLOT_NAME_NAV_PEV_DECADE),
/* harmony export */   SLOT_NAME_NAV_PEV_MONTH: () => (/* binding */ SLOT_NAME_NAV_PEV_MONTH),
/* harmony export */   SLOT_NAME_NAV_PEV_YEAR: () => (/* binding */ SLOT_NAME_NAV_PEV_YEAR),
/* harmony export */   SLOT_NAME_NAV_THIS_MONTH: () => (/* binding */ SLOT_NAME_NAV_THIS_MONTH),
/* harmony export */   SLOT_NAME_NEXT_TEXT: () => (/* binding */ SLOT_NAME_NEXT_TEXT),
/* harmony export */   SLOT_NAME_OVERLAY: () => (/* binding */ SLOT_NAME_OVERLAY),
/* harmony export */   SLOT_NAME_PAGE: () => (/* binding */ SLOT_NAME_PAGE),
/* harmony export */   SLOT_NAME_PLACEHOLDER: () => (/* binding */ SLOT_NAME_PLACEHOLDER),
/* harmony export */   SLOT_NAME_PREPEND: () => (/* binding */ SLOT_NAME_PREPEND),
/* harmony export */   SLOT_NAME_PREV_TEXT: () => (/* binding */ SLOT_NAME_PREV_TEXT),
/* harmony export */   SLOT_NAME_ROW_DETAILS: () => (/* binding */ SLOT_NAME_ROW_DETAILS),
/* harmony export */   SLOT_NAME_TABLE_BUSY: () => (/* binding */ SLOT_NAME_TABLE_BUSY),
/* harmony export */   SLOT_NAME_TABLE_CAPTION: () => (/* binding */ SLOT_NAME_TABLE_CAPTION),
/* harmony export */   SLOT_NAME_TABLE_COLGROUP: () => (/* binding */ SLOT_NAME_TABLE_COLGROUP),
/* harmony export */   SLOT_NAME_TABS_END: () => (/* binding */ SLOT_NAME_TABS_END),
/* harmony export */   SLOT_NAME_TABS_START: () => (/* binding */ SLOT_NAME_TABS_START),
/* harmony export */   SLOT_NAME_TEXT: () => (/* binding */ SLOT_NAME_TEXT),
/* harmony export */   SLOT_NAME_THEAD_TOP: () => (/* binding */ SLOT_NAME_THEAD_TOP),
/* harmony export */   SLOT_NAME_TITLE: () => (/* binding */ SLOT_NAME_TITLE),
/* harmony export */   SLOT_NAME_TOAST_TITLE: () => (/* binding */ SLOT_NAME_TOAST_TITLE),
/* harmony export */   SLOT_NAME_TOP_ROW: () => (/* binding */ SLOT_NAME_TOP_ROW),
/* harmony export */   SLOT_NAME_VALID_FEEDBACK: () => (/* binding */ SLOT_NAME_VALID_FEEDBACK)
/* harmony export */ });
var SLOT_NAME_ADD_BUTTON_TEXT = 'add-button-text';
var SLOT_NAME_APPEND = 'append';
var SLOT_NAME_ASIDE = 'aside';
var SLOT_NAME_BADGE = 'badge';
var SLOT_NAME_BOTTOM_ROW = 'bottom-row';
var SLOT_NAME_BUTTON_CONTENT = 'button-content';
var SLOT_NAME_CUSTOM_FOOT = 'custom-foot';
var SLOT_NAME_DECREMENT = 'decrement';
var SLOT_NAME_DEFAULT = 'default';
var SLOT_NAME_DESCRIPTION = 'description';
var SLOT_NAME_DISMISS = 'dismiss';
var SLOT_NAME_DROP_PLACEHOLDER = 'drop-placeholder';
var SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text';
var SLOT_NAME_EMPTY = 'empty';
var SLOT_NAME_EMPTYFILTERED = 'emptyfiltered';
var SLOT_NAME_FILE_NAME = 'file-name';
var SLOT_NAME_FIRST = 'first';
var SLOT_NAME_FIRST_TEXT = 'first-text';
var SLOT_NAME_FOOTER = 'footer';
var SLOT_NAME_HEADER = 'header';
var SLOT_NAME_HEADER_CLOSE = 'header-close';
var SLOT_NAME_ICON_CLEAR = 'icon-clear';
var SLOT_NAME_ICON_EMPTY = 'icon-empty';
var SLOT_NAME_ICON_FULL = 'icon-full';
var SLOT_NAME_ICON_HALF = 'icon-half';
var SLOT_NAME_IMG = 'img';
var SLOT_NAME_INCREMENT = 'increment';
var SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback';
var SLOT_NAME_LABEL = 'label';
var SLOT_NAME_LAST_TEXT = 'last-text';
var SLOT_NAME_LEAD = 'lead';
var SLOT_NAME_LOADING = 'loading';
var SLOT_NAME_MODAL_BACKDROP = 'modal-backdrop';
var SLOT_NAME_MODAL_CANCEL = 'modal-cancel';
var SLOT_NAME_MODAL_FOOTER = 'modal-footer';
var SLOT_NAME_MODAL_HEADER = 'modal-header';
var SLOT_NAME_MODAL_HEADER_CLOSE = 'modal-header-close';
var SLOT_NAME_MODAL_OK = 'modal-ok';
var SLOT_NAME_MODAL_TITLE = 'modal-title';
var SLOT_NAME_NAV_NEXT_DECADE = 'nav-next-decade';
var SLOT_NAME_NAV_NEXT_MONTH = 'nav-next-month';
var SLOT_NAME_NAV_NEXT_YEAR = 'nav-next-year';
var SLOT_NAME_NAV_PEV_DECADE = 'nav-prev-decade';
var SLOT_NAME_NAV_PEV_MONTH = 'nav-prev-month';
var SLOT_NAME_NAV_PEV_YEAR = 'nav-prev-year';
var SLOT_NAME_NAV_THIS_MONTH = 'nav-this-month';
var SLOT_NAME_NEXT_TEXT = 'next-text';
var SLOT_NAME_OVERLAY = 'overlay';
var SLOT_NAME_PAGE = 'page';
var SLOT_NAME_PLACEHOLDER = 'placeholder';
var SLOT_NAME_PREPEND = 'prepend';
var SLOT_NAME_PREV_TEXT = 'prev-text';
var SLOT_NAME_ROW_DETAILS = 'row-details';
var SLOT_NAME_TABLE_BUSY = 'table-busy';
var SLOT_NAME_TABLE_CAPTION = 'table-caption';
var SLOT_NAME_TABLE_COLGROUP = 'table-colgroup';
var SLOT_NAME_TABS_END = 'tabs-end';
var SLOT_NAME_TABS_START = 'tabs-start';
var SLOT_NAME_TEXT = 'text';
var SLOT_NAME_THEAD_TOP = 'thead-top';
var SLOT_NAME_TITLE = 'title';
var SLOT_NAME_TOAST_TITLE = 'toast-title';
var SLOT_NAME_TOP_ROW = 'top-row';
var SLOT_NAME_VALID_FEEDBACK = 'valid-feedback';

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/attrs.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/attrs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attrsMixin: () => (/* binding */ attrsMixin)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/bootstrap-vue/esm/utils/cache.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var attrsMixinVue2 = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__.makePropCacheMixin)('$attrs', 'bvAttrs');
var attrsMixinVue3 = (0,_vue__WEBPACK_IMPORTED_MODULE_1__.extend)({
  computed: {
    bvAttrs: function bvAttrs() {
      var bvAttrs = _objectSpread({}, this.$attrs);

      Object.keys(bvAttrs).forEach(function (key) {
        if (bvAttrs[key] === undefined) {
          delete bvAttrs[key];
        }
      });
      return bvAttrs;
    }
  }
});
var attrsMixin = _vue__WEBPACK_IMPORTED_MODULE_1__.isVue3 ? attrsMixinVue3 : attrsMixinVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenOnRootMixin: () => (/* binding */ listenOnRootMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_get_event_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-event-root */ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js");



 // --- Constants ---

var PROP = '$_rootListeners'; // --- Mixin ---
// @vue/component

var listenOnRootMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    bvEventRoot: function bvEventRoot() {
      return (0,_utils_get_event_root__WEBPACK_IMPORTED_MODULE_1__.getEventRoot)(this);
    }
  },
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffRoot(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerRootListener: function registerRootListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_3__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterRootListener: function unregisterRootListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },

    /**
     * Safely register event listeners on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on `$root` and is destroyed,
     * this orphans a callback because the node is gone, but the `$root`
     * does not clear the callback
     *
     * When registering a `$root` listener, it also registers the listener
     * to be removed in the component's `beforeDestroy()` hook
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      if (this.bvEventRoot) {
        this.bvEventRoot.$on(event, callback);
        this.registerRootListener(event, callback);
      }
    },

    /**
     * Safely register a `$once()` event listener on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on `$root` and is destroyed,
     * this orphans a callback because the node is gone, but the `$root`
     * does not clear the callback
     *
     * When registering a `$root` listener, it also registers the listener
     * to be removed in the component's `beforeDestroy()` hook
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      if (this.bvEventRoot) {
        var _callback = function _callback() {
          _this2.unregisterRootListener(_callback); // eslint-disable-next-line node/no-callback-literal


          callback.apply(void 0, arguments);
        };

        this.bvEventRoot.$once(event, _callback);
        this.registerRootListener(event, _callback);
      }
    },

    /**
     * Safely unregister event listeners from the root Vue node
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOffRoot: function listenOffRoot(event, callback) {
      this.unregisterRootListener(event, callback);

      if (this.bvEventRoot) {
        this.bvEventRoot.$off(event, callback);
      }
    },

    /**
     * Convenience method for calling `vm.$emit()` on `$root`
     *
     * @param {string} event
     * @param {*} args
     */
    emitOnRoot: function emitOnRoot(event) {
      if (this.bvEventRoot) {
        var _this$bvEventRoot;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$bvEventRoot = this.bvEventRoot).$emit.apply(_this$bvEventRoot, [event].concat(args));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listeners.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listeners.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenersMixin: () => (/* binding */ listenersMixin)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/bootstrap-vue/esm/utils/cache.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var listenersMixinVue2 = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__.makePropCacheMixin)('$listeners', 'bvListeners');
var listenersMixinVue3 = (0,_vue__WEBPACK_IMPORTED_MODULE_1__.extend)({
  data: function data() {
    return {
      bvListeners: {}
    };
  },
  created: function created() {
    this.bvListeners = _objectSpread({}, this.$listeners);
  },
  beforeUpdate: function beforeUpdate() {
    this.bvListeners = _objectSpread({}, this.$listeners);
  }
});
var listenersMixin = _vue__WEBPACK_IMPORTED_MODULE_1__.isVue3 ? listenersMixinVue3 : listenersMixinVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeSlotMixin: () => (/* binding */ normalizeSlotMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");



 // @vue/component

var normalizeSlotMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  methods: {
    // Returns `true` if the either a `$scopedSlot` or `$slot` exists with the specified name
    // `name` can be a string name or an array of names
    hasNormalizedSlot: function hasNormalizedSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_slots__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_DEFAULT;
      var scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$scopedSlots;
      var slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$slots;
      return (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__.hasNormalizedSlot)(name, scopedSlots, slots);
    },
    // Returns an array of rendered VNodes if slot found, otherwise `undefined`
    // `name` can be a string name or an array of names
    normalizeSlot: function normalizeSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_slots__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_DEFAULT;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$scopedSlots;
      var slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.$slots;

      var vNodes = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__.normalizeSlot)(name, scope, scopedSlots, slots);

      return vNodes ? (0,_utils_array__WEBPACK_IMPORTED_MODULE_3__.concat)(vNodes) : vNodes;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/pagination.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/pagination.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MODEL_EVENT_NAME: () => (/* binding */ MODEL_EVENT_NAME),
/* harmony export */   MODEL_PROP_NAME: () => (/* binding */ MODEL_PROP_NAME),
/* harmony export */   paginationMixin: () => (/* binding */ paginationMixin),
/* harmony export */   props: () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math */ "./node_modules/bootstrap-vue/esm/utils/math.js");
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/model */ "./node_modules/bootstrap-vue/esm/utils/model.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_safe_vue_instance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/safe-vue-instance */ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/warn */ "./node_modules/bootstrap-vue/esm/utils/warn.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
/* harmony import */ var _components_link_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/link/link */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
var _watch;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















 // Common props, computed, data, render function, and methods
// for `<b-pagination>` and `<b-pagination-nav>`
// --- Constants ---

var _makeModelMixin = (0,_utils_model__WEBPACK_IMPORTED_MODULE_0__.makeModelMixin)('value', {
  type: _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN_NUMBER_STRING,
  defaultValue: null,

  /* istanbul ignore next */
  validator: function validator(value) {
    if (!(0,_utils_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value) && (0,_utils_number__WEBPACK_IMPORTED_MODULE_3__.toInteger)(value, 0) < 1) {
      (0,_utils_warn__WEBPACK_IMPORTED_MODULE_4__.warn)('"v-model" value must be a number greater than "0"', _constants_components__WEBPACK_IMPORTED_MODULE_5__.NAME_PAGINATION);
      return false;
    }

    return true;
  }
}),
    modelMixin = _makeModelMixin.mixin,
    modelProps = _makeModelMixin.props,
    MODEL_PROP_NAME = _makeModelMixin.prop,
    MODEL_EVENT_NAME = _makeModelMixin.event;

 // Threshold of limit size when we start/stop showing ellipsis

var ELLIPSIS_THRESHOLD = 3; // Default # of buttons limit

var DEFAULT_LIMIT = 5; // --- Helper methods ---
// Make an array of N to N+X

var makePageArray = function makePageArray(startNumber, numberOfPages) {
  return (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.createArray)(numberOfPages, function (_, i) {
    return {
      number: startNumber + i,
      classes: null
    };
  });
}; // Sanitize the provided limit value (converting to a number)


var sanitizeLimit = function sanitizeLimit(value) {
  var limit = (0,_utils_number__WEBPACK_IMPORTED_MODULE_3__.toInteger)(value) || 1;
  return limit < 1 ? DEFAULT_LIMIT : limit;
}; // Sanitize the provided current page number (converting to a number)


var sanitizeCurrentPage = function sanitizeCurrentPage(val, numberOfPages) {
  var page = (0,_utils_number__WEBPACK_IMPORTED_MODULE_3__.toInteger)(val) || 1;
  return page > numberOfPages ? numberOfPages : page < 1 ? 1 : page;
}; // Links don't normally respond to SPACE, so we add that
// functionality via this handler


var onSpaceKey = function onSpaceKey(event) {
  if (event.keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_7__.CODE_SPACE) {
    // Stop page from scrolling
    (0,_utils_events__WEBPACK_IMPORTED_MODULE_8__.stopEvent)(event, {
      immediatePropagation: true
    }); // Trigger the click event on the link

    event.currentTarget.click();
    return false;
  }
}; // --- Props ---


var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_10__.sortKeys)(_objectSpread(_objectSpread({}, modelProps), {}, {
  align: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'left'),
  ariaLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Pagination'),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  ellipsisClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  ellipsisText: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, "\u2026"),
  // '…'
  firstClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  firstNumber: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  firstText: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, "\xAB"),
  // '«'
  hideEllipsis: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  hideGotoEndButtons: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  labelFirstPage: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Go to first page'),
  labelLastPage: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Go to last page'),
  labelNextPage: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Go to next page'),
  labelPage: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_FUNCTION_STRING, 'Go to page'),
  labelPrevPage: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Go to previous page'),
  lastClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  lastNumber: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  lastText: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, "\xBB"),
  // '»'
  limit: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_NUMBER_STRING, DEFAULT_LIMIT,
  /* istanbul ignore next */
  function (value) {
    if ((0,_utils_number__WEBPACK_IMPORTED_MODULE_3__.toInteger)(value, 0) < 1) {
      (0,_utils_warn__WEBPACK_IMPORTED_MODULE_4__.warn)('Prop "limit" must be a number greater than "0"', _constants_components__WEBPACK_IMPORTED_MODULE_5__.NAME_PAGINATION);
      return false;
    }

    return true;
  }),
  nextClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  nextText: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, "\u203A"),
  // '›'
  pageClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  pills: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  prevClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  prevText: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, "\u2039"),
  // '‹'
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
})), 'pagination'); // --- Mixin ---
// @vue/component

var paginationMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_11__.extend)({
  mixins: [modelMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_12__.normalizeSlotMixin],
  props: props,
  data: function data() {
    // `-1` signifies no page initially selected
    var currentPage = (0,_utils_number__WEBPACK_IMPORTED_MODULE_3__.toInteger)(this[MODEL_PROP_NAME], 0);
    currentPage = currentPage > 0 ? currentPage : -1;
    return {
      currentPage: currentPage,
      localNumberOfPages: 1,
      localLimit: DEFAULT_LIMIT
    };
  },
  computed: {
    btnSize: function btnSize() {
      var size = this.size;
      return size ? "pagination-".concat(size) : '';
    },
    alignment: function alignment() {
      var align = this.align;

      if (align === 'center') {
        return 'justify-content-center';
      } else if (align === 'end' || align === 'right') {
        return 'justify-content-end';
      } else if (align === 'fill') {
        // The page-items will also have 'flex-fill' added
        // We add text centering to make the button appearance better in fill mode
        return 'text-center';
      }

      return '';
    },
    styleClass: function styleClass() {
      return this.pills ? 'b-pagination-pills' : '';
    },
    computedCurrentPage: function computedCurrentPage() {
      return sanitizeCurrentPage(this.currentPage, this.localNumberOfPages);
    },
    paginationParams: function paginationParams() {
      // Determine if we should show the the ellipsis
      var limit = this.localLimit,
          numberOfPages = this.localNumberOfPages,
          currentPage = this.computedCurrentPage,
          hideEllipsis = this.hideEllipsis,
          firstNumber = this.firstNumber,
          lastNumber = this.lastNumber;
      var showFirstDots = false;
      var showLastDots = false;
      var numberOfLinks = limit;
      var startNumber = 1;

      if (numberOfPages <= limit) {
        // Special case: Less pages available than the limit of displayed pages
        numberOfLinks = numberOfPages;
      } else if (currentPage < limit - 1 && limit > ELLIPSIS_THRESHOLD) {
        if (!hideEllipsis || lastNumber) {
          showLastDots = true;
          numberOfLinks = limit - (firstNumber ? 0 : 1);
        }

        numberOfLinks = (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.mathMin)(numberOfLinks, limit);
      } else if (numberOfPages - currentPage + 2 < limit && limit > ELLIPSIS_THRESHOLD) {
        if (!hideEllipsis || firstNumber) {
          showFirstDots = true;
          numberOfLinks = limit - (lastNumber ? 0 : 1);
        }

        startNumber = numberOfPages - numberOfLinks + 1;
      } else {
        // We are somewhere in the middle of the page list
        if (limit > ELLIPSIS_THRESHOLD) {
          numberOfLinks = limit - (hideEllipsis ? 0 : 2);
          showFirstDots = !!(!hideEllipsis || firstNumber);
          showLastDots = !!(!hideEllipsis || lastNumber);
        }

        startNumber = currentPage - (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.mathFloor)(numberOfLinks / 2);
      } // Sanity checks

      /* istanbul ignore if */


      if (startNumber < 1) {
        startNumber = 1;
        showFirstDots = false;
      } else if (startNumber > numberOfPages - numberOfLinks) {
        startNumber = numberOfPages - numberOfLinks + 1;
        showLastDots = false;
      }

      if (showFirstDots && firstNumber && startNumber < 4) {
        numberOfLinks = numberOfLinks + 2;
        startNumber = 1;
        showFirstDots = false;
      }

      var lastPageNumber = startNumber + numberOfLinks - 1;

      if (showLastDots && lastNumber && lastPageNumber > numberOfPages - 3) {
        numberOfLinks = numberOfLinks + (lastPageNumber === numberOfPages - 2 ? 2 : 3);
        showLastDots = false;
      } // Special handling for lower limits (where ellipsis are never shown)


      if (limit <= ELLIPSIS_THRESHOLD) {
        if (firstNumber && startNumber === 1) {
          numberOfLinks = (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.mathMin)(numberOfLinks + 1, numberOfPages, limit + 1);
        } else if (lastNumber && numberOfPages === startNumber + numberOfLinks - 1) {
          startNumber = (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.mathMax)(startNumber - 1, 1);
          numberOfLinks = (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.mathMin)(numberOfPages - startNumber + 1, numberOfPages, limit + 1);
        }
      }

      numberOfLinks = (0,_utils_math__WEBPACK_IMPORTED_MODULE_13__.mathMin)(numberOfLinks, numberOfPages - startNumber + 1);
      return {
        showFirstDots: showFirstDots,
        showLastDots: showLastDots,
        numberOfLinks: numberOfLinks,
        startNumber: startNumber
      };
    },
    pageList: function pageList() {
      // Generates the pageList array
      var _this$paginationParam = this.paginationParams,
          numberOfLinks = _this$paginationParam.numberOfLinks,
          startNumber = _this$paginationParam.startNumber;
      var currentPage = this.computedCurrentPage; // Generate list of page numbers

      var pages = makePageArray(startNumber, numberOfLinks); // We limit to a total of 3 page buttons on XS screens
      // So add classes to page links to hide them for XS breakpoint
      // Note: Ellipsis will also be hidden on XS screens
      // TODO: Make this visual limit configurable based on breakpoint(s)

      if (pages.length > 3) {
        var idx = currentPage - startNumber; // THe following is a bootstrap-vue custom utility class

        var classes = 'bv-d-xs-down-none';

        if (idx === 0) {
          // Keep leftmost 3 buttons visible when current page is first page
          for (var i = 3; i < pages.length; i++) {
            pages[i].classes = classes;
          }
        } else if (idx === pages.length - 1) {
          // Keep rightmost 3 buttons visible when current page is last page
          for (var _i = 0; _i < pages.length - 3; _i++) {
            pages[_i].classes = classes;
          }
        } else {
          // Hide all except current page, current page - 1 and current page + 1
          for (var _i2 = 0; _i2 < idx - 1; _i2++) {
            // hide some left button(s)
            pages[_i2].classes = classes;
          }

          for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
            // hide some right button(s)
            pages[_i3].classes = classes;
          }
        }
      }

      return pages;
    }
  },
  watch: (_watch = {}, _defineProperty(_watch, MODEL_PROP_NAME, function (newValue, oldValue) {
    if (newValue !== oldValue) {
      this.currentPage = sanitizeCurrentPage(newValue, this.localNumberOfPages);
    }
  }), _defineProperty(_watch, "currentPage", function currentPage(newValue, oldValue) {
    if (newValue !== oldValue) {
      // Emit `null` if no page selected
      this.$emit(MODEL_EVENT_NAME, newValue > 0 ? newValue : null);
    }
  }), _defineProperty(_watch, "limit", function limit(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.localLimit = sanitizeLimit(newValue);
    }
  }), _watch),
  created: function created() {
    var _this = this;

    // Set our default values in data
    this.localLimit = sanitizeLimit(this.limit);
    this.$nextTick(function () {
      // Sanity check
      _this.currentPage = _this.currentPage > _this.localNumberOfPages ? _this.localNumberOfPages : _this.currentPage;
    });
  },
  methods: {
    handleKeyNav: function handleKeyNav(event) {
      var keyCode = event.keyCode,
          shiftKey = event.shiftKey;
      /* istanbul ignore if */

      if (this.isNav) {
        // We disable left/right keyboard navigation in `<b-pagination-nav>`
        return;
      }

      if (keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_7__.CODE_LEFT || keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_7__.CODE_UP) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_8__.stopEvent)(event, {
          propagation: false
        });
        shiftKey ? this.focusFirst() : this.focusPrev();
      } else if (keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_7__.CODE_RIGHT || keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_7__.CODE_DOWN) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_8__.stopEvent)(event, {
          propagation: false
        });
        shiftKey ? this.focusLast() : this.focusNext();
      }
    },
    getButtons: function getButtons() {
      // Return only buttons that are visible
      return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.selectAll)('button.page-link, a.page-link', this.$el).filter(function (btn) {
        return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.isVisible)(btn);
      });
    },
    focusCurrent: function focusCurrent() {
      var _this2 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this2.getButtons().find(function (el) {
          return (0,_utils_number__WEBPACK_IMPORTED_MODULE_3__.toInteger)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.getAttr)(el, 'aria-posinset'), 0) === _this2.computedCurrentPage;
        });

        if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.attemptFocus)(btn)) {
          // Fallback if current page is not in button list
          _this2.focusFirst();
        }
      });
    },
    focusFirst: function focusFirst() {
      var _this3 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this3.getButtons().find(function (el) {
          return !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.isDisabled)(el);
        });

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.attemptFocus)(btn);
      });
    },
    focusLast: function focusLast() {
      var _this4 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this4.getButtons().reverse().find(function (el) {
          return !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.isDisabled)(el);
        });

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.attemptFocus)(btn);
      });
    },
    focusPrev: function focusPrev() {
      var _this5 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this5.getButtons();

        var index = buttons.indexOf((0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.getActiveElement)());

        if (index > 0 && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.isDisabled)(buttons[index - 1])) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.attemptFocus)(buttons[index - 1]);
        }
      });
    },
    focusNext: function focusNext() {
      var _this6 = this;

      // We do this in `$nextTick()` to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this6.getButtons();

        var index = buttons.indexOf((0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.getActiveElement)());

        if (index < buttons.length - 1 && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.isDisabled)(buttons[index + 1])) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__.attemptFocus)(buttons[index + 1]);
        }
      });
    }
  },
  render: function render(h) {
    var _this7 = this;

    var _safeVueInstance = (0,_utils_safe_vue_instance__WEBPACK_IMPORTED_MODULE_15__.safeVueInstance)(this),
        disabled = _safeVueInstance.disabled,
        labelPage = _safeVueInstance.labelPage,
        ariaLabel = _safeVueInstance.ariaLabel,
        isNav = _safeVueInstance.isNav,
        numberOfPages = _safeVueInstance.localNumberOfPages,
        currentPage = _safeVueInstance.computedCurrentPage;

    var pageNumbers = this.pageList.map(function (p) {
      return p.number;
    });
    var _this$paginationParam2 = this.paginationParams,
        showFirstDots = _this$paginationParam2.showFirstDots,
        showLastDots = _this$paginationParam2.showLastDots;
    var fill = this.align === 'fill';
    var $buttons = []; // Helper function and flag

    var isActivePage = function isActivePage(pageNumber) {
      return pageNumber === currentPage;
    };

    var noCurrentPage = this.currentPage < 1; // Factory function for prev/next/first/last buttons

    var makeEndBtn = function makeEndBtn(linkTo, ariaLabel, btnSlot, btnText, btnClass, pageTest, key) {
      var isDisabled = disabled || isActivePage(pageTest) || noCurrentPage || linkTo < 1 || linkTo > numberOfPages;
      var pageNumber = linkTo < 1 ? 1 : linkTo > numberOfPages ? numberOfPages : linkTo;
      var scope = {
        disabled: isDisabled,
        page: pageNumber,
        index: pageNumber - 1
      };
      var $btnContent = _this7.normalizeSlot(btnSlot, scope) || (0,_utils_string__WEBPACK_IMPORTED_MODULE_16__.toString)(btnText) || h();
      var $inner = h(isDisabled ? 'span' : isNav ? _components_link_link__WEBPACK_IMPORTED_MODULE_17__.BLink : 'button', {
        staticClass: 'page-link',
        class: {
          'flex-grow-1': !isNav && !isDisabled && fill
        },
        props: isDisabled || !isNav ? {} : _this7.linkProps(linkTo),
        attrs: {
          role: isNav ? null : 'menuitem',
          type: isNav || isDisabled ? null : 'button',
          tabindex: isDisabled || isNav ? null : '-1',
          'aria-label': ariaLabel,
          'aria-controls': (0,_utils_safe_vue_instance__WEBPACK_IMPORTED_MODULE_15__.safeVueInstance)(_this7).ariaControls || null,
          'aria-disabled': isDisabled ? 'true' : null
        },
        on: isDisabled ? {} : {
          '!click': function click(event) {
            _this7.onClick(event, linkTo);
          },
          keydown: onSpaceKey
        }
      }, [$btnContent]);
      return h('li', {
        key: key,
        staticClass: 'page-item',
        class: [{
          disabled: isDisabled,
          'flex-fill': fill,
          'd-flex': fill && !isNav && !isDisabled
        }, btnClass],
        attrs: {
          role: isNav ? null : 'presentation',
          'aria-hidden': isDisabled ? 'true' : null
        }
      }, [$inner]);
    }; // Ellipsis factory


    var makeEllipsis = function makeEllipsis(isLast) {
      return h('li', {
        staticClass: 'page-item',
        class: ['disabled', 'bv-d-xs-down-none', fill ? 'flex-fill' : '', _this7.ellipsisClass],
        attrs: {
          role: 'separator'
        },
        key: "ellipsis-".concat(isLast ? 'last' : 'first')
      }, [h('span', {
        staticClass: 'page-link'
      }, [_this7.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_18__.SLOT_NAME_ELLIPSIS_TEXT) || (0,_utils_string__WEBPACK_IMPORTED_MODULE_16__.toString)(_this7.ellipsisText) || h()])]);
    }; // Page button factory


    var makePageButton = function makePageButton(page, idx) {
      var pageNumber = page.number;
      var active = isActivePage(pageNumber) && !noCurrentPage; // Active page will have tabindex of 0, or if no current page and first page button

      var tabIndex = disabled ? null : active || noCurrentPage && idx === 0 ? '0' : '-1';
      var attrs = {
        role: isNav ? null : 'menuitemradio',
        type: isNav || disabled ? null : 'button',
        'aria-disabled': disabled ? 'true' : null,
        'aria-controls': (0,_utils_safe_vue_instance__WEBPACK_IMPORTED_MODULE_15__.safeVueInstance)(_this7).ariaControls || null,
        'aria-label': (0,_utils_props__WEBPACK_IMPORTED_MODULE_9__.hasPropFunction)(labelPage) ?
        /* istanbul ignore next */
        labelPage(pageNumber) : "".concat((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(labelPage) ? labelPage() : labelPage, " ").concat(pageNumber),
        'aria-checked': isNav ? null : active ? 'true' : 'false',
        'aria-current': isNav && active ? 'page' : null,
        'aria-posinset': isNav ? null : pageNumber,
        'aria-setsize': isNav ? null : numberOfPages,
        // ARIA "roving tabindex" method (except in `isNav` mode)
        tabindex: isNav ? null : tabIndex
      };
      var btnContent = (0,_utils_string__WEBPACK_IMPORTED_MODULE_16__.toString)(_this7.makePage(pageNumber));
      var scope = {
        page: pageNumber,
        index: pageNumber - 1,
        content: btnContent,
        active: active,
        disabled: disabled
      };
      var $inner = h(disabled ? 'span' : isNav ? _components_link_link__WEBPACK_IMPORTED_MODULE_17__.BLink : 'button', {
        props: disabled || !isNav ? {} : _this7.linkProps(pageNumber),
        staticClass: 'page-link',
        class: {
          'flex-grow-1': !isNav && !disabled && fill
        },
        attrs: attrs,
        on: disabled ? {} : {
          '!click': function click(event) {
            _this7.onClick(event, pageNumber);
          },
          keydown: onSpaceKey
        }
      }, [_this7.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_18__.SLOT_NAME_PAGE, scope) || btnContent]);
      return h('li', {
        staticClass: 'page-item',
        class: [{
          disabled: disabled,
          active: active,
          'flex-fill': fill,
          'd-flex': fill && !isNav && !disabled
        }, page.classes, _this7.pageClass],
        attrs: {
          role: isNav ? null : 'presentation'
        },
        key: "page-".concat(pageNumber)
      }, [$inner]);
    }; // Goto first page button
    // Don't render button when `hideGotoEndButtons` or `firstNumber` is set


    var $firstPageBtn = h();

    if (!this.firstNumber && !this.hideGotoEndButtons) {
      $firstPageBtn = makeEndBtn(1, this.labelFirstPage, _constants_slots__WEBPACK_IMPORTED_MODULE_18__.SLOT_NAME_FIRST_TEXT, this.firstText, this.firstClass, 1, 'pagination-goto-first');
    }

    $buttons.push($firstPageBtn); // Goto previous page button

    $buttons.push(makeEndBtn(currentPage - 1, this.labelPrevPage, _constants_slots__WEBPACK_IMPORTED_MODULE_18__.SLOT_NAME_PREV_TEXT, this.prevText, this.prevClass, 1, 'pagination-goto-prev')); // Show first (1) button?

    $buttons.push(this.firstNumber && pageNumbers[0] !== 1 ? makePageButton({
      number: 1
    }, 0) : h()); // First ellipsis

    $buttons.push(showFirstDots ? makeEllipsis(false) : h()); // Individual page links

    this.pageList.forEach(function (page, idx) {
      var offset = showFirstDots && _this7.firstNumber && pageNumbers[0] !== 1 ? 1 : 0;
      $buttons.push(makePageButton(page, idx + offset));
    }); // Last ellipsis

    $buttons.push(showLastDots ? makeEllipsis(true) : h()); // Show last page button?

    $buttons.push(this.lastNumber && pageNumbers[pageNumbers.length - 1] !== numberOfPages ? makePageButton({
      number: numberOfPages
    }, -1) : h()); // Goto next page button

    $buttons.push(makeEndBtn(currentPage + 1, this.labelNextPage, _constants_slots__WEBPACK_IMPORTED_MODULE_18__.SLOT_NAME_NEXT_TEXT, this.nextText, this.nextClass, numberOfPages, 'pagination-goto-next')); // Goto last page button
    // Don't render button when `hideGotoEndButtons` or `lastNumber` is set

    var $lastPageBtn = h();

    if (!this.lastNumber && !this.hideGotoEndButtons) {
      $lastPageBtn = makeEndBtn(numberOfPages, this.labelLastPage, _constants_slots__WEBPACK_IMPORTED_MODULE_18__.SLOT_NAME_LAST_TEXT, this.lastText, this.lastClass, numberOfPages, 'pagination-goto-last');
    }

    $buttons.push($lastPageBtn); // Assemble the pagination buttons

    var $pagination = h('ul', {
      staticClass: 'pagination',
      class: ['b-pagination', this.btnSize, this.alignment, this.styleClass],
      attrs: {
        role: isNav ? null : 'menubar',
        'aria-disabled': disabled ? 'true' : 'false',
        'aria-label': isNav ? null : ariaLabel || null
      },
      // We disable keyboard left/right nav when `<b-pagination-nav>`
      on: isNav ? {} : {
        keydown: this.handleKeyNav
      },
      ref: 'ul'
    }, $buttons); // If we are `<b-pagination-nav>`, wrap in `<nav>` wrapper

    if (isNav) {
      return h('nav', {
        attrs: {
          'aria-disabled': disabled ? 'true' : null,
          'aria-hidden': disabled ? 'true' : 'false',
          'aria-label': isNav ? ariaLabel || null : null
        }
      }, [$pagination]);
    }

    return $pagination;
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/array.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/array.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayIncludes: () => (/* binding */ arrayIncludes),
/* harmony export */   concat: () => (/* binding */ concat),
/* harmony export */   createArray: () => (/* binding */ createArray),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   flattenDeep: () => (/* binding */ flattenDeep),
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
 // --- Static ---

var from = function from() {
  return Array.from.apply(Array, arguments);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
}; // --- Utilities ---

var createArray = function createArray(length, fillFn) {
  var mapFn = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fillFn) ? fillFn : function () {
    return fillFn;
  };
  return Array.apply(null, {
    length: length
  }).map(mapFn);
};
var flatten = function flatten(array) {
  return array.reduce(function (result, item) {
    return concat(result, item);
  }, []);
};
var flattenDeep = function flattenDeep(array) {
  return array.reduce(function (result, item) {
    return concat(result, Array.isArray(item) ? flattenDeep(item) : item);
  }, []);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/bv-event.class.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BvEvent: () => (/* binding */ BvEvent)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    (0,_object__WEBPACK_IMPORTED_MODULE_0__.assign)(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    (0,_object__WEBPACK_IMPORTED_MODULE_0__.defineProperties)(this, {
      type: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      cancelable: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      nativeEvent: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      target: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      relatedTarget: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      vueTarget: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      componentId: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    (0,_object__WEBPACK_IMPORTED_MODULE_0__.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}();

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/cache.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/cache.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makePropCacheMixin: () => (/* binding */ makePropCacheMixin),
/* harmony export */   makePropWatcher: () => (/* binding */ makePropWatcher)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _loose_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var isEmpty = function isEmpty(value) {
  return !value || (0,_object__WEBPACK_IMPORTED_MODULE_0__.keys)(value).length === 0;
};

var makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newValue, oldValue) {
      if ((0,_loose_equal__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(newValue, oldValue)) {
        return;
      }

      if (isEmpty(newValue) || isEmpty(oldValue)) {
        this[propName] = (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(newValue);
        return;
      }

      for (var key in oldValue) {
        if (!(0,_object__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(newValue, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newValue) {
        this.$set(this.$data[propName], _key, newValue[_key]);
      }
    }
  };
};
var makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
    data: function data() {
      return _defineProperty({}, proxyPropName, (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(this[propName]));
    },
    watch: _defineProperty({}, propName, makePropWatcher(proxyPropName))
  });
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/clone-deep.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(obj)) {
    return (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(obj).reduce(function (result, key) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/config.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBreakpoints: () => (/* binding */ getBreakpoints),
/* harmony export */   getBreakpointsCached: () => (/* binding */ getBreakpointsCached),
/* harmony export */   getBreakpointsDown: () => (/* binding */ getBreakpointsDown),
/* harmony export */   getBreakpointsDownCached: () => (/* binding */ getBreakpointsDownCached),
/* harmony export */   getBreakpointsUp: () => (/* binding */ getBreakpointsUp),
/* harmony export */   getBreakpointsUpCached: () => (/* binding */ getBreakpointsUpCached),
/* harmony export */   getComponentConfig: () => (/* binding */ getComponentConfig),
/* harmony export */   getConfig: () => (/* binding */ getConfig),
/* harmony export */   getConfigValue: () => (/* binding */ getConfigValue)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./node_modules/bootstrap-vue/esm/constants/config.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memoize */ "./node_modules/bootstrap-vue/esm/utils/memoize.js");



 // --- Constants ---

var VueProto = _vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config value,
// to prevent mutation of the user config object
// Get the current config

var getConfig = function getConfig() {
  var bvConfig = VueProto[_constants_config__WEBPACK_IMPORTED_MODULE_1__.PROP_NAME];
  return bvConfig ? bvConfig.getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key

var getConfigValue = function getConfigValue(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var bvConfig = VueProto[_constants_config__WEBPACK_IMPORTED_MODULE_1__.PROP_NAME];
  return bvConfig ? bvConfig.getConfigValue(key, defaultValue) : (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(defaultValue);
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(key) {
  var propKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Return the particular config value for key if specified,
  // otherwise we return the full config (or an empty object if not found)
  return propKey ? getConfigValue("".concat(key, ".").concat(propKey), defaultValue) : getConfigValue(key, {});
}; // Get all breakpoint names

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints', _constants_config__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_BREAKPOINT);
}; // Private method for caching breakpoint names

var _getBreakpointsCached = (0,_memoize__WEBPACK_IMPORTED_MODULE_3__.memoize)(function () {
  return getBreakpoints();
}); // Get all breakpoint names (cached)


var getBreakpointsCached = function getBreakpointsCached() {
  return (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(_getBreakpointsCached());
}; // Get breakpoints with the smallest breakpoint set as ''
// Useful for components that create breakpoint specific props

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Get breakpoints with the smallest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

var getBreakpointsUpCached = (0,_memoize__WEBPACK_IMPORTED_MODULE_3__.memoize)(function () {
  var breakpoints = getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Get breakpoints with the largest breakpoint set as ''

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Get breakpoints with the largest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

/* istanbul ignore next: we don't use this method anywhere, yet */

var getBreakpointsDownCached = function getBreakpointsDownCached() {
  var breakpoints = getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/dom.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/dom.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationObs: () => (/* binding */ MutationObs),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   attemptBlur: () => (/* binding */ attemptBlur),
/* harmony export */   attemptFocus: () => (/* binding */ attemptFocus),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   closestEl: () => (/* binding */ closestEl),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   getActiveElement: () => (/* binding */ getActiveElement),
/* harmony export */   getAttr: () => (/* binding */ getAttr),
/* harmony export */   getBCR: () => (/* binding */ getBCR),
/* harmony export */   getById: () => (/* binding */ getById),
/* harmony export */   getCS: () => (/* binding */ getCS),
/* harmony export */   getSel: () => (/* binding */ getSel),
/* harmony export */   getStyle: () => (/* binding */ getStyle),
/* harmony export */   getTabables: () => (/* binding */ getTabables),
/* harmony export */   hasAttr: () => (/* binding */ hasAttr),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   isActiveElement: () => (/* binding */ isActiveElement),
/* harmony export */   isDisabled: () => (/* binding */ isDisabled),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isTag: () => (/* binding */ isTag),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   matches: () => (/* binding */ matches),
/* harmony export */   matchesEl: () => (/* binding */ matchesEl),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   reflow: () => (/* binding */ reflow),
/* harmony export */   removeAttr: () => (/* binding */ removeAttr),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   removeNode: () => (/* binding */ removeNode),
/* harmony export */   removeStyle: () => (/* binding */ removeStyle),
/* harmony export */   requestAF: () => (/* binding */ requestAF),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   setAttr: () => (/* binding */ setAttr),
/* harmony export */   setStyle: () => (/* binding */ setStyle)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");





 // --- Constants ---

var ELEMENT_PROTO = _constants_safe_types__WEBPACK_IMPORTED_MODULE_0__.Element.prototype;
var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
  return "".concat(s, ":not(:disabled):not([disabled])");
}).join(', '); // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = ELEMENT_PROTO.matches || ELEMENT_PROTO.msMatchesSelector || ELEMENT_PROTO.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = ELEMENT_PROTO.closest || function (sel) {
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!(0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isNull)(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

/* istanbul ignore next: JSDOM always returns the first option */

var requestAF = (_constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.requestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.webkitRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.mozRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.msRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
}).bind(_constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW);
var MutationObs = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.MutationObserver || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.WebKitMutationObserver || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.MozMutationObserver || null; // --- Utils ---
// Remove a node from DOM

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
}; // Determine if an element is an HTML element

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Get the currently active HTML element

var getActiveElement = function getActiveElement() {
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeElement = _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.activeElement;
  return activeElement && !excludes.some(function (el) {
    return el === activeElement;
  }) ? activeElement : null;
}; // Returns `true` if a tag's name equals `name`

var isTag = function isTag(tag, name) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_3__.toString)(tag).toLowerCase() === (0,_string__WEBPACK_IMPORTED_MODULE_3__.toString)(name).toLowerCase();
}; // Determine if an HTML element is the currently active element

var isActiveElement = function isActiveElement(el) {
  return isElement(el) && el === getActiveElement();
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !contains(_constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow its content (adjusting its height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var selectAll = function selectAll(selector, root) {
  return (0,_array__WEBPACK_IMPORTED_MODULE_4__.from)((isElement(root) ? root : _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var select = function select(selector, root) {
  return (isElement(root) ? root : _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var contains = function contains(parent, child) {
  return parent && (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isFunction)(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var getById = function getById(id) {
  return _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Set an style property on an element

var setStyle = function setStyle(el, prop, value) {
  if (prop && isElement(el)) {
    el.style[prop] = value;
  }
}; // Remove an style property from an element

var removeStyle = function removeStyle(el, prop) {
  if (prop && isElement(el)) {
    el.style[prop] = '';
  }
}; // Get an style property value from an element
// Returns `null` if not found

var getStyle = function getStyle(el, prop) {
  return prop && isElement(el) ? el.style[prop] || null : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var getCS = function getCS(el) {
  var getComputedStyle = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getComputedStyle;
  return getComputedStyle && isElement(el) ? getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var getSel = function getSel() {
  var getSelection = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getSelection;
  return getSelection ? _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to its offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(offsetParentStyles.borderTopWidth, 0);
      parentOffset.left += (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(offsetParentStyles.borderLeftWidth, 0);
    }
  }

  return {
    top: _offset.top - parentOffset.top - (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(elStyles.marginTop, 0),
    left: _offset.left - parentOffset.left - (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(elStyles.marginLeft, 0)
  };
}; // Find all tabable elements in the given element
// Assumes users have not used `tabindex` > `0` on elements

var getTabables = function getTabables() {
  var rootEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return selectAll(TABABLE_SELECTOR, rootEl).filter(isVisible).filter(function (el) {
    return el.tabIndex > -1 && !el.disabled;
  });
}; // Attempt to focus an element, and return `true` if successful

var attemptFocus = function attemptFocus(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    el.focus(options);
  } catch (_unused) {}

  return isActiveElement(el);
}; // Attempt to blur an element, and return `true` if successful

var attemptBlur = function attemptBlur(el) {
  try {
    el.blur();
  } catch (_unused2) {}

  return !isActiveElement(el);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/env.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnv: () => (/* binding */ getEnv),
/* harmony export */   getNoWarn: () => (/* binding */ getNoWarn)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/**
 * Utilities to get information about the current environment
 */
var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? process.env || {} : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN') || getEnv('NODE_ENV') === 'production';
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/events.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOff: () => (/* binding */ eventOff),
/* harmony export */   eventOn: () => (/* binding */ eventOn),
/* harmony export */   eventOnOff: () => (/* binding */ eventOnOff),
/* harmony export */   getRootActionEventName: () => (/* binding */ getRootActionEventName),
/* harmony export */   getRootEventName: () => (/* binding */ getRootEventName),
/* harmony export */   parseEventOptions: () => (/* binding */ parseEventOptions),
/* harmony export */   stopEvent: () => (/* binding */ stopEvent)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_0__.HAS_PASSIVE_EVENT_SUPPORT) {
    return (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!((0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, eventName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, eventName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
}; // Utility method to prevent the default event handling and propagation

var stopEvent = function stopEvent(event) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      _ref$propagation = _ref.propagation,
      propagation = _ref$propagation === void 0 ? true : _ref$propagation,
      _ref$immediatePropaga = _ref.immediatePropagation,
      immediatePropagation = _ref$immediatePropaga === void 0 ? false : _ref$immediatePropaga;

  if (preventDefault) {
    event.preventDefault();
  }

  if (propagation) {
    event.stopPropagation();
  }

  if (immediatePropagation) {
    event.stopImmediatePropagation();
  }
}; // Helper method to convert a component/directive name to a base event name
// `getBaseEventName('BNavigationItem')` => 'navigation-item'
// `getBaseEventName('BVToggle')` => 'toggle'

var getBaseEventName = function getBaseEventName(value) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(value.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_3__.RX_BV_PREFIX, ''));
}; // Get a root event name by component/directive and event name
// `getBaseEventName('BModal', 'show')` => 'bv::modal::show'


var getRootEventName = function getRootEventName(name, eventName) {
  return [_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_PREFIX, getBaseEventName(name), eventName].join(_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_SEPARATOR);
}; // Get a root action event name by component/directive and action name
// `getRootActionEventName('BModal', 'show')` => 'bv::show::modal'

var getRootActionEventName = function getRootActionEventName(name, actionName) {
  return [_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_PREFIX, actionName, getBaseEventName(name)].join(_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_SEPARATOR);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-event-root.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEventRoot: () => (/* binding */ getEventRoot)
/* harmony export */ });
var getEventRoot = function getEventRoot(vm) {
  return vm.$root.$options.bvEventRoot || vm.$root;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/identity.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/identity.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
var identity = function identity(x) {
  return x;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/inspect.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/inspect.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyString: () => (/* binding */ isEmptyString),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isFile: () => (/* binding */ isFile),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isNumeric: () => (/* binding */ isNumeric),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   isUndefinedOrNull: () => (/* binding */ isUndefinedOrNull),
/* harmony export */   isUndefinedOrNullOrEmpty: () => (/* binding */ isUndefinedOrNullOrEmpty),
/* harmony export */   toRawType: () => (/* binding */ toRawType),
/* harmony export */   toRawTypeLC: () => (/* binding */ toRawTypeLC),
/* harmony export */   toType: () => (/* binding */ toType)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // --- Convenience inspection utilities ---

var toType = function toType(value) {
  return _typeof(value);
};
var toRawType = function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};
var toRawTypeLC = function toRawTypeLC(value) {
  return toRawType(value).toLowerCase();
};
var isUndefined = function isUndefined(value) {
  return value === undefined;
};
var isNull = function isNull(value) {
  return value === null;
};
var isEmptyString = function isEmptyString(value) {
  return value === '';
};
var isUndefinedOrNull = function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
};
var isUndefinedOrNullOrEmpty = function isUndefinedOrNullOrEmpty(value) {
  return isUndefinedOrNull(value) || isEmptyString(value);
};
var isFunction = function isFunction(value) {
  return toType(value) === 'function';
};
var isBoolean = function isBoolean(value) {
  return toType(value) === 'boolean';
};
var isString = function isString(value) {
  return toType(value) === 'string';
};
var isNumber = function isNumber(value) {
  return toType(value) === 'number';
};
var isNumeric = function isNumeric(value) {
  return _constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_NUMBER.test(String(value));
};
var isPrimitive = function isPrimitive(value) {
  return isBoolean(value) || isString(value) || isNumber(value);
};
var isArray = function isArray(value) {
  return Array.isArray(value);
}; // Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}; // Strict object type check
// Only returns true for plain JavaScript objects

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isDate = function isDate(value) {
  return value instanceof Date;
};
var isEvent = function isEvent(value) {
  return value instanceof Event;
};
var isFile = function isFile(value) {
  return value instanceof _constants_safe_types__WEBPACK_IMPORTED_MODULE_1__.File;
};
var isRegExp = function isRegExp(value) {
  return toRawType(value) === 'RegExp';
};
var isPromise = function isPromise(value) {
  return !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/loose-equal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   looseEqual: () => (/* binding */ looseEqual)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isDate)(a);
  var bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isDate)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(a);
  bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(a);
  bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(a).length;
    var bKeysCount = (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = (0,_object__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(a, key);
      var bHasKey = (0,_object__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(b, key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/math.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/math.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mathAbs: () => (/* binding */ mathAbs),
/* harmony export */   mathCeil: () => (/* binding */ mathCeil),
/* harmony export */   mathFloor: () => (/* binding */ mathFloor),
/* harmony export */   mathMax: () => (/* binding */ mathMax),
/* harmony export */   mathMin: () => (/* binding */ mathMin),
/* harmony export */   mathPow: () => (/* binding */ mathPow),
/* harmony export */   mathRound: () => (/* binding */ mathRound)
/* harmony export */ });
// Math utilty functions
var mathMin = Math.min;
var mathMax = Math.max;
var mathAbs = Math.abs;
var mathCeil = Math.ceil;
var mathFloor = Math.floor;
var mathPow = Math.pow;
var mathRound = Math.round;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/memoize.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/memoize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoize: () => (/* binding */ memoize)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");

var memoize = function memoize(fn) {
  var cache = (0,_object__WEBPACK_IMPORTED_MODULE_0__.create)(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/model.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/model.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeModelMixin: () => (/* binding */ makeModelMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var makeModelMixin = function makeModelMixin(prop) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? _constants_props__WEBPACK_IMPORTED_MODULE_0__.PROP_TYPE_ANY : _ref$type,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? undefined : _ref$defaultValue,
      _ref$validator = _ref.validator,
      validator = _ref$validator === void 0 ? undefined : _ref$validator,
      _ref$event = _ref.event,
      event = _ref$event === void 0 ? _constants_events__WEBPACK_IMPORTED_MODULE_1__.EVENT_NAME_INPUT : _ref$event;

  var props = _defineProperty({}, prop, (0,_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(type, defaultValue, validator)); // @vue/component


  var mixin = (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
    model: {
      prop: prop,
      event: event
    },
    props: props
  });
  return {
    mixin: mixin,
    props: props,
    prop: prop,
    event: event
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/normalize-slot.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasNormalizedSlot: () => (/* binding */ hasNormalizedSlot),
/* harmony export */   normalizeSlot: () => (/* binding */ normalizeSlot)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");


 // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = (0,_array__WEBPACK_IMPORTED_MODULE_0__.concat)(names).filter(_identity__WEBPACK_IMPORTED_MODULE_1__.identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = (0,_array__WEBPACK_IMPORTED_MODULE_0__.concat)(names).filter(_identity__WEBPACK_IMPORTED_MODULE_1__.identity);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(slot) ? slot(scope) : slot;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/number.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/number.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toFixed: () => (/* binding */ toFixed),
/* harmony export */   toFloat: () => (/* binding */ toFloat),
/* harmony export */   toInteger: () => (/* binding */ toInteger)
/* harmony export */ });
// Number utilities
// Converts a value (string, number, etc.) to an integer number
// Assumes radix base 10
var toInteger = function toInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}; // Converts a value (string, number, etc.) to a number

var toFloat = function toFloat(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}; // Converts a value (string, number, etc.) to a string
// representation with `precision` digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision, 0));
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/object.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   defineProperties: () => (/* binding */ defineProperties),
/* harmony export */   defineProperty: () => (/* binding */ defineProperty),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   getOwnPropertyDescriptor: () => (/* binding */ getOwnPropertyDescriptor),
/* harmony export */   getOwnPropertyNames: () => (/* binding */ getOwnPropertyNames),
/* harmony export */   getOwnPropertySymbols: () => (/* binding */ getOwnPropertySymbols),
/* harmony export */   getPrototypeOf: () => (/* binding */ getPrototypeOf),
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isFrozen: () => (/* binding */ isFrozen),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   mergeDeep: () => (/* binding */ mergeDeep),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   readonlyDescriptor: () => (/* binding */ readonlyDescriptor),
/* harmony export */   sortKeys: () => (/* binding */ sortKeys),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // --- Static ---

var assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var create = function create(proto, optionalProps) {
  return Object.create(proto, optionalProps);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty = function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
};
var freeze = function freeze(obj) {
  return Object.freeze(obj);
};
var getOwnPropertyNames = function getOwnPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
};
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop);
};
var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  return Object.getOwnPropertySymbols(obj);
};
var getPrototypeOf = function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
};
var is = function is(value1, value2) {
  return Object.is(value1, value2);
};
var isFrozen = function isFrozen(obj) {
  return Object.isFrozen(obj);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---
// Shallow copy an object

var clone = function clone(obj) {
  return _objectSpread({}, obj);
}; // Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var pick = function pick(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) !== -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a

var mergeDeep = function mergeDeep(target, source) {
  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(target) && (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(source)) {
    keys(source).forEach(function (key) {
      if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(source[key])) {
        if (!target[key] || !(0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(target[key])) {
          target[key] = source[key];
        }

        mergeDeep(target[key], source[key]);
      } else {
        assign(target, _defineProperty({}, key, source[key]));
      }
    });
  }

  return target;
}; // Returns a shallow copy of the object with keys in sorted order

var sortKeys = function sortKeys(obj) {
  return keys(obj).sort().reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Convenience method to create a read-only descriptor

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/props.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/props.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyProps: () => (/* binding */ copyProps),
/* harmony export */   hasPropFunction: () => (/* binding */ hasPropFunction),
/* harmony export */   makeProp: () => (/* binding */ makeProp),
/* harmony export */   makePropConfigurable: () => (/* binding */ makePropConfigurable),
/* harmony export */   makePropsConfigurable: () => (/* binding */ makePropsConfigurable),
/* harmony export */   pluckProps: () => (/* binding */ pluckProps),
/* harmony export */   prefixPropName: () => (/* binding */ prefixPropName),
/* harmony export */   suffixPropName: () => (/* binding */ suffixPropName),
/* harmony export */   unprefixPropName: () => (/* binding */ unprefixPropName)
/* harmony export */ });
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Prefix a property

var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + (0,_string__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(value);
}; // Remove a prefix from a property

var unprefixPropName = function unprefixPropName(prefix, value) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_0__.lowerFirst)(value.replace(prefix, ''));
}; // Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)
// Use data last parameters to allow for currying

var suffixPropName = function suffixPropName(suffix, value) {
  return value + (suffix ? (0,_string__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(suffix) : '');
}; // Generates a prop object

var makeProp = function makeProp() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ANY;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var requiredOrValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var validator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var required = requiredOrValidator === true;
  validator = required ? validator : requiredOrValidator;
  return _objectSpread(_objectSpread(_objectSpread({}, type ? {
    type: type
  } : {}), required ? {
    required: required
  } : (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value) ? {} : {
    default: (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isObject)(value) ? function () {
      return value;
    } : value
  }), (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(validator) ? {} : {
    validator: validator
  });
}; // Copies props from one array/object to a new array/object
// Prop values are also cloned as new references to prevent possible
// mutation of original prop object values
// Optionally accepts a function to transform the prop name

var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity__WEBPACK_IMPORTED_MODULE_3__.identity;

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(props)) {
    return props.map(transformFn);
  }

  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if ((0,_object__WEBPACK_IMPORTED_MODULE_4__.hasOwnProperty)(props, prop)) {
      // If the prop value is an object, do a shallow clone
      // to prevent potential mutations to the original object
      copied[transformFn(prop)] = (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isObject)(props[prop]) ? (0,_object__WEBPACK_IMPORTED_MODULE_4__.clone)(props[prop]) : props[prop];
    }
  }

  return copied;
}; // Given an array of properties or an object of property keys,
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values

var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity__WEBPACK_IMPORTED_MODULE_3__.identity;
  return ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(keysToPluck) ? keysToPluck.slice() : (0,_object__WEBPACK_IMPORTED_MODULE_4__.keys)(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
}; // Make a prop object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropConfigurable = function makePropConfigurable(prop, key, componentKey) {
  return _objectSpread(_objectSpread({}, (0,_clone_deep__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(prop)), {}, {
    default: function bvConfigurablePropDefault() {
      var value = (0,_config__WEBPACK_IMPORTED_MODULE_6__.getComponentConfig)(componentKey, key, prop.default);
      return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value) ? value() : value;
    }
  });
}; // Make a props object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropsConfigurable = function makePropsConfigurable(props, componentKey) {
  return (0,_object__WEBPACK_IMPORTED_MODULE_4__.keys)(props).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, makePropConfigurable(props[key], key, componentKey)));
  }, {});
}; // Get function name we use in `makePropConfigurable()`
// for the prop default value override to compare
// against in `hasPropFunction()`

var configurablePropDefaultFnName = makePropConfigurable({}, '', '').default.name; // Detect wether the given value is currently a function
// and isn't the props default function

var hasPropFunction = function hasPropFunction(fn) {
  return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn) && fn.name && fn.name !== configurablePropDefaultFnName;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/router.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/router.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeHref: () => (/* binding */ computeHref),
/* harmony export */   computeRel: () => (/* binding */ computeRel),
/* harmony export */   computeTag: () => (/* binding */ computeTag),
/* harmony export */   isLink: () => (/* binding */ isLink),
/* harmony export */   isRouterLink: () => (/* binding */ isRouterLink),
/* harmony export */   parseQuery: () => (/* binding */ parseQuery),
/* harmony export */   stringifyQueryObj: () => (/* binding */ stringifyQueryObj)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-vue-instance */ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");






var ANCHOR_TAG = 'a'; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent((0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(str)).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_ENCODE_REVERSE, encodeReserveReplacer).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_ENCODED_COMMA, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!(0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(obj)) {
    return '';
  }

  var query = (0,_object__WEBPACK_IMPORTED_MODULE_3__.keys)(obj).map(function (key) {
    var value = obj[key];

    if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value)) {
      return '';
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value)) {
      return encode(key);
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
      return value.reduce(function (results, value2) {
        if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value2)) {
          results.push(encode(key));
        } else if (!(0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value2)) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(value2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(value);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(query).trim().replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_QUERY_START, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_PLUS, ' ').split('=');
    var key = decode(parts.shift());
    var value = parts.length > 0 ? decode(parts.join('=')) : null;

    if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(parsed[key])) {
      parsed[key] = value;
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(parsed[key])) {
      parsed[key].push(value);
    } else {
      parsed[key] = [parsed[key], value];
    }
  });
  return parsed;
};
var isLink = function isLink(props) {
  return !!(props.href || props.to);
};
var isRouterLink = function isRouterLink(tag) {
  return !!(tag && !(0,_dom__WEBPACK_IMPORTED_MODULE_4__.isTag)(tag, 'a'));
};
var computeTag = function computeTag(_ref, thisOrParent) {
  var to = _ref.to,
      disabled = _ref.disabled,
      routerComponentName = _ref.routerComponentName;
  var hasRouter = !!(0,_safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__.safeVueInstance)(thisOrParent).$router;
  var hasNuxt = !!(0,_safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__.safeVueInstance)(thisOrParent).$nuxt;

  if (!hasRouter || hasRouter && (disabled || !to)) {
    return ANCHOR_TAG;
  } // TODO:
  //   Check registered components for existence of user supplied router link component name
  //   We would need to check PascalCase, kebab-case, and camelCase versions of name:
  //   const name = routerComponentName
  //   const names = [name, PascalCase(name), KebabCase(name), CamelCase(name)]
  //   exists = names.some(name => !!thisOrParent.$options.components[name])
  //   And may want to cache the result for performance or we just let the render fail
  //   if the component is not registered


  return routerComponentName || (hasNuxt ? 'nuxt-link' : 'router-link');
};
var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  return target === '_blank' && (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(rel) ? 'noopener' : rel || null;
};
var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // Return `href` when explicitly provided
  if (href) {
    return href;
  } // We've checked for `$router` in `computeTag()`, so `isRouterLink()` indicates a live router
  // When deferring to Vue Router's `<router-link>`, don't use the `href` attribute at all
  // We return `null`, and then remove `href` from the attributes passed to `<router-link>`


  if (isRouterLink(tag)) {
    return null;
  } // Fallback to `to` prop (if `to` is a string)


  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isString)(to)) {
    return to || toFallback;
  } // Fallback to `to.path' + `to.query` + `to.hash` prop (if `to` is an object)


  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(to) && (to.path || to.query || to.hash)) {
    var path = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(to.path);
    var query = stringifyQueryObj(to.query);
    var hash = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(to.hash);
    hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
    return "".concat(path).concat(query).concat(hash) || toFallback;
  } // If nothing is provided return the fallback


  return fallback;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeVueInstance: () => (/* binding */ safeVueInstance)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

function safeVueInstance(target) {
  if (!_vue__WEBPACK_IMPORTED_MODULE_0__.isVue3) {
    return target;
  }

  return new Proxy(target, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : undefined;
    }
  });
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/string.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/string.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp),
/* harmony export */   kebabCase: () => (/* binding */ kebabCase),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase),
/* harmony export */   lowerFirst: () => (/* binding */ lowerFirst),
/* harmony export */   pascalCase: () => (/* binding */ pascalCase),
/* harmony export */   startCase: () => (/* binding */ startCase),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   trim: () => (/* binding */ trim),
/* harmony export */   trimLeft: () => (/* binding */ trimLeft),
/* harmony export */   trimRight: () => (/* binding */ trimRight),
/* harmony export */   upperCase: () => (/* binding */ upperCase),
/* harmony export */   upperFirst: () => (/* binding */ upperFirst)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
// String utilities

 // --- Utilities ---
// Converts PascalCase or camelCase to kebab-case

var kebabCase = function kebabCase(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var pascalCase = function pascalCase(str) {
  str = kebabCase(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Converts a string, including strings in camelCase or snake_case, into Start Case
// It keeps original single quote and hyphen in the word
// https://github.com/UrbanCompass/to-start-case

var startCase = function startCase(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_UNDERSCORE, ' ').replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}; // Lowercases the first letter of a string and returns a new string

var lowerFirst = function lowerFirst(str) {
  str = (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isString)(str) ? str.trim() : String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}; // Uppercases the first letter of a string and returns a new string

var upperFirst = function upperFirst(str) {
  str = (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isString)(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Escape characters to be used in building a regular expression

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isUndefinedOrNull)(val) ? '' : (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isArray)(val) || (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var trimLeft = function trimLeft(str) {
  return toString(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_TRIM_LEFT, '');
}; // Remove Trailing white space from a string

var trimRight = function trimRight(str) {
  return toString(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_TRIM_RIGHT, '');
}; // Remove leading and trailing white space from a string

var trim = function trim(str) {
  return toString(str).trim();
}; // Lower case a string

var lowerCase = function lowerCase(str) {
  return toString(str).toLowerCase();
}; // Upper case a string

var upperCase = function upperCase(str) {
  return toString(str).toUpperCase();
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/warn.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/warn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   warnNoMutationObserverSupport: () => (/* binding */ warnNoMutationObserverSupport),
/* harmony export */   warnNoPromiseSupport: () => (/* binding */ warnNoPromiseSupport),
/* harmony export */   warnNotClient: () => (/* binding */ warnNotClient)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/esm/utils/env.js");


/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!(0,_env__WEBPACK_IMPORTED_MODULE_0__.getNoWarn)()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNotClient = function warnNotClient(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER) {
    return false;
  } else {
    warn("".concat(source, ": Can not be called during SSR."));
    return true;
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoPromiseSupport = function warnNoPromiseSupport(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.HAS_PROMISE_SUPPORT) {
    return false;
  } else {
    warn("".concat(source, ": Requires Promise support."));
    return true;
  }
};
/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.HAS_MUTATION_OBSERVER_SUPPORT) {
    return false;
  } else {
    warn("".concat(source, ": Requires MutationObserver support."));
    return true;
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/vue.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/vue.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENT_UID_KEY: () => (/* binding */ COMPONENT_UID_KEY),
/* harmony export */   REF_FOR_KEY: () => (/* binding */ REF_FOR_KEY),
/* harmony export */   Vue: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   isVue3: () => (/* binding */ isVue3),
/* harmony export */   mergeData: () => (/* reexport safe */ vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__.mergeData),
/* harmony export */   nextTick: () => (/* binding */ nextTick)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // --- Constants ---

var COMPONENT_UID_KEY = '_uid';
var isVue3 = vue__WEBPACK_IMPORTED_MODULE_1__["default"].version.startsWith('3');
var REF_FOR_KEY = isVue3 ? 'ref_for' : 'refInFor';
var ALLOWED_FIELDS_IN_DATA = ['class', 'staticClass', 'style', 'attrs', 'props', 'domProps', 'on', 'nativeOn', 'directives', 'scopedSlots', 'slot', 'key', 'ref', 'refInFor'];
var extend = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend.bind(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

if (isVue3) {
  var originalExtend = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend;
  var KNOWN_COMPONENTS = ['router-link', 'transition', 'transition-group'];
  var originalVModelDynamicCreated = vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.created;
  var originalVModelDynamicBeforeUpdate = vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.beforeUpdate; // See https://github.com/vuejs/vue-next/pull/4121 for details

  vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.created = function (el, binding, vnode) {
    originalVModelDynamicCreated.call(this, el, binding, vnode);

    if (!el._assign) {
      el._assign = function () {};
    }
  };

  vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.beforeUpdate = function (el, binding, vnode) {
    originalVModelDynamicBeforeUpdate.call(this, el, binding, vnode);

    if (!el._assign) {
      el._assign = function () {};
    }
  };

  extend = function patchedBootstrapVueExtend(definition) {
    if (_typeof(definition) === 'object' && definition.render && !definition.__alreadyPatched) {
      var originalRender = definition.render;
      definition.__alreadyPatched = true;

      definition.render = function (h) {
        var patchedH = function patchedH(tag, dataObjOrChildren, rawSlots) {
          var slots = rawSlots === undefined ? [] : [Array.isArray(rawSlots) ? rawSlots.filter(Boolean) : rawSlots];
          var isTag = typeof tag === 'string' && !KNOWN_COMPONENTS.includes(tag);
          var isSecondArgumentDataObject = dataObjOrChildren && _typeof(dataObjOrChildren) === 'object' && !Array.isArray(dataObjOrChildren);

          if (!isSecondArgumentDataObject) {
            return h.apply(void 0, [tag, dataObjOrChildren].concat(slots));
          }

          var attrs = dataObjOrChildren.attrs,
              props = dataObjOrChildren.props,
              restData = _objectWithoutProperties(dataObjOrChildren, ["attrs", "props"]);

          var normalizedData = _objectSpread(_objectSpread({}, restData), {}, {
            attrs: attrs,
            props: isTag ? {} : props
          });

          if (tag === 'router-link' && !normalizedData.slots && !normalizedData.scopedSlots) {
            // terrible workaround to fix router-link rendering with compat vue-router
            normalizedData.scopedSlots = {
              $hasNormal: function $hasNormal() {}
            };
          }

          return h.apply(void 0, [tag, normalizedData].concat(slots));
        };

        if (definition.functional) {
          var _ctx$children, _ctx$children$default;

          var ctx = arguments[1];

          var patchedCtx = _objectSpread({}, ctx);

          patchedCtx.data = {
            attrs: _objectSpread({}, ctx.data.attrs || {}),
            props: _objectSpread({}, ctx.data.props || {})
          };
          Object.keys(ctx.data || {}).forEach(function (key) {
            if (ALLOWED_FIELDS_IN_DATA.includes(key)) {
              patchedCtx.data[key] = ctx.data[key];
            } else if (key in ctx.props) {
              patchedCtx.data.props[key] = ctx.data[key];
            } else if (!key.startsWith('on')) {
              patchedCtx.data.attrs[key] = ctx.data[key];
            }
          });
          var IGNORED_CHILDREN_KEYS = ['_ctx'];
          var children = ((_ctx$children = ctx.children) === null || _ctx$children === void 0 ? void 0 : (_ctx$children$default = _ctx$children.default) === null || _ctx$children$default === void 0 ? void 0 : _ctx$children$default.call(_ctx$children)) || ctx.children;

          if (children && Object.keys(patchedCtx.children).filter(function (k) {
            return !IGNORED_CHILDREN_KEYS.includes(k);
          }).length === 0) {
            delete patchedCtx.children;
          } else {
            patchedCtx.children = children;
          }

          patchedCtx.data.on = ctx.listeners;
          return originalRender.call(this, patchedH, patchedCtx);
        }

        return originalRender.call(this, patchedH);
      };
    }

    return originalExtend.call(this, definition);
  }.bind(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

var nextTick = vue__WEBPACK_IMPORTED_MODULE_1__["default"].nextTick;


/***/ }),

/***/ "./node_modules/vue-functional-data-merge/dist/lib.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-functional-data-merge/dist/lib.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeData: () => (/* binding */ a)
/* harmony export */ });
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "./resources/js/components/cms/Books.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/cms/Books.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Books_vue_vue_type_template_id_2ed05689__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=2ed05689 */ "./resources/js/components/cms/Books.vue?vue&type=template&id=2ed05689");
/* harmony import */ var _Books_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js */ "./resources/js/components/cms/Books.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Books_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Books_vue_vue_type_template_id_2ed05689__WEBPACK_IMPORTED_MODULE_0__.render,
  _Books_vue_vue_type_template_id_2ed05689__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cms/Books.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cms/Books.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/cms/Books.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/Books.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cms/Books.vue?vue&type=template&id=2ed05689":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/cms/Books.vue?vue&type=template&id=2ed05689 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_2ed05689__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_2ed05689__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_2ed05689__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=template&id=2ed05689 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/Books.vue?vue&type=template&id=2ed05689");


/***/ })

}]);