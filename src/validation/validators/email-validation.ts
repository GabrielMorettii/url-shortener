import { type EmailValidator } from "@/validation/protocols";
import { type Validation } from "@/presentation/protocols";
import { ValidationError } from "@/presentation/errors";

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator,
  ) {}

  validate(input: any): Error | void {
    const isValid = this.emailValidator.isValid(input[this.fieldName]);

    if (!isValid) {
      return new ValidationError("email format isn't valid");
    }
  }
}
