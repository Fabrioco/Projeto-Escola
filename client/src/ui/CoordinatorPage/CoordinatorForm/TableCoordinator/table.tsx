import { useCoordinator } from "@/contexts/coordinatorContext";
import { Trash } from "@phosphor-icons/react";

export function TableCoordinator() {
  const { allCoordinator, fetchCoordinator, deleteCoordinator } =
    useCoordinator();
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {allCoordinator &&
          allCoordinator.map((coordinator) => (
            <tr key={coordinator.id}>
              <td onClick={() => fetchCoordinator(coordinator.id)}>
                {coordinator.name}
              </td>
              <td>{coordinator.email}</td>
              <td>
                <Trash
                  size={20}
                  weight="bold"
                  onClick={() => deleteCoordinator(coordinator.id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
