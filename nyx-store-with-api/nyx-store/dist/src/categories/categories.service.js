"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const store_json_1 = __importDefault(require("../../data/store.json"));
const categoryNames = [...new Set(store_json_1.default.products.map((product) => product.category))];
let CategoriesService = class CategoriesService {
    constructor() {
        this.categories = categoryNames.map((name) => ({
            id: name,
            name: name.charAt(0).toUpperCase() + name.slice(1),
        }));
    }
    getAll() {
        return this.categories;
    }
    add(name) {
        const category = { id: name.toLowerCase().replace(/\s+/g, '-'), name };
        this.categories.push(category);
        return category;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
