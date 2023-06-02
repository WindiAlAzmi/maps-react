import axios from "axios";

const url_api = "http://api.drnat.skin";

export const BetaApiEmailSubs = async (props) => {
  const data = axios(`${url_api}/email-subscription/v1/subscribe`, {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization:
        "1e9c4abe5e2b69ec5d54a6cabb24a5e41dfe4427eee4ebd1f1941ce6e5e70a29",
      "Content-Type": "application/json",
    },
    data: {
      body: props,
    },
  });

  const response = await data;
  return response.data;
};



export const BetaApiDataPagination = async (props) => {
  const data = axios(`${url_api}/email-subscription/v1/subscribe`, {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization:
        "1e9c4abe5e2b69ec5d54a6cabb24a5e41dfe4427eee4ebd1f1941ce6e5e70a29",
      "Content-Type": "application/json",
    },
    data: {
      body: props,
    },
  });

  const response = await data;
  return response.data;
};

