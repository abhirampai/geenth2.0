var axios = require("axios").default;

const getSong = () => {
  var options = {
    method: "GET",
    url: "https://devru-raaga-v1.p.rapidapi.com/json/homepage-v3.asp",
    params: { l: "H" },
    headers: {
      "x-rapidapi-host": "devru-raaga-v1.p.rapidapi.com",
      "x-rapidapi-key": "6647b0eb45msh55487c0c26064bfp1fc644jsna42d7030fb13",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default {
  getSong,
};
