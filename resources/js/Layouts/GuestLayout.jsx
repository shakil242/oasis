import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="loginBg d-flex flex-column justify-content-center">
            <Link href="/" className='text-center d-block mb-4'>
                <ApplicationLogo  />
            </Link>

            <div className="container-fluid">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    );
}
