from fastapi import FastAPI
from contextlib import asynccontextmanager
from src.db.main import init_db
from fastapi import APIRouter, HTTPException, Depends
from typing import List
from sqlmodel import Session, select
from src.db.session import get_session 
from src.db.models import (
    AcademicTotalData,
    AcademicChangeData,
    AcademicDenominator,
    AcademicNumerator,
    AcademicPerformanceLevelorColor,
    CCPerformanceLevelorColorData,
    class_section,
    InterventionCategories,
    InterventionSession,
    PeopleInDB,
    CCReadinessStatusData,
    CCReadinessNumerator,
    CCReadinessDenominatorData,
    CCReadinessChangeData,
    CCReadinessTotalData,
    RoleEnum,
    StudentSectionAssociation,
    SchoolsInDB,
    StudentInDB,
    SectionsInDB,
    TeacherInDB,
    Vendor
)
from src.db.enums import (
    RoleEnum,
    LocationEnum,
    CCIEnum,
    HigherGroupEnum,
    SubgroupEnum,
    GenderSubgroupEnum,
    EconomicStatusEnum,
    ColorEnum
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    #things to do before starting the app
    print("Starting app")
    await init_db()
    yield
    #things to do before stopping the app and after the server has stopped
    print("Stopping app")

app = FastAPI(
    title="LB_V1.2",
    version="1.0.0", 
    description="This is a simple API to test the FastAPI framework",
    lifespan= lifespan
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

# Get teacher info based on intervention session in an Intervention Session
@app.get("/intervention_session/{intervention_session_id}/teachers", response_model=List[TeacherInDB])
async def get_teachers_in_intervention_session(intervention_session_id: int, session: Session = Depends(get_session)):
    stmt = select(TeacherInDB).join(InterventionSession).where(InterventionSession.InterventionSessionID == intervention_session_id)
    teachers = session.exec(stmt).all()
    return teachers


@app.get("/intervention_sessions/teacher_ids", response_model=List[int])
async def get_all_teacher_ids_in_intervention_sessions(session: Session = Depends(get_session)):
    stmt = select(TeacherInDB.TeacherID).join(InterventionSession).distinct()
    teacher_ids = session.exec(stmt).all()
    return teacher_ids

@app.get("/intervention_sessions/teacher_emails", response_model=List[str])
async def get_all_teacher_emails_in_intervention_sessions(session: Session = Depends(get_session)):
    # Assuming TeacherInDB has a field named "Email"
    stmt = select(TeacherInDB.TeacherEmail).join(InterventionSession).distinct()
    teacher_emails = session.exec(stmt).all()
    return teacher_emails

@app.get("/intervention_sessions/session_ids", response_model=List[int])
async def get_all_session_ids(session: Session = Depends(get_session)):
    stmt = select(InterventionSession.InterventionSessionID).distinct()
    session_ids = session.exec(stmt).all()
    return session_ids