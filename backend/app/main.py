from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import os
from dotenv import load_dotenv

from . import models, schemas
from .database import engine, get_db

load_dotenv()

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="RD Craddock & Daughter Construction API",
    description="API for handling construction project enquiries",
    version="1.0.0"
)

# Configure CORS
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to RD Craddock & Daughter Construction API",
        "version": "1.0.0"
    }

@app.post("/api/enquiries", response_model=schemas.EnquiryResponse, status_code=201)
def create_enquiry(
    enquiry: schemas.EnquiryCreate,
    db: Session = Depends(get_db)
):
    """
    Create a new enquiry from the contact form.
    """
    try:
        db_enquiry = models.Enquiry(
            name=enquiry.name,
            email=enquiry.email,
            phone=enquiry.phone,
            project_type=enquiry.project_type,
            budget=enquiry.budget,
            message=enquiry.message
        )
        db.add(db_enquiry)
        db.commit()
        db.refresh(db_enquiry)
        return db_enquiry
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error creating enquiry: {str(e)}")

@app.get("/api/enquiries", response_model=List[schemas.EnquiryResponse])
def get_enquiries(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """
    Retrieve all enquiries (for admin use).
    """
    enquiries = db.query(models.Enquiry).order_by(
        models.Enquiry.created_at.desc()
    ).offset(skip).limit(limit).all()
    return enquiries

@app.get("/api/enquiries/{enquiry_id}", response_model=schemas.EnquiryResponse)
def get_enquiry(
    enquiry_id: int,
    db: Session = Depends(get_db)
):
    """
    Retrieve a specific enquiry by ID.
    """
    enquiry = db.query(models.Enquiry).filter(
        models.Enquiry.id == enquiry_id
    ).first()
    if not enquiry:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return enquiry

@app.delete("/api/enquiries/{enquiry_id}", status_code=204)
def delete_enquiry(
    enquiry_id: int,
    db: Session = Depends(get_db)
):
    """
    Delete a specific enquiry by ID.
    """
    enquiry = db.query(models.Enquiry).filter(
        models.Enquiry.id == enquiry_id
    ).first()
    if not enquiry:
        raise HTTPException(status_code=404, detail="Enquiry not found")

    db.delete(enquiry)
    db.commit()
    return None

@app.get("/health")
def health_check():
    """
    Health check endpoint.
    """
    return {"status": "healthy"}
