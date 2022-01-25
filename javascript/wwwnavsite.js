"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function run() {
    return __awaiter(this, void 0, void 0, function () {
        function addCategories() {
            category_list.innerHTML = "";
            Object.entries(categories).forEach(function (entry) {
                var button = createCategoryElement(entry[0], TYPE_CATEGORY);
                category_list.appendChild(button);
                category_buttons.push(button);
            });
            if (editmodeActivated) {
                addCategoryCreationButton();
                addCategoryRemovalButton();
            }
        }
        function addEditButton() {
            var content_edit_button = document.createElement("input");
            content_edit_button.id = "content_edit_button";
            content_edit_button.type = "button";
            (content_edit_button.value = "<Edit>"),
                (content_edit_button.onclick = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var new_content;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    new_content = prompt("Enter the new content:", content_field.textContent);
                                    if (!(categories[current_category][current_subcategory] !== undefined)) return [3 /*break*/, 2];
                                    categories[current_category][current_subcategory]["content"] = new_content;
                                    return [4 /*yield*/, updateContent()];
                                case 1:
                                    _a.sent();
                                    updateSite(current_category, current_subcategory);
                                    return [3 /*break*/, 3];
                                case 2:
                                    alert("Please create a subcategory first!");
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                });
            article_field.appendChild(content_edit_button);
        }
        function addReferenceClearButton() {
            var reference_remove_button = document.createElement("input");
            reference_remove_button.id = "reference_clear_button";
            reference_remove_button.type = "button";
            reference_remove_button.value = "<Clear References>";
            reference_remove_button.style.color = "red";
            reference_remove_button.onclick = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                categories[current_category][current_subcategory]["references"] = [];
                                references_field.innerHTML = "";
                                return [4 /*yield*/, updateContent()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            information_field.appendChild(reference_remove_button);
        }
        function addReferenceCreationButton() {
            var reference_add_button = document.createElement("input");
            reference_add_button.id = "reference_add_button";
            reference_add_button.type = "button";
            reference_add_button.value = "<Add Reference>";
            reference_add_button.style.color = "green";
            reference_add_button.onclick = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                name = prompt("Enter a new reference.");
                                categories[current_category][current_subcategory]["references"].push(name);
                                return [4 /*yield*/, updateContent()];
                            case 1:
                                _a.sent();
                                updateSite(current_category, current_subcategory);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            information_field.appendChild(reference_add_button);
        }
        function addSubcategoryRemovalButton() {
            var subcategory_add_button = document.createElement("input");
            subcategory_add_button.id = "subcategory_remove_button";
            subcategory_add_button.type = "button";
            subcategory_add_button.value = "<Remove Subcategory>";
            subcategory_add_button.style.color = "red";
            subcategory_add_button.onclick = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                name = prompt("Enter the Subcategory name to remove:");
                                if (name in categories[current_category]) {
                                    delete categories[current_category][name];
                                }
                                else {
                                    alert("Entered subcategory does not exist.");
                                }
                                current_subcategory = Object.keys(categories[current_category])[0];
                                return [4 /*yield*/, updateContent()];
                            case 1:
                                _a.sent();
                                updateSubcategories(current_category);
                                updateSite(current_category, current_subcategory);
                                current_subcategory = name;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            subcategory_list.appendChild(subcategory_add_button);
        }
        function addSubcategoryCreationButton() {
            var subcategory_add_button = document.createElement("input");
            subcategory_add_button.id = "subcategory_add_button";
            subcategory_add_button.type = "button";
            subcategory_add_button.value = "<Add Subcategory>";
            subcategory_add_button.style.color = "green";
            subcategory_add_button.onclick = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                name = prompt("Enter a new subcategory name.");
                                categories[current_category][name] = {};
                                categories[current_category][name]["references"] = [];
                                categories[current_category][name]["content"] = "";
                                return [4 /*yield*/, updateContent()];
                            case 1:
                                _a.sent();
                                updateSubcategories(current_category);
                                current_subcategory = name;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            subcategory_list.appendChild(subcategory_add_button);
        }
        function addCategoryCreationButton() {
            var category_add_button = document.createElement("input");
            category_add_button.id = "category_add_button";
            category_add_button.type = "button";
            (category_add_button.value = "<Add Category>"),
                (category_add_button.style.color = "green");
            category_add_button.onclick = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var name;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                name = prompt("Enter a new category name.");
                                categories[name] = {};
                                return [4 /*yield*/, updateContent()];
                            case 1:
                                _a.sent();
                                current_category = name;
                                addCategories();
                                updateSubcategories(name);
                                updateSite(name);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            category_list.appendChild(category_add_button);
        }
        function addCategoryRemovalButton() {
            var category_removal_button = document.createElement("input");
            category_removal_button.id = "category_remove_button";
            category_removal_button.type = "button";
            category_removal_button.style.color = "red";
            (category_removal_button.value = "<Remove Category>"),
                (category_removal_button.onclick = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var name;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    name = prompt("Enter the category to remove.");
                                    if (name in categories) {
                                        delete categories[name];
                                    }
                                    else {
                                        alert("Entered category does not exist.");
                                    }
                                    current_category = Object.keys(categories)[0];
                                    current_subcategory = Object.keys(categories[current_category])[0];
                                    return [4 /*yield*/, updateContent()];
                                case 1:
                                    _a.sent();
                                    addCategories();
                                    updateSubcategories(current_category);
                                    updateSite(current_category, current_subcategory);
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
            category_list.appendChild(category_removal_button);
        }
        function createCategoryElement(title, type) {
            var category_element = document.createElement("input");
            category_element.type = "button";
            category_element.value = title;
            switch (type) {
                case TYPE_CATEGORY:
                    category_element.onclick = function () {
                        category_buttons.forEach(function (button) {
                            button.style.color = "black";
                        });
                        category_element.style.color = "blue";
                        current_category = title;
                        current_subcategory = Object.keys(categories[current_category])[0];
                        updateSubcategories(current_category);
                        updateSite(current_category);
                    };
                    break;
                case TYPE_SUBCATEGORY:
                    category_element.onclick = function () {
                        subcategory_buttons.forEach(function (button) {
                            button.style.color = "black";
                        });
                        category_element.style.color = "blue";
                        current_subcategory = title;
                        updateSite(current_category, current_subcategory);
                    };
                    break;
            }
            return category_element;
        }
        function updateSubcategories(category) {
            subcategory_list.innerHTML = "";
            subcategory_buttons = [];
            if (Object.keys(categories[category]).length !== 0) {
                Object.entries(categories[category]).forEach(function (entry) {
                    var button = createCategoryElement(entry[0], TYPE_SUBCATEGORY);
                    button.style.marginBottom = "1em";
                    subcategory_list.appendChild(button);
                    subcategory_list.appendChild(document.createElement("br"));
                    subcategory_buttons.push(button);
                });
                subcategory_buttons[0].style.color = "blue";
            }
            if (editmodeActivated) {
                addSubcategoryCreationButton();
                addSubcategoryRemovalButton();
            }
        }
        function updateSite(category, subcategory) {
            if (subcategory === void 0) { subcategory = undefined; }
            var current_references = "";
            if (Object.keys(categories[category]).length !== 0) {
                if (subcategory == undefined)
                    subcategory = Object.keys(categories[category])[0];
                if (categories[category][subcategory]["references"] !== undefined) {
                    categories[category][subcategory]["references"].forEach(function (reference) {
                        current_references +=
                            "<li><a href='" + reference + "'>" + reference + "</a> </li>\n";
                    });
                }
                content_field.textContent = categories[category][subcategory]["content"];
            }
            else {
                content_field.textContent = "";
            }
            references_field.innerHTML = current_references;
        }
        function updateContent() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //Teilweise aus der Vorlesung
                    return [2 /*return*/, fetch(new Request("www-navigator/server.php"), {
                            method: "POST",
                            referrerPolicy: "strict-origin",
                            mode: "cors",
                            cache: "no-store",
                            body: JSON.stringify(categories),
                            headers: {
                                "Content-Type": "application/json",
                                "CSRF-TOKEN": document.getElementById("token").value
                            }
                        })];
                });
            });
        }
        function init() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    addCategoryCreationButton();
                    editmode_toggle.addEventListener("click", function () {
                        if (editmodeActivated) {
                            editmode_toggle.value = "Edit Mode: Off";
                            editmodeActivated = false;
                            category_list.removeChild(document.getElementById("category_add_button"));
                            category_list.removeChild(document.getElementById("category_remove_button"));
                            subcategory_list.removeChild(document.getElementById("subcategory_add_button"));
                            subcategory_list.removeChild(document.getElementById("subcategory_remove_button"));
                            article_field.removeChild(document.getElementById("content_edit_button"));
                            information_field.removeChild(document.getElementById("reference_add_button"));
                            information_field.removeChild(document.getElementById("reference_clear_button"));
                        }
                        else {
                            editmode_toggle.value = "Edit Mode: On";
                            editmodeActivated = true;
                            addEditButton();
                            addReferenceCreationButton();
                            addReferenceClearButton();
                            addCategories();
                            updateSubcategories(current_category);
                            updateSite(current_category, current_subcategory);
                        }
                    });
                    addCategories();
                    updateSubcategories(current_category);
                    updateSite(current_category, current_subcategory);
                    category_buttons[0].style.color = "blue";
                    return [2 /*return*/];
                });
            });
        }
        var TYPE_CATEGORY, TYPE_SUBCATEGORY, categories, category_list, subcategory_list, article_field, content_field, information_field, references_field, editmode_toggle, current_category, current_subcategory, category_buttons, subcategory_buttons, editmodeActivated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    TYPE_CATEGORY = 0, TYPE_SUBCATEGORY = 1;
                    return [4 /*yield*/, fetch("resources/navigator_contents.json").then(function (response) { return response.json(); })];
                case 1:
                    categories = _a.sent();
                    category_list = document.getElementById("categories");
                    subcategory_list = document.getElementById("subcategories");
                    article_field = document.getElementById("article_field");
                    content_field = document.getElementById("content");
                    information_field = document.getElementById("information");
                    references_field = document.getElementById("references");
                    editmode_toggle = (document.getElementById("editmode_toggle"));
                    current_category = Object.keys(categories)[0];
                    current_subcategory = Object.keys(categories[current_category])[0];
                    category_buttons = [];
                    subcategory_buttons = [];
                    editmodeActivated = false;
                    init();
                    return [2 /*return*/];
            }
        });
    });
}
run();
