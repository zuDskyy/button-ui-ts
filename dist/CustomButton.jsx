"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomButton = void 0;
var utils_1 = require("./lib/utils");
var class_variance_authority_1 = require("class-variance-authority");
var react_1 = __importDefault(require("react"));
var buttonVariant = (0, class_variance_authority_1.cva)("group flex  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-rose-700 text-white p-1 rounded-full shadow-sm",
            deleteX: "bg-rose-500 text-white p-1 rounded-full shadow-sm",
            zinc: "group px-2 py-2 rounded-xl flex items-center gap-x-2 w-full hover:bg-zinc-700/10  dark:hover:bg-zinc-700/50 transition mb-1",
            slate: "bg-slate-700 text-white dark:bg-slate-600 rouded-full    hover:bg-zinc-800",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
});
exports.CustomButton = react_1.default.forwardRef(function (_a, ref) {
    var variant = _a.variant, size = _a.size, props = __rest(_a, ["variant", "size"]);
    return (<button className={(0, utils_1.cn)(buttonVariant({ variant: variant, size: size }))} ref={ref} {...props}></button>);
});
exports.CustomButton.displayName = "CustomButton";
