import { createFileRoute, Outlet, redirect, Link } from "@tanstack/react-router";
import AppH5A from "@/components/layout/AppH5A";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_home/_demo")({
	beforeLoad: ({ context, location }) => {
		// @ts-ignore
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			})
		}
	},
	component: DemoLayout,
});

function DemoLayout() {
	const auth = useAuth();
	return (
		<AppH5A>
			<div>
				<p>Welcome, {auth.user}!</p>
				<Link to="/logout">Logout</Link>
			</div>
			<hr />
			<Outlet />
		</AppH5A>
	)
}
