export default function StaticContent() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Welcome to DevMinds Demo SPA</h2>
      <p>
        This single‑page application demonstrates how modern web apps use
        OpenID Connect (OIDC) authentication to provide secure, seamless
        login experiences. After authenticating with Auth0, users can access
        protected content and view personalized information.
      </p>
      <p>
        This section is only visible after successful authentication.
      </p>
    </div>
  )
}