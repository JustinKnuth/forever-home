
   console.log(fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      key +
      "&client_secret=" +
      secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }))
    .then(function (resp) {
      // Return the response as JSON
      return resp.json();
    })
    .then(function (data) {
      // Log the API data
      //setToken(data.access_token)
      return fetch("https://api.petfinder.com/v2/animals", {
        headers: {
          Authorization: data.token_type + " " + data.access_token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    })
    .then(function (resp) {
      // Return the API response as JSON
      return resp.json();
    })
    .then(function (data) {
      // Log the pet data
      //console.log('pets', data);

      console.log(data);
    })
    .catch(function (err) {
      // Log any errors
      console.log("something went wrong", err);
    });


    useEffect(() => {
      const getToken = async () => {
        console.log(fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
          },
      
    }) )
      };
      
      getToken()
    }, []);