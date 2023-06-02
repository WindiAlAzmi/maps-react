import axios from "axios";

const url_api = "http://api.drnat.skin";

export const BetaApiEmailSubs = async (props) => {
  console.log(props, "ini data email");
//   https://jsonplaceholder.typicode.com/posts
  const data = axios(
    `https://cors-anywhere.herokuapp.com/${url_api}/email-subscription/v1/subscribe`,
    {
      //  const data = axios(`https://jsonplaceholder.typicode.com/posts`, {
      mode: "cors",
      method: "POST",
      headers: {
        Authorization:
          "1e9c4abe5e2b69ec5d54a6cabb24a5e41dfe4427eee4ebd1f1941ce6e5e70a29",
        "Content-Type": "application/json",
        //   "Content-Length": `${data.length}`,
        //   "Host": `${data.length}`,
        //   "User-Agent": "PostmanRuntime/7.32.2",
        //   "Accept": "*/*",
        //   "Accept-Encoding": "gzip, deflate, br",
        //   "Connection": "keep-alive",
      },
      data: {
        body: props,
      },
    }
  );

  const response = await data;
  console.log(response, "ini response");
  return response.data;
};
