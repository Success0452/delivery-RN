import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestuarantCard from './RestuarantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'> {title} </Text>
        <ArrowRightIcon color={'#00CCBB'}/>
      </View>

      <Text className='text-xs text-gray-500 px-4'> {description} </Text>

      <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15}}
      showsVerticalScrollIndicator={false}
      className='pt-4'
      >

        {/**RestuarantCards... */}
        <RestuarantCard 
          id = '123'
          imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title = 'Yo! Sushi'
          rating = '4.5'
          genre = 'Japanese'
          address = '123 main street'
          short_description = 'This is a test description'
          dishes = {[
            {id: 1, name: 'Baked One', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'},
            {id: 2, name: 'Baked Two', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
        ]} 
          long = {-0.1323491652193389}
          lat = {51.51924880936022}
        />

<RestuarantCard 
          id = '123'
          imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title = 'Yo! Sushi'
          rating = '4.5'
          genre = 'Japanese'
          address = '123 main street'
          short_description = 'This is a test description'
          dishes = {[
            {id: 1, name: 'Baked One', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'},
            {id: 2, name: 'Baked Two', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
        ]} 
        long = {-0.1323491652193389}
          lat = {51.51924880936022}
        />

<RestuarantCard 
          id = '123'
          imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title = 'Yo! Sushi'
          rating = '4.5'
          genre = 'Japanese'
          address = '123 main street'
          short_description = 'This is a test description'
          dishes = {[
            {id: 1, name: 'Baked One', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'},
            {id: 2, name: 'Baked Two', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
        ]} 
        long = {-0.1323491652193389}
          lat = {51.51924880936022}
        />

<RestuarantCard 
          id = '123'
          imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title = 'Yo! Sushi'
          rating = '4.5'
          genre = 'Japanese'
          address = '123 main street'
          short_description = 'This is a test description'
          dishes = {[
            {id: 1, name: 'Baked One', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'},
            {id: 2, name: 'Baked Two', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
        ]} 
        long = {-0.1323491652193389}
        lat = {51.51924880936022}
        />

<RestuarantCard 
          id = '123'
          imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title = 'Yo! Sushi'
          rating = '4.5'
          genre = 'Japanese'
          address = '123 main street'
          short_description = 'This is a test description'
          dishes = {[
            {id: 1, name: 'Baked One', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'},
            {id: 2, name: 'Baked Two', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
        ]} 
        long = {-0.1323491652193389}
          lat = {51.51924880936022}
        />

<RestuarantCard 
          id = '123'
          imgUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title = 'Yo! Sushi'
          rating = '4.5'
          genre = 'Japanese'
          address = '123 main street'
          short_description = 'This is a test description'
          dishes = {[
            {id: 1, name: 'Baked One', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'},
            {id: 2, name: 'Baked Two', short_description: 'for always coming', price: 1000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}
        ]} 
        long = {-0.1323491652193389}
        lat = {51.51924880936022}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow