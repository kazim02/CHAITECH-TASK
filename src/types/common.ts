// i created this seprate folder to mangae types in the app to look clean and orgnise code

export interface InputFieldProps {
  label: string;
  type: string;
  register: any;
  error?: string;
}
export interface ProfileFieldProps {
  label: string;
  value: string;
  register: any;
  fieldName: string;
  error?: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

export interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  updateUser: (user: Partial<User>) => void;
}
