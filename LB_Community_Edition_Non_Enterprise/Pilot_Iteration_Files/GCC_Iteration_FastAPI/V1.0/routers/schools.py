import json
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from sqlalchemy.sql import text  # Add this import
from models.models import SchoolsInDB
from schemas.schemas import SchoolsInDBCreate, SchoolsInDBResponse
from databases.databases import get_db
import json  

router = APIRouter()

@router.post("/schools/", response_model=SchoolsInDBResponse)
def create_school(school: SchoolsInDBCreate, db: Session = Depends(get_db)):
    try:
        # Create a new School instance
        new_school = SchoolsInDB(
            SchoolCode=school.SchoolCode,
            SchoolName=school.SchoolName,
            Address=school.Address,
            City=school.City,
            State=school.State,
            ZipCode=school.ZipCode,
            MetaData=json.dumps(school.MetaData.dict()) if school.MetaData else None
        )
        
        # Add the new School instance to the session
        db.add(new_school)
        
        # Commit the transaction
        db.commit()
        
        # Refresh to get the new ID
        db.refresh(new_school)
        
        # Deserialize MetaData from JSON string
        response_meta_data = None
        if new_school.MetaData:
            try:
                response_meta_data = json.loads(new_school.MetaData)
            except json.JSONDecodeError as e:
                print(f"Error decoding MetaData: {e}")
                raise HTTPException(status_code=500, detail="Failed to decode MetaData.")
        
        # Construct the response data
        response_school = SchoolsInDBResponse(
            ID=new_school.ID,
            SchoolCode=new_school.SchoolCode,
            SchoolName=new_school.SchoolName,
            Address=new_school.Address,
            City=new_school.City,
            State=new_school.State,
            ZipCode=new_school.ZipCode,
            MetaData=response_meta_data
        )

        return response_school
    except Exception as e:
        db.rollback()
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

        
@router.get("/schools/{school_id}", response_model=SchoolsInDBResponse)
def read_school(school_id: int, db: Session = Depends(get_db)):
    school = db.query(SchoolsInDB).filter(SchoolsInDB.ID == school_id).first()
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    
    # Deserialize MetaData from JSON string
    response_meta_data = None
    if school.MetaData:
        try:
            response_meta_data = json.loads(school.MetaData)
        except json.JSONDecodeError as e:
            print(f"Error decoding MetaData: {e}")
            raise HTTPException(status_code=500, detail="Failed to decode MetaData.")
    
    # Construct the response data
    response_school = SchoolsInDBResponse(
        ID=school.ID,
        SchoolCode=school.SchoolCode,
        SchoolName=school.SchoolName,
        Address=school.Address,
        City=school.City,
        State=school.State,
        ZipCode=school.ZipCode,
        GradeLevels=school.GradeLevels,
        MetaData=response_meta_data
    )

    return response_school


# Update a school
@router.put("/schools/{school_id}", response_model=SchoolsInDBResponse)
def update_school(school_id: int, school: SchoolsInDBCreate, db: Session = Depends(get_db)):
    existing_school = db.query(SchoolsInDB).filter(SchoolsInDB.ID == school_id).first()
    if not existing_school:
        raise HTTPException(status_code=404, detail="School not found")
    
    try:
        existing_school.SchoolCode = school.SchoolCode
        existing_school.SchoolName = school.SchoolName
        existing_school.Address = school.Address
        existing_school.City = school.City
        existing_school.State = school.State
        existing_school.ZipCode = school.ZipCode
        existing_school.GradeLevels = school.GradeLevels
        existing_school.MetaData = school.MetaData.model_dump() if school.MetaData else None

        db.commit()
        db.refresh(existing_school)

        return existing_school
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")




