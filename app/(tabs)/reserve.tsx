import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Button, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const PRICE_PER_NIGHT = 65;

const Reserve = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Single Room', value: 'single' },
    { label: 'Double Room', value: 'double' },
  ]);

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const [show, setShow] = useState(false);
  const [pickerType, setPickerType] = useState<'checkIn' | 'checkOut' | null>(null);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [licensePlates, setLicensePlates] = useState('');

  // 🔔 Request permission on load
  useEffect(() => {
    const setup = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      console.log("Notification permission:", status);
    };

    setup();
  }, []);

  // 🔔 Local notification
  const sendReservationNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Reservation Confirmed 🎉",
        body: `Your booking from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()} is confirmed.`,
      },
      trigger: null,
    });
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') setShow(false);
    if (event.type === 'dismissed') return;

    if (selectedDate) {
      if (pickerType === 'checkIn') {
        setCheckInDate(selectedDate);
        if (selectedDate > checkOutDate) setCheckOutDate(selectedDate);
      } else {
        setCheckOutDate(selectedDate);
      }
    }
  };

  const nights = useMemo(() => {
    const diff = checkOutDate.getTime() - checkInDate.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  }, [checkInDate, checkOutDate]);

  const totalPrice = nights * PRICE_PER_NIGHT;

  // ✅ FIXED: proper async + notification
  const handleSubmit = async () => {
    try {
      await sendReservationNotification();

      Alert.alert(
        'Reservation Submitted 🎉',
        `Name: ${fullName}
Phone: ${phone}
Email: ${email}
Address: ${address}
License Plates: ${licensePlates}
Nights: ${nights}
Total: $${totalPrice}`
      );
    } catch (e) {
      console.log(e);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <LinearGradient colors={['#CBC3E3', 'purple', '#CBC3E3']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <View style={{ alignItems: 'center' }}>

            <Text style={{ color: 'white', fontSize: 24, textAlign: 'center' }}>
              Reservations
            </Text>

            <View style={{ marginTop: 20, width: '80%', alignItems: 'center', zIndex: 1 }}>

              {/* Inputs */}
              <Text style={{ color: 'white', marginTop: 10 }}>Full Name:</Text>
              <TextInput value={fullName} onChangeText={setFullName}
                placeholder="Type here..."
                style={{ backgroundColor: 'white', width: '100%', borderWidth: 1, textAlign: 'center' }}
              />

              <Text style={{ color: 'white', marginTop: 20 }}>Phone Number:</Text>
              <TextInput value={phone} onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="Phone Number..."
                style={{ backgroundColor: 'white', width: '100%', borderWidth: 1, textAlign: 'center' }}
              />

              <Text style={{ color: 'white', marginTop: 20 }}>Email:</Text>
              <TextInput value={email} onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Email..."
                style={{ backgroundColor: 'white', width: '100%', borderWidth: 1, textAlign: 'center' }}
              />

              <Text style={{ color: 'white', marginTop: 20 }}>Address:</Text>
              <TextInput value={address} onChangeText={setAddress}
                placeholder="Address..."
                style={{ backgroundColor: 'white', width: '100%', borderWidth: 1, textAlign: 'center' }}
              />

              <Text style={{ color: 'white', marginTop: 20 }}>License Plates:</Text>
              <TextInput value={licensePlates} onChangeText={setLicensePlates}
                placeholder="License Plates..."
                style={{ backgroundColor: 'white', width: '100%', borderWidth: 1, textAlign: 'center' }}
              />

              {/* Dropdown */}
              <Text style={{ color: 'white', marginTop: 20 }}>Room Type:</Text>
              <View style={{ zIndex: 1000, width: '100%' }}>
                <DropDownPicker
                  listMode="SCROLLVIEW"
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Choose a room"
                />
              </View>

              {/* Dates */}
              <Text style={{ color: 'white', marginTop: 20 }}>Check-in:</Text>
              <Text style={{ color: 'white' }}>{checkInDate.toLocaleDateString()}</Text>
              <Button title="Select Check-in"
                onPress={() => { setPickerType('checkIn'); setShow(true); }}
              />

              <Text style={{ color: 'white', marginTop: 20 }}>Check-out:</Text>
              <Text style={{ color: 'white' }}>{checkOutDate.toLocaleDateString()}</Text>
              <Button title="Select Check-out"
                onPress={() => { setPickerType('checkOut'); setShow(true); }}
              />

              {show && pickerType && (
                <DateTimePicker
                  value={pickerType === 'checkIn' ? checkInDate : checkOutDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  minimumDate={pickerType === 'checkOut' ? checkInDate : new Date()}
                  onChange={onChange}
                />
              )}

              {/* Price Preview */}
              <View style={{ marginTop: 25, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Nights: {nights}</Text>
                <Text style={{ color: 'white', fontSize: 18, marginTop: 5 }}>
                  Total: ${totalPrice}
                </Text>
              </View>

              {/* Submit */}
              <View style={{ marginTop: 20, width: '100%' }}>
                <Button
                  title="Submit Reservation"
                  onPress={handleSubmit}
                  disabled={nights <= 0}
                />
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Reserve;