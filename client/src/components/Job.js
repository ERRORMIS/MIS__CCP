import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo'

const Job = ({
  _id,
  title,
  owner,
  description,
  jobType,
  createdAt,
  status,
  startDate, 
  endDate,
  requirement,
}) => {

  
  const { setEditJob, deleteJob } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{owner.charAt(0)}</div>
        <div className='info'>
          <h5>{title}</h5>
          <p>{owner}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <div className='row'>
            <JobInfo icon={<FaLocationArrow />} text={description} label="Description" />
            <JobInfo icon={<FaCalendarAlt />} text={startDate} label="Start Date"/>
            <JobInfo icon={<FaCalendarAlt />} text={endDate} label="End Date"/>
            <JobInfo icon={<FaBriefcase />} text={requirement} label="Requirement"/>
            <div className={`status ${status}`}>{status}</div>
          </div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
