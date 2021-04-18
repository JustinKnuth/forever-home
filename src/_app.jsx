import { useEffect, useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const key = "8iSCunDZr3gQtPGGv24toiUJzCLBBmGZ2r69dCx7va3Fz4Tvpf";
const secret = "dpscbWPQWTG6tCrHWZiODTF4ucqm7tmSSaIeHRKu";

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", key);
      params.append("client_secret", secret);

      var res = await axios.get("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: params,
      });
      console.log(await res.json());
    };
    getToken();
  }, []);

  return (
    <AuthContext.Provider>
      return <Component {...pageProps} />;
    </AuthContext.Provider>
  );

}
export default MyApp;
