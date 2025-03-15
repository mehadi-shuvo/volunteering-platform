import { TUserRegistration } from "../../utils/types/types";
import axios from "axios";

export const registrationApi = (data: TUserRegistration) => {
  const { skills, causes_supported } = data;
  const skillsArray = skills.split(",");
  const causesArray = causes_supported.split(",");

  const payload = {
    email: data.email,
    name: data.name,
    password: data.password,
    skills: skillsArray,
    causes_supported: causesArray,
  };

  axios
    .post("http://localhost:3000/api/auth/register", payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
