"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cms_AddBook_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/AddBook.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/AddBook.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      formData: {
        name: '',
        image: '',
        isbn: '',
        author: '',
        description: '',
        category: '',
        ratings: '',
        price: '',
        stock: '',
        publisher: '',
        publication_date: ''
      },
      message: ''
    };
  },
  methods: {
    addBook: function addBook() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/book/add', this.formData).then(function (response) {
        // Handle response if needed
        _this.message = response.data['message'];
      })["catch"](function (error) {
        // Handle error if needed
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/AddBook.vue?vue&type=template&id=409e6d49":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/AddBook.vue?vue&type=template&id=409e6d49 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n            " + _vm._s(_vm.message) + "\n        ")])]) : _vm._e(), _vm._v(" "), _c("form", {
    attrs: {
      method: "post",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.addBook.apply(null, arguments);
      }
    }
  }, [_c("table", [_c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Name")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.name,
      expression: "formData.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name"
    },
    domProps: {
      value: _vm.formData.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Isbn")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.isbn,
      expression: "formData.isbn"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "isbn"
    },
    domProps: {
      value: _vm.formData.isbn
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "isbn", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Author")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.author,
      expression: "formData.author"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "author"
    },
    domProps: {
      value: _vm.formData.author
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "author", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Description")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.description,
      expression: "formData.description"
    }],
    staticClass: "form-control",
    attrs: {
      name: "description",
      rows: "5",
      cols: "50"
    },
    domProps: {
      value: _vm.formData.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "description", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Category")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.category,
      expression: "formData.category"
    }],
    staticClass: "form-select",
    attrs: {
      name: "category"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "category", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Language"
    }
  }, [_vm._v("Language")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Learning"
    }
  }, [_vm._v("Learning")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Programming"
    }
  }, [_vm._v("Programming")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Science Fiction"
    }
  }, [_vm._v("Science Fiction")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Detective Story"
    }
  }, [_vm._v("Detective Story")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Other"
    }
  }, [_vm._v("Other")])])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Ratings")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ratings,
      expression: "formData.ratings"
    }],
    staticClass: "form-select",
    attrs: {
      name: "ratings"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "ratings", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("5")])])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Price")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.price,
      expression: "formData.price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "price"
    },
    domProps: {
      value: _vm.formData.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "price", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", {
    staticClass: "border"
  }, [_c("td", {
    staticClass: "border"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.stock,
      expression: "formData.stock"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "stock"
    },
    domProps: {
      value: _vm.formData.stock
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "stock", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Publisher")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.publisher,
      expression: "formData.publisher"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "publisher"
    },
    domProps: {
      value: _vm.formData.publisher
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "publisher", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Publication Date")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.publication_date,
      expression: "formData.publication_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "publication_date",
      id: "datepicker"
    },
    domProps: {
      value: _vm.formData.publication_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "publication_date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Image")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      name: "image"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "border",
    attrs: {
      colspan: "2"
    }
  }, [_c("input", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit",
      value: "Add Book"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/cms/AddBook.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/cms/AddBook.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddBook_vue_vue_type_template_id_409e6d49__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBook.vue?vue&type=template&id=409e6d49 */ "./resources/js/components/cms/AddBook.vue?vue&type=template&id=409e6d49");
/* harmony import */ var _AddBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBook.vue?vue&type=script&lang=js */ "./resources/js/components/cms/AddBook.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBook_vue_vue_type_template_id_409e6d49__WEBPACK_IMPORTED_MODULE_0__.render,
  _AddBook_vue_vue_type_template_id_409e6d49__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cms/AddBook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cms/AddBook.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/cms/AddBook.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddBook.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/AddBook.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cms/AddBook.vue?vue&type=template&id=409e6d49":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/cms/AddBook.vue?vue&type=template&id=409e6d49 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_409e6d49__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_409e6d49__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_409e6d49__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddBook.vue?vue&type=template&id=409e6d49 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/AddBook.vue?vue&type=template&id=409e6d49");


/***/ })

}]);