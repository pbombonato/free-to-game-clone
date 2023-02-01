import React from 'react'
import PersonalizedRecs from './PersonalizedRecs'
import RecentlyAdded from './RecentlyAdded'
import MostPlayed from './MostPlayed'
import CommunityRecs from './CommunityRecs'
import AboutSection from './AboutSection/AboutSection'

function ContentSection(props) {
    return (
        <div className="content py-5">
            <div className="container">
                <PersonalizedRecs />
                <div className="row mb-4">
                    <RecentlyAdded />
                    <MostPlayed />
                </div>
                <CommunityRecs />
                <AboutSection />
            </div>
        </div>
    )
}

export default ContentSection