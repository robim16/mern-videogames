import React from 'react'
import Navigation from '../layout/Navigation'
import Card from './Card'

const Home = (req, res) => {

    const [videogame, setVideogame] = useState([]);
    const [error, setError] = useState(false);


    const loadVideoGames = () => {
        getVideogames().then(data => {
            if (data.error) {
                setError(data.error)
            }
            else{
                setVideogame(data)
                console.log(data)
            }
        })
    }

    useEffect(() => {
       loadVideoGames()
    });

    return(
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    {videogames.map((videogame, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Home