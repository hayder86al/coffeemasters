const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault()
        Router.go(e.target.getAttribute("href"))
      })
    })
    Router.go(location.pathname)
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, null, route)
    }
    let pageElement = null
    switch (route) {
      case "/":
        pageElement = document.createElement("h1")
        pageElement.textContent = "Main page"
        break
      case "/order":
        pageElement = document.createElement("h1")
        pageElement.textContent = "Order page"
        break
      default:
        pageElement = document.createElement("h1")
        pageElement.textContent = "404"
        break
    }
    const main = document.querySelector("main")
    main.innerHTML = null
    main.appendChild(pageElement)
    window.scrollX = 0
    window.scrollY = 0
  },
}
export default Router
