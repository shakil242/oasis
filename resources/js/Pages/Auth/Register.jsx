import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="col-md-6 col-10 mx-auto">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="px-md-3 px-sm-2">
                            <h3 className="mb-4 text-center">User Register</h3>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 form-control"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 form-control"
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 form-control"
                                        autoComplete="new-password"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 form-control"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="text-center mt-4">
                                    <PrimaryButton className="registerBtn mb-2" processing={processing}>
                                        Register
                                    </PrimaryButton>

                                    <Link
                                        href={route('login')}
                                        className="text-decoration-none"
                                    >
                                        Already registered?
                                    </Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </GuestLayout>
    );
}
