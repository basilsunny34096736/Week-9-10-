// Weather API Service for EFOLIO Task 10
const WEATHER_API_KEY = 'fc9646ceb1132d90794544f0fc185f81'; // Your provided API key
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export class WeatherService {
  constructor() {
    this.apiKey = WEATHER_API_KEY;
    this.baseUrl = WEATHER_BASE_URL;
  }

  // Get weather by coordinates (current location)
  async getCurrentLocationWeather(lat, lon) {
    try {
      const response = await fetch(
        `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: {
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          pressure: data.main.pressure,
          feelsLike: Math.round(data.main.feels_like)
        }
      };
    } catch (error) {
      console.error('Error fetching current location weather:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get weather by city name
  async getWeatherByCity(cityName) {
    try {
      const response = await fetch(
        `${this.baseUrl}/weather?q=${encodeURIComponent(cityName)}&appid=${this.apiKey}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data: {
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          pressure: data.main.pressure,
          feelsLike: Math.round(data.main.feels_like)
        }
      };
    } catch (error) {
      console.error('Error fetching weather by city:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get current location coordinates
  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Location obtained:', position.coords);
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error('Geolocation error details:', error);
          let errorMessage = 'Unable to get your location.';
          
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user. Please allow location access in your browser settings.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out. Please try again.';
              break;
            default:
              errorMessage = `Geolocation error: ${error.message}`;
              break;
          }
          
          reject(new Error(errorMessage));
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 300000
        }
      );
    });
  }

  // Get weather icon URL
  getWeatherIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}

export const weatherService = new WeatherService();
