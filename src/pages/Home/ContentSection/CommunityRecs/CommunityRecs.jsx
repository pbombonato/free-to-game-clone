import React from "react";
import CommunityReview from "./CommunityReview";
import ExampleAvatar from '../../../../assets/images/avatars/default/default-small.png'

function CommunityRecs(props) {
    const games = [
        {
            title: 'Genshin Impact',
            get link() { return `/${this.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'-')}`},
            thumbnail: 'https://www.freetogame.com/g/475/thumbnail.jpg',
            username: 'reggert32',
            avatar: ExampleAvatar,
            review: "If you have been looking for a game like Breath of the Wild on pc, look no further. It is clear that they took a lot of inspiration from this game and made a fantastic game on pc. I can reccommend this game for everyone that likes open world exploration games. It's hard to believe that the game is completely free, because of the quality. Graphics are very good and the game is running very stable and has a very smooth framerate. Better than the recently released triple a games."
        },
        {
            title: 'Hyper Scape',
            get link() { return `/${this.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'-')}`},
            thumbnail: 'https://www.freetogame.com/g/470/thumbnail.jpg',
            username: 'engaji',
            avatar: ExampleAvatar,
            review: "Amazing play this game you will have very good dreams play and download!"
        },
    ]

    return (
        <React.Fragment>
            <h2 className="h3">Community Recommendations</h2>
            <div className="row mb-5">
                {games.map((game, index) => (
                    <CommunityReview key={index} {...game} />
                ))}
            </div>
        </React.Fragment>  
    )
}

export default CommunityRecs