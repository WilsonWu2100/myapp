"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cms_UpdateBook_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/UpdateBook.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/UpdateBook.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['message', 'book']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/UpdateBook.vue?vue&type=template&id=590b0303":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/UpdateBook.vue?vue&type=template&id=590b0303 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
      action: "/book/".concat(_vm.book.id, "/edit"),
      method: "post",
      enctype: "multipart/form-data"
    }
  }, [_c("table", [_c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Name")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name"
    },
    domProps: {
      value: _vm.book.name
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Image")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("div", [_c("img", {
    staticClass: "mb-2",
    attrs: {
      src: "/images/".concat(_vm.book.image),
      name: "image",
      width: "auto",
      height: "192",
      alt: "book image"
    }
  })]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Isbn")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "isbn"
    },
    domProps: {
      value: _vm.book.isbn
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Author")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "author"
    },
    domProps: {
      value: _vm.book.author
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Description")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("textarea", {
    staticClass: "form-control",
    attrs: {
      name: "description",
      rows: "5",
      cols: "50"
    }
  }, [_vm._v(_vm._s(_vm.book.description))])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Category")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("select", {
    staticClass: "form-select",
    attrs: {
      name: "category"
    }
  }, [_c("option", {
    attrs: {
      value: "Language"
    },
    domProps: {
      selected: _vm.book.category === "Language" ? "selected" : ""
    }
  }, [_vm._v("Language")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Learning"
    },
    domProps: {
      selected: _vm.book.category === "Learning" ? "selected" : ""
    }
  }, [_vm._v("Learning")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Programming"
    },
    domProps: {
      selected: _vm.book.category === "Programming" ? "selected" : ""
    }
  }, [_vm._v("Programming")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Science Fiction"
    },
    domProps: {
      selected: _vm.book.category === "Science Fiction" ? "selected" : ""
    }
  }, [_vm._v("Science Fiction")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Detective Story"
    },
    domProps: {
      selected: _vm.book.category === "Detective Story" ? "selected" : ""
    }
  }, [_vm._v("Detective Story")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Other"
    },
    domProps: {
      selected: _vm.book.category === "Other" ? "selected" : ""
    }
  }, [_vm._v("Other")])])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Ratings")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("select", {
    staticClass: "form-select",
    attrs: {
      name: "ratings"
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    },
    domProps: {
      selected: _vm.book.ratings === 1 ? "selected" : ""
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    },
    domProps: {
      selected: _vm.book.ratings === 2 ? "selected" : ""
    }
  }, [_vm._v("2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    },
    domProps: {
      selected: _vm.book.ratings === 3 ? "selected" : ""
    }
  }, [_vm._v("3")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    },
    domProps: {
      selected: _vm.book.ratings === 4 ? "selected" : ""
    }
  }, [_vm._v("4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    },
    domProps: {
      selected: _vm.book.ratings === 5 ? "selected" : ""
    }
  }, [_vm._v("5")])])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Price")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "price"
    },
    domProps: {
      value: _vm.book.price
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "stock"
    },
    domProps: {
      value: _vm.book.stock
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Publisher")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "publisher"
    },
    domProps: {
      value: _vm.book.publisher
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "border"
  }, [_vm._v("Publication Date")]), _vm._v(" "), _c("td", {
    staticClass: "border"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "publication_date",
      id: "datepicker"
    },
    domProps: {
      value: _vm.book.publication_date
    }
  })])]), _vm._v(" "), _vm._m(1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      name: "image"
    }
  })]);
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
      value: "Update Book"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/cms/UpdateBook.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/cms/UpdateBook.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateBook_vue_vue_type_template_id_590b0303__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=template&id=590b0303 */ "./resources/js/components/cms/UpdateBook.vue?vue&type=template&id=590b0303");
/* harmony import */ var _UpdateBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=script&lang=js */ "./resources/js/components/cms/UpdateBook.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateBook_vue_vue_type_template_id_590b0303__WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateBook_vue_vue_type_template_id_590b0303__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cms/UpdateBook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cms/UpdateBook.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/cms/UpdateBook.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateBook.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/UpdateBook.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cms/UpdateBook.vue?vue&type=template&id=590b0303":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/cms/UpdateBook.vue?vue&type=template&id=590b0303 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_590b0303__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_590b0303__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_590b0303__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateBook.vue?vue&type=template&id=590b0303 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cms/UpdateBook.vue?vue&type=template&id=590b0303");


/***/ })

}]);