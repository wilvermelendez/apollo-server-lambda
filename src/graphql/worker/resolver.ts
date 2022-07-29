const queries = {
  Worker: () => {
    return [
      {
        id: "12345",
        email: "some.user@email.com",
        password: "Pa$$w0rd!",
        loggedIn: false,
        firstName: "John",
        lastName: "Wick"
      }
    ];
  }
};

export const resolvers = { queries };
