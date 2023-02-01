import React, {useState, useEffect} from "react";
import axios from "axios";
import GameCard from "./GameCard";

function PersonalizedRecs(props) {
    const [recommendations, setRecommendations] = useState([])

    const gameIds = [475, 340, 457]

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
          
        axios
            .request(options)
            .then(resp => resp.data)
            .then(games => games.filter(game => gameIds.includes(game.id)))
            .then(filteredGames => {
                setRecommendations(
                    filteredGames.map(game => {
                        return {
                            title: game.title,
                            thumbnail: game.thumbnail,
                            get link() { return `/${game.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'-')}`}
                        }
                    })
                )
            })
    }, [])

    return (
        <React.Fragment>
            <h2>
                <i className="fas fa-robot mr-2 h3"></i>
                Personalized Recommendations
            </h2>
            <p className="a2">
                <i className="fas fa-question-circle mr-1"></i>
                Log In to view your personalized recommendations! Discover games you'll love.
            </p>
            <div className="row mb-4">
                {recommendations.map((game, index) => (
                    <GameCard key={index} {...game} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default PersonalizedRecs