import { type Validation } from "@/presentation/protocols";
import { BadRequestError } from "@/presentation/errors";

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error | void {
    if (!input[this.fieldName]) {
      return new BadRequestError(
        `The following field is required: ${this.fieldName}`,
      );
    }
  }
}
