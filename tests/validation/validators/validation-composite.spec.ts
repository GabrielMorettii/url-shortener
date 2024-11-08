import { faker } from "@faker-js/faker/.";

import { ValidationComposite } from "@/validation/validators";
import { ValidationError } from "@/presentation/errors";
import { ValidationSpy } from "../mocks";

const field = faker.word.noun();

interface SutTypes {
  sut: ValidationComposite;
  validationSpies: ValidationSpy[];
}

const makeSut = (): SutTypes => {
  const validationSpies = [new ValidationSpy(), new ValidationSpy()];
  const sut = new ValidationComposite(validationSpies);

  return {
    sut,
    validationSpies,
  };
};

describe("Validation Composite", () => {
  test("Should throw an error if any validation fails", () => {
    const { sut, validationSpies } = makeSut();
    validationSpies[1].error = new ValidationError(field);
    expect(() => sut.validate({ [field]: faker.word.noun() })).toThrow(
      validationSpies[1].error,
    );
  });

  test("Should throw the first error if more then one validation fails", () => {
    const { sut, validationSpies } = makeSut();
    validationSpies[0].error = new Error();
    validationSpies[1].error = new ValidationError(field);
    expect(() => sut.validate({ [field]: faker.word.noun() })).toThrow(
      validationSpies[0].error,
    );
  });

  test("Should not return if validation succeeds", () => {
    const { sut } = makeSut();
    const error = sut.validate({ [field]: faker.word.noun() });
    expect(error).toBeFalsy();
  });
});
