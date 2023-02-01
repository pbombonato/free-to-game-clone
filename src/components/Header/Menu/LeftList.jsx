import React from "react";

import MenuItem from "./MenuItem";
import OtherSites from "./OtherSites";

function LeftList(props) {
    const freeGamesCategories = [
        'MMORPG', 'Shooter','MOBA', 'Anime','Battle Royale',
        'Strategy','Fantasy','Sci-Fi','Card Games','Racing',
        'Fighting','Social','Sports'
    ]

    const browserGamesCategories = [
        'MMORPG', 'Shooter', 'Anime',
        'Strategy','Fantasy','Sci-Fi',
        'Racing','Social','Sports'
    ].map(category=> 'Browser '+ category)

    

    return (
        <ul className="navbar-nav mr-auto" id="menu-left">
                <MenuItem 
                    text="Free Games"
                    itemId="01" 
                    dropdownItems={freeGamesCategories}
                    baseUrl="/games"
                    lastItem="Free-To-Play Games" />

                <MenuItem 
                    text="Browser Games" 
                    itemId="02" 
                    dropdownItems={browserGamesCategories}
                    baseUrl="/browser"
                    lastItem="Browser Games" />
                
                <MenuItem
                    text="Special Offers "
                    itemId="03" 
                    baseUrl="/giveaways"
                    notification="1" />
                
                <MenuItem
                    text="Top 2023"
                    itemId="04" 
                    baseUrl="/top" />

                <OtherSites />
            </ul>
    )
}

export default LeftList