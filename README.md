# Coffee Masters

Coffee Masters is an experimental web application designed to showcase and practice building interactive widgets and dynamic elements using web components. The project serves as a playground for exploring the potential of custom elements, shadow DOM, and modular frontend development. Ideal for honing web component skills, this app simulates a functional e-commerce platform, enabling users to browse, customize, and order products.

## Table of Contents

- [Coffee Masters](#coffee-masters)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
    - [Components](#components)
    - [Services](#services)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/hayder86al/coffeemasters
    ```

2. Navigate to the project directory:

    ```sh
    cd coffeemasters
    ```

3. Run a preferred live server.

## Project Structure

### Components

- **[CartItem](http://_vscodecontentref_/1)**: Defines the [CartItem](http://_vscodecontentref_/2) custom element for displaying items in the cart.
- **[DetailsPage](http://_vscodecontentref_/3)**: Defines the [DetailsPage](http://_vscodecontentref_/4) custom element for displaying product details.
- **[MenuPage](http://_vscodecontentref_/5)**: Defines the [MenuPage](http://_vscodecontentref_/6) custom element for displaying the menu.
- **[OrderPage](http://_vscodecontentref_/7)**: Defines the [OrderPage](http://_vscodecontentref_/8) custom element for displaying the order form and cart items.
- **[ProductItem](http://_vscodecontentref_/9)**: Defines the [ProductItem](http://_vscodecontentref_/10) custom element for displaying individual products in the menu.

### Services

- **[API](http://_vscodecontentref_/11)**: Contains the API configuration and methods for fetching data.
- **[Menu](http://_vscodecontentref_/12)**: Contains methods for loading menu data and getting product details.
- **[Order](http://_vscodecontentref_/13)**: Contains methods for adding and removing items from the cart.
- **[Router](http://_vscodecontentref_/14)**: Contains the routing logic for navigating between different pages.
- **[Store](http://_vscodecontentref_/15)**: Contains the application state and a proxy for managing state changes.
