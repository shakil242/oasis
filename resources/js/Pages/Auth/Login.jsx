import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="col-md-6 col-10 mx-auto">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="px-md-3 px-sm-2">
                            <h3 className="mb-4 text-center">User Login</h3>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control"
                                        autoComplete="username"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.email} className="mt-2 text-danger" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control"
                                        autoComplete="current-password"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.password} className="mt-2 text-danger" />
                                </div>
{/* 
                                <div className="form-check mt-4">
                                    <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                                    <label className="flex items-center" for='rememberMe'>
                                        Remember me
                                    </label>
                                </div> */}

                                <div className="text-center mt-4">
                                    <PrimaryButton className="loginBtn" processing={processing}>
                                        Log in
                                    </PrimaryButton>
                                    {canResetPassword && (
                                        <button className="btn btn-default mt-2">
                                            <Link
                                                href={route('password.request')}
                                                className="text-decoration-none"
                                            >
                                                Forgot password?
                                            </Link>
                                        </button>
                                    )}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
