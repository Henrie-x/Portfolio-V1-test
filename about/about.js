  const aboutInfo = [
    { icon: "fa-user", label: "Name", value: "Henry Wilson" },
    { icon: "fa-envelope", label: "Email", value: "hello@henry.dev" },
    { icon: "fa-location-dot", label: "Location", value: "Lagos, Nigeria" },
    { icon: "fa-briefcase", label: "Availability", value: "Open to work" }
  ]

  const skills = [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Three.js / WebGL", level: 80 },
    { name: "UI / UX Design", level: 85 }
  ]

  const tools = ["fa-code", "fa-figma fa-brands", "fa-github fa-brands", "fa-js fa-brands", "fa-chrome fa-brands", "fa-palette"]

  const journey = [
    { year: "2022 — Present", role: "Frontend Developer, Freelance", desc: "Building modern web applications for clients around the world." },
    { year: "2021 — 2022", role: "Junior Developer, DevStudio", desc: "Worked on multiple projects and improved performance." },
    { year: "2020 — 2021", role: "Student & Learner", desc: "Focused on learning and building real-world projects." }
  ]

  function renderAboutInfo() {
    document.getElementById("about-info").innerHTML = aboutInfo.map(i => `
      <div class="about_info_item">
        <div class="icon"><i class="fa-solid ${i.icon}"></i></div>
        <div>
          <div class="label">${i.label}</div>
          <div class="value">${i.value}</div>
        </div>
      </div>
    `).join("")
  }

  function renderSkills() {
    const el = document.getElementById("about-skills")
    el.innerHTML = skills.map(s => `
      <div class="skill_row">
        <div class="skill_row_top"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="skill_bar"><div class="skill_bar_fill" data-level="${s.level}"></div></div>
      </div>
    `).join("")
  }

  function renderTools() {
    document.getElementById("about-tools").innerHTML = tools.map(t => `
      <div class="tool_item"><i class="fa-solid ${t}"></i></div>
    `).join("")
  }

  function renderJourney() {
    document.getElementById("about-journey").innerHTML = journey.map(j => `
      <div class="journey_item">
        <div class="journey_year">${j.year}</div>
        <div>
          <div class="journey_role">${j.role}</div>
          <div class="journey_desc">${j.desc}</div>
        </div>
      </div>
    `).join("")
  }

  function initSkillBars() {
    const bars = document.querySelectorAll(".skill_bar_fill")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + "%"
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.4 })
    bars.forEach(bar => observer.observe(bar))
  }

  renderAboutInfo()
  renderSkills()
  renderTools()
  renderJourney()
  initSkillBars()
  
  const back = document.getElementById('btn')
  
  back.addEventListener('click',(e) => {
    e.preventDefault()
    
    setTimeout(() => {
      window.location.href = '../index.html'
    },400)
  })