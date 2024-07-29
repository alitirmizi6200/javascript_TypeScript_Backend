"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubTodo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const subTodoSchema = new mongoose_1.default.Schema({
    content: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
exports.SubTodo = mongoose_1.default.model("SubTodo", subTodoSchema);
