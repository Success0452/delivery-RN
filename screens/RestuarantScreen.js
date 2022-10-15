import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
    ArrowLeftIcon,
    MapPinIcon,
    StarIcon,
    ChevronRightIcon 
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow.js';
import BasketIcon from '../components/BasketIcon.js';
import {setRestuarant} from '../features/restuarantSlice'
import { useDispatch } from 'react-redux';

const RestuarantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long, 
        lat
    }} = useRoute();

    useEffect(() => {
        dispatch(setRestuarant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long, 
        lat
        }))        
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <>
    <BasketIcon />

    <ScrollView>
    <View className='relative'>
      <Image 
      source={{uri: imgUrl}}
      className='w-full h-56 bg-gray-300 p-4'
      />
      <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
        <ArrowLeftIcon size={20} color='#00CCBB'/>
      </TouchableOpacity>
    </View>

    <View className='bg-white'>
        <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>


                <View className='flex-row items-center space-x-1'> 
                    <StarIcon color={'green'} size={22} opacity={0.5}/>
                    <Text className='text-gray-500 text-xs'> 
                <Text className='text-green-500'> {rating} </Text> . {genre}</Text>
                </View>

                <View className='flex-row items-center space-x-1'> 
                    <MapPinIcon color={'gray'} size={22} opacity={0.4}/>
                    <Text className='text-gray-500 text-xs'> Nearby . {address}</Text>
                </View>


            </View>

            <Text className='text-gray-500 mt-2 pb-4'> {short_description} </Text>
        </View>

        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
        <QuestionMarkCircleIcon color={'gray'} size={20} opacity={0.6}/>
        <Text className='flex-1 pl-2 text-md font-bold'> Have a food allergy? </Text>
        <ChevronRightIcon color={'#00CCBB'}/>
        </TouchableOpacity>
    </View>

    <View className='pb-36'>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'> Menu </Text>
        
        {/**DishRows */}
        {dishes.map((dish) => (
             <DishRow 
             key={dish.id}
             id={dish.id}
             name={dish.name}
             description={dish.short_description}
             price={dish.price}
             image={dish.image}
             />
        ))}

    </View>
    </ScrollView>

    </>
  )
}

export default RestuarantScreen