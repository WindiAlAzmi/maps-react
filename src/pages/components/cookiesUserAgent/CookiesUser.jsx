// import { useState } from "react";

import axios from "axios";
import platform from "platform";
import { useEffect, useState } from "react";


export default function CookiesUser() {
  const [dataIdentityUser, setDataIdentityUser] = useState("");
  const [makeDataUserAgent, setMakeDataUserAgent] = useState({
    ipAddress: "",
    longitude: "",
    latitude: "",
    platformUser: "",
    browserVersion: "",
    deviceUser: "",
    fullAgent: "",
    country: "",
    region: "",
    city: "",
    postalCode: "",
    isp: "",
    date: "",
    dataIdentity: "",
  });
  const [ipAddressUser, setIpAddressUser] = useState("");
  const [dateUser, setDateUser] = useState("");
  const [platformUser, setPlatformUser] = useState("");
  const [browserVersion, setBrowserVersion] = useState("");
  const [deviceUser, setDeviceUser] = useState("");
  const [countryUser, setCountryUser] = useState("");
  const [regionUser, setRegionUser] = useState("");
  const [cityUser, setCityUser] = useState("");
  const [ispUser, setIspUser] = useState("");
  const [dataLatLng, setDataLatLng] = useState([]);


  console.log(makeDataUserAgent, "ini data user agent");

  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/reverse?";
  const requestOptions = {
    method: "GET",
  };

  const getPostalCode = async (data) => {
    if(data){
          fetch(
            `${NOMINATIM_BASE_URL}format=geojson&lat=${data?.lat}&lon=${data?.lng}`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              // let postalCodeUserApi =
              //   result?.features[0]?.properties.address.postcode;

              setMakeDataUserAgent({
                ipAddress: ipAddressUser,
                longitude: dataLatLng.lng,
                latitude: dataLatLng.lat,
                platformUser: platformUser,
                browserVersion: browserVersion,
                deviceUser: deviceUser,
                fullAgent: platform,
                country: countryUser,
                region: regionUser,
                city: cityUser,
                postalCode:  result?.features[0]?.properties.address.postcode,
                isp: ispUser,
                date: dateUser,
                dataIdentity: dataIdentityUser,
              });
            })
            .catch((err) => console.log("err: ", err));
    }
  
  };

  const fetchGeoLocationDB = async () => {
    const dataBrowser = platform.name + platform.version;
    const dataPlatform = window.navigator.platform;

    const ip = await axios.get("https://ipapi.co/json");
    setIpAddressUser(ip.data.ip);
    setDataLatLng({ lat: ip.data.latitude, lng: ip.data.longitude });
    setCountryUser(ip.data.country_name);
    setRegionUser(ip.data.region);
    setCityUser(ip.data.city);
    setIspUser(ip.data.org);

    setPlatformUser(dataPlatform);
    setBrowserVersion(dataBrowser);
    setDeviceUser(platform?.product);

    // const ipAddress = window.location.host;
    // console.log("IP Address user:", ipAddress);

    const currentDate = new Date();
    // const currentDateString = currentDate.toLocaleDateString();
    const currentTimeString = currentDate.toLocaleTimeString();
    setDateUser(currentTimeString);

    // console.log(currentDateString, "ini date");
    // console.log(currentTimeString, "ini time string");
  };

  const getIPAddress = async () => {
    try {
      //   const peerConnection = new RTCPeerConnection({ iceServers: [] });
      //   const candidates = await peerConnection.createOffer();

      //   const ipAddress = candidates.sdp.match(/(\d+\.\d+\.\d+\.\d+)/g);
      //   const ipv6Address = candidates.sdp.match(
      //     /([0-9a-f]{1,4}(:[0-9a-f]{1,4}){7})/g
      //   );

      //   peerConnection.close();
      //   console.log("IPv4 Address:", ipAddress);
      //   console.log("IPv6 Address:", ipv6Address);
      //   fetchGeoLocationDB(ipAddress);
      fetchGeoLocationDB();
      setDataIdentityUser("user click ip address");
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  useEffect(() => {
    getPostalCode(dataLatLng);
  }, [dataLatLng]);

  return (
    <div>
      <div>halaman untuk user agent</div>
      <div onClick={getIPAddress}>dapatkan ip addres</div>
      {/* <CookieConsent
        location="bottom"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        website use cookie{" "}
      </CookieConsent> */}
    </div>
  );
}
