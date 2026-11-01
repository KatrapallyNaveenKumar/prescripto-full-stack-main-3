import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  // 🔥 STATES
  const [symptom, setSymptom] = useState("");
  const [recommended, setRecommended] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  // 🔥 SYMPTOM MAP
  const symptomMap = {
    fever: "General physician",
    cold: "General physician",
    cough: "General physician",
    headache: "General physician",
    tired: "General physician",
    weakness: "General physician",

    skin: "Dermatologist",
    acne: "Dermatologist",
    rash: "Dermatologist",
    itching: "Dermatologist",
    pimples: "Dermatologist",

    teeth: "Dentist",
    tooth: "Dentist",
    toothache: "Dentist",
    gums: "Dentist",

    child: "Pediatricians",
    baby: "Pediatricians",
    kids: "Pediatricians",

    migraine: "Neurologist",
    brain: "Neurologist",

    stomach: "Gastroenterologist",
    gastric: "Gastroenterologist",
    digestion: "Gastroenterologist",
    vomiting: "Gastroenterologist",

    pregnancy: "Gynecologist",
    periods: "Gynecologist",
    uterus: "Gynecologist",
  };

  // 🔥 FILTER
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  // 🔥 GET USER LOCATION
  /*useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => console.log("Location denied")
    );
  }, []);*/
  const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    () => alert("Please allow location access")
  );
};

  // 🔥 DISTANCE FUNCTION
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  // 🔥 RECOMMENDATION FUNCTION
  const handleRecommend = () => {
    if (!userLocation) {
      alert("Please allow location access");
      return;
    }

    const key = Object.keys(symptomMap).find(k =>
      symptom.toLowerCase().includes(k)
    );

    if (!key) {
      alert("No matching symptom found");
      return;
    }

    const spec = symptomMap[key];

    let filtered = doctors
      .filter(doc => doc.speciality === spec)
      .map(doc => {
        const distance = getDistance(
          userLocation.lat,
          userLocation.lng,
          doc.lat,
          doc.lng
        );

        return { ...doc, distance: distance.toFixed(1) };
      });

    // 🔥 SORT
    filtered.sort((a, b) => {
      if (a.distance !== b.distance) {
        return a.distance - b.distance;
      }
      return b.rating - a.rating;
    });

    setRecommended(filtered);
  };

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>

      {/* 🔥 HEADING */}
      <h2 className='text-xl font-semibold mt-4'>🧠 Smart Doctor Recommendation</h2>
      <p className='text-gray-500 text-sm'>Enter your symptoms and get the best doctor instantly</p>
       {/* 🔥 ADD HERE */}
<button 
  onClick={getUserLocation}
  className='bg-green-500 text-white px-4 py-2 rounded mb-3 mt-3'
>
  📍 Enable Location
</button>
      {/* 🔥 INPUT */}
      <div className='mt-4 flex flex-col sm:flex-row gap-3 items-center'>
        <input
          type="text"
          placeholder="Describe your symptoms"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          className='border p-3 rounded-lg w-full sm:w-[350px]'
        />

        <button 
          onClick={handleRecommend}
          className='bg-blue-500 text-white px-6 py-3 rounded-lg'
        >
          🔍 Find Doctor
        </button>
      </div>

      {/* 🔥 RECOMMENDED */}
      {recommended.length > 0 && (
        <>
          <h3 className='mt-6 text-lg font-semibold text-blue-600'>⭐ Recommended Doctors</h3>

          <div className='grid grid-cols-auto gap-4 mt-3'>
            {recommended.map((item, index) => (
              <div 
                onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0); }}
                key={index}
                className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all'
              >
                <img className='bg-[#EAEFFF] w-full h-40 object-cover' src={item.image} alt="" />

                <div className='p-4'>
                  {index === 0 && (
                    <p className="text-green-600 font-semibold mb-1">
                      🏆 Best Nearby Doctor
                    </p>
                  )}

                  <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                  <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>

                  <p className='text-yellow-500'>⭐ {item.rating}</p>

                  {userLocation && (
                    <p className='text-gray-500 text-sm'>
                      📍 {item.distance} km away
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 🔥 FILTER + ALL DOCTORS */}
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>
          Filters
        </button>

        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {["General physician","Gynecologist","Dermatologist","Pediatricians","Neurologist","Gastroenterologist"].map((spec, i)=>(
            <p key={i}
              onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
              className={`pl-3 py-1.5 pr-16 border rounded cursor-pointer ${speciality === spec ? 'bg-[#E2E5FF]' : ''}`}>
              {spec}
            </p>
          ))}
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div 
              onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }} 
              className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
              key={index}
            >
              <img className='bg-[#EAEFFF] w-full h-40 object-cover' src={item.image} alt="" />

              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                  <p>{item.available ? 'Available' : "Not Available"}</p>
                </div>

                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>

                <p className='text-yellow-500'>⭐ {item.rating}</p>

                {userLocation && (
                  <p className='text-gray-500 text-sm'>
                    📍 {getDistance(userLocation.lat, userLocation.lng, item.lat, item.lng).toFixed(1)} km away
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
