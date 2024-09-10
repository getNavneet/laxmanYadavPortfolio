import React from 'react';
import { Tweet, Timeline } from 'react-twitter-widgets';

const TwitterFeed = () => {
  return (
    <div className="w-full max-w-6xl mx-auto"> {/* Responsive container */}
      {/* Embed a specific tweet */}
      {/* <div className="w-full h-auto"> 
        <Tweet tweetId="1234567890123456789" />
      </div> */}

      {/* Embed a timeline */}
      <div className=" h-auto rounded-md flex justify-center content-center "> 
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'DrLaxman_Yadav',
          }}
          options={{
            height: '700', // Optional, can be adjusted
          }}
        />
      </div>
    </div>
  );
};

export default TwitterFeed;
