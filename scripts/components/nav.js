class AppNavbar extends ModularityComponent {
  /**
   * The AppNavbar component also keeps some state for tracking whether the
   * hamburger menu is opened on the mobile view.
   *
   * The state is instantiated in the constructor with a default value.
   */
  constructor() {
    super()
    // The menu should always be closed by default.
    this.isVisible = false
  }

  /** Produce the HTML which is going to be inserted into the DOM. */
  render() {
    return `
    <nav class="nav">
      <div class="nav-brand-section">
      <a href="/index.php"><img class="nav-logo" src="/images/logo.png"
        alt="Det Norske Nye Storband Logo">
        <a class="nav-item" href="/index.php">Det Nye Norske Storband</a>
        <img class="nav-icon nav-expand-icon" src="/images/reorder.png" alt="Utvid dropdown meny">
      </div>
      <div class="nav-section nav-section-content-desktop">
        <a class="nav-item" href="/pages/members.php">Medlemmer</a>
        <a class="nav-item" href="/pages/projectsNy.php">Prosjekter</a>
        <a class="nav-item" href="/pages/about.php">Om Oss</a>
        <a class="nav-item" href="/pages/contact.php">Kontakt Oss</a>
      </div>
      <div class="nav-section nav-section-content-mobile">
        <a class="nav-item" href="/pages/members.php">Medlemmer</a>
        <a class="nav-item" href="/pages/projectsNy.php">Prosjekter</a>
        <a class="nav-item" href="/pages/about.php">Om Oss</a>
        <a class="nav-item" href="/pages/contact.php">Kontakt Oss</a>
      </div>
    </nav>
    `
  }

  registerEventListeners(element) {
    // We can get child elements from the component by accessing the elements
    // children, queried with querySelector.
    const expandIcon = element.querySelector('.nav-expand-icon')
    const sectionContent = element.querySelector('.nav-section-content-mobile')

    // Whenever we wish to show the dropdown menu, we set the appropriate style to the list of nav items
    const render = () => sectionContent.style.display = this.isVisible ? 'flex' : 'none'

    // Whenever the expand dropdown button is clicked
    expandIcon.addEventListener('click', () => {
      this.isVisible = !this.isVisible
      render()
    })

    // Whenever the window resizes, we check if the window is larger than our breakpoint
    const onWindowResize = () => {
      this.isVisible = !window.innerWidth >= 1440
      render()
    }

    // Render once when the dom has loaded to avoid flickering
    render()

    // Attach and detach the event listeners
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  }
}

registerModularityComponent('app-nav', AppNavbar)