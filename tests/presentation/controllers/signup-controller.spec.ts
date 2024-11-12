import { faker } from "@faker-js/faker";

import { SignUpController } from "@/presentation/controllers";
import { AddUserSpy, ValidationSpy } from "@/tests/presentation/mocks";
import { type AddUserRequest } from "@/domain/usecases";
import { throwError } from "@/tests/helpers";

const mockRequest = (): AddUserRequest => {
  const password = faker.internet.password();

  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password,
  };
};

interface SutTypes {
  sut: SignUpController;
  addUserSpy: AddUserSpy;
  validationSpy: ValidationSpy;
}

const makeSut = (): SutTypes => {
  const addUserSpy = new AddUserSpy();
  const validationSpy = new ValidationSpy();
  const sut = new SignUpController(validationSpy, addUserSpy);
  return {
    sut,
    addUserSpy,
    validationSpy,
  };
};

describe("SignUp Controller", () => {
  it("Should throw if Validation throws", async () => {
    const { sut, validationSpy } = makeSut();
    jest.spyOn(validationSpy, "validate").mockImplementationOnce(throwError);
    await expect(sut.handle(mockRequest())).rejects.toThrow(new Error());
  });

  it("Should throw if AddUser throws", async () => {
    const { sut, addUserSpy } = makeSut();
    jest.spyOn(addUserSpy, "handle").mockImplementationOnce(throwError);
    await expect(sut.handle(mockRequest())).rejects.toThrow(new Error());
  });

  // test("Should call AddAccount with correct values", async () => {
  //   const { sut, addAccountSpy } = makeSut();
  //   const request = mockRequest();
  //   await sut.handle(request);
  //   expect(addAccountSpy.params).toEqual({
  //     name: request.name,
  //     email: request.email,
  //     password: request.password,
  //   });
  // });

  // test("Should return 403 if AddAccount returns false", async () => {
  //   const { sut, addAccountSpy } = makeSut();
  //   addAccountSpy.result = false;
  //   const httpResponse = await sut.handle(mockRequest());
  //   expect(httpResponse).toEqual(forbidden(new EmailInUseError()));
  // });

  // test("Should return 200 if valid data is provided", async () => {
  //   const { sut, authenticationSpy } = makeSut();
  //   const httpResponse = await sut.handle(mockRequest());
  //   expect(httpResponse).toEqual(ok(authenticationSpy.result));
  // });

  // test("Should call Validation with correct value", async () => {
  //   const { sut, validationSpy } = makeSut();
  //   const request = mockRequest();
  //   await sut.handle(request);
  //   expect(validationSpy.input).toEqual(request);
  // });

  // test("Should return 400 if Validation returns an error", async () => {
  //   const { sut, validationSpy } = makeSut();
  //   validationSpy.error = new MissingParamError(faker.random.word());
  //   const httpResponse = await sut.handle(mockRequest());
  //   expect(httpResponse).toEqual(badRequest(validationSpy.error));
  // });

  // test("Should call Authentication with correct values", async () => {
  //   const { sut, authenticationSpy } = makeSut();
  //   const request = mockRequest();
  //   await sut.handle(request);
  //   expect(authenticationSpy.params).toEqual({
  //     email: request.email,
  //     password: request.password,
  //   });
  // });

  // test("Should return 500 if Authentication throws", async () => {
  //   const { sut, authenticationSpy } = makeSut();
  //   jest.spyOn(authenticationSpy, "auth").mockImplementationOnce(throwError);
  //   const httpResponse = await sut.handle(mockRequest());
  //   expect(httpResponse).toEqual(serverError(new Error()));
  // });
});
