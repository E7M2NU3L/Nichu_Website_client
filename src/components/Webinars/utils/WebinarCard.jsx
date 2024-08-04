const WebinarCard = ({ title, description, duration, link, linkText, rating, comments, imageUrl }) => {
  return (
    <div className="relative p-6 bg-white shadow-lg rounded-lg overflow-hidden min-h-[400px] flex flex-col">
      {imageUrl && (
        <div className="mb-4">
          <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
        </div>
      )}
      {rating && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-sm px-2 py-1 rounded-lg">
          Rating: {rating} <span className="text-gray-700">({comments} comments)</span>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 flex-1 mb-4">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-gray-500">{duration}</span>
        {link && (
          <a href={link} className="text-blue-500 hover:underline">
            {linkText}
          </a>
        )}
      </div>
      {rating && (
        <div className="mt-4">
          <div className="text-sm font-medium text-gray-700 mb-1">Progress</div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                {rating}%
              </div>
              <div className="text-xs font-semibold inline-block py-1 px-2 rounded text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
                {comments} comments
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex">
                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${rating}%` }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarCard;
