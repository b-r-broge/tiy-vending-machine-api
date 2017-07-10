# tiy-vending-machine-api
Build a vending machine API to track items, prices and purchases

### Use these APIs
- GET /api/customer/items - get a list of items
- POST /api/customer/items/:itemId/purchases - purchase an item
- GET /api/vendor/purchases - get a list of all purchases with their item and date/time
- GET /api/vendor/money - get a total amount of money accepted by the machine
- POST /api/vendor/items - add a new item not previously existing in the machine
- PUT /api/vendor/items/:itemId - update item quantity, description, and cost
