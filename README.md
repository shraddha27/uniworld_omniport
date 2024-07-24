The e-commerce website displays various products and provides options to add them to the cart and proceed to checkout, collecting basic user information.
Key requirements:

1. Utilize the provided JSON for the product list.
2. Present the products categorized by their respective categories. 3. Include an "Add to Cart" button for each product.
3. Create a checkout page that collects essential user details.
4. Upon checkout, store user and product details according to the specified database structure and guidelines.
5. Save order items into their respective category tables.
Technologies -
Frontend - React redux
Backend - NodeJs
DB - Any structured database (mysql, sql server, mariaDB)
Product Categories:-
Chairs
Tables
Dining tops
DB Schema:-
Users (id, name, email)
Order (id, amount, user_id, created_at)
Order_Chairs(id, order_id, chair_id)
Order_Tables(id, order_id, table_id)
Order_Tops(id, order_id, top_id)
