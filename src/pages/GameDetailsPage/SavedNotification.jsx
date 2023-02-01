import React from "react";

function SavedNotification(props) {
    return (
        <div style={{position: 'fixed', minHeight:0, zIndex: 1000}}>
            <div className="toast saved" style={{position: 'relative', top: '20px', left: '20px'}}>
                <div className="toast-header">
                    <strong className="mr-auto">Saved to Library</strong>
                    <button type='button' className="ml-2 mb-1 close" aria-label="Close">
                        <span aria-hidden='true'>×</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SavedNotification