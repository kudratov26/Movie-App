import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
    const rating = vote_average / 2;

    return (
        <Link href={`/movie/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image
                    source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://placehold.co/640x400/1a1a1a/ffffff.png' }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-white text-sm mt-2 font-bold' numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center justify-start gap-x-1'>
                    {[...Array(Math.round(rating))].map((star, index) => (
                        <Image key={index} source={icons.star} className='w-4 h-4' />
                    ))}

                    <Text className='text-xs text-light-300 font-bold uppercase'>{Math.round(rating)} / 5</Text>
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>
                        {release_date?.split("-")[0]}
                    </Text>
                    {/* <Text className='text-xs text-light-300 font-medium uppercase'>Movie</Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard