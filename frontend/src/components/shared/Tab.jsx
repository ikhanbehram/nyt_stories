function Tab({title, subTitle}) {
    return (
        <div className="p-4 flex flex-col justify-center items-center bg-nyt-darker rounded-xl min-w-[6rem] text-nyt-primary cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-nyt-primary">
            <p className=" text-md font-bold">{title}</p>
            <p className=" text-sm font-semibold">{subTitle}</p>
        </div>
    )
}

export default Tab;