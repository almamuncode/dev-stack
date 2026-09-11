import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='mt-20 md:mt-30'>
            <div className="divider"></div>
            <footer className="container mx-auto footer sm:footer-horizontal text-base-content p-10">
                <div>
                    <img src={logo} alt="" />
                    <p>
                        Curated tools, technologies, and resources <br /> for developers building
                        modern software.
                    </p>

                    <div className='flex gap-4 font-semibold mt-3'>
                        <a className="link link-hover">Github</a>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Linkedin</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold">PRODUCT</h3>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Technologies</a>
                    <a className="link link-hover">Projects</a>
                </div>
                <div>
                    <h3 className="font-semibold">COMPANY</h3>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                </div>
                <div>
                    <h3 className="font-semibold">LEGAL</h3>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms of Service</a>
                </div>
            </footer>
            <div className="divider"></div>

            <div className='container mx-auto mb-5 flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6'>
                <div><p className='text-sm text-gray-500 text-center'>© 2026 Dev Stack. All rights reserved.</p></div>
                <div className="flex justify-center gap-5 text-sm text-gray-500 sm:justify-start">
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover">Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;