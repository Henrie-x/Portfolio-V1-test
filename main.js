  const hamburger = document.querySelector('.hamburger')
  const navList = document.querySelector('.nav-list')
  const navLinks = document.querySelectorAll('.list_items a')
  const typingEl = document.querySelector('.typing')
  const container = document.querySelector('.service_grid')
  const projectCont = document.querySelector('.projects_grid')
  const readMoreBtn = document.querySelector('.readMore')
  const connectGrid = document.querySelector('.social_grid')
  
  hamburger.addEventListener('click',() => {
    navList.classList.toggle('open')
    hamburger.classList.toggle('active')
  })
  
  navLinks.forEach(link => {
    link.addEventListener('click',() => {
      navList.classList.remove('open')
      hamburger.classList.remove('active')
    })
  })
  
  //typing Effet
  const texts = [
    "Frontend Developer",
    "UI Designer",
    "Creative Coder"
  ];
  
  let textIdx = 0
  let charIdx = 0
  let typing = true
  
  function updateText() {
    if(typing) {
      charIdx++
    }else {
      charIdx--
    }
    
    let currentText = texts[textIdx]
    
    typingEl.textContent = `${currentText.slice(0,charIdx)}`
    
    if(charIdx === currentText.length) {
      typing = false
      //delay for deleting 
      setTimeout(updateText,1000)
      return
    }
    
    if(charIdx === 0) {
      typing = true
      textIdx++
      
      if(textIdx === texts.length) {
        textIdx = 0
      }
    }
    
    setTimeout(updateText,typing ? 100 : 50)
  }
  
  updateText()
  
  const services = [
    {
      icon : 'fa-laptop-code',
      title : 'Frontend Development',
      desc : 'Building responsive and interactive user interfaces with modern technologies.'
    },
    {
      icon : 'fa-pen-ruler',
      title : 'UI/UX Designs',
      desc : 'Designing clean and intuitive user experiences that are both beautiful and functional'
    },
    {
      icon : ' fa-bolt',
      title : 'Performance',
      desc : 'Optimizing applications for speed, accessibility, and the best possible user experience.'
    }
  ]
  
  const socials = [
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      color: "#E4405F",
      bg: "rgba(228, 64, 95, 0.1)",
      link: "https://www.instagram.com/ogbonnah404?igsh=MWJteWMyczJjajhkOQ=="
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      color: "#333",
      bg: "rgba(0, 0, 0, 0.08)",
      link: "https://github.com/STYLIST-ux"
    },
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook",
      color: "#1877F2",
      bg: "rgba(24, 119, 242, 0.1)",
      link: "https://www.facebook.com/profile.php?id=100087471352802"
    },
    {
      name: "TikTok",
      icon: "fa-brands fa-tiktok",
      color: "#000",
      bg: "rgba(0, 0, 0, 0.08)",
      link: "https://tiktok.com/@stormhub0"
    },
    {
      name: "YouTube",
      icon: "fa-brands fa-youtube",
      color: "#FF0000",
      bg: "rgba(255, 0, 0, 0.1)",
      link: "https://youtube.com/@OgbonnaHenry-dv1ux"
    },
    {
      name: "Threads",
      icon: "fa-brands fa-threads",
      color: "#000",
      bg: "rgba(0, 0, 0, 0.08)",
      link: "https://threads.net/@yourname"
    }
  ];
  
  // const projects = [
  //   {
  //     id : 0,
  //     title: "Boot Interface UI",
  //     p: "A sleek and responsive portfolio...",
  //     about: "This project simulates a futuristic OS boot             interface with real-time logs, animated loading       states, and a terminal-inspired layout.",
  //     tags: ["UI Design", "Frontend", "Animation"],
  //     link: "#",
  //     img : 'images/product/Boot.png',
  //     source : '#',
  //     screenshots :[],
  //     role: "UI Designer & Frontend Developer",
  //     duration: "2 Weeks",
  //     year: "2024",
  //     tech: ["HTML", "CSS", "JavaScript"]
  //   },
  //   {
  //     id : 1,
  //     title: "Personal Portfolio",
  //     p: "A sleek and responsive portfolio...",
  //     about : 'A sleek, responsive portfolio showcasing projects, skills, and personal brand.Built with smooth interactions, clean layout, and strong visual identity',
  //     tags: ["Portfolio", "UI/UX", "Responsive"],
  //     link: "#",
  //     img : 'images/product/portfolio.png',
  //     source : '#',
  //     screenshots : [],
  //     role: "Frontend Developer",
  //     duration: "1 Week",
  //     year: "2024",
  //     tech: ["HTML", "CSS", "JS"]
  //   },
  //   {
  //     title: "SaaS Landing Page",
  //     p: "A bold, conversion-focused landing page...",
  //     about: 'A bold, dark landing page with strong typography for a creative agency.Built with a strategic layout to drive engagement and brand impact.',
  //     tags: ["Landing Page", "Branding", "SaaS"],
  //     link: "#",
  //     img : 'images/product/offgrid.png',
  //     source: "#",
  //     screenshots: [],
  //     role: "UI Designer",
  //     duration: "5 Days",
  //     year: "2024",
  //     tech: ["HTML", "CSS"]
  //   }
  // ]
  
  function renderService() {
    container.innerHTML = services.map(s =>`
      <div class="service_card">
        <div class="service_icon">
          <i class="fa-solid ${s.icon}"></i>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
      `
    ).join('')
  }
  
  function initScrollReveal() {
    const serviceCards = document.querySelectorAll('.service_card')
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const delay = [...serviceCards].indexOf(entry.target) * 120
          setTimeout(() => {
            entry.target.classList.add('in-view')
          },delay)
          observer.unobserve(entry.target)
        }
      })
    },{
      threshold : 0.2,
      rootMargin : "0px 0px -60px 0px"
    })
    serviceCards.forEach(card => observer.observe(card))
  }
  
  renderService()
  initScrollReveal()
  
  function renderProject() {
    projectCont.innerHTML = projects.map((p,i) => `
      <a href="#" class="card" data-id='${i}'>
        <div class="wrap">
          <img src="${p.img}" alt="offgrid.png">
        </div>
        <div class="low">
          <div class="low_text">
            <h3>${p.title}</h3>
            <p>${p.p}</p>
            <div class="tags">${p.tags.map(t => 
              `<span class='tag_btn'>${t}</span>`
              ).join("")}
            </div>
          </div>
          <div class="low_icon">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
      </a>
    `).join("")
    
  }
  
  function initProjectReveal() {
    const cards = document.querySelectorAll('.card')
    
    const observer = new IntersectionObserver((entries) =>  {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const delay = [...cards].indexOf(entry.target) * 120
          setTimeout(() => {
            entry.target.classList.add('in-view')
          },delay)
        }
      })
    },{
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px"
    })
    
    cards.forEach(card => observer.observe(card))
  }
  
  renderProject()
  initProjectReveal()
  
  document.querySelectorAll('.card').forEach(card => 
    card.addEventListener('click',(e) => {
      const id = card.dataset.id
      e.preventDefault()
      
      localStorage.setItem('selectedProject',id)
      
      setTimeout(() => {
        window.location.href = 'projects/project.html'
      },1200)
      
    })
  )
  
  readMoreBtn.addEventListener('click',(e) => {
    e.preventDefault()
    
    setTimeout(() => {
      window.location.href = 'about/about.html'
    },1000)
  })
  
  socials.forEach(social => {
    const card = document.createElement('a')
    
    card.className = "card";
    card.href = '#'
    card.target = "_blank";
    
    card.innerHTML = `
        <span class="icu">
          <div style="background: ${social.bg}; border: 1px solid ${social.color};">
            <i style="color: ${social.color};" class="${social.icon}"></i>
          </div>
          <span>${social.name}</span>
        </span>
        <i class="fa-solid fa-arrow-right"></i>
    `
    
    card.addEventListener('click', (e) => {
      e.preventDefault()
      
      setTimeout(() => {
        window.open(social.link,'_blank')
      },800)
    })
    
    connectGrid.appendChild(card)
  })
  
  const contactInfo = [
    { icon: "fa-envelope", label: "Email", value: "hello@henry.dev" },
    { icon: "fa-phone", label: "Phone", value: "+1 (555) 123-4567" },
    { icon: "fa-location-dot", label: "Location", value: "Lagos, Nigeria" }
  ]

  function renderContactInfo() {
    document.getElementById("contact-info").innerHTML = contactInfo.map(i => `
      <div class="contact_info_item">
        <div class="icon"><i class="fa-solid ${i.icon}"></i></div>
        <div>
          <div class="label">${i.label}</div>
          <div class="value">${i.value}</div>
        </div>
      </div>
    `).join("")
  }

  function initContactForm() {
    const form = document.getElementById("contact-form")
    const btn = form.querySelector(".submit_btn")
    const btnText = btn.querySelector(".btn_text")

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      btn.disabled = true
      btnText.textContent = "Sending..."

      setTimeout(() => {
        btnText.textContent = "Message Sent ✓"
        form.reset()
        setTimeout(() => {
          btnText.textContent = "Send Message"
          btn.disabled = false
        }, 2500)
      }, 1200)
    })
  }

  renderContactInfo()
  initContactForm()
  
  const footerSocials = [
    { icon: "fa-brands fa-github", url: "https://github.com/STYLIST-ux" },
    { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/ogbonnah404?igsh=MWJteWMyczJjajhkOQ==" },
    { icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com/in/handle" },
    { icon: "fa-brands fa-x-twitter", url: "https://x.com/handle" }
  ]

  function renderFooterSocials() {
    document.getElementById("footer-socials").innerHTML = footerSocials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" class="footer_social_icon">
      <i class="${s.icon}"></i>
    </a>
    `).join("")
  }

  function setFooterYear() {
    document.getElementById("year").textContent = new Date().getFullYear()
  }

  renderFooterSocials()
  setFooterYear()