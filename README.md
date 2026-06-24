# AgroMart

AgroMart is a web-based marketplace that connects fertilizer sellers with farmers and distributors across Nigeria. Buyers can browse and search fertilizer listings, then initiate orders directly through WhatsApp — a channel farmers already use daily.

## Features
- User authentication with role-based access (buyer / seller)
- Sellers can list, edit, and manage fertilizer products
- Buyers can browse, search, and filter products by category
- One-click "Order via WhatsApp" with pre-filled product details
- No payment gateway required at launch — order confirmation and payment are handled directly between buyer and seller

## Tech Stack
**Frontend:** Next.js, TypeScript, Tailwind CSS
**Backend:** FastAPI, PostgreSQL, SQLAlchemy, Alembic
**Auth:** JWT (python-jose + bcrypt)
**Containerization:** Docker