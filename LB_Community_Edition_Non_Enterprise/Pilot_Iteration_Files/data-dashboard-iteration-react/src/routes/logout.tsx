import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";

export const Route = createFileRoute("/logout")({
  component: LogoutComponent,
});

function LogoutComponent() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate({ to: "/login" });
  }, [auth, navigate]);

  return <div>Logging out...</div>;
}
