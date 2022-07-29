const queries = {
  Journey: () => {
    return [
      {
        id: "321",
        name: "Bussines meeting in Alaska",
        destination: "Alaska",
        description:
          "It is required a fly ticket and a hotel room in 2 avenue alaskatoon",
        startDate: "01/01/2022",
        endDate: "01/30/2022"
      }
    ];
  }
};

export const resolvers = { queries };
