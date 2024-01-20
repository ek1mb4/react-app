export const ListHeader = () => {
    return (
        <>
            <div className='list-header'>
                <div className={'col-span-1'}>
                    #
                </div>
                <div className={'col-span-8'}>
                    Description
                </div>
                <div className={'col-span-1 text-center'}>
                    Goal
                </div>
                <div className={'col-span-2 text-center'}>
                    Done
                </div>
            </div>
        </>
    );
};
