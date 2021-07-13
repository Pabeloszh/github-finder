import "./style.scss";
import { languages } from "./languages.js";
let windowWidth = window.innerWidth;
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerMenu = document.querySelector(".mobile .menu");
const closeMenu = document.querySelector(".close");
const search = document.querySelector("nav input");
const headerDesktop = document.querySelectorAll(".header-desktop ul li a");
const headerMobile = document.querySelectorAll(".header-mobile ul li a");

class UI {
  constructor() {
    this.dropdownMenu = document.querySelectorAll(".dropdown__menu");
    this.appMenu = document.querySelector(".links");
    this.tooltipDesktop = document.querySelector(".links .tooltip");
    this.tooltips = document.querySelectorAll(".tooltip");
    this.mainProfileData = document.querySelector("main aside div");
    this.followProfile = document.querySelector("main aside button");
    this.blockProfile = document.querySelector("main aside .block");
    this.descProfile = document.querySelector("main aside .desc");
    this.listProfile = document.querySelector("main aside ul");
    this.listRepo = document.querySelector("main section .repos .repos__list");
    this.alert = document.querySelector("main .alert");
  }

  toggleDropdown(index) {
    getComputedStyle(this.dropdownMenu[index]).display === "block"
      ? (this.dropdownMenu[index].style.display = "none")
      : (this.dropdownMenu[index].style.display = "block");
  }
  removeInlineStyles() {
    Array.from(this.dropdownMenu).forEach((ddM) => {
      ddM.removeAttribute("style");
    });
  }
  toggleMenu() {
    this.appMenu.classList.toggle("menuToggled");
  }
  showTooltip() {
    this.tooltips.forEach((tt) => {
      tt.classList.add("desktop-active");
      setTimeout(() => {
        tt.classList.remove("desktop-active");
      }, 5000);
    });
  }
  changeHeaderLinks(data, header) {
    Array.from(header).forEach((link, index) => {
      switch (index) {
        case 0:
          link.href = `https://github.com/${data.login}`;
          break;
        case 1:
          link.href = `https://github.com/${data.login}?tab=repositories`;
          break;
        case 2:
          link.href = `https://github.com/${data.login}?tab=projects`;
          break;
        case 3:
          link.href = `https://github.com/${data.login}?tab=packages`;
          break;
      }
    });
  }
  showUserData(data) {
    this.mainProfileData.innerHTML = "";
    this.listProfile.innerHTML = "";

    let image = document.createElement("img");
    let names = document.createElement("div");
    let namesName = document.createElement("h1");
    let namesLogin = document.createElement("h1");
    let company, city, blog, twitter;
    company = city = blog = twitter = document.createElement("li");

    image.src = data.avatar_url;
    image.alt = `${data.name}_avatar`;
    names.classList.add("names");
    namesName.innerHTML = data.name;
    namesLogin.innerHTML = data.login;
    data.company &&
      (company.innerHTML = `<p><span class="iconify" data-icon="octicon:organization-16" data-inline="false"></span>${data.company}</p>`);
    data.location &&
      (city.innerHTML = `<p><span class="iconify" data-icon="akar-icons:location" data-inline="false"></span>${data.location}</p>`);
    data.blog &&
      (blog.innerHTML = `<a href="${data.blog}"><span class="iconify" data-icon="fa-solid:link" data-inline="false"></span>${data.blog}</a>`);
    data.twitter_username &&
      (twitter.innerHTML = `<a href="https://twitter.com/${data.twitter_username}"><span class="iconify" data-icon="akar-icons:twitter-fill" data-inline="false"></span>${data.twitter_username}</a>`);

    names.append(namesName, namesLogin);
    this.mainProfileData.append(image, names);
    this.followProfile.addEventListener(
      "click",
      () => (location.href = data.html_url)
    );
    this.descProfile.innerHTML = data.bio;
    this.listProfile.append(company, city, blog, twitter);
    this.blockProfile.href = data.html_url;
  }
  showUserRepos(repos) {
    this.listRepo.innerHTML = ``;
    repos.forEach((repo) => {
      let color = languages.find((lang) => lang.name === repo.language);

      let boxRepo = document.createElement("div");
      let nameRepo = document.createElement("a");
      let descRepo = document.createElement("p");
      let langRepo = document.createElement("p");

      boxRepo.classList.add("repos__list__repo");
      langRepo.classList.add("repos__list__repo__lang");
      nameRepo.innerHTML = `<span class="iconify" data-icon="octicon:repo-16" data-inline="false"></span>${repo.name}`;
      nameRepo.href = repo.html_url;
      descRepo.innerHTML = repo.description;
      color &&
        (langRepo.innerHTML += `<span class="repos__list__repo__lang__color" style="background-color:${color.color}"></span>`);
      repo.language && (langRepo.innerHTML += repo.language);

      boxRepo.append(nameRepo, descRepo, langRepo);

      this.listRepo.appendChild(boxRepo);
    });
  }
  toggleAlert() {
    this.alert.style.display = "block";
    setTimeout(() => {
      this.alert.style.display = "none";
    }, 3000);
  }
}

class GitHub {
  constructor() {
    this.repos_count = 6;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${process.env.CLIENT_ID}&client_secret${process.env.CLIENT_SECRET}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id${process.env.CLIENT_ID}&client_secret${process.env.CLIENT_SECRET}`
    );

    const profileData = await profileResponse.json();

    const reposData = await reposResponse.json();

    return {
      profileData,
      reposData,
    };
  }
}

const ui = new UI();
const github = new GitHub();

document.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

window.onload = () => {
  search.value = "";
  ui.showTooltip();
  github.getUser("Pabeloszh").then((data) => {
    ui.showUserData(data.profileData);
    ui.changeHeaderLinks(data.profileData, headerDesktop);
    ui.changeHeaderLinks(data.profileData, headerMobile);
    data.reposData && ui.showUserRepos(data.reposData);
  });
};

Array.from(dropdown).forEach((dd, index) => {
  if (windowWidth > 992) {
    dd.addEventListener("click", () => ui.toggleDropdown(index));
    dd.addEventListener("mouseleave", () => ui.removeInlineStyles());
  }
});
hamburgerMenu.addEventListener("click", () => ui.toggleMenu());
closeMenu.addEventListener("click", () => ui.toggleMenu());

var globalTimeout = null;
search.addEventListener("keyup", (e) => {
  if (globalTimeout != null) {
    clearTimeout(globalTimeout);
  }
  globalTimeout = setTimeout(function () {
    globalTimeout = null;
    console.log(123);
    const userText = e.target.value;
    if (userText !== "") {
      github.getUser(userText).then((data) => {
        if (data.profileData.message === "Not Found") {
          ui.toggleAlert();
        } else {
          ui.showUserData(data.profileData);
          ui.changeHeaderLinks(data.profileData, headerDesktop);
          ui.changeHeaderLinks(data.profileData, headerMobile);
          data.reposData && ui.showUserRepos(data.reposData);
        }
      });
    } else {
      github.getUser("Pabeloszh").then((data) => {
        ui.showUserData(data.profileData);
        ui.changeHeaderLinks(data.profileData, headerDesktop);
        ui.changeHeaderLinks(data.profileData, headerMobile);
        data.reposData && ui.showUserRepos(data.reposData);
      });
    }
  }, 500);
});
