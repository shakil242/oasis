export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `btn btn-primary d-block ${
                    processing
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
