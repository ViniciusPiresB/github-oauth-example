const userToken = document.cookie.replace("userToken=", "");

if (userToken) {
  const getGithubInfo = async () => {
    const res = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: "token " + userToken
      }
    });

    return res.json();
  };

  const info = await getGithubInfo();

  const name = document.getElementById("name");
  const location = document.getElementById("location");
  const avatar = document.getElementById("avatar");
  const followers = document.getElementById("followers");

  name.innerText = info.name;
  location.innerText = info.location;
  avatar.src = info.avatar_url
  followers.innerText = info.followers;
}