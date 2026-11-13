# NYX Store with NestJS

This project keeps the existing NYX HTML/CSS pages and adds a small NestJS REST API. Products are initialized from `data/store.json`; cart items, categories added with POST, and orders are kept in memory while the server is running.

## Run the application

Requirements: Node.js 20 or newer.

From this directory, install dependencies and start the development server:

```powershell
npm.cmd install
npm.cmd run start:dev
```

The API listens at `http://localhost:3000`. Existing frontend pages are served at `http://localhost:3000/login.html`, `http://localhost:3000/signup.html`, and `http://localhost:3000/order-confirmed.html`. The original shop, home, and cart pages are not present in this project folder.

To compile and start the TypeScript build:

```powershell
npm.cmd run build
npm.cmd start
```

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/products` | List the seeded and added products |
| GET | `/products/:id` | Get a product by ID |
| POST | `/products` | Add a product |
| GET | `/categories` | List categories derived from the product data and any added categories |
| POST | `/categories` | Add a category |
| GET | `/cart` | List cart items |
| POST | `/cart` | Add a cart item |
| GET | `/orders` | List orders |
| POST | `/orders` | Create an order |

POST requests use JSON and should include the `Content-Type: application/json` header. Example Postman bodies:

```json
// POST /products
{
  "name": "Aurora Jacket",
  "price": 199,
  "category": "jackets",
  "description": "Lightweight insulated jacket.",
  "sizes": ["S", "M", "L"],
  "stock": 8
}
```

```json
// POST /categories
{ "name": "Accessories" }
```

```json
// POST /cart
{ "productId": "nebula-bomber", "size": "M", "quantity": 1 }
```

```json
// POST /orders
{ "items": [{ "productId": "nebula-bomber", "size": "M", "quantity": 1 }], "total": 229 }
```

After each POST, call the corresponding GET endpoint to see the added record. The API intentionally has no authentication or database; added records reset when the server restarts. The current HTML pages do not include a product catalog or cart page to connect to these endpoints, so those pages have been left unchanged.
