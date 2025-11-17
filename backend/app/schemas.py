from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class EnquiryBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    project_type: str
    budget: Optional[str] = None
    message: str

class EnquiryCreate(EnquiryBase):
    pass

class EnquiryResponse(EnquiryBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
