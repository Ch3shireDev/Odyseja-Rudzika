import { Result } from "./result";

export class LabelResult {
    public success: boolean;
    public message: string;
    constructor(result: Result) {
        this.success = result.success;
        if (this.success) {
            this.message = result.expectedResult;
        }
        else {
            this.message = result.errorMessage ?? "";
        }
    }
}