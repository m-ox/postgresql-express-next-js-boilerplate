import React from 'react';


const Hello = () => {
    return (
        <div style={{ width: '80%', display: 'flex', justifySelf: 'center', flexDirection: 'column' }}>
            <h3>Hello world, hello you</h3>
            In Next.js, the getServerSideProps() function is a way to fetch data on the server side and pass it as props to your page component. It is useful for dynamic data that changes often and needs to be updated on each request.
            <br/>
            <br/>
            If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.
            <br/>
            <br/>
            If you have any questions, don't. /ᐠ. .ᐟ\ Ⳋ
        </div>
    );
}

export default Hello;
