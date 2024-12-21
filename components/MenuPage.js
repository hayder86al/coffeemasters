export class MenuPage extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: "open" })
    const styles = document.createElement("style")
    this.root.appendChild(styles)
    async function loadCss() {
      const response = await fetch("/components/MenuPage.css")
      const text = await response.text()
      styles.textContent = text
    }
    loadCss()
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template")
    const content = template.content.cloneNode(true)
    this.root.appendChild(content)

    window.addEventListener("appmenuchange", () => {
      this.render()
    })
    this.render()
  }

  render() {
    if (app.store.menu) {
      this.root.querySelector("#menu").innerHTML = ""
      app.store.menu.forEach(category => {
        const liCategory = document.createElement("li")
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class='category'>
          </ul>
        `
        this.root.querySelector("#menu").appendChild(liCategory)
        category.products.forEach(product => {
          const item = document.createElement("product-item")
          item.dataset.product = JSON.stringify(product)
          liCategory.querySelector("ul").appendChild(item)
        })
      })
    } else {
      this.root.querySelector("#menu").innerHTML = `<p>Loading...</p>`
    }
  }
}

customElements.define("menu-page", MenuPage)
