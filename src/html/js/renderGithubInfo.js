const userToken = document.cookie.replace("userToken=", "");
const userInfoDiv = document.getElementById("welcome-auth");
const logoutScript = document.createElement("script");

const userInfoContent =
  '<div id="user-information">\
            <div id="avatar-container"><img id="avatar" src="" alt="Avatar from github"></div>\
                <h1><span id="name"></span></h1>\
                <h5><span id="bio"></span></h5>\
                <h4 >📦 Public Repositories: <span id="repos"></span></h4>\
                <h4 >👤 Followers: <span id="followers"></span></h4>\
                <h4>🌎 <span id="location"></span></h4>\
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
  const avatar = document.getElementById("avatar");
  const bio = document.getElementById("bio");
  const repos = document.getElementById("repos");
  const followers = document.getElementById("followers");
  const location = document.getElementById("location");

  name.innerText = info.name;

  avatar.src = info.avatar_url;
  bio.innerHTML = info.bio;
  repos.innerText = info.public_repos;
  location.innerText = info.location;
  followers.innerText = info.followers;
  logoutScript.setAttribute("src", "js/logout-user.js");
  document.getElementsByTagName("head")[0].appendChild(logoutScript);
} else {
  window.location.replace("/");
}
