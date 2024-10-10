import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

interface Video {
    id: number; 
    videoUrl: string; 
    thumbnail: any; 
    title: string; 
    description: string; 
}


export default function BackScreen() {
    const [visibleVideo, setVisibleVideo] = useState<Video | null>(null);

    const videos: Video[] = [
        {
            id: 1,
            videoUrl: 'https://www.youtube.com/embed/o2Tma5Cek48?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/dumbbellBiceps/BC_CURL.png'),
            title: 'Biceps Dumbbell Curl',
            description: 'Biceps curls are unparalleled in their ability to isolate and target the biceps brachii muscle.',
        },
        {
            id: 2,
            videoUrl: 'https://www.youtube.com/embed/B4RznoFvTl4?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/dumbbellBiceps/BC_HC.png'),
            title: 'Dumbbell Hammer Curl',
            description: 'Hammer curls are biceps curls performed with your hands facing each other. Beneficial to add mass to your arms and can help focus more attention on the short head of the biceps.  ',
        },
        {
            id: 3,
            videoUrl: 'https://www.youtube.com/embed/aG7CXiKxepw?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/dumbbellBiceps/BC_IN.png'),
            title: 'Incline Dumbbell Curl',
            description: 'The incline dumbbell curl targets the long head of the biceps brachii muscle. 2. Incline dumbbell curls allow for a greater range of motion.',
        }
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {visibleVideo ? (
                    <View style={styles.videoContainer}>
                        <WebView 
                            style={styles.webview} 
                            source={{ uri: visibleVideo.videoUrl }} 
                            javaScriptEnabled={true} 
                            domStorageEnabled={true} 
                            allowsFullscreenVideo={true}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={() => setVisibleVideo(null)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    videos.map((video) => (
                        <View key={video.id} style={styles.videoItemContainer}>
                            <TouchableOpacity 
                                onPress={() => setVisibleVideo(video)} 
                                style={styles.thumbnailContainer}
                            >
                                <Image 
                                    source={video.thumbnail} 
                                    style={styles.thumbnail} 
                                    resizeMode="cover" 
                                />
                            </TouchableOpacity>

                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>{video.title}</Text>
                                <Text style={styles.description}>{video.description}</Text>
                            </View>
                        </View>
                    ))
                )}
            </View>
        </ScrollView>
    );
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoContainer: {
        width: width,
        height: height,
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: '#000',
        zIndex: 1,
    },
    webview: {
        flex: 1, 
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        padding: 10,
    },
    closeButtonText: {
        fontSize: 16,
        color: '#000',
    },
    videoItemContainer: {
        backgroundColor: '#7c73e6', 
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        width: width - 40, 
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
    },
    thumbnailContainer: {
        width: '100%', 
        height: (width - 40) * (9 / 16), 
        borderRadius: 10,
        overflow: 'hidden',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        padding: 10, 
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#FFFFFF',
    },
    description: {
        fontSize: 14,
        color: '#E0E0E0',
    },
});
