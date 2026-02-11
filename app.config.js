import "dotenv/config";

export default {
  expo: {
    name: "myApp",
    slug: "myApp",
    extra: {
      apiUrl: process.env.API_URL,
      //   mapsKey: process.env.MAPS_KEY,
    },
  },
};
