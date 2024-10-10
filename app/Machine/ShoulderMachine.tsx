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


export default function ShouldersMachine() {
    const [visibleVideo, setVisibleVideo] = useState<Video | null>(null);

    const videos: Video[] = [
        {
            id: 1,
            videoUrl: 'https://www.youtube.com/embed/0Po47vvj9g4?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/machineShoulders/FP.png'),
            title: 'Cable Face Pulls',
            description: 'Cable face pulls are an upper body exercise performed on a cable machine. They build strength in your upper back, specifically in your rear deltoids and traps. They can help improve your posture, the function of your scapula, and overall shoulder mobility.',
        },
        {
            id: 2,
            videoUrl: 'https://www.youtube.com/embed/Z5FA9aq3L6A?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/machineShoulders/LR.png'),
            title: 'Cable Lateral Raises',
            description: 'Cable lateral raises are a great exercise to give a balanced shape to your shoulders and make them look broader. There are three variations of cable lateral raises that you can use to spice up your shoulder workout and strengthen the different shoulder muscles. These are dead-stop, eccentric, and elevator cable raise.',
        },
        {
            id: 3,
            videoUrl: 'https://www.youtube.com/embed/vtH93qBItdk?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/machineShoulders/FR.png'),
            title: 'Cable Front Raise',
            description: 'Cable front raises primarily work the anterior deltoids, but the lateral delts, traps and pecs are also worked to help stabilise the shoulders. The core will also be worked as it must be engaged to keep the body stable and keep tension on the delts.',
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
