export interface Coord {
   lat: number;
   lon: number;
}
export interface City {
  id: number;
      name: string;
      coord: Coord;
      country: string;
      population: number;
}
export interface Main {
  temp: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
}
export interface Weather {
               id: number;
               main: string;
               description: string;
               icon: string;
}
export interface Clouds {
  all: number;
}
export interface Wind {
  speed: number;
            deg: number;
}
export interface ForecastList {
   dt: number;
         main: Main;
         weather: Weather[];
         clouds: Clouds;
         wind: Wind;
         dt_txt: string;
      }
export interface Forecast {
  cod: string;
  cnt: number;
  message: number;
  list: ForecastList[];
  city: City;

}

export function generateMockForecast(): Forecast {
  return {
   'cod': '200',
   'message': 0.005,
   'cnt': 37,
   'list': [
     {
         'dt': 1523653200,
         'main': {
            'temp': 296.069,
            'temp_min': 296.069,
            'temp_max': 296.069,
            'pressure': 985.29,
            'sea_level': 1025.99,
            'grnd_level': 985.29,
            'humidity': 40,
            'temp_kf': 0
         },
         'weather': [
            {
               'id': 802,
               'main': 'Clouds',
               'description': 'scattered clouds',
               'icon': '03d'
            }
         ],
         'clouds': {
            'all': 44
         },
         'wind': {
            'speed': 4.67,
            'deg': 201.004
         },
         'dt_txt': '2018-04-13 21:00:00'
      }
     ],
   'city': {
      'id': 4298960,
      'name': 'London',
      'coord': {
         'lat': 37.129,
         'lon': -84.0833
      },
      'country': 'US',
      'population': 7993
   }
  };
}
