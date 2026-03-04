from sqlalchemy import Column, Integer, String, DateTime, Text
from datetime import datetime
from .database import Base

class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False)
    project_type = Column(String(50), nullable=False)
    budget = Column(String(50), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Enquiry(id={self.id}, name='{self.name}', email='{self.email}')>"
