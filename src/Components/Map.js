import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
    return(
        <div className='googlemap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.582373874499!2d-79.92899228448637!3d43.239214987119276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84d1a2bb54bd%3A0xc29103dc95eeb1e0!2sWest%20Mountain%20Medical%20Centre!5e0!3m2!1sen!2sca!4v1679527591299!5m2!1sen!2sca" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map;