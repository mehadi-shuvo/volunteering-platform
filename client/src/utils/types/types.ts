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

export type TAuthState = {
  user: TUser | null;
  accessToken: string | null;
};

export type LoginResponse = {
  data: {
    user: TUser;
    accessToken: string;
    refreshToken: string;
  };
};

export type LoginApiParams = {
  email: string;
  password: string;
};

export type TEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: TUser[];
  organizer_id: string;
};

export type TComment = {
  id: string;
  comment: string;
  user: TUser;
};

export type THelpPost = {
  id: string;
  title: string;
  description: string;
  urgency_level: string;
  posted_by: string;
  user: TUser;
  comments: TComment[];
};
