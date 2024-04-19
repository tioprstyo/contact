import { TypeWriter } from '../../components';

const HomeScreen = () => {
    return (
        <div className='bg-[#00d1b2] h-[100vh] w-full items-center justify-center flex flex-col text-center' data-testid="main" >
            <h1 className='text-white md:text-5xl w-full text-xl'> Welcome to <TypeWriter text="Contact Apps" delay={100} /> </h1><br />
        </div>
    )
}
export default HomeScreen;