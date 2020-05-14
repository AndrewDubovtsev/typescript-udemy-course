import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU';

type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[];
    status: 'OK' | 'ZERO_RESULTS' | 'REQUEST_DENIED';
}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // Send this to Google's API
    axios.get<GoogleGeocodingResponse>(`
        https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}
    `)
        .then(response => {
            // if (response.data.status !== 'OK') {
            //     throw new Error('Could not fetch location');
            // }
            console.log(response);
            //const coordinates = response.data.results[0].geometry.location;
            // Using Google Geocoding API requires adding a billing method
            // I didn't want to add it and I'm just using dummy coordinates
            const coordinates = {lat: 40.41, lng: -73.99};
            const map = new google.maps.Map(document.getElementById('map')!, {
                center: coordinates,
                zoom: 8
            });
            new google.maps.Marker({position: coordinates, map});
        })
        .catch(err => {
            console.log(err);
        });
}

form.addEventListener('submit', searchAddressHandler);
