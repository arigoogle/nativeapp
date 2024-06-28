
import { HelloWave } from '@/components/HelloWave';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pblack'>Claude <HelloWave/></Text>
      <StatusBar style='auto' />
      <Link href="/profile" style={{color:'lightblue'}}>Go to Profile</Link>
      
    </View>
  );
}

