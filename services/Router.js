const Router = {
  init: function () {
    document.querySelectorAll("a.navlink").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault()
        Router.go(e.target.getAttribute("href"))
      })
    })
    window.addEventListener("popstate", e => {
      Router.go(e.state.route, false)
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
        pageElement = document.createElement("menu-page")
        break
      case "/order":
        pageElement = document.createElement("order-page")
        pageElement.textContent = "Order page"
        break
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page")
          const paramId = route.substring(route.lastIndexOf("-") + 1)
          pageElement.dataset.productId = paramId
        }
        break
    }
    document.querySelector("main").appendChild(pageElement)
    const main = document.querySelector("main")
    main.innerHTML = null
    main.appendChild(pageElement)
    window.scrollX = 0
    window.scrollY = 0
  },
}
export default Router
