//STORAGE OF BROWSER
const CACHE_NAME = new Date().toISOString();
// Customize this with a different URL if needed.

const urlsToCache = [
  "./",
  "./index.html",
  "./node_modules",
  "./src/",
  "./assets/icons/144.png",
  "./assets/favicon/favicon.ico",
  "./@vite/client",
  "./@react-refresh",
  "./src/main.jsx",
  "./src/App.css",
  "./src/App.jsx",
  "./src/index.css",
  "./src/redux/getAllProvinceSlice.js",
  "./src/redux/getAddressSlice.js",
  "./src/store/store.js",
  "./src/pages/Home.jsx",
  "./src/pages/auth/Login.jsx",
  "./src/pages/FormAddress.jsx",
  "./src/pages/components/form/AddForm.jsx",
  "./src/pages/components/form/EditForm.jsx",
  "./src/pages/components/SearchRegion.jsx",
  "./src/pages/components/markerCluster/MarkerMain.jsx",
  "./src/pages/components/NearestNeighboor/MarkerMainNearestNeighboor.jsx",
  "./src/pages/components/LocationMarker.jsx",
  "./src/pages/components/SearchBox.jsx",
  "./src/pages/components/markerCluster/MarkerList.jsx",
  "./src/pages/components/NearestNeighboor/MarkerListNearestNeighboor.jsx",
  "./src/pages/GetRegion.jsx",
  "./src/pages/components/markerCluster/MarkerCluster.jsx",
  "./node_modules/vite/dist/client/env.mjs",
  "./src/pages/components/NearestNeighboor/MarkerNearestNeighboor.jsx",
  "./src/pages/components/markerCluster/markerData.json?import",
  "./node_modules/leaflet/dist/leaflet.css",
  "./node_modules/react-leaflet-cluster/lib/assets/MarkerCluster.css",
  "./node_modules/react-leaflet-cluster/lib/assets/MarkerCluster.Default.css",
  "./node_modules/react-leaflet-cluster/lib/assets/marker-icon-2x.png",
  "./node_modules/react-leaflet-cluster/lib/assets/marker-icon-2x.png?import",
  "./src/pages/components/NearestNeighboor/markerData.json?import",
  "./node_modules/react-leaflet-cluster/lib/assets/marker-shadow.png",
  "./node_modules/react-leaflet-cluster/lib/assets/marker-shadow.png?import",
  "./node_modules/react-leaflet-cluster/lib/assets/marker-icon.png",
  "./node_modules/react-leaflet-cluster/lib/assets/marker-icon.png?import",
  "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
  "./TambahAddress",
  "./FormAddress",
  "./markerNearest",
  "./EditAddress",
  "./src/data/location-marker-idb.js",
  "./manifest.json",
  

  //   "https://nominatim.openstreetmap.org/",

  
];
// const self = this;

//installation
self.addEventListener("install", (event) => {
      console.log("Opened cache");



  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
       
      return cache
        .addAll(urlsToCache)

        .then(() => {
          console.info("All files are cached");
        })
        .catch((error) => {
          console.log(urlsToCache, "ini gagal cache");
          console.error("Failed to cache", error);
        });

    })
  );
});

// actitivate the service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
 
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});




// listen for request
self.addEventListener("fetch", (event) => {

  
   console.info("Event: Fetch");

   var request = event.request;

   //Tell the browser to wait for newtwork request and respond with below
   event.respondWith(
     //If request is already in cache, return it
     caches.match(request).then((response) => {
       if (response) {
         return response;
       }

       //if request is not cached or navigation preload response, add it to cache
       return fetch(request).then((response) => {
        //  var responseToCache = response.clone();
        //  caches.open(CACHE_NAME).then((cache) => {
        //    cache.put(request, responseToCache).catch((err) => {
        //      console.warn(request.url + ": " + err.message);
        //    });
        //  });

        //  return response;


                // Memeriksa apakah respons dari fetch berhasil
        if (!response || response.status !== 200 || response.type !== 'basic') {

          return response; // Mengembalikan respons dari jaringan
        }

        // Jika respons dari fetch berhasil, membuat salinan respons
        var clonedResponse = response.clone();

        // Menyimpan respons ke cache
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clonedResponse);
        });

        return response; // Mengembalikan respons dari jaringan
      }).catch(async function() {
        console.log('ga ada internet dan ga ada cache');

        //Jika fetch gagal (jaringan mati), menampilkan respons fallback
        return new Response('Oops! Tidak ada koneksi internet.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        });


      });
     
     })

   );


});

