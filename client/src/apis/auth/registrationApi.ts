import toast from "react-hot-toast";
import { TUserRegistration } from "../../utils/types/types";
import axios from "axios";

export const registrationApi = async (data: TUserRegistration) => {
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

  const res = await axios
    .post("http://localhost:3000/api/auth/register", payload)
    .then((res) => {
      toast.success(res.data.message, {
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
      });
    })
    .catch((err) => {
      toast.error(
        err.response?.data?.message && "Registration failed. Try again!",
        {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }
      );
    });

  return res;
};
