function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  function showContent(section, element) {
    const contentMap = {
      home: `<h2>Home</h2><p>Welcome to the Home section.</p>`,
      about: `<h2>About</h2><p>This is an About section with details.</p>`,
      services: `<h2>Services</h2><p>These are the Services we offer.</p>`,
      contact: `<h2>Contact</h2><p>Here is how you can Contact us.</p>`,
      help: `<h2>Help</h2><p>Need Help? This section is for you.</p>`
    };
  
    // Update main content area
    const main = document.getElementById('main-content');
    main.innerHTML = contentMap[section] || `<h2>Welcome</h2><p>Choose an option from the sidebar.</p>`;
  
    // Remove 'active-tab' from all sidebar items
    const items = document.querySelectorAll('#sidebar li');
    items.forEach(item => item.classList.remove('active-tab'));
  
    // Add 'active-tab' to the clicked item
    if (element) {
      element.classList.add('active-tab');
    }
  
    // Collapse sidebar in mobile view
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('active');
    }
  }
  
  // Function to toggle sidebar visibility (for mobile)
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  // On page load: show Home content and highlight Home tab
  window.onload = function () {
    const defaultTab = document.querySelector('#sidebar li');
    showContent('home', defaultTab);
  };

  