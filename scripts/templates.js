export function setPlan(data) {
  const {stage, name} = data;
  const mainStep = document.createElement("h3");
  mainStep.innerText = `${stage} - ${name}`;
  return {mainStep, stage}
}

export function setProject (data) {
  const {id, stage, secondTitle, shortTitle} = data;
  const project = document.createElement("li");
  project.className = "project";
  const tag = document.createElement("div");
  tag.className = "tag";
  const projectNB = document.createElement("p");
  projectNB.innerText = id;
  const projectTitle = document.createElement("p");
  projectTitle.innerText = shortTitle;
  const projectSub = document.createElement("p");
  projectSub.innerText = secondTitle;
  tag.appendChild(projectTitle);
  tag.appendChild(projectSub);
  project.appendChild(projectNB);
  project.appendChild(tag);
  return {project, stage}
}