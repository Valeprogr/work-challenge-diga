const Home = () => {
    return(
    <>
        <main className='flex flex-col h-screen w-screen items-center justify-around mt-6'>
            <h1 className='text-2xl font-medium '>Coding Challenge Presentation</h1>
            <section className="">
                <div className="my-2">
                    <h2>Feature 1:</h2>
                    <p>It allows you to have a complete list of doctors with the method of : infinite scrolling list </p>
                </div>
                <div className="my-2">
                    <h2>Feature 2:</h2>
                    <p>It allows you to add a new doctor to the list of doctors..</p>
                </div>
                <div className="my-2">
                    <h2>Feature 3: </h2>
                    <p>It allows you to delete a doctor to the list of doctors with id.</p>
                </div>
                <div className='flex justify-center my-5'>
                    <a className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' href='/doctors'>Doctors</a>
                </div>


            </section>


            <footer>
                <p>&copy; 2023 Digi P.Hilfe. All rights reserved.</p>
            </footer>
        </main>
        </>
    )
}
export default Home