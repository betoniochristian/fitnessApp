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
            videoUrl: 'https://www.youtube.com/embed/_t3lrPI6Ns4?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/dumbbellBack/DB_SR.png'),
            title: 'Dumbbell Shrugs',
            description: 'The primary muscle group activated during dumbbell shrugs are your upper traps. The dumbbell shrug is one of the best exercises for toning your upper back muscles, building big traps, and improving your posture.',
        },
        {
            id: 2,
            videoUrl: 'https://www.youtube.com/embed/B4RznoFvTl4?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/dumbbellBack/DB_ROW.png'),
            title: 'Dumbbell Bent Over Row',
            description: 'By improving the strength and stability of your upper back and lats, bent-over rows help you maintain proper form during the deadlift, reducing the risk of injury and allowing you to lift heavier weights.  ',
        },
        {
            id: 3,
            videoUrl: 'https://www.youtube.com/embed/Rd5AsxOGqss?rel=0&modestbranding=1&showinfo=0&autoplay=1',
            thumbnail: require('../../assets/dumbbellBack/upright-row.png'),
            title: 'Dumbbell Upright Row',
            description: 'The dumbbell upright row works the shoulders and upper back, with the deltoids and traps doing the bulk of the work. The core must also be engaged to ensure the back remains neutral and tension remains on the shoulders. As arms are worked unilaterally, this exercise helps to improve muscular imbalances.',
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
