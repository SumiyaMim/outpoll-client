const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mb-8">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">{heading}</h3>
            <hr className="border-[1.5px] w-14 border-purple-700 mx-auto mb-5"/>
            <h3 className="text-xs mx-auto text-center text-zinc-500 mb-14 w-11/12 md:w-3/4 lg:w-3/5 leading-5">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;