
export const API_KEY=process.env.REACT_APP_API_KEY;

export const YT_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+API_KEY;

export const search_api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="; 