export type TUserRegistration = {
  name: string;
  email: string;
  password: string;
  skills: string;
  causes_supported: string;
};

export type TUser = {
  id: string;
  email: string;
  name: string;
  skills: string[];
  causes_supported: string[];
};
