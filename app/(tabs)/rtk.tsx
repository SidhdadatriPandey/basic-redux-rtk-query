import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetWeatherByCityQuery } from '../../redux/weatherApi'
import { useAdsQuery } from '@/redux/pokimon'

const rtk = () => {
  const [city, setCity] = useState<string>('Indore')
  const [currentCity, setCurrentCity] = useState<string>('')
  const [skip, setSkip] = useState<boolean>(true)
  // const {data,isError,isSuccess,error} = useGetWeatherByCityQuery(currentCity); //if we don't want to skip api call
  const { data, isLoading, isSuccess, isError, error } = useGetWeatherByCityQuery(currentCity, { skip: skip })
  // console.log(JSON.stringify(data));
  const {data:adsData,error:adsError,isSuccess:adsIsSuccess,isError:adsIsError}=useAdsQuery(9)
  console.log('ads',adsData);

  useEffect(() => {
    if (adsIsSuccess) {
      // here we can do actions which we want to perform after success
    } else {
      // here we can do actions which we want to perform after error or failure
    }
  }, [adsIsSuccess, adsIsError])
  
  useEffect(() => {
    if (isSuccess) {
      // here we can do actions which we want to perform after success
    } else {
      // here we can do actions which we want to perform after error or failure
    }
  }, [isSuccess, isError])

  const currentCondition = data?.current_condition[0];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ width: 400, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 40 }}>Weather App</Text>
      <TextInput placeholder='Enter city' style={{ padding: 5, borderColor: 'blue', borderWidth: 2, fontSize: 25, width: '70%', marginVertical: 10 }}
        onChangeText={(e) => {
          setCity(e)
          setSkip(true)
        }}
      />
      <TouchableOpacity style={{ width: 200, padding: 10, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          setCurrentCity(city)
          setSkip(false)
        }}
      >
        <Text style={{ fontSize: 25, textAlign: 'center' }}>Search</Text>
      </TouchableOpacity>
      {
        data && <View>
          <Text style={{fontSize:25}}>Weather in {currentCity}</Text>
          <Text style={{fontSize:25}}>Temperature: {currentCondition.temp_C}</Text>
          <Text style={{fontSize:25}}>Weather conditions are {currentCondition.weatherDesc[0].value}</Text>
        </View>
      }
    </View>
  )
}

export default rtk