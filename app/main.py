from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import auth, products

app = FastAPI(title="AgroMart API", version="1.0.0")

# Allow the Next.js frontend to talk to this API.
# Tighten allow_origins to your real frontend URL(s) before going to production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1")
app.include_router(products.router, prefix="/api/v1")


@app.get("/")
def root():
    return {"message": "AgroMart API is running"}
