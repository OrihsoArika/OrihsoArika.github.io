const GITHUB_USERNAME = "orihsoarika";

const MY_BLOGS = [
  {
    title: "Paradigmas Conceptuales",
    desc: "¿Por Qué se sigue usando la Programacion Orientada a Objeto si es un dolor de cabeza?",
    date: "12 Oct 2023",
    url: "./src/blog-paradigmas-conceptuales/index.html"
  },
];

const MY_SOCIALS = [
  { title: "GitHub", desc: "Mis repositorios y contribuciones", url: `https://github.com/${GITHUB_USERNAME}` },
];

function renderLists() {
  const blogContainer = document.getElementById('blog-list');
  const socialContainer = document.getElementById('social-list');

  // Render Blogs
  blogContainer.innerHTML = MY_BLOGS.map(blog => `
      <a href="${blog.url}" class="item-card blog-item" target="_blank">
      <span class="item-title">${blog.title}</span>
      <span class="item-desc">${blog.desc}</span>
      <span class="item-date">${blog.date}</span>
      </a>
    `).join('');

  // Render Socials
  socialContainer.innerHTML = MY_SOCIALS.map(social => `
    <a href="${social.url}" class="item-card social-item" target="_blank">
    <span class="item-title">${social.title}</span>
    <span class="item-desc">${social.desc}</span>
    </a>
  `).join('');
}

async function fetchGitHubData() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Usuario no encontrado');
    const data = await response.json();

    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('user-name').textContent = data.name || data.login;
    document.title = `${data.name || data.login} | Home`;
  } catch (error) {
    document.getElementById('user-name').textContent = "Usuario";
    console.log(error);
  }
}

window.onload = () => {
  fetchGitHubData();
};
