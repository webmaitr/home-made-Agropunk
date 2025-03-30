import {stages, projects} from "/data/firstData.js";
import {setPlan, setProject} from "/scripts/templates.js";

function buildFrame(data) {
  const section = document.querySelector(".central");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  for (let i=0; i<data.length; i++) {
    const chapter = setPlan(data[i]);
    const list = document.createElement("ul");
    list.setAttribute("id", chapter.stage);
    if (i<5) {
      div1.appendChild(chapter.mainStep);
      div1.appendChild(list);
    } else {
    div2.appendChild(chapter.mainStep);
    div2.appendChild(list);
    }
  }
  section.appendChild(div1);
  section.appendChild(div2);
}
buildFrame(stages)

const project = document.createElement("ul");
  project.className = "project";

function setProjects (data) {
  for (let i=0; i<data.length; i++) {
    const listItem = setProject(data[i]);
    const list = document.getElementById(listItem.stage);
    list.appendChild(listItem.project);
  }
}
setProjects(projects)

const starter = document.querySelector(".starter");
const iconClose = document.querySelector(".starter>img");
const central = document.querySelector("main");
iconClose.addEventListener("click", function() {
  starter.className = "starter hidden";
  central.className = "";
})

const btn = document.querySelector(".btn-style");
btn.addEventListener("click", function() {
  starter.className = "starter hidden";
  central.className = "";
})

