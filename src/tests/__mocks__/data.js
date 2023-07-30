const dataText =
  '{"location":{"name":"Cairo","region":"Al Qahirah","country":"Egypt","lat":30.05,"lon":31.25,"tz_id":"Africa/Cairo","localtime_epoch":1690736762,"localtime":"2023-07-30 20:06"},"current":{"last_updated_epoch":1690736400,"last_updated":"2023-07-30 20:00","temp_c":31.1,"temp_f":88,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":17.9,"wind_kph":28.8,"wind_degree":334,"wind_dir":"NNW","pressure_mb":1006,"pressure_in":29.69,"precip_mm":0,"precip_in":0,"humidity":39,"cloud":0,"feelslike_c":31.4,"feelslike_f":88.5,"vis_km":10,"vis_miles":6,"uv":1,"gust_mph":21.5,"gust_kph":34.6,"air_quality":{"co":198.6,"no2":5.4,"o3":103,"so2":15.5,"pm2_5":7.9,"pm10":15.7,"us-epa-index":1,"gb-defra-index":1}},"forecast":{"forecastday":[{"date":"2023-07-30","date_epoch":1690675200,"day":{"maxtemp_c":41,"maxtemp_f":105.8,"mintemp_c":24.8,"mintemp_f":76.6,"avgtemp_c":31.8,"avgtemp_f":89.2,"maxwind_mph":20.6,"maxwind_kph":33.1,"totalprecip_mm":0,"totalprecip_in":0,"totalsnow_cm":0,"avgvis_km":10,"avgvis_miles":6,"avghumidity":40,"daily_will_it_rain":0,"daily_chance_of_rain":0,"daily_will_it_snow":0,"daily_chance_of_snow":0,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"uv":8,"air_quality":{"co":212.62800000000004,"no2":5.72,"o3":94.38799999999999,"so2":11.711999999999998,"pm2_5":11.672,"pm10":25.175999999999995,"us-epa-index":1,"gb-defra-index":1}},"astro":{"sunrise":"05:13 AM","sunset":"06:50 PM","moonrise":"05:07 PM","moonset":"02:04 AM","moon_phase":"Waxing Gibbous","moon_illumination":"89","is_moon_up":1,"is_sun_up":0},"hour":[{"time_epoch":1690664400,"time":"2023-07-30 00:00","temp_c":26.4,"temp_f":79.5,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":11.4,"wind_kph":18.4,"wind_degree":335,"wind_dir":"NNW","pressure_mb":1008,"pressure_in":29.78,"precip_mm":0,"precip_in":0,"humidity":52,"cloud":0,"feelslike_c":27.1,"feelslike_f":80.8,"windchill_c":26.4,"windchill_f":79.5,"heatindex_c":27.1,"heatindex_f":80.8,"dewpoint_c":15.7,"dewpoint_f":60.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":14.8,"gust_kph":23.8,"uv":1,"air_quality":{"co":220.3,"no2":9,"o3":82.3,"so2":18.4,"pm2_5":8.8,"pm10":19,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690668000,"time":"2023-07-30 01:00","temp_c":26,"temp_f":78.8,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":10.3,"wind_kph":16.6,"wind_degree":336,"wind_dir":"NNW","pressure_mb":1008,"pressure_in":29.76,"precip_mm":0,"precip_in":0,"humidity":55,"cloud":0,"feelslike_c":26.9,"feelslike_f":80.4,"windchill_c":26,"windchill_f":78.8,"heatindex_c":26.9,"heatindex_f":80.4,"dewpoint_c":16.2,"dewpoint_f":61.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":13.6,"gust_kph":22,"uv":1,"air_quality":{"co":223.6,"no2":9.2,"o3":75.1,"so2":18.6,"pm2_5":9.4,"pm10":20.8,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690671600,"time":"2023-07-30 02:00","temp_c":25.6,"temp_f":78.1,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":9.2,"wind_kph":14.8,"wind_degree":337,"wind_dir":"NNW","pressure_mb":1008,"pressure_in":29.75,"precip_mm":0,"precip_in":0,"humidity":56,"cloud":0,"feelslike_c":26.6,"feelslike_f":79.9,"windchill_c":25.6,"windchill_f":78.1,"heatindex_c":26.6,"heatindex_f":79.9,"dewpoint_c":16.1,"dewpoint_f":61,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":12.5,"gust_kph":20.2,"uv":1,"air_quality":{"co":227,"no2":8.9,"o3":70.8,"so2":17.2,"pm2_5":10.4,"pm10":22.9,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690675200,"time":"2023-07-30 03:00","temp_c":25.2,"temp_f":77.4,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":8.5,"wind_kph":13.7,"wind_degree":341,"wind_dir":"NNW","pressure_mb":1008,"pressure_in":29.75,"precip_mm":0,"precip_in":0,"humidity":58,"cloud":0,"feelslike_c":26.3,"feelslike_f":79.3,"windchill_c":25.2,"windchill_f":77.4,"heatindex_c":26.3,"heatindex_f":79.3,"dewpoint_c":16.3,"dewpoint_f":61.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.9,"gust_kph":19.1,"uv":1,"air_quality":{"co":230.3,"no2":8.4,"o3":68.7,"so2":14.8,"pm2_5":11.5,"pm10":24.9,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690678800,"time":"2023-07-30 04:00","temp_c":25,"temp_f":77,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":8.3,"wind_kph":13.3,"wind_degree":341,"wind_dir":"NNW","pressure_mb":1007,"pressure_in":29.75,"precip_mm":0,"precip_in":0,"humidity":61,"cloud":0,"feelslike_c":26.2,"feelslike_f":79.2,"windchill_c":25,"windchill_f":77,"heatindex_c":26.2,"heatindex_f":79.2,"dewpoint_c":16.9,"dewpoint_f":62.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.6,"gust_kph":18.7,"uv":1,"air_quality":{"co":233.7,"no2":7.8,"o3":67.2,"so2":11.7,"pm2_5":12.6,"pm10":26.9,"us-epa-index":1,"gb-defra-index":2}},{"time_epoch":1690682400,"time":"2023-07-30 05:00","temp_c":24.8,"temp_f":76.6,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":8.1,"wind_kph":13,"wind_degree":338,"wind_dir":"NNW","pressure_mb":1007,"pressure_in":29.74,"precip_mm":0,"precip_in":0,"humidity":64,"cloud":0,"feelslike_c":26.2,"feelslike_f":79.2,"windchill_c":24.8,"windchill_f":76.6,"heatindex_c":26.2,"heatindex_f":79.2,"dewpoint_c":17.4,"dewpoint_f":63.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.2,"gust_kph":18,"uv":1,"air_quality":{"co":237,"no2":7.5,"o3":66.5,"so2":8.6,"pm2_5":13.6,"pm10":29.4,"us-epa-index":1,"gb-defra-index":2}},{"time_epoch":1690686000,"time":"2023-07-30 06:00","temp_c":25,"temp_f":77,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.9,"wind_kph":11.2,"wind_degree":333,"wind_dir":"NNW","pressure_mb":1007,"pressure_in":29.75,"precip_mm":0,"precip_in":0,"humidity":63,"cloud":0,"feelslike_c":26.3,"feelslike_f":79.3,"windchill_c":25,"windchill_f":77,"heatindex_c":26.3,"heatindex_f":79.3,"dewpoint_c":17.5,"dewpoint_f":63.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":9.2,"gust_kph":14.8,"uv":7,"air_quality":{"co":237,"no2":7.8,"o3":63.7,"so2":6.6,"pm2_5":14.3,"pm10":32.3,"us-epa-index":1,"gb-defra-index":2}},{"time_epoch":1690689600,"time":"2023-07-30 07:00","temp_c":26.1,"temp_f":79,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":7.2,"wind_kph":11.5,"wind_degree":333,"wind_dir":"NNW","pressure_mb":1008,"pressure_in":29.75,"precip_mm":0,"precip_in":0,"humidity":59,"cloud":0,"feelslike_c":27.2,"feelslike_f":81,"windchill_c":26.1,"windchill_f":79,"heatindex_c":27.2,"heatindex_f":81,"dewpoint_c":17.4,"dewpoint_f":63.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":8.5,"gust_kph":13.7,"uv":7,"air_quality":{"co":237,"no2":8.7,"o3":61.5,"so2":5.8,"pm2_5":14.6,"pm10":35.3,"us-epa-index":1,"gb-defra-index":2}},{"time_epoch":1690693200,"time":"2023-07-30 08:00","temp_c":27.8,"temp_f":82,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":8.3,"wind_kph":13.3,"wind_degree":332,"wind_dir":"NNW","pressure_mb":1008,"pressure_in":29.76,"precip_mm":0,"precip_in":0,"humidity":50,"cloud":0,"feelslike_c":28.5,"feelslike_f":83.3,"windchill_c":27.8,"windchill_f":82,"heatindex_c":28.5,"heatindex_f":83.3,"dewpoint_c":16.5,"dewpoint_f":61.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":9.6,"gust_kph":15.5,"uv":7,"air_quality":{"co":230.3,"no2":8.2,"o3":70.1,"so2":6.3,"pm2_5":14.6,"pm10":37.7,"us-epa-index":1,"gb-defra-index":2}},{"time_epoch":1690696800,"time":"2023-07-30 09:00","temp_c":30,"temp_f":86,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":9.2,"wind_kph":14.8,"wind_degree":333,"wind_dir":"NNW","pressure_mb":1007,"pressure_in":29.75,"precip_mm":0,"precip_in":0,"humidity":39,"cloud":0,"feelslike_c":29.9,"feelslike_f":85.8,"windchill_c":30,"windchill_f":86,"heatindex_c":29.9,"heatindex_f":85.8,"dewpoint_c":14.3,"dewpoint_f":57.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":10.5,"gust_kph":16.9,"uv":8,"air_quality":{"co":233.7,"no2":3.1,"o3":100.1,"so2":8.8,"pm2_5":18.5,"pm10":41.4,"us-epa-index":2,"gb-defra-index":2}},{"time_epoch":1690700400,"time":"2023-07-30 10:00","temp_c":32.4,"temp_f":90.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":9.6,"wind_kph":15.5,"wind_degree":325,"wind_dir":"NW","pressure_mb":1007,"pressure_in":29.73,"precip_mm":0,"precip_in":0,"humidity":30,"cloud":0,"feelslike_c":31.8,"feelslike_f":89.2,"windchill_c":32.4,"windchill_f":90.3,"heatindex_c":31.8,"heatindex_f":89.2,"dewpoint_c":12.8,"dewpoint_f":55,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.2,"gust_kph":18,"uv":8,"air_quality":{"co":230.3,"no2":2.2,"o3":115.9,"so2":10,"pm2_5":17.7,"pm10":39.3,"us-epa-index":2,"gb-defra-index":2}},{"time_epoch":1690704000,"time":"2023-07-30 11:00","temp_c":37.1,"temp_f":98.8,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":10.1,"wind_kph":16.2,"wind_degree":324,"wind_dir":"NW","pressure_mb":1006,"pressure_in":29.72,"precip_mm":0,"precip_in":0,"humidity":25,"cloud":0,"feelslike_c":37,"feelslike_f":98.6,"windchill_c":37.1,"windchill_f":98.8,"heatindex_c":37,"heatindex_f":98.6,"dewpoint_c":13.5,"dewpoint_f":56.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.6,"gust_kph":18.7,"uv":9,"air_quality":{"co":223.6,"no2":1.8,"o3":124.5,"so2":10.5,"pm2_5":16.5,"pm10":38.2,"us-epa-index":2,"gb-defra-index":2}},{"time_epoch":1690707600,"time":"2023-07-30 12:00","temp_c":38.7,"temp_f":101.7,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":9.8,"wind_kph":15.8,"wind_degree":314,"wind_dir":"NW","pressure_mb":1006,"pressure_in":29.7,"precip_mm":0,"precip_in":0,"humidity":22,"cloud":0,"feelslike_c":38.7,"feelslike_f":101.7,"windchill_c":38.7,"windchill_f":101.7,"heatindex_c":38.7,"heatindex_f":101.7,"dewpoint_c":13.3,"dewpoint_f":55.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.4,"gust_kph":18.4,"uv":9,"air_quality":{"co":210.3,"no2":1.4,"o3":120.2,"so2":7.8,"pm2_5":12.3,"pm10":28.6,"us-epa-index":1,"gb-defra-index":2}},{"time_epoch":1690711200,"time":"2023-07-30 13:00","temp_c":40.1,"temp_f":104.2,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":9.8,"wind_kph":15.8,"wind_degree":311,"wind_dir":"NW","pressure_mb":1005,"pressure_in":29.67,"precip_mm":0,"precip_in":0,"humidity":20,"cloud":0,"feelslike_c":40.1,"feelslike_f":104.2,"windchill_c":40.1,"windchill_f":104.2,"heatindex_c":40.1,"heatindex_f":104.2,"dewpoint_c":12.7,"dewpoint_f":54.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.4,"gust_kph":18.4,"uv":10,"air_quality":{"co":203.6,"no2":1.3,"o3":121.6,"so2":7,"pm2_5":10.4,"pm10":22.4,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690714800,"time":"2023-07-30 14:00","temp_c":41.3,"temp_f":106.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":10.3,"wind_kph":16.6,"wind_degree":308,"wind_dir":"NW","pressure_mb":1004,"pressure_in":29.64,"precip_mm":0,"precip_in":0,"humidity":18,"cloud":2,"feelslike_c":41.9,"feelslike_f":107.4,"windchill_c":41.3,"windchill_f":106.3,"heatindex_c":41.9,"heatindex_f":107.4,"dewpoint_c":11.8,"dewpoint_f":53.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":11.9,"gust_kph":19.1,"uv":10,"air_quality":{"co":203.6,"no2":1.4,"o3":131.6,"so2":8.6,"pm2_5":11,"pm10":20.2,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690718400,"time":"2023-07-30 15:00","temp_c":40.8,"temp_f":105.4,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":13.2,"wind_kph":21.2,"wind_degree":304,"wind_dir":"NW","pressure_mb":1003,"pressure_in":29.62,"precip_mm":0,"precip_in":0,"humidity":16,"cloud":0,"feelslike_c":41.1,"feelslike_f":106,"windchill_c":40.8,"windchill_f":105.4,"heatindex_c":41.1,"heatindex_f":106,"dewpoint_c":10.1,"dewpoint_f":50.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":15.2,"gust_kph":24.5,"uv":10,"air_quality":{"co":200.3,"no2":1.6,"o3":140.2,"so2":10.4,"pm2_5":11.6,"pm10":19.4,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690722000,"time":"2023-07-30 16:00","temp_c":39.4,"temp_f":102.9,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":16.8,"wind_kph":27,"wind_degree":307,"wind_dir":"NW","pressure_mb":1003,"pressure_in":29.61,"precip_mm":0,"precip_in":0,"humidity":16,"cloud":0,"feelslike_c":39,"feelslike_f":102.2,"windchill_c":39.4,"windchill_f":102.9,"heatindex_c":39,"heatindex_f":102.2,"dewpoint_c":9,"dewpoint_f":48.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":19.2,"gust_kph":31,"uv":9,"air_quality":{"co":196.9,"no2":1.8,"o3":143.1,"so2":11.4,"pm2_5":11.5,"pm10":19.2,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690725600,"time":"2023-07-30 17:00","temp_c":41,"temp_f":105.8,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":19.9,"wind_kph":32,"wind_degree":313,"wind_dir":"NW","pressure_mb":1003,"pressure_in":29.62,"precip_mm":0,"precip_in":0,"humidity":18,"cloud":1,"feelslike_c":41.4,"feelslike_f":106.5,"windchill_c":41,"windchill_f":105.8,"heatindex_c":41.4,"heatindex_f":106.5,"dewpoint_c":11.6,"dewpoint_f":52.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":22.8,"gust_kph":36.7,"uv":10,"air_quality":{"co":196.9,"no2":2.3,"o3":141.6,"so2":12,"pm2_5":11,"pm10":18.5,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690729200,"time":"2023-07-30 18:00","temp_c":38.4,"temp_f":101.1,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":20.4,"wind_kph":32.8,"wind_degree":320,"wind_dir":"NW","pressure_mb":1004,"pressure_in":29.63,"precip_mm":0,"precip_in":0,"humidity":21,"cloud":2,"feelslike_c":38,"feelslike_f":100.4,"windchill_c":38.4,"windchill_f":101.1,"heatindex_c":38,"heatindex_f":100.4,"dewpoint_c":12.6,"dewpoint_f":54.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":23.5,"gust_kph":37.8,"uv":9,"air_quality":{"co":196.9,"no2":3.5,"o3":133,"so2":13.4,"pm2_5":10,"pm10":17.1,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690732800,"time":"2023-07-30 19:00","temp_c":34.6,"temp_f":94.3,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":20.1,"wind_kph":32.4,"wind_degree":326,"wind_dir":"NNW","pressure_mb":1004,"pressure_in":29.66,"precip_mm":0,"precip_in":0,"humidity":28,"cloud":0,"feelslike_c":34.3,"feelslike_f":93.7,"windchill_c":34.6,"windchill_f":94.3,"heatindex_c":34.3,"heatindex_f":93.7,"dewpoint_c":13.5,"dewpoint_f":56.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":23,"gust_kph":37.1,"uv":1,"air_quality":{"co":196.9,"no2":4.8,"o3":118.7,"so2":15.1,"pm2_5":9,"pm10":16.5,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690736400,"time":"2023-07-30 20:00","temp_c":31.1,"temp_f":88,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":17.9,"wind_kph":28.8,"wind_degree":334,"wind_dir":"NNW","pressure_mb":1006,"pressure_in":29.69,"precip_mm":0,"precip_in":0,"humidity":39,"cloud":0,"feelslike_c":31.4,"feelslike_f":88.5,"windchill_c":31.1,"windchill_f":88,"heatindex_c":31.4,"heatindex_f":88.5,"dewpoint_c":15.3,"dewpoint_f":59.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":21.5,"gust_kph":34.6,"uv":1,"air_quality":{"co":198.6,"no2":5.4,"o3":103,"so2":15.5,"pm2_5":7.9,"pm10":15.7,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690740000,"time":"2023-07-30 21:00","temp_c":29.4,"temp_f":84.9,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":15,"wind_kph":24.1,"wind_degree":340,"wind_dir":"NNW","pressure_mb":1006,"pressure_in":29.72,"precip_mm":0,"precip_in":0,"humidity":46,"cloud":0,"feelslike_c":30.1,"feelslike_f":86.2,"windchill_c":29.4,"windchill_f":84.9,"heatindex_c":30.1,"heatindex_f":86.2,"dewpoint_c":16.6,"dewpoint_f":61.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":18.1,"gust_kph":29.2,"uv":1,"air_quality":{"co":201.9,"no2":6.6,"o3":90.8,"so2":16.7,"pm2_5":7.6,"pm10":15.9,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690743600,"time":"2023-07-30 22:00","temp_c":28.5,"temp_f":83.3,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":13,"wind_kph":20.9,"wind_degree":343,"wind_dir":"NNW","pressure_mb":1007,"pressure_in":29.72,"precip_mm":0,"precip_in":0,"humidity":49,"cloud":0,"feelslike_c":29.2,"feelslike_f":84.6,"windchill_c":28.5,"windchill_f":83.3,"heatindex_c":29.2,"heatindex_f":84.6,"dewpoint_c":16.6,"dewpoint_f":61.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":15.7,"gust_kph":25.2,"uv":1,"air_quality":{"co":203.6,"no2":7.9,"o3":80.1,"so2":17.4,"pm2_5":7.6,"pm10":16.7,"us-epa-index":1,"gb-defra-index":1}},{"time_epoch":1690747200,"time":"2023-07-30 23:00","temp_c":27.6,"temp_f":81.7,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":11.6,"wind_kph":18.7,"wind_degree":346,"wind_dir":"NNW","pressure_mb":1006,"pressure_in":29.71,"precip_mm":0,"precip_in":0,"humidity":51,"cloud":0,"feelslike_c":28.4,"feelslike_f":83.1,"windchill_c":27.6,"windchill_f":81.7,"heatindex_c":28.4,"heatindex_f":83.1,"dewpoint_c":16.7,"dewpoint_f":62.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10,"vis_miles":6,"gust_mph":14.5,"gust_kph":23.4,"uv":1,"air_quality":{"co":207,"no2":8.7,"o3":73,"so2":17.2,"pm2_5":7.7,"pm10":17.4,"us-epa-index":1,"gb-defra-index":1}}]}]}}';

const data = JSON.parse(dataText);

export default data;
