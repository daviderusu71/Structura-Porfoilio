const posts = [
  {
    id: 1,
    category: "web",
    title: "Cum să creezi un site modern",
    image: "assets/images/portfolio04.jpg",
    description: "Învață cum să faci un site responsive și modern pas cu pas."
  },
  {
    id: 2,
    category: "design",
    title: "Principii de design pentru începători",
    image: "assets/images/portfolio02.jpg",
    description: "Descoperă cele mai bune principii de design pentru web și print."
  },
  {
    id: 3,
    category: "programare",
    title: "JavaScript pentru începători",
    image: "assets/images/portfolio01.jpg",
    description: "Ghid simplu pentru a înțelege bazele JavaScript."
  },
  {
    id: 4,
    category: "web",
    title: "SEO pentru site-uri web",
    image: "assets/images/project2.jpg",
    description: "Cum să optimizezi site-ul pentru motoarele de căutare."
  },
  {
    id: 4,
    category: "web",
    title: "SEO pentru site-uri web",
    image: "assets/images/07.jpg",
    description: "Cum să optimizezi site-ul pentru motoarele de căutare."
  },
  {
    id: 5,
    category: "design",
    title: "Culori și tipografie",
    image: "assets/images/feed-6.jpg",
    description: "Cum să alegi culorile și fonturile potrivite pentru site."
  },
  {
    id: 5,
    category: "design",
    title: "Culori și tipografie",
    image: "assets/images/project3.jpg",
    description: "Cum să alegi culorile și fonturile potrivite pentru site."
  },
  {
    id: 6,
    category: "programare",
    title: "CSS Avansat",
    image: "assets/images/img.jpg",
    description: "Tehnici avansate de CSS pentru un design performant."
  },
   {
    id: 6,
    category: "programare",
    title: "CSS Avansat",
    image: "assets/images/project1.jpg",
    description: "Tehnici avansate de CSS pentru un design performant."
  }
];

const postsGrid = document.querySelector(".posts-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.getElementById("load-more-btn");

let filteredCategory = "all";
let postsToShow = 3;

function displayPosts() {
  postsGrid.innerHTML = "";
  const filteredPosts = filteredCategory === "all"
    ? posts
    : posts.filter(post => post.category === filteredCategory);

  filteredPosts.slice(0, postsToShow).forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post-card");
    postEl.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="post-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
      </div>
    `;
    postsGrid.appendChild(postEl);
  });

  // Ascunde butonul dacă nu mai sunt articole
  loadMoreBtn.style.display = (postsToShow >= filteredPosts.length) ? "none" : "block";
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filteredCategory = btn.getAttribute("data-category");
    postsToShow = 3;
    displayPosts();
  });
});

loadMoreBtn.addEventListener("click", () => {
  postsToShow += 3;
  displayPosts();
});

displayPosts();
