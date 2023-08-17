import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom';


const AddVideogame = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdVideogame: '',
        redirectToProfile: false,
        formData: ''
    })

    const { user, token } = isAuthenticated()

    const {
        name,
        description,
        price,
        categories,
        category,
        quantity,
        photo,
        loading,
        error,
        createdVideogame,
        redirectToProfile,
        formData
    } = values//37:24 pt.4

    return (
        <>
            <Navigation></Navigation>
            <h2>Add Videogame</h2>
        </>
    )
}

export default AddVideogame