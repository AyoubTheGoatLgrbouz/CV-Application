import { useState } from 'react'
import './styles.css'
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

function GeneralInfo() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setNumber] = useState("")
  const [isActive, setActive] = useState(false)

  const handleEdit = (e) => {
    setActive(false)
  }
  
const handleSubmit = (e) => {
    e.preventDefault()
    setActive(true)
}

  if (isActive){
    return (
      <div className='formText'>
        <h2>Personal information:</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone number: {phoneNumber}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  return (
    <form>
      <h2>Personal information:</h2>
      <label htmlFor="name">Enter a name</label>
      <input type="text" key="name" value={name} onChange={(e) => setName(e.target.value)}/>

      <label htmlFor="email">Enter a email</label>
      <input type="email" key="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="number">Enter a phone number</label>
      <input type="number" key="number" value={phoneNumber} onChange={(e) => setNumber(e.target.value)}/>

      <div className='buttons'>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}

function EducationExperience() {

  const [schoolName,setSchoolName] = useState("")
  const [titleOfStudy,setTitleOfStudy] = useState("")
  const [dateOfStudy,setdateOfStudy] = useState("")
  const [isActive, setActive] = useState(false)

  const handleEdit = (e) => {
    setActive(false)
  }
  
const handleSubmit = (e) => {
    e.preventDefault()
    setActive(true)
}

  if (isActive){
    return (
      <div className='formText'>
        <h2>Education:</h2>
        <p>School name: {schoolName}</p>
        <p>Title of study: {titleOfStudy}</p>
        <p>Date of Study: {dateOfStudy}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  return (
    <form>
      <h2>Education:</h2>
      <label htmlFor="schoolName">Enter a school name</label>
      <input type="text" key="schoolName" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>

      <label htmlFor="titleOfS">Enter your degree title</label>
      <input type="text" key="titleOfS" value={titleOfStudy}onChange={(e) => setTitleOfStudy(e.target.value)} />

      <label htmlFor="date">Enter a date of study</label>
      <input type="date" key="date" value={dateOfStudy} onChange={(e) => setdateOfStudy(e.target.value)} />

      <div className='buttons'>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}


function PracticalExperience() {
  const [companyName,setCompanyName] = useState("")
  const [title,setTitle] = useState("")
  const [responsibilities,setResponsibilities] = useState("")
  const [dateFromTill,setDateFromTill] = useState("")
  const [isActive, setActive] = useState(false)

  const handleEdit = (e) => {
    setActive(false)
  }
  
const handleSubmit = (e) => {
    e.preventDefault()
    setActive(true)
}
  if (isActive){
    return (
      <div className='formText'>
        <h2>Work Experience:</h2>
        <p>Company name: {companyName}</p>
        <p>Title of Job: {title}</p>
        <p>Responsibilities: {responsibilities}</p>
        <p>Duration: {dateFromTill}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }


  return (
    <form >
      <h2>Work Experience:</h2>
      <label htmlFor="companyName">Enter a company name</label>
      <input type="text" key="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

      <label htmlFor="title">Enter your position title</label>
      <input type="text" key="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="responsibilities">Main responsibilities of your jobs</label>
      <textarea type="text" key="responsibilities" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)}/>

      <label htmlFor="dateFromTill">Duration of your job</label>
      <input type="date" key="dateFromTill" value={dateFromTill} onChange={(e) => setDateFromTill(e.target.value)}/>

      <div className='buttons'>
        <button onClick={handleSubmit}>Submit</button>
      </div>

    </form>
  )
}

function Form(){
  const exportPDF = ()=>{
    const element = document.getElementById("CV")
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF()
      pdf.addImage(imgData, "PNG", 10,10)
      pdf.save("cv.pdf")
    })
  }

  return(
    <div id='CV'>
      <GeneralInfo/>
      <EducationExperience/>
      <PracticalExperience/>
      <button className='exportbtn' onClick={exportPDF}>Export PDF</button>
    </div>
  )
}

export {Form}