# RD Craddock & Daughter Construction Website

A modern, professional website for a construction company built with React, Tailwind CSS, and FastAPI.

## Features

- **Modern Design**: Responsive design built with Tailwind CSS
- **Full-Stack Solution**: React frontend with FastAPI backend
- **Contact Form**: Functional enquiry form with form validation
- **Database Integration**: SQLite database for storing enquiries
- **Multiple Pages**: Home, About, Services, Projects, and Contact pages
- **Professional Components**: Reusable Header, Footer, and Hero components

## Tech Stack

### Frontend
- **Vite**: Fast build tool and development server
- **React**: UI library for building interactive user interfaces
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter and Poppins font families

### Backend
- **FastAPI**: Modern Python web framework
- **SQLAlchemy**: SQL toolkit and ORM
- **Pydantic**: Data validation using Python type annotations
- **SQLite**: Lightweight database for storing enquiries
- **Uvicorn**: ASGI server

## Project Structure

```
RDC-Website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Hero.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── database.py
│   ├── requirements.txt
│   ├── run.py
│   └── .env
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Make sure the `.env` file exists with the following content:
   ```
   DATABASE_URL=sqlite:///./enquiries.db
   CORS_ORIGINS=http://localhost:5173,http://localhost:3000
   ```

5. Start the FastAPI server:
   ```bash
   python run.py
   ```

   Or using uvicorn directly:
   ```bash
   uvicorn app.main:app --reload
   ```

6. The backend API will be available at `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs`
   - Alternative API Documentation: `http://localhost:8000/redoc`

## Running Both Services

For development, you'll need to run both the frontend and backend servers simultaneously in separate terminal windows:

### Terminal 1 (Backend):
```bash
cd backend
source venv/bin/activate  # If using virtual environment
python run.py
```

### Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

## API Endpoints

### POST `/api/enquiries`
Create a new enquiry from the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "project_type": "commercial",
  "budget": "100k-250k",
  "message": "I'm interested in building a new office."
}
```

**Response:** `201 Created`

### GET `/api/enquiries`
Retrieve all enquiries (admin use).

**Response:** `200 OK` with array of enquiries

### GET `/api/enquiries/{id}`
Retrieve a specific enquiry by ID.

**Response:** `200 OK` with enquiry details

### DELETE `/api/enquiries/{id}`
Delete a specific enquiry.

**Response:** `204 No Content`

### GET `/health`
Health check endpoint.

**Response:** `200 OK`

## Database

The application uses SQLite by default for simplicity. The database file (`enquiries.db`) will be automatically created in the backend directory when you first start the server.

### Database Schema

**Enquiries Table:**
- `id`: Integer (Primary Key)
- `name`: String(100)
- `email`: String(100)
- `phone`: String(20)
- `project_type`: String(50)
- `budget`: String(50) (Optional)
- `message`: Text
- `created_at`: DateTime

### Switching to PostgreSQL (Production)

For production, you can switch to PostgreSQL:

1. Install psycopg2:
   ```bash
   pip install psycopg2-binary
   ```

2. Update the `.env` file:
   ```
   DATABASE_URL=postgresql://user:password@localhost/dbname
   ```

## Building for Production

### Frontend

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. The production-ready files will be in the `frontend/dist` directory.

### Backend

1. Set environment variables for production in `.env`:
   ```
   DATABASE_URL=your_production_database_url
   CORS_ORIGINS=https://yourdomain.com
   ```

2. Run with a production ASGI server:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
   ```

## Features to Implement (Future)

- [ ] Email notifications when new enquiries are submitted
- [ ] Admin dashboard to manage enquiries
- [ ] Image gallery for project showcase
- [ ] User authentication for admin features
- [ ] Integration with third-party CRM systems
- [ ] Newsletter subscription
- [ ] Blog/News section
- [ ] Client testimonials management

## Customization

### Colors

The color scheme can be customized in `frontend/tailwind.config.js`:

```javascript
construction: {
  orange: '#FF6B35',
  yellow: '#F7931E',
  gray: '#2C3E50',
  lightGray: '#ECF0F1',
}
```

### Content

Update the content in the respective page components:
- Company information: `frontend/src/pages/About.jsx`
- Services: `frontend/src/pages/Services.jsx`
- Projects: `frontend/src/pages/Projects.jsx`
- Contact details: `frontend/src/components/Footer.jsx` and `frontend/src/pages/Contact.jsx`

## License

This project is proprietary software created for RD Craddock & Daughter Construction.

## Support

For issues or questions, please contact the development team.
