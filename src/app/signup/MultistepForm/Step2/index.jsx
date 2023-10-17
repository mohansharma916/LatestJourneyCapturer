const Step2 = (props) => {
  const { data, handleChange } = props;
  const plans = [
    {
      name: "Basic plan",
      price: 12,
      //   features: [
      //     "Curabitur faucibus",
      //     "massa ut pretium maximus",
      //     "Sed posuere nisi",
      //     "Pellentesque eu nibh et neque",
      //     "Suspendisse a leo",
      //     "Praesent quis venenatis ipsum",
      //     "Duis non diam vel tortor",
      //   ],
    },
    {
      name: "Startup",
      price: 35,
      //   features: [
      //     "Curabitur faucibus",
      //     "massa ut pretium maximus",
      //     "Sed posuere nisi",
      //     "Pellentesque eu nibh et neque",
      //     "Suspendisse a leo",
      //     "Praesent quis venenatis ipsum",
      //     "Duis non diam vel tortor",
      //   ],
    },
  ];

  return (
    <div className="max-w-xs md:max-w-lg mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Pricing for all sizes
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur consequat nunc.
              </p>
            </div>
          </div>
          <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
              >
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <span className="text-indigo-600 font-medium">
                    {item.name}
                  </span>
                  <div className="mt-4 text-gray-800 text-3xl font-semibold">
                    ${item.price}{" "}
                    <span className="text-xl text-gray-600 font-normal">
                      /mo
                    </span>
                  </div>
                </div>
                {/* <ul className="py-8 space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul> */}
                <div className="flex-1 flex items-end">
                  <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
