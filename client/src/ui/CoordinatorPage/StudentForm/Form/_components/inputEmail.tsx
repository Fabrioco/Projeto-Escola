import { useStudentContext } from "@/contexts/studentContext";

export function InputEmailStudent() {
    const { email, setEmail } = useStudentContext();
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
}