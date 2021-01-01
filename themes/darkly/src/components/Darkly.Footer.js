import React from 'react'

function DarklyFooter({ platform, version }) {
    const styles = {
        footer: {
            position: 'fixed',
            background: '#303030',
            color: 'white',
            width: '100%',
            paddingTop: 13,
            textAlign: 'center',
            bottom: '0'
        }
    }

    return (
        <footer style={{ ...styles.footer }}>
            <p>
                Gampp is running on {version} {platform}
            </p>
        </footer>
    )
}

export default DarklyFooter;
