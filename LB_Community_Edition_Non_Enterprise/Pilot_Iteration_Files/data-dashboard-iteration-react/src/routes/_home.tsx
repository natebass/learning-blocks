import {
	createFileRoute,
	Link,
	Outlet,
	redirect,
} from "@tanstack/react-router";
import AppH5A from "@/components/layout/AppH5A";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_home")({
	component: HomeLayout,
});

function HomeLayout() {
	const auth = useAuth();
	return (
		<AppH5A>
			<Outlet />
		</AppH5A>
	);
}
