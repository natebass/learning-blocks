import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "../../hooks/use-auth.tsx";

export const Route = createFileRoute("/_auth/logout")({
	component: LogoutComponent,
});

function LogoutComponent() {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		auth.logout();
		navigate({ to: "/login", search: { redirect: "/" }, replace: true });
	}, [auth, navigate]);

	return <div>Logging out...</div>;
}
