import React, {useState, useEffect} from "react";
import axios from 'axios'
import GameCard from "./GameCard";

function MostPlayed(props) {
    const [mostPlayedGames, setMostPlayedGames] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {'sort-by': 'popularity'},
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        axios
            .request(options)
            .then(resp => resp.data)
            .then(games => games.filter((game, index) => index < 4))
            .then(filteredGames => {
                setMostPlayedGames(filteredGames.map(game => {
                    return {
                        title: game.title,
                        thumbnail: game.thumbnail,
                        get link() { return `/${game.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'-')}`}
                    }
                }))
                
            })
    }, [])
    
    return (
        <div className="col-md-4">
            <h2 className="h3">Most Played Today</h2>
            { 
                mostPlayedGames.length > 0
                && 
                mostPlayedGames.map((game, index) => (
                    <GameCard key={index} {...game} />
                ))
            }
        </div>
    )
}

export default MostPlayed