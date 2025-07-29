import { createFileRoute, Outlet } from "@tanstack/react-router";
import AppH5A from "@/components/layout/AppH5A";
import { useAuth } from "@/components/hooks/use-auth";

export const Route = createFileRoute("/_home")({
	component: HomeLayout,
});

function HomeLayout() {
	const _auth = useAuth();
	return (
		<AppH5A>
			<Outlet />
		</AppH5A>
	);
}
