import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { VideoCardProps } from '@/constants/types';
import { icons } from '@/constants';

const VideoCard = ({ video }: VideoCardProps) => {
  if (!video) {
    return null; // or some placeholder component
  }

  const { title, thumbnail, video: videoUrl, creator } = video;
  const { username, avatar } = creator;
//   const fallbackImageUrl = 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=3208&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const fallbackImageUrl = 'https://i.ibb.co/3Y2Nk7q/Bucket-215.png'

  const [play, setPlay] = useState(false)

  console.log('Thumbnail URL:', thumbnail);
  if (!thumbnail.startsWith('http')) {
      console.warn('Invalid thumbnail URL');
  }

  return (
    <View className='items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] border border-secondary justify-center items-center p-0.5'>
                    <Image
                        source={{ uri: avatar}}
                        className='w-full h-full rounded-lg'
                        resizeMode='cover'
                    />
                </View>
                <View className='justify-center flex-1 ml-3 gap-y-1'>
                    <Text className='text-white font-psemibold text-sm' numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>
                        {username}
                    </Text>
                </View>
            </View>

            <View className='pt-2'>
                <Image
                    source={icons.menu}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </View>
        </View>
        {play ? (
            <Text>Playing</Text>
        ): (
            <TouchableOpacity
    className='w-full h-60 rounded-xl mt-3 relative justify-center items-center overflow-hidden'
    activeOpacity={0.7}
    onPress={() => setPlay(true)}
>
    <Image
        source={{uri: thumbnail}}
        className='w-full h-full'
        resizeMode='contain'
        onError={(error) => console.error('Image load error:', error.nativeEvent.error)}
    />
    <Image
        source={icons.play}
        className='w-12 h-12 absolute'
        resizeMode='contain'
    />
</TouchableOpacity>
        )}
    </View>
  );
};

export default VideoCard;
