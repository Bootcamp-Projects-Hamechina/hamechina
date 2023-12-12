import React from 'react'
import SectionTitle from '@/app/_shared-components/SectionTitle';
import ButtonLink from '@/app/_shared-components/ButtonLink';


const featuredContent = [
  {
    description: "המסמך שילווה אותך לאורך המכינה:",
    linkTitle: "הצטרפתי למכינה! מה עכשיו?",
    link:`https://docs.google.com/document/d/1tls47hXKQaKWtFL8vPi4lbZFRTNiaXJyp0fVuyQCkMs`
  },

  {
    description: "קבוצת הפייסבוק:",
    linkTitle: "התכנית למציאת עבודה - המכינה לאנטרי לבל | Facebook",
    link:`https://www.facebook.com/groups/entry.level.preparatory.program`
  },

  {
    description: "הרצאות המכינה:",
    linkTitle: "Finding Your Next Job",
    link:`https://www.youtube.com/playlist?list=PLpII905PU6QplJ24tNbcgSTkvhBH2r8J0`

  },

];


type ContentSection = {
  description: string;
  linkTitle: string;
  link: string;
  };

//         
  const Feature = (props: ContentSection) => {
    return (
      <div className="bg-cyan-900 flex grow flex-col w-full px-3 py-3 md:px-1 md:py-5 mt-4 md:mt-0 rounded-lg rounded-lg max-md:max-w-full flex flex-col flex justify-around">
        <div className="flex w-[356px] max-w-full flex-col ">
          <div className=" text-lg text-lightText text-right text-base font-bold whitespace-nowrap">
          {props.description}
          </div>
          <div className="inline-block underline underline-offset-1 text-lightText text-right text-base font-bold whitespace-nowrap md:mt-2">
            <ButtonLink href={props.link} 
              external 
             className=" underline underline-offset-1 text-right text-normal text-sm md:text-base md:mt-2 ">{props.linkTitle}
            </ButtonLink>
          </div>
        </div>
      </div>
    );
  };
//   md:text-base md:mt-2
const HamechinaContentSection = () => {
  return (
    
    <div className=" w-full pb-4 md:pb-4 px-5 md:px-40 m-3">
      <SectionTitle title="הצטרפתי למכינה! מה עכשיו?" />
      <div className="md:gap-5 grid grid-cols-1 md:grid-cols-2">
        {featuredContent.map((content) => (
          <Feature
            key={content.description}
            description={content.description}
            linkTitle={content.linkTitle}
            link={content.link}
          />
        ) )}
        
      </div>
    </div>
  );
};

export default HamechinaContentSection