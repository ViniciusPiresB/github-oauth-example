import axios from "axios";

export class authGithubService {
  public static async getAccessToken(body: object) {
    const opts = { headers: { accept: "application/json" } };
    const res = await axios.post(
      "https://github.com/login/oauth/access_token",
      body,
      opts
    );
    const access_token = res.data.access_token;
    return access_token;
  }
}
