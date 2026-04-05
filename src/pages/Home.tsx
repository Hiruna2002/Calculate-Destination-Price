// import React from 'react'



// const Home = () => {
//     const [price, setPrice] = React.useState<number | null>(null)
//     const [distance, setDistance] = React.useState<string>("")

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//         const distanceInput = document.getElementById("distance") as HTMLInputElement;

//         const distanceInMeters = distanceInput ? parseFloat(distanceInput.value) * 1000 : 0;
//         if (distanceInMeters < 10000) {
//             setPrice(distanceInMeters * 0.3);
//             return;
//         }
//         const removeFirstTenKm = distanceInMeters - 10000;
//         const CalculateTotalPrice = removeFirstTenKm * 0.16 + 3000;
//         setPrice(CalculateTotalPrice);       
        
//     }
//   return (
//         <div>
//             <div>
//                 <h1>Destination Price Calculator</h1>
//             </div>
//             <form>
//                 <div>
//                     <label htmlFor="distance">Distance (km):</label>
//                     <input 
//                         type="number" 
//                         id="distance" 
//                         name="distance" 
//                         value={distance}
//                         onChange={(e) => setDistance(e.target.value)}
//                         className='border border-black'
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <button  type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Calculate Price</button>
//                 </div>
//                 <div>
//                     <label htmlFor="price">Price (Rs.):</label>
//                     <input 
//                         type="text" 
//                         id="price" 
//                         name="price" 
//                         value={price !== null ? price : ""}
//                         className='border border-black'
//                         readOnly 
//                     />
//                 </div>
//             </form>
//         </div>
//   )
// }

// export default Home


import React from "react";

const Home = () => {
  const [distance, setDistance] = React.useState<string>("");
  const [price, setPrice] = React.useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const distanceKm = parseFloat(distance);

    if (isNaN(distanceKm) || distanceKm <= 0) {
      setPrice(null);
      return;
    }

    const distanceInMeters = distanceKm * 1000;

    if (distanceInMeters < 10000) {
      setPrice(distanceInMeters * 0.3);
      return;
    }

    const removeFirstTenKm = distanceInMeters - 10000;
    const calculateTotalPrice = removeFirstTenKm * 0.16 + 3000;
    setPrice(calculateTotalPrice);
  };

  const handleClear = () => {
    setDistance("");
    setPrice(null);
 };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white">
            <h1 className="mt-3 text-3xl md:text-4xl font-bold">
              Destination Price Calculator
            </h1>
            <p className="mt-4 max-w-xl text-blue-100">
              Enter the distance in kilometers and instantly calculate the
              delivery price with a clean, simple interface.
            </p>
          </div>

          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="distance"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Distance (km)
                </label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Enter distance like 12.5"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  required
                />
                <p className="mt-2 text-sm text-slate-500">
                  Example: 5 km, 12.5 km, 20 km
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-[0.99]"
              >
                Calculate Price
              </button>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Delivery Price (Rs.)
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={price !== null ? `Rs. ${price.toFixed(2)}` : ""}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-lg font-semibold text-slate-800 outline-none"
                  readOnly
                  placeholder="Price will appear here"
                />
              </div>
              <div>
                <button
                    type="button"
                    onClick={handleClear}
                    className="w-full rounded-2xl bg-gray-200 px-4 py-3 font-semibold text-gray-800 shadow transition hover:bg-gray-300"
                >
                    Clear
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;