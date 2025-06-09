import { useState } from 'react'
import './App.css'
// import { nav } from './constants'
import { MdDashboard } from "react-icons/md";
import { RiDiscussFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { completed, recommended, upcoming } from './constants';



function App() {

  return (

    <div className='grid-container'>

      <nav className='sidebar'>
        <div className='nav-cont'>
          <div class="nav-cont"><h2>GemAcademy.</h2>
          <a href="#" className="link"><MdDashboard />
          <div>Dashboard</div></a>
          <a href="#" className="link"><RiDiscussFill /><div>Discussion</div></a>
          <a href="#" className="link"><MdQuiz /><div>Quiz</div></a>
          <a href="#" className="link"><RiAccountCircle2Fill /><div>My Account</div></a>
          <a href="#" className="link"><IoMdSettings /><div>Setting</div></a>
          </div>
        </div>
      </nav>

      <main>

        <div className='upcoming'>
          <h2>Upcoming Task</h2>
          <div className='layout'>
            {upcoming.map((task)=>{
              return(
                <div className='upcoming-task-card' key={task.title}>
                  <div>
                    <h3>{task.title}</h3>
                    <span><p>Timeframe - {task.timeframe}</p></span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className='recommendation'>
           <h2>Recommmended Courses</h2>
          {recommended.map((course)=>{
            return(
              <div className='recommended-course-card' key={course.title}>
                <div className='img-cont'>
                  <img src={course.imgUrl} alt="course thumbnail" />
                </div>
                <div>
                  <h3>{course.title}</h3>
                  <span><p>{course.tutor}</p></span>•
                  <span><p> {course.totalHr}hr</p></span>
                </div>
              </div>
            )
          })}
        </div>

        <div className='completed'>
          <h2>Completed Courses</h2>
          {completed.map((course)=>{
            return(
              <div className='completed-course-card' key={course.title}>
                <div className='img-cont'>
                  <img src={course.imgUrl} alt="course thumbnail" />
                </div>
                <div>
                  <h3>{course.title}</h3>
                  <span><p>{course.tutor}</p></span>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    
    </div>
  )
}

export default App