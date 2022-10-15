import { 
    View, Text, SafeAreaView, 
    Image, StyleSheet, Platform, 
    StatusBar, TextInput, ScrollView
 } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow';


const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
   <SafeAreaView style={styles.container}>
      {/*Header*/}
      <View className="flex-row pb-3 mx-4 space-x-2 justify-between">
        <Image 
            source={{ uri: 'https://links.papareact.com/wru'}}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'> Deliver Now </Text>
            <Text className='font-bold text-xl'> 
             Current Location 
             <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
        </View>
        <UserIcon size={28} color='#00CCBB'/>
       
      </View>
         {/** Search*/}
         <View className='flex-row pb-2 items-center mx-4 space-x-2'>

         <View className='bg-gray-200 p-3 space-x-2 flex-row flex-1 rounded-full'>
         <MagnifyingGlassIcon size={20} color='gray'/>
         <TextInput placeholder='Restuarant and cuisnes'
          keyboardType='default'
          />
        </View>

    <AdjustmentsHorizontalIcon color='#00CCBB'/>
    </View>

    { /**Body */}
    <ScrollView
    className='bg-gray-100'
    contentContainerStyle={{
        paddingBottom: 100
    }}
    >

    {/**Categories */}
    <Categories />

    {/**Featured */}
    <FeaturedRow 
    title='Featured'
    description='Paid placement from our partners'
    id='123'
    />
{/**Tasty Discounts */}
<FeaturedRow 
    title='Tasty Discounts'
    description="Everyone's been enjoying these juicy discount"
    id='1234'
    />

{/**Offers near you */}
<FeaturedRow 
    title='Offers near you'
    description="Why not support your local restaurat tonight!"
    id='12345'
    />

    </ScrollView>
    
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    }
})

export default Home