import { faker } from "@faker-js/faker";
import { EmailValidation } from "@/validation/validators";
import { ValidationError } from "@/presentation/errors";
import { EmailValidatorSpy } from "@/tests/validation/mocks";
import { throwError } from "@/tests/helpers";

const field = faker.word.noun();

interface SutTypes {
  sut: EmailValidation;
  emailValidatorSpy: EmailValidatorSpy;
}

const makeSut = (): SutTypes => {
  const emailValidatorSpy = new EmailValidatorSpy();
  const sut = new EmailValidation(field, emailValidatorSpy);

  return {
    sut,
    emailValidatorSpy,
  };
};

describe("Email Validation", () => {
  test("Should return a ValidationError if EmailValidator returns false", () => {
    const { sut, emailValidatorSpy } = makeSut();
    emailValidatorSpy.isEmailValid = false;
    const email = faker.internet.email();
    const error = sut.validate({ [field]: email });
    expect(error).toEqual(new ValidationError("email format isn't valid"));
  });

  test("Should call EmailValidator with correct email", () => {
    const { sut, emailValidatorSpy } = makeSut();
    const email = faker.internet.email();
    sut.validate({ [field]: email });
    expect(emailValidatorSpy.email).toBe(email);
  });

  test("Should throw if EmailValidator throws", () => {
    const { sut, emailValidatorSpy } = makeSut();
    jest.spyOn(emailValidatorSpy, "isValid").mockImplementationOnce(throwError);
    expect(() => sut.validate({ [field]: faker.internet.email() })).toThrow();
  });
});
