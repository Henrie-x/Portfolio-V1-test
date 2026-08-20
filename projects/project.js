  const id = Number(localStorage.getItem('selectedProject'))
  const product = projects[id]
  
  if (!product) {
    document.querySelector('.project_detail').innerHTML = "<h2>Project not found 😢</h2>"
    throw new Error("Invalid project")
  }
  
  document.getElementById('heroImg').src = product.img ?
  `../${product.img}` :
  "../images/default.png"
  
  document.getElementById("title").textContent = product.title
  document.getElementById("desc").textContent = product.p
  
  document.getElementById("proTags").innerHTML =
  (product.tags || []).map(tag => `<div class="tag">${tag}</div>`).join("")  
  
  document.getElementById("visitBtn").href = product.link
  document.getElementById("viewBtn").href = product.source
  
  document.getElementById("role").textContent = product.role
  document.getElementById("dura").textContent = product.duration
  document.getElementById("year").textContent = product.year
  document.getElementById("tool").textContent = product.tech.join(", ")
  
  document.getElementById("about").textContent = product.about

document.getElementById("screen").innerHTML =
  (product.screenshots || []).map(img => `
    <div class="card">
      <img src="../${img}" />
    </div>
  `).join("")