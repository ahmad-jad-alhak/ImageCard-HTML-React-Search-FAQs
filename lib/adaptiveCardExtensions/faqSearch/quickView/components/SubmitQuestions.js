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
import * as React from "react";
import { useState, useEffect } from "react";
import { useSubmitQuestion } from "../../hooks/useSubmitQuestion";
import { TextField, PrimaryButton, MessageBar, MessageBarType, Spinner, SpinnerSize, Stack, } from "@fluentui/react";
var SubmitQuestionForm = function (_a) {
    var context = _a.context, listName = _a.listName;
    var _b = useSubmitQuestion(context, listName), submitQuestion = _b.submitQuestion, loading = _b.loading, error = _b.error, success = _b.success;
    var _c = useState(""), question = _c[0], setQuestion = _c[1];
    var _d = useState(false), showSuccessMessage = _d[0], setShowSuccessMessage = _d[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, submitQuestion({ question: question })];
                case 1:
                    _a.sent();
                    if (success) {
                        setQuestion(""); // Clear the question text field
                        setShowSuccessMessage(true); // Show success message
                        setTimeout(function () { return setShowSuccessMessage(false); }, 3000); // Hide success message after 3 seconds
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (success) {
            setQuestion(""); // Clear the question after success is updated
            setShowSuccessMessage(true);
            setTimeout(function () { return setShowSuccessMessage(false); }, 3000); // Hide success message after 3 seconds
        }
    }, [success]);
    return (React.createElement(Stack, { tokens: { childrenGap: 15 } },
        React.createElement("h2", { style: { marginBottom: "0px" } }, "Submit your question:"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement(Stack, { tokens: { childrenGap: 10 } },
                React.createElement(TextField, { label: "Question", value: question, onChange: function (e, newValue) { return setQuestion(newValue || ""); }, multiline: true, rows: 4, required: true }),
                React.createElement(PrimaryButton, { text: loading ? "Submitting..." : "Submit Question", type: "submit", disabled: loading || question.trim() === "" }),
                loading && (React.createElement(Spinner, { size: SpinnerSize.small, label: "Submitting your question..." })),
                error && (React.createElement(MessageBar, { messageBarType: MessageBarType.error }, error)),
                showSuccessMessage && (React.createElement(MessageBar, { messageBarType: MessageBarType.success }, "Question submitted successfully!"))))));
};
export default SubmitQuestionForm;
//# sourceMappingURL=SubmitQuestions.js.map