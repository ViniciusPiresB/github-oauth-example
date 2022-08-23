const userToken = document.cookie.replace("userToken=", "");
const userInfoDiv = document.getElementById("welcome-auth");
const logoutScript = document.createElement("script");

const userInfoContent =
  '<img id="avatar" src="" alt="Avatar from github">\
            <div id="user-information">\
                <h1>Hello there, <span id="name"></span>! 👋</h1>\
                <h2>🌎 <span id="location"></span></h2>\
                <h2 >👤 Followers: <span id="followers"></span></h2>\
                <button id="logout-btn"><img src="imgs/logout-button.svg" alt="Logout Image"></button>\
            </div>';

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

  userInfoDiv.innerHTML = userInfoContent;

  const name = document.getElementById("name");
  const location = document.getElementById("location");
  const avatar = document.getElementById("avatar");
  const followers = document.getElementById("followers");

  name.innerText = info.name;
  location.innerText = info.location;
  avatar.src = info.avatar_url;
  followers.innerText = info.followers;
  logoutScript.setAttribute("src", "js/logout-user.js");
  document.getElementsByTagName("head")[0].appendChild(logoutScript);
} else {
  window.location.replace("/");
}
