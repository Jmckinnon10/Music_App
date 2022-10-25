const APIController = (function () {
  const clientId = "135c0b831ec6401c8eda3e5b65e6afea";
  const clientSecret = "a42f99ab84e249c9853ce96dd01987d2";

  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
  };

  const _getGenres = async (token) => {
    const result = await fetch(
      "https://api.spotify.com/v1/browse/categories?local=sv_US",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    )
    const data = await result.json();
    return data.categories.items;
  };
  
  const _getPlaylistByGenre = async (token, genreId) => {
    const limit = 5;

    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
    }
    )
    const data = await result.json();
    return data.playlists.items;
}

    const _getSongs = async (token, tracksEndPoint) => {
        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
        })
        const data = await result.json();
        return data.items;
    }





})
