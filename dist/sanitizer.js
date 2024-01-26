"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = void 0;
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const DOMPurify = createDOMPurify(new JSDOM('').window);
function sanitize(text) {
    return DOMPurify.sanitize(text);
}
exports.sanitize = sanitize;
//# sourceMappingURL=sanitizer.js.map