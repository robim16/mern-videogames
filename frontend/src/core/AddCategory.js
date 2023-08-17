import React, { useState } from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom';
import { isAuthenticated, createCategory } from './apiCore';



const AddCategory = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const {user, token} = isAuthenticated()

    const handleChange = (event) => {
        setError('')
        setName(event.target.value)
    }


    const clickSubmit = (event) => {
        event.preventDefault()
        setError('')
        setSuccess(false)

        createCategory(user._id, token, {name})
        .then(data => {
            if (data.error) {
                setError(true)
            }
            else{
                setError('')
                setSuccess(true)
            }
        })
    }

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">The category "{name}" was successfully created </h3>
        }
    }

    const showError = () => {
        return <h3 className="text-danger">"{name}" should be unique, try another one</h3>
    }


    const newCategoryFrom = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={name} required autoFocus/>
            </div>
            <button className="btn btn-outline-success">
                Create Category
            </button>
        </form>
    )

    const goBack = () => {
        <div className="mt-5">
            <Link to="/" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    }

    return (
        <>
            <Navigation/>
            <div className="mt-5 container">
                {showSuccess()}
                {showError()}
                {newCategoryFrom()}
                {goBack()}
            </div>
        </>
    )
}

export default AddCategory


