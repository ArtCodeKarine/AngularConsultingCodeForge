export interface NewUser {
  lastName: string;
  firstName: string;
  birthDate: number;
  email: string;
}

export interface User extends NewUser {
  id: string;
}
