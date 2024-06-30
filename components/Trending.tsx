import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TrendingProps } from '@/constants/types'
import { SafeAreaView } from 'react-native-safe-area-context'

const Trending = ({ posts } : TrendingProps ) => {
  return (
    <SafeAreaView className='bg-primary'>
        <FlatList
          data={posts}
          keyExtractor={(item:any) => item.$id}
          renderItem={({item}:any) => (
            <Text className='text-3xl text-white'>{item.id}</Text>
          )}
          horizontal
        />
    </SafeAreaView>
  )
}

export default Trending