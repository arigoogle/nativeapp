import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
import { getAllPosts } from '@/lib/appwrite'
import useAppwrite from "../../lib/useAppwrite";
const Home = () => {

  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    // recall posts....
    setRefreshing(false);
  }
  console.log('data', posts)
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        // data={[{ id: 1 }, { id: 2 }, { id: 3 },]}
        keyExtractor={(item:any) => item.$id}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.title}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  Peralta
                </Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-11'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput/>
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3 '>
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  )
}

export default Home