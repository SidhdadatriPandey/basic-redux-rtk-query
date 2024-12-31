import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/features/counterSlice'

const index = () => {
  const counter = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch();
  const [amount,setAmount]=useState<any>(0);
  // console.log('counter', counter);

  return (
    <View>
      <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={{ fontWeight: 'bold', fontSize: 50 }}>+</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 40 }}>{counter}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={{ fontWeight: 'bold', fontSize: 50 }}>-</Text>
        </TouchableOpacity>
        <TextInput placeholder='Enter no to increase counter' style={{fontSize:25, padding:5, borderColor:'blue', borderWidth:2}}
          onChangeText={(e:any)=>{
            // console.log(e);
            setAmount(e)}
          }
        />
        <TouchableOpacity onPress={()=>dispatch(incrementByAmount(amount))}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, backgroundColor:'yellow', padding:5, marginTop:10 }}>set</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index