import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import Select from 'react-select';

const genderList = [
  { label: "Male", value: 'Male' },
  { label: "Female", value: 'Female' }
];


const Profile = () => {

  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='NIC'
            name='nic'
            value={''}
            handleChange={(e) => setLastName(e.target.value)}
          />

        <div>
            <div className='form-row'>
            <div> <label htmlFor={'Select'} className='form-label'>
                Gender
            </label></div>
            <div>
                <Select options={genderList} placeholder="Select"/>
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>

        {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Contact No'
              name='contact'
              value={''}
              handleChange={(e) => setLastName(e.target.value)}
            />
        )}

        {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Address'
              name='address'
              value={''}
              handleChange={(e) => setLastName(e.target.value)}
            />
        )}

      {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Department'
              name='department'
              value={''}
              handleChange={(e) => setLastName(e.target.value)}
            />
        )}

      {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Job Role'
              name='jobrole'
              value={''}
              handleChange={(e) => setLastName(e.target.value)}
            />
        )}

        {user.type === 'Alumni' && (
          <FormRow
              type='text'
              labelText='Contact No'
              name='contact'
              value={''}
              handleChange={(e) => setLastName(e.target.value)}
            />
        )}

        {user.type === 'Alumni' && (
          <FormRow
              type='text'
              labelText='Address'
              name='address'
              value={''}
              handleChange={(e) => setLastName(e.target.value)}
            />
        )}

          {user.type === 'Alumni' && (
                  <FormRow
                      type='text'
                      labelText='Company'
                      name='company'
                      value={''}
                      handleChange={(e) => setLastName(e.target.value)}
                    />

          )}

        {user.type === 'Alumni' && (
              <FormRow
                  type='text'
                  labelText='Job Title'
                  name='jobTitle'
                  value={''}
                  handleChange={(e) => setLastName(e.target.value)}
                />
        )}

        {user.type === 'Alumni' && (
            <FormRow
                type='text'
                labelText='Graduated Year'
                name='year'
                value={''}
                handleChange={(e) => setLastName(e.target.value)}
              />
        )}

        {user.type === 'Partner' && (
            <FormRow
                type='text'
                labelText='Location'
                name='location'
                value={''}
                handleChange={(e) => setLastName(e.target.value)}
              />
        )}

        <div>
            <div className='form-row'>
            <div> <label htmlFor={'Select'} className='form-label'>
                Profile Image
            </label></div>
            <div>
              <input type="file"  />
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>

          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
