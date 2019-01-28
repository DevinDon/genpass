"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = require("object-hash");
function generate(keys) {
    keys.length = keys.length || 6;
    return `${object_hash_1.MD5(keys.prefix).slice(0, keys.length)}@${object_hash_1.sha1(keys.suffix).slice(0, keys.length)}`;
}
exports.generate = generate;
exports.default = generate;
