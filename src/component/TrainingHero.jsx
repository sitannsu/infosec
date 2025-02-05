import React from 'react';

const TrainingHero = ({
  bgImage,
  leftContent,
  courseFeeDetails,
  formTitle,
  formFields,
  batchDetails,
  CPSCMFees,
  consentText,
  buttonText,
}) => {
  return (
    <div 
      className="relative bg-cover bg-center py-16" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 px-6">
        
        {/* Left Side: Dynamic Text Content */}
        <div className="md:w-3/5 w-full bg-opacity-90 px-8 rounded-lg shadow-lg">
          {leftContent}

          <h3 className="text-2xl font-semibold mt-6">Course Fee:</h3>
          <div className="flex justify-around mt-4 gap-8">
            {courseFeeDetails.map((fee, index) => (
              <div key={index} className="bg-gradient-to-tr from-pink-600 to-amber-500 rounded-r-3xl text-white py-4  shadow-md text-center gap-4">
                <p className="text-xl font-bold bg-white rounded-r-3xl text-black p-2">${fee.amount}</p>
                <p className='mt-2'>{fee.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Dynamic Form Content */}
        <div className="md:w-2/5 w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{formTitle}</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {formFields.map((field, index) => (
                <input 
                  key={index}
                  type={field.type} 
                  placeholder={field.placeholder} 
                  className="border p-2 rounded-md"
                />
              ))}
            </div>

            <div className="mt-4">
              <p>Please Select the Batch:</p>
              <div className="space-y-2">
                {batchDetails.map((batch, index) => (
                  <label key={index} className="block">
                    <input type="radio" name="batch" className="mr-2" />
                    {batch}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p>CPSCM Fees: </p>
              <div className="space-y-2">
                {CPSCMFees.map((fee, index) => (
                  <label key={index} className="block">
                    <input type="radio" name="fee" className="mr-2" />
                    {fee}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="block">
                <span>If you are a member of ISACA and/or ISC2, you must mention your ISACA or ISC2 Chapter Name,<br/></span>
                <span> Membership Number or below. Please mention “NA” if you are not a member of any chapter.</span>
                <input type="text" placeholder="Enter your answer" className="border p-2 w-full rounded-md mt-2" />
              </label>
            </div>

            <div className="mt-4 flex items-start">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">{consentText}</span>
            </div>

            <button type="submit" className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-red-700">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainingHero;
