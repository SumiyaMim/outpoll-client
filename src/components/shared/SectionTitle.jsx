const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-semibold w-fit mx-auto text-center mb-1.5">{heading}</h3>
            <hr className="border-[1.5px] w-16 border-purple-700 mx-auto mb-5"/>
            <h3 className="text-xs w-fit mx-auto text-center text-zinc-500 mb-14">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;