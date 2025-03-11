import { PrismaClient } from "@prisma/client";

const prismaC = new PrismaClient({
  omit: {
    user: {
      password: true,
    },
  },
});

export default prismaC;
