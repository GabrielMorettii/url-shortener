import { faker } from "@faker-js/faker";

import { RequiredFieldValidation } from "@/validation/validators";
import { BadRequestError } from "@/presentation/errors";

const field = faker.word.noun();

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation(field);
};

describe("RequiredField Validation", () => {
  it("Should return a BadRequestError if validation fails", () => {
    const sut = makeSut();
    const error = sut.validate({ invalidField: faker.word.noun() });
    expect(error).toEqual(
      new BadRequestError(`The ${field} field is required.`),
    );
  });

  it("Should not return if validation succeeds", () => {
    const sut = makeSut();
    const error = sut.validate({ [field]: faker.word.noun() });
    expect(error).toBeFalsy();
  });
});
