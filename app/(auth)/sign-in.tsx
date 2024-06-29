import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import { SignInFormState } from '@/constants/types';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState<SignInFormState>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormChange = (field: keyof SignInFormState) => (value: string) => {
    setForm(prevForm => ({ ...prevForm, [field]: value }));
  };

  const onSubmit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[83vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold font-psemibold mt-10'>
            Log in to Oyen
          </Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={handleFormChange('email')}
            otherStyles='mt-7'
            keyboardType='email-address'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={handleFormChange('password')}
            otherStyles='mt-7'
            keyboardType='password'
          />

          <CustomButton
            title='Sign In'
            handlePress={onSubmit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
