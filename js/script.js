document.addEventListener('DOMContentLoaded', function () {
  const greetingEl = document.getElementById('greeting');
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    greetingEl.textContent = 'Good Morning!';
  } else if (currentHour < 18) {
    greetingEl.textContent = 'Good Afternoon!';
  } else {
    greetingEl.textContent = 'Good Evening!';
  }

  const themeBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeBtn.textContent = 'Light Mode';
  } else {
    themeBtn.textContent = 'Dark Mode';
  }

  themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });

  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.textContent = 'Your message has been sent successfully.';
    form.reset();

    setTimeout(function () {
      formMessage.textContent = '';
    }, 3000);
  });

  const searchInput = document.getElementById('projectSearch');
  const projectCards = document.querySelectorAll('.project-card');
  const noResultsMessage = document.getElementById('noResultsMessage');
  const projectCount = document.getElementById('projectCount');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';

  function updateProjects() {
    const searchValue = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach(function (card) {
      const text = card.textContent.toLowerCase();
      const category = card.getAttribute('data-category');

      const matchesSearch = text.includes(searchValue);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    projectCount.textContent = 'Showing ' + visibleCount + ' project(s)';

    if (visibleCount === 0) {
      noResultsMessage.textContent = 'No projects found.';
    } else {
      noResultsMessage.textContent = '';
    }
  }

  searchInput.addEventListener('input', updateProjects);

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      button.classList.add('active');
      currentCategory = button.getAttribute('data-category');
      updateProjects();
    });
  });

  const detailButtons = document.querySelectorAll('.details-btn');

  detailButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const projectCard = button.parentElement;
      const details = projectCard.querySelector('.project-details');

      details.classList.toggle('hidden');

      if (details.classList.contains('hidden')) {
        button.textContent = 'Show Details';
      } else {
        button.textContent = 'Hide Details';
      }
    });
  });

  updateProjects();
});