import React from 'react';
import Hero from './Hero';
import Featured from './Featured';
import Marquee from './Marquee';
import StandardContentBlock from './StandardContentBlock';

function FlexibleLayout({ data }) {
  // Ensure that data?.pageBy?.pageContent?.flexibleContent is an array
  const flexibleContent = data?.flexibleContent || [];


  return (
    <div>
      {flexibleContent.map((block, index) => {
        switch (block.__typename) { // Use __typename to identify the type of block
          case 'Page_Pagecontent_FlexibleContent_HeroBlock':
            return <Hero key={index} data={block} />;
          case 'Page_Pagecontent_FlexibleContent_FeaturedBlock':
            return <Featured key={index} data={block} />;
          case 'Page_Pagecontent_FlexibleContent_MarqueeBlock':
            return <Marquee key={index} data={block} />;
          case 'Page_Pagecontent_FlexibleContent_ContentBlock':
            return <StandardContentBlock key={index} data={block} />;
          default:
            return null; // Handle unknown block types or add a default case
        }
      })}
    </div>
  );
}

export default FlexibleLayout;
