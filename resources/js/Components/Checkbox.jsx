export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="form-check-input"
            id="rememberMe"
            onChange={(e) => handleChange(e)}
        />
    );
}
