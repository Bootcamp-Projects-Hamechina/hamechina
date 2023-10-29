import Link from 'next/link'
import React from 'react'

// type Props = {}

const featuredContent = 
  [
    {title: "פרויקטים בקהילה", description: "מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ"},
    {title: "שיתופים מראיונות עבודה", description: "מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ"},
    {title: "סימולציות לראיונות", description: "מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ"},
    {title: "מאגרי מידע", description: "מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ"},
    {title: "מפגשי קהילה", description: "מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ"},
  ]

type DiscordContent = {
  title: string,
  description: string
}


const Feature = (props: DiscordContent) => {
  return (
    <div className="bg-cyan-900 flex grow flex-col w-full mx-auto px-5 py-5 rounded-lg max-md:max-w-full max-md:mt-10">
      <div className="flex w-[356px] max-w-full flex-col mr-4 max-md:mr-2.5">
        <div className="text-stone-50 text-right text-base font-bold whitespace-nowrap">
        {props.title}
        </div>
        <div className="text-stone-50 text-right text-base mt-2.5">
        {props.description}
        </div>
      </div>
    </div>
  )
}

const DiscordSection = () => {
  return (
    <div className="bg-orange-200 flex min-h-[613px] flex-col p-5">
      <div className="text-slate-950 text-right text-2xl font-bold mr-4 whitespace-nowrap max-md:mr-2.5">
        הדיסקורד
      </div>
      <div className='flex flex-row justify-between pb-4 items-center'>
        <div className="text-black text-right text-2xl w-[842px] max-w-full mr-4 mt-2.5 pl-4 self-end max-md:mr-2.5">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום
          סילקוף, מרגשי ומרגשח. עמחליף גולר
        </div>
        <Link href="https://discord.gg/zxuKGU8P9R" className="bg-gray-700 text-lightText hover:bg-darkBg text-xl text-center font-semibold rounded-md px-3 whitespace-nowrap">
          הצטרפו לדיסקורד
        </Link>
      </div>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2"> 
        {featuredContent.map((content) => <Feature key={content.title} title={content.title} description={content.description}/> )}
      </div>   
    </div>
  )
}

export default DiscordSection