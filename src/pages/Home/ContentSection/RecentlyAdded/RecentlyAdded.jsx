import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import axios from "axios";

function RecentlyAdded(props) {
    const [recentlyAddedGames, setRecentlyAddedGames] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {'sort-by': 'release-date'},
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        axios
            .request(options)
            .then(resp => resp.data)
            .then(games => games.filter((game, index) => index < 7))
            .then(filteredGames => {
                setRecentlyAddedGames(
                    filteredGames.map(game => {
                        return {
                            title: game.title,
                            thumbnail: game.thumbnail,
                            genre: game.genre,
                            description: game['short_description'],
                            platform: game.platform,
                            get link() { return `/${game.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'-')}`}
                        }
                    })
                )
            })
    }, [])

    return (
        <div className="col-md-8">
            <h2 className="h3">Recently Added</h2>
            {
                recentlyAddedGames.length > 0
                &&
                recentlyAddedGames.map((game,index) => (
                    <GameCard key={index} {...game} />
                ))
            }
            
            <span className="text-center">
                <a href='/games' className="btn btn-outline-secondary py-2 pt-1 float-right">
                    More Games <i className="fas fa-angle-right"></i>
                </a>
            </span>
        </div>
    )
}

export default RecentlyAdded