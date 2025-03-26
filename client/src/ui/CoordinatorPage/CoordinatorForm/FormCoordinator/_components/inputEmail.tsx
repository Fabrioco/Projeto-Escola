import { useCoordinator } from "@/contexts/coordinatorContext";

export function InputEmailCoordinator() {
    const { email, setEmail } = useCoordinator();
    return (
        <div>
            <label htmlFor="emailCoordinator">Email</label>
            <input
                type="email"
                id="emailCoordinator"
                name="emailCoordinator"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
}