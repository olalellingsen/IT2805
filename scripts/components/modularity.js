/**
 * This file contains the JavaScript code which is used to create the modular
 * components used by the website. Components are app navbar and app footer.
 *
 * This is done by making classes that extend ModularComponent and then
 * implementing the render() and registerEventListeners() methods.
 *
 * When the DOM is loaded, we query all the elements with the class name, and
 * then create a new instance of the class for each element.
 *
 * We insert the rendered HTML into the element, and then register the event
 * listeners for the component.
 *
 * The modularity code uses classes, because each instance of a modular
 * component may have state, such as the navbar hamburger menu being open or
 * closed.
 *
 * This is a pure JavaScript and DOM implementation.
 */

/** List of class names used for the modular components */
const modularityComponents = []

function registerModularityComponent(classname, component) {
  modularityComponents.push([classname, component])
}

/*
 * We use the DOMContentLoaded event on document instead of window's load event
 * because the latter waits for all resources such as images to load before
 * going off.
 *
 * On pages with a lot of heavy images like the front-page, we will see the
 * navbar before the images have loaded which is what we want. Otherwise we
 * would have to wait for the images to load before the navbar is shown.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Go through all the registered component classnames
  for (const [classname, Component] of modularityComponents) {
    // Go through all elements with those classnames
    for (const element of document.getElementsByClassName(classname)) {
      // Create a new instance of the component
      const component = new Component()
      // Insert the HTML into the DOM
      element.innerHTML = component.render()
      // Register the event listeners
      component.registerEventListeners(element)
    }
  }
})

class ModularityComponent {
  /** Create a HTML string which will be inserted into the DOM */
  render() {}
  /** Attach any event listeners to the component */
  registerEventListeners() {}
}
