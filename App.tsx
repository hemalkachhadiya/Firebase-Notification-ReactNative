import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import notifee from '@notifee/react-native';
export default function App() {
  const onDisplayNotification = async () => {
    // Request notification permissions (iOS only, safe to call on Android too)
    await notifee.requestPermission();
  
    // Create a notification channel (required on Android 8.0+)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    // Show the notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId, // channelId is mandatory on Android
        smallIcon: 'ic_launcher', // 'ic_launcher' is default icon in most cases
        pressAction: {
          id: 'default', // required to make the notification clickable
        },
      },
    });
  };
  
  return (
    <View>
      <Button title="Display Notification" onPress={() => { onDisplayNotification() }} />
    </View>
  )
}

const styles = StyleSheet.create({})