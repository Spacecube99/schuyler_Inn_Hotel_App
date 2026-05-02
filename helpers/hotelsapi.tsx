import axios from "axios";

export type Hotel = {
  id?: string | number;
  name: string;
  address: string;
};

const API_KEY = process.env.EXPO_PUBLIC_HOTEL_API_KEY;

export const searchHotels = async (city: string) => {
  try {
        const response = await axios.get(
      "https://api.makcorps.com/hotel",
      {
        params: {
          hotelid: '4232686',
          rooms: '1',
          adults: '1',
          checkin: '2026-12-25',
          checkout: '2026-12-26',
          api_key: API_KEY,
        },
      }
    );

    console.log(JSON.stringify(response.data, null, 2));

    return response.data;
  } catch (error: any) {
    console.log(
      "HOTELS ERROR:",
      error.response?.status,
      error.response?.data
    );

    throw new Error("Failed to fetch hotels");
  }
};