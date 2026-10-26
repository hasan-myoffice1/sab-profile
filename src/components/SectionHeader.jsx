// import React from 'react';

const SectionHeader = (p) => {
    return (
        <>
            <h2 className="text-3xl font-bold font-primary">{p.dataSend['title']}</h2>
            <p className="font-secondary mt-4">{p.dataSend['desc']}</p>
        </>
    );
};

export default SectionHeader;