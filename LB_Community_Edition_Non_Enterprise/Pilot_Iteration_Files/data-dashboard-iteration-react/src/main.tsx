import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider, useAuth } from "@/components/hooks/use-auth.tsx";
import * as AppQueryProvider from "./integrations/tanstack-query/root-provider.tsx";
import { routeTree } from "./routeTree.gen";
import "./globals.css";
import reportWebVitals from "./reportWebVitals.ts";

const router = createRouter({
	routeTree,
	context: {
		// biome-ignore lint: auth will initially be undefined. we will be passing down the auth state from within a React component.
		auth: undefined!,
	},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
	// biome-ignore lint: Register the router instance for type safety
	interface Register {
		router: typeof router;
	}
}

function InnerApp() {
	const auth = useAuth();
	return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
	return (
		<AuthProvider router={router}>
			<InnerApp />
		</AuthProvider>
	);
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<AppQueryProvider.Provider>
				<App />
			</AppQueryProvider.Provider>
		</StrictMode>,
	);
}

reportWebVitals();
