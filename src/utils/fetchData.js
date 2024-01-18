export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
      ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '231c71bbdbmsh63c197856346be9p1c9b81jsn7a8652d6e607',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}

