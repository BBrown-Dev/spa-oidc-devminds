import { useAuth0 } from "@auth0/auth0-react"

export default function Profile() {
  const { user } = useAuth0()

  if (!user) return null

  return (
    <div style={{ marginTop: "1rem" }}>
      {user.picture && (
        <img
          src={user.picture}
          alt="Profile"
          style={{ width: "80px", borderRadius: "50%" }}
        />
      )}

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  )
}