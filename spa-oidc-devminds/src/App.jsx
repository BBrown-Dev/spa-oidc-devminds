import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <p>Loading...</p>

  return (
    <div style={{ padding: "2rem" }}>
      <h1>spa-oidc-devminds</h1>

      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}

      {isAuthenticated && (
        <p>You are logged in! User info will appear here soon.</p>
      )}
    </div>
  )
}