export interface AuthenticateUser {
  handle: (
    request: AuthenticateUserRequest,
  ) => Promise<AuthenticateUserResponse>;
}

export interface AuthenticateUserRequest {
  email: string;
  password: string;
}

export interface AuthenticateUserResponse {
  token: string;
}
